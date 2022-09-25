

import {singUpLogin, inputNameSingUp, nameSignUp, inputEmailSingup, emailSignUp, singUpButton, inputName, passwordSignUp, test 
,mobileNumber, testNumber,createAccount} from "../support/consts";

describe('Register User', () => {
  
  it('Visit page',()=>{
      //Navigate to url 'http://automationexercise.com'
    // cy.visit('http://automationexercise.com')
    cy.visit('/')
  })

  it('Verify that home page is visible successfully', () => {
    // Verify that home page is visible successfully
      //Cambiar esto por una seccion que no sea el body pero si igual de grande
    cy.CheckElement('body')
    cy.CheckHidden('body')
  })
  it('Sing up', ()=>{
        //Click on 'Signup / Login' button
      cy.get(singUpLogin).click() 
    // Verify 'New User Signup!' is visible

    //-> Cambiar
    // CAMBIAR por un selector mas especifico.
    
    cy.get('body').contains("New User Signup!")  
    cy.get(inputNameSingUp).type(nameSignUp) // name
    cy.get(inputEmailSingup).type(emailSignUp) //email
    cy.get(singUpButton).click()
   
  })
  it('Account information', function (){
    cy.get('body')
    .contains("Mr")
    .click()
    // Validate name and email previously place it the step before

    //  cy.get(inputNameClass)
    //  expect(inputNameClass).to.be.equal(nameSignUp)
    cy.get(inputName)
    .should('have.value',nameSignUp)

    cy.get('#password').type(passwordSignUp);
    //Date of birth
    cy.get('#days').select('1');
    cy.get('#months').select('1');
    cy.get('#years').select('1995');
    //Checkboxes
    cy.get('#newsletter').click();
    cy.get('#optin').click();
    //Address information
    cy.get('#first_name').type(test)
    cy.get('#last_name').type(test)
    cy.get('#company').type(test)
    cy.get('#address1').type(test)
    cy.get('#address2').type(test)
    cy.get('#country').select('India')
    cy.get('#state').type(test)
    cy.get('#city').type(test) 
    cy.get('#zipcode').type(test)
  })
  it('Check input mobile number if it requires a number', ()=>{
  cy.get(mobileNumber)
  .type(testNumber)
  .should('match', /^[0-9]\d*(\.\d+)?$/) //checking the numbers that contain decimals


})
it("Create account", ()=>{
  cy.get(createAccount).click()
})
})

