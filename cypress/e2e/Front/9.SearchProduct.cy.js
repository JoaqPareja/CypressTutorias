import {productsPage, header} from '../../support/POM/Consts';
    describe('Register User', () => {
      it('Verify products', ()=>{
      cy.visit('/')  // Navigate to url 'http://automationexercise.com'
        cy.CheckElement('body')
        cy.get(header.buttonProducts) //  Click on 'Products' button
            .click();  
        cy.url()  // . Verify user is navigated to ALL PRODUCTS page successfully
            .should('include', '/products')
              .should('not.include', '/products/');
        cy.CheckElement(productsPage.listOfItems) // The products list is visible
        cy.get(productsPage.h2TitlePageProducts)
            .should('have.text', 'All Products')
        cy.CheckElement(productsPage.inputSearchProduct); // Enter product name in search input and click search button\
        cy.get(productsPage.inputSearchProduct)
            .type('Blue Top')
        cy.get(productsPage.inputSearchProduct) // Verify 'SEARCHED PRODUCTS' is visible
            .click();
        cy.CheckElement(productsPage.listOfItems) // Verify all the products related to search are visible            
    })
  })