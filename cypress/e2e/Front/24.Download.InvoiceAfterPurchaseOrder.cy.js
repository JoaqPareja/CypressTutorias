
import {header, cartAddress, inputTypes, cart, cartPayment } from '../../support/POM/Consts'
import {addProducts} from '../../support/POM'



    // 1. Launch browser
    // 2. Navigate to url 'http://automationexercise.com'
    // 3. Verify that home page is visible successfully
    describe('Register User', () => {
      beforeEach('Stored loggin', ()=>{     
        cy.login();  
      })
      
        it('Visit page',()=>{
          cy.visit('/')
          addProducts.firstProduct; 
          addProducts.SecondProduct; 
          cy.get(header.linkCart).click();
        })
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
            .should('have.text', inputTypes.test);
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
        cy.window() // Get the global event from the window
            .document()
                .then(function (doc) {
                    doc.addEventListener('click', () => { //Add the to the global event of the window an event listener of "Click"
                        setTimeout(function () {   doc.location && doc.location.reload(); //To that spicific eventl add stop page reload event //Avoid page reload           
                    }, 1500) // Do this after 1500 ms
                    })
            cy.get(cartPayment.buttonPayConfirmOrder)
                .click();
            cy.get(cartPayment.alertSuccessMessage)
                .invoke('show') //After the element has appeared in the DOM i must call it again to show up to then be able to trow the assertion 
                    .contains('Your order has been placed successfully!') // . Verify success message 'Your order has been placed successfully!'
        }) 
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
          cy.get(cartPayment.buttonPayConfirmOrder)
              .click();
    })
    it('Download invoice', ()=>{
      cy.visit('/payment_done/0')
      cy.get('.col-sm-9 > p').should('have.text', 'Congratulations! Your order has been confirmed!')
      cy.get('.col-sm-9 > .btn-default').click()//. Click 'Download Invoice' button
    })  
    it('Verify the downloaded file', () => {    //  and verify invoice is downloaded successfully.
      cy.readFile('cypress\\Downloads\\invoice.txt')
         .should('exist')
    });  
  })
      // 21. Click 'Delete Account' button
      // 22. Verify 'ACCOUNT DELETED!' and click 'Continue' button
  it('Delete Account',()=>{
    cy.visit('/')
      cy.get(header.linkDelete).click();
  })

    // 4. Add products to cart
    // 5. Click 'Cart' button
    // 6. Verify that cart page is displayed
    // 7. Click Proceed To Checkout
    // 8. Click 'Register / Login' button
    // 9. Fill all details in Signup and create account
    // 10. Verify 'ACCOUNT CREATED!' and click 'Continue' button
    // 11. Verify ' Logged in as username' at top
    // 12.Click 'Cart' button
    // 13. Click 'Proceed To Checkout' button
    // 14. Verify Address Details and Review Your Order
    // 15. Enter description in comment text area and click 'Place Order'
    // 16. Enter payment details: Name on Card, Card Number, CVC, Expiration date
    // 17. Click 'Pay and Confirm Order' button
    // 18. Verify success message 'Your order has been placed successfully!'
    // 20. Click 'Continue' button
       
