import {subscriptionSection, inputTypes}  from '../../support/POM/Consts';
import {subscribe} from '../../support/POM'

describe('Verify Subscription in Home Page', () => {
   it('Verify subscription',()=>{
    cy.visit('/')  //  Navigate to url 'http://automationexercise.com'
      cy.scrollTo('bottom')// . Scroll down to footer
      cy.CheckElement('#footer')
      subscribe.checkSubscription('Subscription')
      subscribe.typeEmailSubscription(inputTypes.emailSignUp)
      subscribe.clickSubscribeButton();  
      cy.CheckElement(subscriptionSection.alertMessageofSuccess)// . Verify success message 'You have been successfully subscribed!' is visible
      subscribe.checkSuccessAlertMessage('You have been successfully subscribed!');})
    })