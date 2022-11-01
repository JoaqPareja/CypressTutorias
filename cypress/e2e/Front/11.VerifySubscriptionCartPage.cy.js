
//  11: Verify Subscription in Cart page
import {header, subscriptionSection, inputTypes} from '../../support/POM/Consts'

describe('Register User', () => {
      it('Cart Testing', ()=>{
        cy.visit('/') //Navigate to url 'http://automationexercise.com'
          cy.get(header // . Click 'Cart' button
              .buttonCart)
                .click();
          cy.scrollTo('bottom'); // . Scroll down to footer
          cy.CheckElement(subscriptionSection  // . Verify text 'SUBSCRIPTION'
              .h2Subscription)
                .should('have.text', 'Subscription')
          cy.get(subscriptionSection // . Enter email address in input and click arrow button
              .inputSubscriptionEmail)
                .type(inputTypes // . Enter email address in input and click arrow button
                  .emailSignUp);
          cy.get(subscriptionSection
            .buttonSubscribe)
              .click();
          cy.CheckElement(subscriptionSection  // 8. Verify success message 'You have been successfully subscribed!' is visible
              .alertMessageofSuccess);
          cy.get(subscriptionSection   // 7. Verify success message 'You have been successfully subscribed!' is visible
              .alertMessageofSuccess)
                .should('have.text', 'You have been successfully subscribed!')
      })

})
    