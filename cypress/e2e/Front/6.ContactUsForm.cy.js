import {header, inputTypes, contactUsInformation} from '../../support/consts'
// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
describe('Register User', () => {
it('Test the contact form', ()=>{
    cy.visit('/')
    cy.CheckElement('body')
    // 4. Click on 'Contact Us' button
    cy.get(header
        .buttonContactUs)
         .click();
    // 5. Verify 'GET IN TOUCH' is visible
    cy.CheckHidden(contactUsInformation
        .getInTouchTitle)
         .should('have.text', 'Get In Touch')
    // 6. Enter name, email, subject and message
    cy.get(contactUsInformation
        .inputNameForm)
          .type(inputTypes
             .nameSignUp); 
    cy.get(contactUsInformation
        .inputEmailField)
            .type(inputTypes
              .emailSignUp);
    cy.get(contactUsInformation
        .inputSubjectField)
            .type(inputTypes
              .test);
    cy.get(contactUsInformation
        .inputSubjectField)
            .type(inputTypes
              .test);
    // 7. Upload file
    cy.get(contactUsInformation
        .buttonChooseFile)
         .click();
    // 8. Click 'Submit' button
    cy.get(contactUsInformation
        .buttonSubmit)
         .click();
    // 9. Click OK button
    cy.CheckElement(contactUsInformation
        .succesFormChangesMsg);
    cy.get(contactUsInformation
        .succesFormChangesMsg)
         .should('have.text', 'Success! Your details have been submitted successfully.');
// 10. Verify success message 'Success! Your details have been submitted successfully.' is visible
// 11. Click 'Home' button and verify that landed to home page successfully
    cy.get(header
        .buttonHome)
         .click()
    cy.url()
        .should('include', '/')     
})

})