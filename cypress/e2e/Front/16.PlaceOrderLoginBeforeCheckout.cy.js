
import {header, inputTypes, cart, productsPage} from '../../support/POM/Consts'
import {addProducts} from '../../support/POM'
    // 1. Launch browser
    // 2. Navigate to url 'http://automationexercise.com'
    // 3. Verify that home page is visible successfully
    describe('Register User', () => {
      beforeEach('it should store the credentials',() => {   
       cy.login();
      })
        it('Log in',()=>{
            cy.visit('/')
            cy.get(header.linkViewUserlogged)   //  Verify 'Logged in as username' at top
                .should('have.text', ' Logged in as ' + inputTypes.nameSignUp) 
                 })
        it('Add products to the cart', ()=>{
          cy.visit('/')
          addProducts.getFirstProduct();
          addProducts.getSecondProduct();   
          addProducts.getThirdProduct();
          addProducts.getLastProduct();     
          cy.get(header.buttonCart)    
              .click();         
          cy.get(cart
            .buttonProceedtoCheckout)
              .click();                                      
            });
   
    // 7. Add products to cart
    // 8. Click 'Cart' button
    // 9. Verify that cart page is displayed
    // 10. Click Proceed To Checkout
    // 11. Verify Address Details and Review Your Order
    // 12. Enter description in comment text area and click 'Place Order'
    // 13. Enter payment details: Name on Card, Card Number, CVC, Expiration date
    // 14. Click 'Pay and Confirm Order' button
    // 15. Verify success message 'Your order has been placed successfully!'
    // 16. Click 'Delete Account' button
    // 17. Verify 'ACCOUNT DELETED!' and click 'Continue' button

        })
