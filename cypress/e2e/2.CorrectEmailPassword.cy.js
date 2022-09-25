

import {singUpLogin, inputPasswordLogIn, inputEmailAddressLogIn, emailSignUp, loginButton, passwordSignUp 
 ,loginToYourAccountH2,logOut } from "../support/consts";

    // 1. Launch browser
    // 2. Navigate to url 'http://automationexercise.com'
    describe('Login with Correct email and password', () => {
  
        it('Visit page',()=>{
            //Navigate to url 'http://automationexercise.com'
            cy.visit('/')
        })
    // 3. Verify that home page is visible successfully
    it('Verify that home page is visible successfully', () => {
        // Verify that home page is visible successfully
        cy.CheckElement('body')
        cy.CheckHidden('body')
        //Check Width and Height is greater and less than
      })
    // 4. Click on 'Signup / Login' button
    it('Sing up', ()=>{
      //Click on 'Signup / Login' button
    cy.get(singUpLogin).click() 
 // 5. Verify 'Login to your account' is visible
  cy.CheckElement(loginToYourAccountH2)
  cy.get(loginToYourAccountH2).contains("Login to your account")  
  // 6. Enter correct email address and password
  cy.get(inputEmailAddressLogIn).type(emailSignUp) //email
  cy.get(inputPasswordLogIn).type(passwordSignUp);

  // 7. Click 'login' button
  cy.get(loginButton).click()
  //Verify that 'ENTER ACCOUNT INFORMATION' is visible

//Verify that the you can log out
cy.CheckElement(logOut)

})

    // 8. Verify that 'Logged in as username' is visible

    // 9. Click 'Delete Account' button
    
    // 10. Verify that 'ACCOUNT DELETED!' is visible

    })