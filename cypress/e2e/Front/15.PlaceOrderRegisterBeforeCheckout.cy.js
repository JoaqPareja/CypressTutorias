
import {header, cart, inputTypes, cartAddress, cartPayment, paymentDone} from '../../support/POM/Consts'
import {addProducts} from '../../support/POM'    



    describe('Register User', () => {
        
      beforeEach('Stored loggin', ()=>{
        cy.login();  
      })
        it('Adding items to the cart', ()=>{   
          cy.visit('/')
          addProducts.getFirstProduct();
          addProducts.getSecondProduct();   
          addProducts.getThirdProduct();
          addProducts.getLastProduct();     
          cy.get(header.linkCart)    
              .click();         
            cy.get(cart
              .buttonProceedtoCheckout)
                .click();                                      
            });
        
        it('Check Delivery Address',()=>{
          cy.visit('/checkout') //https://automationexercise.com/checkout
            cy.get(cartAddress.pYourDeliveryAddressTitle)
                .should('have.text', 'Your delivery address')
            cy.get(cartAddress.pYourDeliveryAddressFirstName)
                .should('have.text', '. test test') //inputTypes.test
            cy.get(cartAddress.pYourDeliveryAddressLastName)
                .should('have.text', inputTypes.test)
            cy.get(cartAddress.pYourDeliveryAddresCompany)
                .should('have.text', inputTypes.test)
            cy.get(cartAddress.pYourDeliveryAddressCity)
                .should('have.text', 'test test\n\t\t\t\t\t\t\t\ttest')
            cy.get(cartAddress.pYourDeliveryAddressCountryName)
                .should('have.text', 'New Zealand')
            cy.get(cartAddress.pYourDeliveryAddressPhoneNumber)
                .should('have.text', inputTypes.test)
    })
    it('Check Address Billing address',()=>{
      cy.visit('/checkout') //https://automationexercise.com/checkout
        cy.get(cartAddress.pYourBillingAddressTitle)            
            .should('have.text', 'Your billing address')
        cy.get(cartAddress.pYourBillingAddressFirstName)
            .should('have.text', '. test test') //inputTypes.test
        cy.get(cartAddress.pYourBillingAddressLastName)
            .should('have.text', inputTypes.test)
        cy.get(cartAddress.pYourBillingAddressCompany)
            .should('have.text', inputTypes.test)
        cy.get(cartAddress.pYourBillingAddressCity)
            .should('have.text', 'test test\n\t\t\t\t\t\t\t\ttest')
        cy.get(cartAddress.pYourBillingAddresCountryName)
            .should('have.text', 'New Zealand')
        cy.get(cartAddress.pYourBillingAddresPhoneNumber)
            .should('have.text', inputTypes.test)
        cy.get(cart.textAreaForm)
            .type('Text is so good text number 1')
        cy.get(cart.buttonPlaceOrder)
            .click();  
  })
      it('Cart Payment',{pageLoadTimeout: 10000},()=>{
        
        cy.visit('/payment')
        cy.get(cartPayment.inputNameOnCard)
            .type('Joaquin Pareja');
        cy.get(cartPayment.inputCardNumber)
            .type(2222);
        cy.get(cartPayment.inputCVC)
            .type(333);
        cy.get(cartPayment.inputExpirationMonth)
            .type(11);
        cy.get(cartPayment
            .inputExpirationYear)    
              .type(24);   
              cy.window().document().then(function (doc) {
                doc.addEventListener('click', () => {
                    //Avoid page reload
                    setTimeout(function () {   doc.location && doc.location.reload();                
                    }, 1500)
                })
                    cy.get(cartPayment.buttonPayConfirmOrder)
                        .click();
                    cy.get(cartPayment.alertSuccessMessage)
                        .invoke('show') //After the element has appeared in the DOM i must call it again to show up to then be able to trow the assertion 
                            .contains('Your order has been placed successfully!') // . Verify success message 'Your order has been placed successfully!'
                    }) 
 
                    })        
                })

    //       })
    // 4.// Click 'Signup / Login' button
    // 5. Fill all details in Signup and create account
    // 6. Verify 'ACCOUNT CREATED!' and click 'Continue' button
    // 7. Verify ' Logged in as username' at top
    // 8. Add products to cart
    // 9. Click 'Cart' button
    // 10. Verify that cart page is displayed
    // 11. Click Proceed To Checkout
    // 12. Verify Address Details and Review Your Order
    // 13. Enter description in comment text area and click 'Place Order'
    // 14. Enter payment details: Name on Card, Card Number, CVC, Expiration date
    // 15. Click 'Pay and Confirm Order' button
    // 17. Click 'Delete Account' button
    // 18. Verify 'ACCOUNT DELETED!' and click 'Continue' button

   