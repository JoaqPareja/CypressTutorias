
import {header, productsPage, loginUser, inputTypes} from '../../support/consts'
    // 1. Launch browser
    // 2. Navigate to url 'http://automationexercise.com'
    describe('Register User', () => {
  
        it('Visit page',()=>{
          cy.visit('/')
           cy.get(header
              .buttonProducts)
                .click();
          cy.get(productsPage
              .inputSearchProducts)
                .type('Dress');
          cy.get(productsPage
              .buttonSearchProducts)
                .click();
          cy.url()
              .should('contain', '/products')
        })
        it('Add products', ({ cacheSession = true } = {})  =>{
          cy.visit('/products?search=dress')
          cy.get(productsPage
            .divFirstProductOnHover)
              .trigger('mouseover', {force: true})
                        .find(productsPage
                          .linkProductOnHover)
                            .click({force: true})
                              .wait(1000);
        cy.get(productsPage
            .buttonDialogContinueShopping)
              .click();
        cy.get(productsPage
            .divSecondProductOnHover)
              .trigger('mouseover', {force: true})
                        .find(productsPage
                          .linkProductOnHover)
                            .click( {force: true})
                              .wait(1000);
        cy.get(productsPage
            .buttonDialogContinueShopping)
              .click();   
        cy.get(productsPage
            .divThirdProductOnHover)
             .trigger('mouseover', {force: true})
              .find(productsPage
                .linkProductOnHover)
                  .click({force: true});
        cy.get(productsPage
            .buttonDialogContinueShopping)
              .click();
        cy.get(productsPage
            .divLastProductOnHover)
            .trigger('mouseover', {force: true})
                        .find(productsPage
                          .linkProductOnHover)
                            .click({force: true}); 
        cy.get(productsPage
            .buttonDialogContinueShopping)
              .click();  
        })
      
        it('Go Back to check those products',()=>{
          cy.login();
          cy.visit('/')
          cy.get(header
             .buttonCart)
              .click();
        })
    // 3. Click on 'Products' button
    // 4. Verify user is navigated to ALL PRODUCTS page successfully
    // 5. Enter product name in search input and click search button
    // 6. Verify 'SEARCHED PRODUCTS' is visible
    // 7. Verify all the products related to search are visible
    // 8. Add those products to cart
    // 9. Click 'Cart' button and verify that products are visible in cart
    // 10. Click 'Signup / Login' button and submit login details
    // 11. Again, go to Cart page
    // 12. Verify that those products are visible in cart after login as well

    })