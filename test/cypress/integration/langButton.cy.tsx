/// <reference types="cypress"/>

context("Push language button", () => {
  it("should push english button", () => {
    cy.visit("/");
    cy.get('[data-testid="buttonEng"]').click(); // Push english button
    cy.url().should("include", "/en/");
    cy.wait(1000); // Wait for english page to load
    cy.get("h1").contains("Equitable health services");
    cy.get('[data-testid="menuButton"]').click(); // Enter english menu
    cy.get('[data-testid="mainMenu"]').should("exist"); // Menu exist
    cy.get('[data-testid="menuAtlasLink1"]').click(); // Enter an english atlas
    cy.get('[data-testid="mainMenu"]').should("not.exist"); // Menu gone after click
    cy.url({ timeout: 5000 }).should("include", "/en/v1/"); // English atlas is entered in english menu
    cy.get('[data-testid="buttonNo"]').click(); // Push norwegian button
    cy.wait(1000); // Wait for norwegian page to load
    cy.get("h1").contains("Likeverdige helsetjenester");
  });
});

export {};
