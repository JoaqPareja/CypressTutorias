import {subscriptionSection, inputTypes}  from '../../support/POM/Consts';
import {subscribeInHome} from '../../support/POM'

describe('Verify Subscription in Home Page', () => {
   it('Verify subscription',()=>{
    cy.visit('/')  //  Navigate to url 'http://automationexercise.com'
      cy.scrollTo('bottom')// . Scroll down to footer
      cy.CheckElement('#footer')
      subscribeInHome.checkSubscription('Subscription')
      subscribeInHome.typeEmailSubscription(inputTypes.emailSignUp)
      subscribeInHome.clickSubscribeButton();  
      cy.CheckElement(subscriptionSection.alertMessageofSuccess)// . Verify success message 'You have been successfully subscribed!' is visible
      subscribeInHome.checkSuccessAlertMessage('You have been successfully subscribed!');
    })
    })