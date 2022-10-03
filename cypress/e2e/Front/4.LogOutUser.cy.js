  import {inputTypes, header, loginUser} from '../../support/consts'

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
      })  
      it('Sing up', ()=>{
        //Click on 'Signup / Login' button
      cy.get(header.buttonSingUpLogin).click() 
   // 5. Verify 'Login to your account' is visible
    cy.CheckElement(loginUser.loginToYourAccountH2);
    cy.get(loginUser.loginToYourAccountH2)
    .contains("Login to your account")  
    // 6. Enter correct email address and password
    cy.get(loginUser.inputEmailAddressLogIn)
    .type(inputTypes.emailSignUp) //email
    cy.get(loginUser.inputPasswordLogIn)
    .type(inputTypes.passwordSignUp);
    // 7. Click 'login' button
    cy.get(loginUser.buttonLogin).click()
    //Verify that 'ENTER ACCOUNT INFORMATION' is visible
    cy.get(loginUser.incorrectEmailORPasswordMsg)
    .should('not.exist','Your email or password is incorrect!');

    // 8. Verify that 'Logged in as username' is visible
    //-> Missing

    // 9. Click 'Logout' button

      //Verify that the you can log out
  cy.get(loginUser.buttonLogOut).click();
    // 10. Verify that user is navigated to login page
    cy.CheckElement(header.buttonSingUpLogin)
      });
    });