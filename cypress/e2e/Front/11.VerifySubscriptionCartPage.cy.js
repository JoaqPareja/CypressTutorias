
//  11: Verify Subscription in Cart page
import {header, subscriptionSection, inputTypes} from '../../support/POM/Consts'

describe('Register User', () => {
      it('Cart Testing', ()=>{
        cy.visit('/') //Navigate to url 'http://automationexercise.com'
          cy.get(header.buttonCart) // . Click 'Cart' button
              .click();
          cy.scrollTo('bottom'); // . Scroll down to footer
          cy.CheckElement(subscriptionSection.h2Subscription)  // . Verify text 'SUBSCRIPTION'
              .should('have.text', 'Subscription')
          cy.get(subscriptionSection.inputSubscriptionEmail) // . Enter email address in input and click arrow button
              .type(inputTypes.emailSignUp); // . Enter email address in input and click arrow button       
          cy.get(subscriptionSection.buttonSubscribe)
              .click();
          cy.CheckElement(subscriptionSection.alertMessageofSuccess);  // 8. Verify success message 'You have been successfully subscribed!' is visible
          cy.get(subscriptionSection.alertMessageofSuccess)   // 7. Verify success message 'You have been successfully subscribed!' is visible
              .should('have.text', 'You have been successfully subscribed!')
      })

})
    