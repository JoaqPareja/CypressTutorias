
import {header, cart, productsPage} from '../../support/consts'

import AddProducts from '../../support/e2e'
 
    // 1. Launch browser
    // 2. Navigate to url 'http://automationexercise.com'
    // 3. Verify that home page is visible successfully
    describe('Register User', () => {
     
      beforeEach('it should store the credentials',() => {   
        cy.login();
       })
        it('Adding items to the cart', ()=>{   
          cy.visit('/')
          AddProducts.getFirstProuct();
          AddProducts.getSecondProduct();
          AddProducts.getThirdProduct();
          AddProducts.getLastProduct();
            cy.get(header
                .buttonCart)
                  .click();                              
            });
            it('Delete Products from cart', ()=>{
              cy.visit('/view_cart')
              // cy.get('#product-1 > .cart_delete > .cart_quantity_delete')
              cy.get('tbody > tr:first-child > td:last-child') //First child of the table
                  .find('.fa') //Specific close button class
                    .click();
              cy.get('tbody > tr:nth-child(2)> td:last-child') //Second child of the table
                  .find('.fa')
                    .click();
              cy.get('tbody > tr:nth-child(3) > td:last-child') //Third child of the table
                  .find(' .fa')
                    .click();
              cy.get('tbody > tr:last-child > td:last-child') //Forth child of the table
                  .find('.fa')
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