/// <reference types="cypress"/>

context("Home Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should render the home page", () => {
    cy.get("h2").contains("Likeverdige helsetjenester - uansett hvor du bor?");
    cy.contains("a").click();
  });

  it("should visit an atlas", () => {
    cy.visit("/utdatert/kvalitet");
    cy.get("h1").contains("Helseatlas for kvalitet");
    cy.contains("Kart").click();
    cy.get("button").contains("Last ned data");
  });
  it("should visit an IA", () => {
    cy.visit("/utdatert/gyn/ia/index.html");
    cy.get("button").contains("Last ned data");
  });
});

export {};
