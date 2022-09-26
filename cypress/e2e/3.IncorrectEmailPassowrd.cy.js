import {inputTypes, header, loginUser} from '../support/consts'
// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
describe('Register User', () => {
  
    it('Visit page',()=>{
        //Navigate to url 'http://automationexercise.com'
        cy.visit('/')
    })
// 3. Verify that home page is visible successfully
it('Verify that home page is visible successfully', () => {
    // Verify that home page is visible successfully\
  //Cambiar esto por una seccion que no sea el body pero si igual de grande
    cy.CheckElement('body')
    cy.CheckHidden('body')
  })
// 4. Click on 'Signup / Login' button
it('Sing up', ()=>{
  //Click on 'Signup / Login' button
cy.get(header.buttonSingUpLogin).click() 
// 5. Verify 'Login to your account' is visible
cy.CheckElement(loginUser.loginToYourAccountH2)
cy.CheckHidden(loginUser.loginToYourAccountH2)
cy.get(loginUser.loginToYourAccountH2)
.contains("Login to your account")  
// 6. Enter correct email address and password
cy.get(loginUser.inputEmailAddressLogIn)
.type(inputTypes.incorrectEmail) //email
cy.get(loginUser.inputPasswordLogIn)
.type(inputTypes.incorrectPassword);
// 7. Click 'login' button
cy.get(loginUser.buttonLogin)
.click()

// 8. Verify error 'Your email or password is incorrect!' is visible
cy.CheckElement(loginUser.incorrectEmailORPasswordMsg)
cy.CheckHidden(loginUser.incorrectEmailORPasswordMsg)

cy.get(loginUser.incorrectEmailORPasswordMsg)
.should('have.text','Your email or password is incorrect!');

})
})