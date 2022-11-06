import {subscriptionSection, inputTypes}  from '../../support/POM/Consts';
  describe('Verify Subscription in Home Page', () => {
   it('Verify subscription',()=>{
    cy.visit('/')  //  Navigate to url 'http://automationexercise.com'
      cy.CheckHidden('body')
      cy.scrollTo('bottom')// . Scroll down to footer
      cy.CheckElement('#footer')
      cy.CheckElement(subscriptionSection.h2Subscription)  // . Verify text 'SUBSCRIPTION'
          .should('have.text', 'Subscription')
      cy.get(subscriptionSection.inputSubscriptionEmail)  // . Enter email address in input and click arrow button
          .type(inputTypes.emailSignUp);
      cy.get(subscriptionSection.buttonSubscribe)  // . Verify success message 'You have been successfully subscribed!' is visible
          .click();
      cy.CheckElement(subscriptionSection.alertMessageofSuccess)
      cy.get(subscriptionSection.alertMessageofSuccess)
          .should('have.text', 'You have been successfully subscribed!')
})
    })