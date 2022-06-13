/// <reference types="cypress"/>

context("Push some front page buttons", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should visit v2 atlas", () => {
    cy.get('[data-testid="v2/kronikere"]').click();
    cy.wait(5000);
    cy.url().should("include", "/v2");
    cy.get('[data-testid="v2atlas"]').should("exist");
  });

  it("should visit v1 atlas", () => {
    cy.get('[data-testid="v1/dagkir"]').click();
    cy.wait(3000);
    cy.url().should("include", "/v1");
    cy.get('[data-testid="v1atlas"]').should("exist");
  });
});

export {};
