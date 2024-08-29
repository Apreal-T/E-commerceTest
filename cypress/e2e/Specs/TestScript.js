/// <reference types= "cypress"/>
import HomeScreen from '../pageObjects/HomeScreen.js';

describe('Jumia E-commerce Automation Test', () => {
    beforeEach(() => {
        HomeScreen.visit();
    });

    it('should search for a dress, attempt to add it to the cart, and checkout', () => {
        cy.log("Search for product");
        const productName = 'dress';

        cy.log("Searching for product and ensure product exists");
        HomeScreen.searchForProduct(productName);
        cy.get('main.has-b2top .aim.row .card .info > h3.name').should('exist')


        cy.log("Select product and ensure website path contains catalog");
        cy.url().should('include', '/catalog');
        HomeScreen.selectProduct();
        
        
        cy.log("Add product to cart");
        HomeScreen.addToCart();

        cy.log("Select quantity of products")
        HomeScreen.selectQuantity();


        cy.log("Check out after adding to cart")
       HomeScreen.proceedToCheckout();

       cy.log("Verify that after adding to cart, website path includes cart")
       cy.url().should('include', '/cart');
    });

    afterEach(() => {
        cy.log('Test completed');
    });
});