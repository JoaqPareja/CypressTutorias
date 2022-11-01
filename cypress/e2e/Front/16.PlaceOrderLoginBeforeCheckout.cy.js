
import {header, inputTypes, cart, productsPage} from '../../support/POM/Consts'
    // 1. Launch browser
    // 2. Navigate to url 'http://automationexercise.com'
    // 3. Verify that home page is visible successfully
    describe('Register User', () => {
      beforeEach('it should store the credentials',() => {   
       cy.login();
      })
        it('Log in',()=>{
            // 4. Click 'Signup / Login' button
            // 5. Fill email, password and click 'Login' button
                        // 6. Enter correct email address and password
  // 6. Verify 'Logged in as username' at top
            cy.visit('/')
            cy.get(header
              .linkViewUserlogged)
                .should('have.text', ' Logged in as ' + inputTypes.nameSignUp)
                 })
        it('Add products to the cart', ()=>{
          cy.visit('/')
            cy.get(productsPage
                    .divFirstProduct)
                        .realHover()
            cy.get(productsPage
                    .divFirstProductOnHover)
                      .should('be.visible')
                        .find(productsPage
                          .linkProductOnHover)
                            .click({waitForAnimations: false}) //disables waiting on animations
            //    5. Hover over first product and click 'Add to cart'
            //    6. Click 'Continue Shopping' button
            cy.get(productsPage
                    .pAddedText)
                      .should('have.text', 'Added!')
            cy.get(productsPage
                    .pProducAddedToCart)
                     .should('have.text', 'Your product has been added to cart.')
            cy.get(productsPage
                   .pLinkViewCart)
                    .should('have.text','View Cart')
            cy.get(productsPage
                   .buttonDialogContinueShopping)
                    .click()
      //     7. Hover over second product and click 'Add to cart'
      //     8. Click 'View Cart' button
            cy.get(productsPage
                    .divSecondProduct)
                      .realHover()
            cy.get(productsPage
                    .divSecondProductOnHover)
                      .should('be.visible')
                        .find(productsPage
                              .linkProductOnHover)
                                .click({waitForAnimations: false}) //disables waiting on animations   
            cy.get(productsPage
                    .pAddedText)
                      .should('have.text', 'Added!')
            cy.get(productsPage
                    .pProducAddedToCart)
                      .should('have.text', 'Your product has been added to cart.')
            cy.get(productsPage
                    .pLinkViewCart)
                      .should('have.text','View Cart')
            cy.get(productsPage
                    .buttonDialogContinueShopping)
                      .click();
            cy.get(header
                    .buttonCart)
                      .click();
            cy.get(cart
                .buttonProceedtoCheckout)
                  .click();
            // cy.get(cart
            //     .linkRegisterOrLogin)
            //       .click()      
          
                    })

   
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
