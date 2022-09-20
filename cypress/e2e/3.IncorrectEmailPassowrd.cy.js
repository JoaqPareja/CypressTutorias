import {singUpLogin, InputPasswordLogIn, InputEmailAddressLogIn, emailSignUp, loginButton, passwordSignUp 
  ,LoginToYourAccountH2,IncorrectEmail, IncorrectPassword, IncorrectEmailORPasswordMsg} from "../support/Consts";

// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'

describe('Register User', () => {
  
    it('Visit page',()=>{
        //Navigate to url 'http://automationexercise.com'
      cy.visit('http://automationexercise.com')
    })

// 3. Verify that home page is visible successfully

it('Verify that home page is visible successfully', () => {
    // Verify that home page is visible successfully
    cy.CheckElement('body')
    cy.CheckHidden('body')
    //Check Width and Height is greater and less than
    cy.getWidth('body')
    cy.getHeight('body')
  })

// 4. Click on 'Signup / Login' button

it('Sing up', ()=>{
  //Click on 'Signup / Login' button
cy.get(singUpLogin).click() 
// 5. Verify 'Login to your account' is visible

cy.CheckElement(LoginToYourAccountH2)
cy.CheckHidden(LoginToYourAccountH2)
///////////////////

cy.get('body').contains("Login to your account")  

// 6. Enter correct email address and password
cy.get(InputEmailAddressLogIn).type(IncorrectEmail) //email
cy.get(InputPasswordLogIn).type(IncorrectPassword);

// 7. Click 'login' button
cy.get(loginButton).click()



// 8. Verify error 'Your email or password is incorrect!' is visible
cy.CheckElement(IncorrectEmailORPasswordMsg)
cy.CheckHidden(IncorrectEmailORPasswordMsg)

cy.get(IncorrectEmailORPasswordMsg).should('have.text','Your email or password is incorrect!');


})




})