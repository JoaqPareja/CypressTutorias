
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
    typeSubscriptionEmail(text){
    this.elements.subscriptionEmailInput().type(text)
      // . Verify text 'SUBSCRIPTION'
    }
    clickSubscribeButton(){
        this.elements.subscribeButton().click();     
    }
}
module.exports={
    SubscribeInCart
}