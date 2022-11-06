import {header,productsPage} from '../../support/POM/Consts';
    // 1. Launch browser
    describe('Register User', () => {
     it('Verify products', ()=>{
      cy.visit('/') //Vist page
        cy.CheckHidden('body') //Check that an element is not hidden
        cy.get(header.buttonProducts)  // . Click on 'Products' button
              .click();
        cy.url()     // . Verify user is navigated to ALL PRODUCTS page successfully
            .should('eq', '/products')
             .should('not.include', '/products/');  
        cy.CheckElement(productsPage.listOfItems);// . The products list is visible
        cy.get(productsPage.h2TitlePageProducts)            
            .should('have.text', 'All Products'); //cy.url().should('eq', 'http://localhost:8000/users/1/edit')  
        cy.get(productsPage.buttonViewFirstProduct) // . Click on 'View Product' of first product 
            .click();
        cy.CheckElement(productsPage.imgViewProduct);  // . User is landed to product detail page
        cy.CheckElement(productsPage.h2ProductInformation);  // . Verify that detail detail is visible: product name, category, price, availability, condition, brand
        cy.get(productsPage.spanPriceInformation)
            .contains('Rs'); // Checking that the price contain the right coin
        cy.CheckElement(productsPage.buttonProductInformationAddToCart);
        cy.get(productsPage.pAvailabilityInStock)
            .should('have.text', 'Availability: In Stock');
  }) 
    })