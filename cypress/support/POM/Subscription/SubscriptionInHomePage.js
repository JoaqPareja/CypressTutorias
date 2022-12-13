import {subscriptionSection}  from '../Consts';

class SubscribeInHome{

    elements={
        checkSubscription: ()=> cy.CheckElement(subscriptionSection.h2Subscription),  // . Verify text 'SUBSCRIPTION'
        emailSubscriptionInput: ()=> cy.get(subscriptionSection.inputSubscriptionEmail),
        subscribeButton: ()=>cy.get(subscriptionSection.buttonSubscribe),
        successAlertMessage: ()=>cy.get(subscriptionSection.alertMessageofSuccess)
    }
    typeEmailSubscription(text){
        this.elements.emailSubscriptionInput().type(text)
    }
    clickSubscribeButton(){
        this.elements.subscribeButton().click()
    }
    
}
module.exports={
    SubscribeInHome
}