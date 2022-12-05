import {header, cartAddress, inputTypes} from '../../support/POM/Consts'
import {addProducts} from '../../support/POM'

    // 1. Launch browser
    // 2. Navigate to url 'http://automationexercise.com'
    // 3. Verify that home page is visible successfully
    describe('Verify Address Details', () => {
      beforeEach('Stored loggin', ()=>{     
        cy.login();  
      })
      
        it('Add products',()=>{
          cy.visit('/')
          addProducts.firstProduct;
          addProducts.secondProduct;
          cy.get(header.linkCart).click();
          cy.url().should('include', '/view_cart')
          cy.get('.col-sm-6 > .btn').click()
        })
      
          //Proceed to checkoutButton
          //To continue this test i need to re write the register test
          
          //->`
        // 12. Verify that the delivery address is same address filled at the time registration of account
    // 13. Verify that the billing address is same address filled at the time registration of account
        
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
  })

    // 8. Add products to cart
    // 9. Click 'Cart' button
    // 10. Verify that cart page is displayed
    // 11. Click Proceed To Checkout
    
    // 14. Click 'Delete Account' button
    // 15. Verify 'ACCOUNT DELETED!' and click 'Continue' button

        })