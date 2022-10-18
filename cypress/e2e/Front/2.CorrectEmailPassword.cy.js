import {inputTypes, header, loginUser} from '../../support/consts';

describe('Login with Correct email and password', () => {
    it('Visit page',()=>{
          //Navigate to url 'http://automationexercise.com'
          cy.visit('/')
      })
    // 3. Verify that home page is visible successfully
    it('Verify that home page is visible successfully', () => {
        // Verify that home page is visible successfully
        cy.CheckElement('body')
      })
    // 4. Click on 'Signup / Login' button
    it('Sing up', ()=>{
      //Click on 'Signup / Login' button
  cy.get(header
      .buttonSingUpLogin)
        .click() 
 // 5. Verify 'Login to your account' is visible
  cy.CheckElement(loginUser
      .loginToYourAccountH2)
  cy.get(loginUser
        .loginToYourAccountH2)
          .contains("Login to your account")  
  // 6. Enter correct email address and password
  cy.get(loginUser 
      .inputEmailAddressLogIn)
        .type(inputTypes
          .emailSignUp) //email
  cy.get(loginUser
    .inputPasswordLogIn)
      .type(inputTypes
        .passwordSignUp);

  // 7. Click 'login' button
  cy.get(loginUser
     .buttonLogin)
      .click()
  //Verify that 'ENTER ACCOUNT INFORMATION' is visible
  cy.get(loginUser
      .incorrectEmailORPasswordMsg)
        .should('not.exist',
          'Your email or password is incorrect!');
})
it('Verify that you can log out', ()=>{

  cy.get(loginUser
      .buttonLogOut)
        .should('have.text',' Logout');
  cy.CheckElement(loginUser
      .buttonLogOut)
})

    // 8. Verify that 'Logged in as username' is visible

    // 9. Click 'Delete Account' button
    
    // 10. Verify that 'ACCOUNT DELETED!' is visible

})