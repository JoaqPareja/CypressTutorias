import {ContactUs, getInTouchTitle, emailInputField, emailSignUp, nameinputForm, nameSignUp, test,
  chooseFilButton, subjectInputField, messageInputField, submitButton, succesFormChangesMsg} 
from "../support/Consts";
  

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
  })

it('', ()=>{
// 4. Click on 'Contact Us' button

cy.get(ContactUs).click()

// 5. Verify 'GET IN TOUCH' is visible

cy.CheckElement(getInTouchTitle)
cy.CheckHidden(getInTouchTitle)
cy.get(getInTouchTitle).should('have.text', 'Get In Touch')

// 6. Enter name, email, subject and message

cy.get(nameinputForm).type(nameSignUp) 
cy.get(emailInputField).type(emailSignUp);


cy.get(subjectInputField).type(test)

cy.get(messageInputField).type(test)

// 7. Upload file

cy.get(chooseFilButton).click()

// 8. Click 'Submit' button


cy.get(submitButton).click()

// 9. Click OK button

cy.CheckElement(succesFormChangesMsg)
cy.CheckHidden(succesFormChangesMsg)

cy.get(succesFormChangesMsg).should('have.text', 'Success! Your details have been submitted successfully.')


})

// 10. Verify success message 'Success! Your details have been submitted successfully.' is visible

// 11. Click 'Home' button and verify that landed to home page successfully

})