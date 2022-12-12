
import {header, contactUsInformation} from '../Consts'

class ContactUs {
    elements = {
        contactUsLink: () => cy.get(header.linkContactUs), 
        getInTouchTitle: () => cy.CheckHidden(contactUsInformation.getInTouchTitle), 
        formNameInput: () => cy.get(contactUsInformation.inputNameForm),
        emailFieldInput: ()=> cy.get(contactUsInformation.inputEmailField),
        subjectFieldiInput: () => cy.get(contactUsInformation.inputSubjectField),
        chooseFileButton: ()=> cy.get(contactUsInformation.buttonChooseFile), 
        submitButton: ()=> cy.get(contactUsInformation.buttonSubmit),
        succesMsgFormChanges: () =>cy.get(contactUsInformation.succesFormChangesMsg),
        linkHome: () => cy.get(header.linkHome)
    }
    clickContactUsLink(){
        this.elements.contactUsLink().click();
    }
    checkTitle(AssertionType, text){
        this.elements.getInTouchTitle().should('have.text', text)
    }
    typeformName(text){
        this.elements.formNameInput().type(text) 
    }
    typeEmailField(text){
        this.elements.emailFieldInput().type(text) 
    }
    typeSubjectField(text){
        this.elements.subjectFieldiInput().type(text) 
    }
    clickChooseFileButton(){
        this.elements.chooseFileButton().click();
    }
    clickSubmitButton(){
        this.elements.submitButton().click();
    }
    checkMessage(text){
        this.elements.succesMsgFormChanges().should('have.text', text)
    }
    clickLinkHome(){
        this.elements.linkHome().click();
    }

}
 

module.exports = {
    ContactUs
}