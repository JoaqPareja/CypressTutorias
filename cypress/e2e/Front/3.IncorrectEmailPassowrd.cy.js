import {inputTypes, header, loginUser} from '../../support/consts';
// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
describe('Register User', () => {

it('Sing up', ()=>{
  cy.visit('/')
    cy.CheckElement('body')
    cy.CheckHidden('body')
    cy.get(header.buttonSingUpLogin)  //Click on 'Signup / Login' button
        .click(); 
    cy.CheckElement(loginUser.loginToYourAccountH2)  // . Verify 'Login to your account' is visible
    cy.CheckHidden(loginUser.loginToYourAccountH2)      
    cy.get(loginUser.loginToYourAccountH2)
        .contains("Login to your account")  
    cy.get(loginUser.inputEmailAddressLogIn) // . Enter correct email address and password
          .type(inputTypes.incorrectEmail) //email 
    cy.get(loginUser.inputPasswordLogIn)
        .type(inputTypes.incorrectPassword);
    cy.get(loginUser.buttonLogin)  // . Click 'login' button
        .click()
    cy.CheckElement(loginUser.incorrectEmailORPasswordMsg)  // . Verify error 'Your email or password is incorrect!' is visible
    cy.get(loginUser.incorrectEmailORPasswordMsg)
        .should('have.text','Your email or password is incorrect!');

})
})