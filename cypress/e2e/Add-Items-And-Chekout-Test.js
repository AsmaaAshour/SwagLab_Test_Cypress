///<reference types="cypress"/>

describe("Swag_Labs", () => {
  it("Add items and chekout", () => {
    cy.visit("https://www.saucedemo.com/");
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();
    cy.get(".btn").click({ multiple: true });
    cy.get(".shopping_cart_badge").click();
    cy.get('[data-test="checkout"]').click();
    cy.get('[data-test="firstName"]').type("User");
    cy.get('[data-test="lastName"]').type("Automation");
    cy.get('[data-test="postalCode"]').type("0000");
    cy.get('[data-test="continue"]').click();
    cy.get('[data-test="finish"]').click();
    //assertion
    cy.get(".complete-text").should(
      "have.text",
      "Your order has been dispatched, and will arrive just as fast as the pony can get there!"
    );
  });
});
