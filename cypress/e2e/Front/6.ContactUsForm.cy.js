import {header, inputTypes, contactUsInformation} from '../../support/consts'

describe('Register User', () => {
it('Test the contact form', ()=>{
    cy.visit('/')
        cy.CheckElement('body')
        cy.get(header.linkContactUs)  //. Click on 'Contact Us' button
            .click();
        cy.CheckHidden(contactUsInformation.getInTouchTitle)   // . Verify 'GET IN TOUCH' is visible
            .should('have.text', 'Get In Touch')
        cy.get(contactUsInformation.inputNameForm)   // . Enter name, email, subject and message
            .type(inputTypes.nameSignUp);      
        cy.get(contactUsInformation.inputEmailField)
            .type(inputTypes.emailSignUp);
        cy.get(contactUsInformation.inputSubjectField)
            .type(inputTypes.test);
        cy.get(contactUsInformation.inputSubjectField)
            .type(inputTypes.test);
        cy.get(contactUsInformation.buttonChooseFile)  // . Upload file
            .click();
        cy.get(contactUsInformation.buttonSubmit)  // . Click 'Submit' button
            .click();
        cy.CheckElement(contactUsInformation.succesFormChangesMsg);  // . Click OK button      
        cy.get(contactUsInformation.succesFormChangesMsg)  // 10. Verify success message 'Success! Your details have been submitted successfully.' is visible
                .should('have.text', 'Success! Your details have been submitted successfully.');
        cy.get(header.buttonHome)  //. Click 'Home' button and verify that landed to home page successfully
            .click()
        cy.url()
            .should('include', '/')     
})

})