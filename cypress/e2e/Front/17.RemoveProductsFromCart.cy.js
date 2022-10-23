
import {header, cart, productsPage} from '../../support/consts'

    // 1. Launch browser
    // 2. Navigate to url 'http://automationexercise.com'
    // 3. Verify that home page is visible successfully
    describe('Register User', () => {
  
      beforeEach('it should store the credentials',() => {   
        cy.login();
       })

        it('Visit page',()=>{
          cy.visit('/')
          //I retrieve the baseURL from the cypress.config.js file and avoid to re call the url for each test
        })
       
        it('Adding items to the cart', ()=>{   
          cy.visit('/')
          // it('Adding first item to the cart', ()=>{
            cy.get(productsPage
                .divFirstProductOnHover)
                  .trigger('mouseover', {force: true})
                    // cy.find(productsPage
                    //   .divProductOnHoverOnlyDiv)
                    //     .should('be.visible')
                    //       .invoke('show')
                            .find(productsPage
                              .linkProductOnHover)
                                .click({force: true})
                                  .wait(1000);
            cy.get(productsPage
                .buttonDialogContinueShopping)
                  .click();
                                // .click({waitForAnimations: false});
                            // });
          // it('Adding Second item to the cart',()=>{
            cy.get(productsPage
                .divSecondProductOnHover)
                .trigger('mouseover', {force: true})
                    // .find(productsPage
                    //   .divProductOnHoverOnlyDiv)
                    //     .should('be.visible')
                    //       .invoke('show')
                            .find(productsPage
                              .linkProductOnHover)
                                .click( {force: true})
                                  .wait(1000);
            cy.get(productsPage
                .buttonDialogContinueShopping)
                  .click();
                            // .click({waitForAnimations: false});       
          // });     
          // it('Adding Third item to the cart',()=>{      
            cy.get(productsPage
                .divThirdProductOnHover)
                 .trigger('mouseover', {force: true})
                  .find(productsPage
                    .linkProductOnHover)
                      .click({force: true});
                    // .find(productsPage
                    //   .divProductOnHoverOnlyDiv)
                    //     .should('be.visible') 
                    //       .invoke('show')
                           
            cy.get(productsPage
                .buttonDialogContinueShopping)
                  .click();
                            // .click({waitForAnimations: false});                  
                              // });             
          // it('Adding last item to the cart',()=>{
            cy.get(productsPage
                .divLastProductOnHover)
                .trigger('mouseover', {force: true})
                    // .find(productsPage
                    //   .divProductOnHoverOnlyDiv)
                    //     .should('be.visible')
                    //       .invoke('show')
                            .find(productsPage
                              .linkProductOnHover)
                                .click({force: true}); 
            cy.get(productsPage
                .buttonDialogContinueShopping)
                  .click();          
                   // Verify 'New User Signup!' is visible
            cy.get(header
                .buttonCart)
                  .click();
                                        
            });
            it('Delete Products', ()=>{
              cy.visit('/view_cart')
              // cy.get('#product-1 > .cart_delete > .cart_quantity_delete')
              cy.get('tbody > tr:first-child > td:last-child') //First child of the table
                  .find('.cart_quantity_delete > .fa') //Specific close button class
                    .click();
              cy.get('tbody > tr:nth-child(2)> td:last-child') //Second child of the table
                  .find('.cart_quantity_delete > .fa')
                    .click();
              cy.get('tbody > tr:nth-child(3) > td:last-child') //Third child of the table
                  .find('.cart_quantity_delete > .fa')
                    .click();
              cy.get('tbody > tr:last-child > td:last-child') //Forth child of the table
                  .find('.cart_quantity_delete > .fa')
                   .click();
              cy.get('#empty_cart > .text-center')
                 .should('have.text','Cart is empty! Click here to buy products.')
            })
            // tbody > tr:nth-child(2) > td.cart_description
    // 4. Add products to cart
    // 5. Click 'Cart' button
    // 6. Verify that cart page is displayed
    // 7. Click 'X' button corresponding to particular product
    // 8. Verify that product is removed from the cart

        })