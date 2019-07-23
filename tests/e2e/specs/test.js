// https://docs.cypress.io/api/introduction/api.html

const url = "localhost:8080";

describe("Test App Page", () => {
  it("Should load page correctly", () => {
    cy.visit(url);
    cy.title().should("eq", "Vue combobox");
  });
});
