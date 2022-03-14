/// <reference types="cypress"/>

context("Home Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should render the home page", () => {
    cy.get("h1").contains("Likeverdige helsetjenester - uansett hvor du bor?");
    cy.contains("a").click();
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
    cy.visit("/en/static/map");
    cy.get("h1").contains("Communicating statistics by means of maps");
    cy.visit("/en/static/about");
    cy.get("a").contains("Communicating statistics by means of maps");
    cy.visit("/en/static/contact");
    cy.get("a").contains("skde.helseatlas@helse-nord.no");
  });
});

context("Classic atlases", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should visit an atlas", () => {
    cy.visit("/utdatert/kvalitet");
    cy.get("h1").contains("Helseatlas for kvalitet");
    /* Go into the ToC */
    cy.get("nav").get("ol").get("li").get("a").contains("Brystkreft").click();
  });

  it("should visit an IA", () => {
    cy.visit("/utdatert/gyn/ia");
    cy.get("iframe");
    cy.visit("/ia/no/gyn/index.html").get("button").contains("Last ned data");
  });

  it("should visit an atlas without ToC", () => {
    cy.visit("/utdatert/psyk");
    cy.get("h1").contains("Helseatlas for psykisk helsevern og rusbehandling");
    cy.get("nav").get("ol").get("li");
  });

  it("should visit an English atlas", () => {
    cy.visit("/en/kvalitet");
    cy.get("h1").contains("Healthcare Quality Atlas");
    /* Go into the ToC */
    cy.get("nav").get("ol").get("li").get("a").contains("Stroke");
  });
});

context("Modern atlases", () => {
  it("should visit an atlas", () => {
    cy.visit("/test_atlas");
    cy.get("h1").contains("Helseatlas for fødselshjelp 2.0");
    /* Fact box */
    cy.get("div")
      .contains("Svangeskapsdiabetes")
      .click()
      .get("p")
      .contains(
        "Svangerskapsdiabetes medfører økt risiko for komplikasjoner i svangerskapet"
      );
    /* Result box */
    cy.get("h3")
      .contains("Svangerskapsdiabetes")
      .click()
      .get("tspan")
      .contains("tekst2");
  });
});

export {};
