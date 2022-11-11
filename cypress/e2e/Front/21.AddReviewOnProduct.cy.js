

import {header, productsPage, productsPageSelectedProduct} from '../../support/POM/Consts'
    describe('Register User', () => {
  
        it('Visit page',()=>{
          cy.visit('/')
          cy.get(header.linkProducts) //. Click on 'Products' button
               .click();
          cy.url()
              .should('contain', '/products'); // . Verify user is navigated to ALL PRODUCTS page successfully
          cy.get(productsPage.divFirstProduct)
              .find(productsPage.linkViewProducts)  // . Click on 'View Product' button
                .click()
          cy.get(productsPageSelectedProduct.pWriteYourReview)    // . Verify 'Write Your Review' is visible
              .should('have.text', 'Write Your Review');
          cy.get(productsPageSelectedProduct.inputYourName)  // . Enter name, email and review
              .type('Such a review')
          cy.get(productsPageSelectedProduct.inputYourEmail)
              .type('test@test.com')
          cy.get(productsPageSelectedProduct.textArea)
              .type('Such a review')
          cy.get(productsPageSelectedProduct.buttonSubmit)  // . Click 'Submit' button
               .click();  
        cy.get(productsPageSelectedProduct.spanSuccesAlert)     // . Verify success message 'Thank you for your review.'
            .invoke('show')
                .should('have.text', 'Thank you for your review.');     
        })
    })