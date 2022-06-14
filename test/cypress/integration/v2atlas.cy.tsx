/// <reference types="cypress"/>

context("v2 atlas", () => {
  it("should push menu button", () => {
    cy.visit("/v2/test_atlas");

    // Test expansion of result box
    cy.get('[data-testid="resultbox"]').invoke("height").should("be.lt", 600); // Check if result box is not expanded
    cy.get('[data-testid="resultbox_expandButton"]').click(); // Open the result box
    cy.get('[data-testid="resultbox"]').invoke("height").should("be.gt", 600); // Check if result box is expanded
    cy.get('[data-testid="resultbox_expandButton"]').click(); // Close the result box
    cy.get('[data-testid="resultbox"]').invoke("height").should("be.lt", 600); // Check if result box is not expanded

    // Test functions inside result box
    cy.get('[data-testid="resultbox_ingress"]').click(); // Open the result box by click on text
    cy.get('[data-testid="selectionBtn"]').click(); // Open the selection popup
    cy.get('[data-testid="popUpContent"]').should("exist"); // Popup exist
    cy.get('[data-testid="closeBtn"]').click(); // Close the popup
    cy.get('[data-testid="popUpContent"]').should("not.exist"); // Popup does not exist
    cy.get('[data-testid="resultbox_ingress"]').click(); // Close the result box

    // Test expansion of fact box
    cy.get('[data-testid="factbox"]').invoke("height").should("be.lt", 100);
    cy.get('[data-testid="factbox"]').click();
    cy.get('[data-testid="factbox"]').invoke("height").should("be.gt", 200);
    cy.get(
      '[id="ms-syke-barn-under-fødsel-fact-svangeskapsdiabetes-header"]'
    ).click();
    cy.get('[data-testid="factbox"]').invoke("height").should("be.lt", 100);
  });
});

export {};
