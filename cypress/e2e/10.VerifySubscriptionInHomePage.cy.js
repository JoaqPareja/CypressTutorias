
import{emailSignUp} from '../support/Consts'

    // 1. Launch browser
    // 2. Navigate to url 'http://automationexercise.com'

   
    describe('Register User', () => {
  
        it('Visit page',()=>{
            //Navigate to url 'http://automationexercise.com'
          cy.visit('http://automationexercise.com')
        })
    
    // 3. Verify that home page is visible successfully
    
    it('Verify that home page is visible successfully', () => {
        // Verify that home page is visible successfully
        cy.CheckElement('body')
        cy.CheckHidden('body')
        //Check Width and Height is greater and less than
        cy.getWidth('body')
        cy.getHeight('body')
      })
    
   it('',()=>{

    // 4. Scroll down to footer
cy.scrollTo('bottom')
// cy.get('fotter').scrollTo('center')
cy.CheckElement('#footer')
        // 5. Verify text 'SUBSCRIPTION'
cy.CheckElement('.single-widget > h2:nth-child(1)').should('have.text', 'Subscription')
   })
   
it('',()=>{

  cy.get('#susbscribe_email').type(emailSignUp)

  // 6. Enter email address in input and click arrow button
  cy.get('#subscribe').click()

      // 7. Verify success message 'You have been successfully subscribed!' is visible
  cy.CheckElement('.alert-success')
  cy.get('.alert-success').should('have.text', 'You have been successfully subscribed!')
})


    })