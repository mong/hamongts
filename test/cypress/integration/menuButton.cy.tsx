/// <reference types="cypress"/>

context("Menu button", () => {
  it("should push menu button", () => {
    cy.visit("/");
    cy.get('[data-testid="menuButton"]').click();
    cy.get('[data-testid="mainMenu"]').should("exist"); // Menu exist
    cy.get("span").contains("Våre helseatlas");

    cy.get('[data-testid="menuAtlasLink1"]').click();
    cy.get('[data-testid="mainMenu"]').should("not.exist"); // Menu gone after click
    cy.url({ timeout: 10000 }).should("include", "/v1");
    cy.get('[data-testid="menuButton"]').click(); // Push menu button again

    cy.get('[data-testid="menuAtlasLink2"]').click();
    cy.url({ timeout: 10000 }).should("include", "/v2"); // Må vente en stund før neste atlas dukker opp
    cy.get('[data-testid="mainMenu"]').should("not.exist"); // Menu gone after click

    cy.get('[data-testid="menuButton"]').click(); // Push menu button again
    cy.get('[data-testid="mainMenu"]').should("exist"); // Menu exist
    cy.get('[data-testid="closeBtn"]').click(); // exit button
    cy.get('[data-testid="mainMenu"]').should("not.exist"); // Menu gone after click
  });
});

export {};
