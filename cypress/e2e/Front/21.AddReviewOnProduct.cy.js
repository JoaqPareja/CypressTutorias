

import {header, productsPage, productsPageSelectedProduct} from '../../support/POM/Consts'
import {addProducts} from '../../support/POM'
    describe('Register User', () => {
  
        it('Visit page',()=>{
          cy.visit('/')
          cy.get(header.linkProducts) //. Click on 'Products' button
               .click();
          cy.url()
              .should('contain', '/products'); // . Verify user is navigated to ALL PRODUCTS page successfully
          //I retrieve the baseURL from the cypress.config.js file and avoid to re call the url for each test
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
              .click()  
            // cy.clock().then(()=>{
                cy.get(productsPageSelectedProduct.spanSuccesAlert)
                    .invoke('show')
                        .should('have.text', 'Thank you for your review.');      
            // } )

        //   cy.intercept(productsPageSelectedProduct.spanSuccesAlert).as('spanSuccessAlert')
            // cy.wait(productsPageSelectedProduct.spanSuccesAlert).its('response').should('have.text', 'Thank you for your review')

        //   cy.get(productsPageSelectedProduct.spanSuccesAlert)
        //       //I must intercept the response and then trough the assertion
        //       cy.wait(1000)
        //       .should('have.text', 'Thank you for your review')

        })

  
 

   
    // 9. Verify success message 'Thank you for your review.'

    })