import {subscriptionSection, inputTypes}  from '../../support/POM/consts';
  describe('Verify Subscription in Home Page', () => {
   it('Verify subscription',()=>{
    cy.visit('/')  //  Navigate to url 'http://automationexercise.com'
      cy.CheckHidden('body')
      cy.scrollTo('bottom')// . Scroll down to footer
      cy.CheckElement('#footer')
      cy.CheckElement(subscriptionSection  // . Verify text 'SUBSCRIPTION'
          .h2Subscription)
            .should('have.text', 'Subscription')
      cy.get(subscriptionSection  // . Enter email address in input and click arrow button
         .inputSubscriptionEmail)
          .type(inputTypes
           .emailSignUp);
      cy.get(subscriptionSection  // . Verify success message 'You have been successfully subscribed!' is visible
         .buttonSubscribe)
          .click();
      cy.CheckElement(subscriptionSection
          .alertMessageofSuccess)
      cy.get(subscriptionSection
          .alertMessageofSuccess)
           .should('have.text', 'You have been successfully subscribed!')
})
    })