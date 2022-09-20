import {ContactUs, GetInTouchTitle, emailInputField, emailSignUp, nameinputForm, nameSignUp, test,
  ChooseFilButton, subjectInputField, messageInputField, submitButton, SuccesFormChangesMsg} 
from "../support/Consts";
  

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

it('', ()=>{
// 4. Click on 'Contact Us' button

cy.get(ContactUs).click()

// 5. Verify 'GET IN TOUCH' is visible

cy.CheckElement(GetInTouchTitle)
cy.CheckHidden(GetInTouchTitle)
cy.get(GetInTouchTitle).should('have.text', 'Get In Touch')

// 6. Enter name, email, subject and message

cy.get(nameinputForm).type(nameSignUp) 
cy.get(emailInputField).type(emailSignUp);


cy.get(subjectInputField).type(test)

cy.get(messageInputField).type(test)

// 7. Upload file

cy.get(ChooseFilButton).click()

// 8. Click 'Submit' button


cy.get(submitButton).click()

// 9. Click OK button

cy.CheckElement(SuccesFormChangesMsg)
cy.CheckHidden(SuccesFormChangesMsg)

cy.get(SuccesFormChangesMsg).should('have.text', 'Success! Your details have been submitted successfully.')


})

// 10. Verify success message 'Success! Your details have been submitted successfully.' is visible

// 11. Click 'Home' button and verify that landed to home page successfully

})