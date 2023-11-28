///<reference types="cypress"/>

describe("Swag_Labs", () => {
  it("Add item to cart", () => {
    cy.visit("https://www.saucedemo.com/");
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();

    //add one item
    cy.get("div#inventory_container").find(".btn").eq(4).click();

    //add all item
    // for (let i = 0; i < 6; i++) {
    //     cy.get('div#inventory_container').find('.btn').eq(i).click()
    // }

    //another way to add all items
    // cy.get(".btn ").click({ multiple: true })

    //add the first three items
    // for (let i = 0; i < 3; i++) {
    //     cy.get('div#inventory_container').find('.btn').eq(i).click()
    // }

    //add an item and the next no
    // for(let i=0;i<6;i++){
    //     if(i%2==0){
    //         cy.get('div#inventory_container').find('.btn').eq(i).click()
    //     }
    // }
  });
});
