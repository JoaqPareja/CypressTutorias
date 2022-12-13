import {contactUs} from '../../support/POM'
import {inputTypes} from '../../support/POM/Consts';
describe('Register User', () => {
it('Test the contact form', ()=>{
    cy.visit('/')
    contactUs.clickContactUsLink();
    contactUs.elements.getInTouchTitle().should('have.text', 'Get In Touch');
    contactUs.typeformName(inputTypes.nameSignUp);
    contactUs.typeEmailField(inputTypes.emailSignUp);
    contactUs.typeSubjectField(inputTypes.test);
    contactUs.clickChooseFileButton(inputTypes.test);
    contactUs.clickSubmitButton();
    contactUs.elements.succesMsgFormChanges().should('have.text', "Success! Your details have been submitted successfully.")
    contactUs.clickLinkHome();
      //. Click 'Home' button and verify that landed to home page successfully
    cy.url().should('include', '/')   

})

})