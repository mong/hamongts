/// <reference types="cypress"/>

context("Home Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should render the home page and display a message", () => {
    cy.get("h2").contains("Likeverdige helsetjenester - uansett hvor du bor?");
  });
});

export {};
