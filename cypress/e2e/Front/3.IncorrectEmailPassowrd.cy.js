import {inputTypes, header, loginUser} from '../../support/consts';
// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
describe('Register User', () => {

it('Sing up', ()=>{
  cy.visit('/')
    cy.CheckElement('body')
    cy.CheckHidden('body')
    cy.get(header //Click on 'Signup / Login' button
        .buttonSingUpLogin) // . Click on 'Signup / Login' button
          .click(); 
    // 5. Verify 'Login to your account' is visible
    cy.CheckElement(loginUser
        .loginToYourAccountH2)
    cy.CheckHidden(loginUser
        .loginToYourAccountH2)
    cy.get(loginUser.loginToYourAccountH2)
    .contains("Login to your account")  
    // 6. Enter correct email address and password
    cy.get(loginUser
        .inputEmailAddressLogIn)
          .type(inputTypes
            .incorrectEmail) //email
    cy.get(loginUser
        .inputPasswordLogIn)
        .type(inputTypes
          .incorrectPassword);
    // 7. Click 'login' button
    cy.get(loginUser.buttonLogin)
        .click()

    // 8. Verify error 'Your email or password is incorrect!' is visible
    cy.CheckElement(loginUser
        .incorrectEmailORPasswordMsg)
    cy.CheckHidden(loginUser
        .incorrectEmailORPasswordMsg)

    cy.get(loginUser.incorrectEmailORPasswordMsg)
        .should('have.text','Your email or password is incorrect!');

})
})