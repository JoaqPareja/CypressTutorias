import {subscriptionSection}  from '../Consts';

class SubscribeInHome{

    elements={
        checkSubscription: ()=> cy.CheckElement(subscriptionSection.h2Subscription),  // . Verify text 'SUBSCRIPTION'
        emailSubscriptionInput: ()=> cy.get(subscriptionSection.inputSubscriptionEmail),
        subscribeButton: ()=>cy.get(subscriptionSection.buttonSubscribe),
        successAlertMessage: ()=>cy.get(subscriptionSection.alertMessageofSuccess)
    }
    checkSubscription(text){
        this.elements.checkSubscription()
                .should('have.text', text);
    }
    typeEmailSubscription(text){
        this.elements.emailSubscriptionInput().type(text)
    }
    clickSubscribeButton(){
        this.elements.subscribeButton().click()
    }
    checkSuccessAlertMessage(text){
        this.elements.successAlertMessage().should('have.text', text)
    }
}
module.exports={
    SubscribeInHome
}