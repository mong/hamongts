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

    // Test the selection popup inside result box
    cy.get('[data-testid="resultbox_ingress"]').click(); // Open the result box by click on text
    cy.get('[data-testid="selectionBtn"]').click(); // Open the selection popup
    cy.get('[data-testid="popUpContent"]').should("exist"); // Popup exist
    cy.get('[data-testid="closeBtn"]').click(); // Close the popup
    cy.get('[data-testid="popUpContent"]').should("not.exist"); // Popup does not exist
    cy.get('[data-testid="resultbox_ingress"]').click();

    // Test the carousel
    cy.get('[data-testid="resultbox_ingress"]').click();

    cy.get('[label="barchart"]').should("exist"); // Barchart exist
    cy.get('[label="map"]').should("not.exist"); // Map does not exist
    cy.get('[label="table"]').should("not.exist"); // Table does not exist

    cy.get('[data-testid="carouselbutton_1"]').click(); // Show the second barchart
    cy.get('[label="barchart"]').should("exist"); // Barchart exist
    cy.get('[label="map"]').should("not.exist"); // Map does not exist
    cy.get('[label="table"]').should("not.exist"); // Table does not exist

    cy.get('[data-testid="carouselbutton_2"]').click(); // Show the table
    cy.get('[label="table"]').should("exist"); // Table exist
    cy.get('[label="barchart"]').should("not.exist"); // Barchart does not exist
    cy.get('[label="map"]').should("not.exist"); // Map does not exist
    cy.get("caption").contains("gjennomsnittsverdier for perioden");

    cy.get('[data-testid="carouselbutton_3"]').click(); // Show the map
    cy.get('[label="map"]').should("exist"); // Map exist
    cy.get('[label="table"]').should("not.exist"); // Table does not exist
    cy.get('[label="barchart"]').should("not.exist"); // Barchart does not exist
    cy.get('[data-testid="mapCaption"]').contains("Antall med epilepsi pr.");

    cy.get('[data-testid="carouselbutton_0"]').click(); // Show the first barchart
    cy.get('[label="barchart"]').should("exist"); // Barchart exist
    cy.get('[label="map"]').should("not.exist"); // Map does not exist
    cy.get('[label="table"]').should("not.exist"); // Table does not exist

    // Close the result box
    cy.get('[data-testid="resultbox_ingress"]').click();

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
