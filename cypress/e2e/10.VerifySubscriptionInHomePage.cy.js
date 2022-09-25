
import{emailSignUp, subscriptionH2, subscribeButton, alertMessageofSuccess, subscriptionEmailInput} from '../support/consts'
    // 1. Launch browser
    // 2. Navigate to url 'http://automationexercise.com'
    describe('Register User', () => {
        it('Visit page',()=>{
            //Navigate to url 'http://automationexercise.com'
          cy.visit('/')
        })
    // 3. Verify that home page is visible successfully
    it('Verify that home page is visible successfully', () => {
        // Verify that home page is visible successfully
        cy.CheckElement('body')
        cy.CheckHidden('body')
        //Check Width and Height is greater and less than
      })
   it('',()=>{
    // 4. Scroll down to footer
cy.scrollTo('bottom')
// cy.get('fotter').scrollTo('center')
cy.CheckElement('#footer')
        // 5. Verify text 'SUBSCRIPTION'
       
cy.CheckElement(subscriptionH2).should('have.text', 'Subscription')
   })
 
it('',()=>{

  cy.get(subscriptionEmailInput).type(emailSignUp)

  // 6. Enter email address in input and click arrow button
  cy.get(subscribeButton).click()
      // 7. Verify success message 'You have been successfully subscribed!' is visible
  cy.CheckElement(alertMessageofSuccess)
  cy.get(alertMessageofSuccess).should('have.text', 'You have been successfully subscribed!')
})
    })