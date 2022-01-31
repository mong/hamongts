/// <reference types="cypress"/>

context("Home Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should render the home page", () => {
    cy.get("h1").contains("Likeverdige helsetjenester - uansett hvor du bor?");
    cy.contains("a").click();
  });

  it("should visit an atlas", () => {
    cy.visit("/utdatert/kvalitet");
    cy.get("h1").contains("Helseatlas for kvalitet");
  });

  it("should visit an IA", () => {
    cy.visit("/utdatert/gyn/ia/index.html");
    cy.get("button").contains("Last ned data");
  });

  it("should visit static pages", () => {
    cy.visit("/statisk/kart");
    cy.get("strong").contains(
      "Vær derfor bevisst kartets retoriske muligheter."
    );
    cy.visit("/statisk/om");
    cy.get("a").contains("Om statistikkformidling ved hjelp av kart");
    cy.visit("/statisk/kontakt");
    cy.get("a").contains("skde.helseatlas@helse-nord.no");
  });
});

export {};
