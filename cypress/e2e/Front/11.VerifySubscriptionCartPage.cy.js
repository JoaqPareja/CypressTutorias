
//  11: Verify Subscription in Cart page
import {subscriptionSection, inputTypes} from '../../support/POM/Consts'
import {subscribeInCart} from '../../support/POM'

describe('Register User', () => {
      it('Cart Testing', ()=>{
        cy.visit('/') //Navigate to url 'http://automationexercise.com'
        subscribeInCart.clickLinkCart();
          cy.scrollTo('bottom', {ensureScrollable: false}); // . Scroll down to footer
          subscribeInCart.elements.checkH2Subscription().should('have.text', 'Subscription');
          subscribeInCart.typeSubscriptionEmail(inputTypes.emailSignUp);
          subscribeInCart.clickSubscribeButton();
          cy.CheckElement(subscriptionSection.alertMessageofSuccess);  // 8. Verify success message 'You have been successfully subscribed!' is visible
          subscribeInCart.elements.successAlertMsg().should('have.text', 'You have been successfully subscribed!');
      })
})
    