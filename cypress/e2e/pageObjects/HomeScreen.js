
class HomeScreen
{
    
    pageLocators ={
        searchField: "#fi-q",
        searchButton: ".btn._prim._md.-mls.-fsh0",
        selectedItemLink: "main.has-b2top .aim.row .card .info > h3.name",
        cartBtn : "button.add.btn._prim.-pea._i.-fw",
        itemAdd: 'button[type="button"][aria-label="increase cart quantity"]',
        confirmItem: ".cnt",
        checkoutClick: "body.lockscroll div.popup._open footer > a.btn._prim.-fw:nth-child(2)",
        checkoutButton: "div.row.-pbm div.col4 div.__ps-to-header.-ptm article.card:nth-child(1) > div.-fs0.-pas.-bt"
        
        
    }

    visit(){
        cy.visit("https://www.jumia.com.ng/")
    }

    searchForProduct(product) {
        cy.get(this.pageLocators.searchField).type(product);
        cy.get(this.pageLocators.searchButton).click();
    }

    selectProduct() {

        cy.get(this.pageLocators.selectedItemLink).first().click({ force: true });
    

    }




    addToCart() {
        cy.get(this.pageLocators.cartBtn, { timeout: 10000 })
        .should('exist')
        .should('be.visible')
        .first() 
        .click();
    }

    selectQuantity(){
        cy.get(this.pageLocators.itemAdd).first().click({force:true});

      
    }
    proceedToCheckout() {
        cy.get(this.pageLocators.checkoutClick).click();
    }

    validateProductAdded(){
        cy.get(this.pageLocators.confirmItem).should('contain', 'added to your cart');
    }

 

}
export default new HomeScreen;