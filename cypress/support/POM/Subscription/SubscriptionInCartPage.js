
import {subscriptionSection, header}  from '../Consts';

class SubscribeInCart{

    elements={
        linkCart:()=> cy.get(header.linkCart),
        checkH2Subscription:()=> cy.CheckElement(subscriptionSection.h2Subscription),
        subscriptionEmailInput:()=>cy.get(subscriptionSection.inputSubscriptionEmail),
        subscribeButton:()=>cy.get(subscriptionSection.buttonSubscribe),
        successAlertMsg:()=> cy.get(subscriptionSection.alertMessageofSuccess),
    }

    clickLinkCart(){
        this.elements.linkCart().click();
    }

    checkH2Subscription(text){
        this.elements.checkH2Subscription().should('have.text', text)
    }
    typeSubscriptionEmail(text){
    this.elements.subscriptionEmailInput().type(text)
      // . Verify text 'SUBSCRIPTION'
    }
    clickSubscribeButton(){
        this.elements.subscribeButton().click();
        
    }
    checkSuccessAlertMsg(text){
    this.elements.successAlertMsg().should('have.text', text);
}
}
module.exports={
    SubscribeInCart
}