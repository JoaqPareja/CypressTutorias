import {header,inputTypes, singUpUser, enterAccountInformation} from '../../support/consts';
// import {consts} from '../fixtures/consts.json'
// import { inputTypes } from '../support/consts'

describe('Register User', () => {
  
  it('Visit page',()=>{
    cy.visit('/')
    //I retrieve the baseURL from the cypress.config.js file and avoid to re call the url for each test
  })
  it('Verify that home page is visible successfully', () => {
    // Verify that home page is visible successfully
      //Cambiar esto por una seccion que no sea el body pero si igual de grande
    cy.CheckElement('body')
    cy.CheckHidden('body')
  })
  it('Sing up', ()=>{
        //Click on 'Signup / Login' button
        // cy.get(consts[1].header.buttonSingUpLogin).click()
      cy.get(header.buttonSingUpLogin).click() 
    // Verify 'New User Signup!' is visible
    cy.get(singUpUser.newUserSignUpH2)
    .contains("New User Signup!")  
    cy.get(singUpUser.inputNameSingUp)
    .type(inputTypes.nameSignUp) // name
    cy.get(singUpUser.inputEmailSingup)
    .type(inputTypes.emailSignUp) //email
    cy.get(singUpUser.buttonSingUp)
    .click()
    cy.get(singUpUser.emailAlreadyExist)
    .should('not.exist')
    .should('have.text','Email Address already exist!')
       })
  it('Account information', function (){
    cy.get('.clearfix')
    .contains("Mr")
    .click()
    // Validate name and email previously place it the step before
    cy.get(enterAccountInformation.inputName)
    .should('have.value',inputTypes.nameSignUp)
   
    cy.get(enterAccountInformation.inputPassword)
    .type(inputTypes.passwordSignUp);
    //Date of birth
    cy.get(enterAccountInformation.selectDateDay)
    .select('1');
    cy.get(enterAccountInformation.selectDateMonth)
    .select('1');
    cy.get(enterAccountInformation.selectDateYear)
    .select('1995');
    //Checkboxes
    cy.get(enterAccountInformation.radioButtonNewsLetter)
    .click();
    cy.get(enterAccountInformation.radioButtonReceiveSpecialOffers)
    .click();
    //Address information

    cy.get(enterAccountInformation.inputFirstName)
    .type(inputTypes.test)
    cy.get(enterAccountInformation.inputLastName)
    .type(inputTypes.test)
    cy.get(enterAccountInformation.inputCompany)
    .type(inputTypes.test)
    cy.get(enterAccountInformation.inputAddressName1)
    .type(inputTypes.test)
    cy.get(enterAccountInformation.inputAddressName2)
    .type(inputTypes.test)
    cy.get(enterAccountInformation.inputCountry)
    .select('India')
    cy.get(enterAccountInformation.inputState)
    .type(inputTypes.test)
    cy.get(enterAccountInformation.inputCity)
    .type(inputTypes.test) 
    cy.get(enterAccountInformation.inputZipcode)
    .type(inputTypes.test)
  })
  it('Check input mobile number if it requires a number', ()=>{
  cy.get(enterAccountInformation.inputMobileNumber)
  .type(inputTypes.testNumber)
  .should('match', /^[0-9]\d*(\.\d+)?$/) //checking the numbers that contain decimals
})
it("Create account", ()=>{
  cy.get(enterAccountInformation.buttonCreateAccount).click()
})
})