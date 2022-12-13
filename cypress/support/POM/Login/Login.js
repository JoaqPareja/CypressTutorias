import {header, singUpUser} from '../Consts'

class CreateLogin{
    elements={
       signUpLoginLink: ()=>cy.get(header.linkSingUpLogin),
       signUpH2NewUser:()=> cy.get(singUpUser.newUserSignUpH2),
       signUpNameInput:()=> cy.get(singUpUser.inputNameSingUp),
       signUpEmailInput:()=>cy.get(singUpUser.inputEmailSingup),
       signUpButton:()=>cy.get(singUpUser.buttonSingUp),
       emailAlreadyExistP:()=>cy.get(singUpUser.pEmailAlreadyExist),
    }
    clickSignUpLogin(){
        this.elements.signUpLoginLink().click();
    }
    typeSignUpName(text){
        this.elements.signUpNameInput().type(text);
    }
    typeSignUpEmail(text){
        this.elements.signUpEmailInput().type(text);
    }
    clickSignButton(){
        this.elements.signUpButton().click();
    }
    

}


// cy.get(singUpUser.inputNameSingUp)     
// .type(Cypress.env("userName", inputTypes.nameSingUp2)); // name

// cy.get(singUpUser.inputEmailSingup)
// .type(inputTypes.emailSignUp2);          
// cy.get(singUpUser.buttonSingUp)
// .click();
// cy.get(singUpUser.pEmailAlreadyExist)
// .should('not.exist')  // .should('have.text','Email Address already exist!');

module.exports={
    CreateLogin
}