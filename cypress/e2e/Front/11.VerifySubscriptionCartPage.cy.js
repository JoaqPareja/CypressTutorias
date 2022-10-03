
//  11: Verify Subscription in Cart page
import {header} from '../../support/consts'

// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
describe('Register User', () => {
  
    it('Visit page',()=>{
      cy.visit('/')
      //I retrieve the baseURL from the cypress.config.js file and avoid to re call the url for each test
    })
    it('Verify that home page is visible successfully', () => {
        // Verify that home page is visible successfully
        // 3. Verify that home page is visible successfully
        cy.CheckElement('body')
        cy.CheckHidden('body')
      }) 
       // 4. Click 'Cart' button
      it('', ()=>{
        cy.get(header
        .buttonCart).click();
            // 5. Scroll down to footer
        cy.scrollTo('bottom');
    // 6. Verify text 'SUBSCRIPTION'
    // 7. Enter email address in input and click arrow button
    // 8. Verify success message 'You have been successfully subscribed!' is visible
        cy.CheckElement(subscriptionSection
        .h2Subscription).should('have.text', 
        'Subscription')
         })
      
      it('',()=>{
        cy.get(subscriptionSection
          .inputSubscriptionEmail)
        .type(inputTypes.emailSignUp)
        // 6. Enter email address in input and click arrow button
        cy.get(subscriptionSection
          .buttonSubscribe).click();
            // 7. Verify success message 'You have been successfully subscribed!' is visible
        cy.CheckElement(subscriptionSection
          .alertMessageofSuccess)
        cy.get(subscriptionSection
          .alertMessageofSuccess).should('have.text', 
          'You have been successfully subscribed!')
      })

})
    