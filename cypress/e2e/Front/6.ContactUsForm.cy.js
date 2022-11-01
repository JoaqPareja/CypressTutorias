import {header, inputTypes, contactUsInformation} from '../../support/consts'

describe('Register User', () => {
it('Test the contact form', ()=>{
    cy.visit('/')
        cy.CheckElement('body')
        cy.get(header        //. Click on 'Contact Us' button
            .linkContactUs)
                .click();
        cy.CheckHidden(contactUsInformation   // . Verify 'GET IN TOUCH' is visible
            .getInTouchTitle)
                .should('have.text', 'Get In Touch')
        cy.get(contactUsInformation   // . Enter name, email, subject and message
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
        cy.get(contactUsInformation  // . Upload file
            .buttonChooseFile)
                .click();
        cy.get(contactUsInformation  // . Click 'Submit' button
            .buttonSubmit)
                .click();
        cy.CheckElement(contactUsInformation  // . Click OK button
            .succesFormChangesMsg);
        cy.get(contactUsInformation  // 10. Verify success message 'Success! Your details have been submitted successfully.' is visible
            .succesFormChangesMsg)
                .should('have.text', 'Success! Your details have been submitted successfully.');
        cy.get(header  //. Click 'Home' button and verify that landed to home page successfully
            .buttonHome)
            .click()
        cy.url()
            .should('include', '/')     
})

})