import {productsPage, header} from '../../support/POM/Consts';
    describe('Register User', () => {
      it('Verify products', ()=>{
      cy.visit('/')  // Navigate to url 'http://automationexercise.com'
        cy.CheckElement('body')
        cy.get(header //  Click on 'Products' button
            .buttonProducts)
              .click();  
        cy.url()  // . Verify user is navigated to ALL PRODUCTS page successfully
            .should('include', '/products')
              .should('not.include', '/products/');
        cy.CheckElement(productsPage // The products list is visible
            .listOfItems)
        cy.get(productsPage
           .h2TitlePageProducts)
             .should('have.text', 'All Products')
        cy.CheckElement(productsPage // Enter product name in search input and click search button\
            .inputSearchProduct);
        cy.get(productsPage
            .inputSearchProduct)
              .type('Blue Top')
        cy.get(productsPage // Verify 'SEARCHED PRODUCTS' is visible
            .inputSearchProduct)
              .click();
        cy.CheckElement(productsPage // Verify all the products related to search are visible
            .listOfItems)
    })
  })