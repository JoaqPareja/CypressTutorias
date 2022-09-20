

import {singUpLogin, inputNameSingUp, nameSignUp, inputEmailSingup, emailSignUp, singUpButton, inputNameClass, passwordSignUp, test 
,createAccount} from "../support/Consts";

let titleResponse =[];

describe('Register User', () => {
  
  it('Visit page',()=>{
      //Navigate to url 'http://automationexercise.com'
    cy.visit('http://automationexercise.com')
  })

  it('Verify that home page is visible successfully', () => {
    // Verify that home page is visible successfully
    cy.CheckElement('body')
    cy.CheckHidden('body')
    //Check Width and Height is greater and less than
    cy.getWidth('body')
    cy.getHeight('body')
  })
  it('Sing up', ()=>{
        //Click on 'Signup / Login' button
      cy.get(singUpLogin).click() 
    // Verify 'New User Signup!' is visible
    cy.get('body').contains("New User Signup!")  
    //Enter name and email address
    cy.get(inputNameSingUp).type(nameSignUp) // name
    cy.get(inputEmailSingup).type(emailSignUp) //email
    //Click 'Signup' button
    cy.get(singUpButton).click()
    //Verify that 'ENTER ACCOUNT INFORMATION' is visible
   // -> Missing

  })
  it('Account information', function (){
    // Fill details: Title, Name, Email, Password, Date of birth
    cy.get('body')
    .contains("Mr")
    .click()
    // Validate name and email previously place it the step before

    //  cy.get(inputNameClass)
    //  expect(inputNameClass).to.be.equal(nameSignUp)
    cy.get(inputNameClass)
    .invoke('val')
    .should('have.text',nameSignUp)

    // expect(inputNameClass).to.have.value(nameSignUp)
    // inputNameClass.should('have.text',nameSignUp)

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
  cy.get('#mobile_number')
  .type(test)
  .invoke('val')
  .should('match', /^[0-9]\d*(\.\d+)?$/) //checking the numbers that contain decimals

  // .invoke('val')
  // .should(value =>{
  //   expect(Number.isInteger(+value), 'input should be an integer').to.eq(true)
  // })
})
it("Create account", ()=>{
  cy.get(createAccount).click()
})
})


   // cy.get(inputNameClass)
    // .then(response =>{
    //   titleResponse = response.text()
    //       expect(titleResponse).to.equal(nameSignUp)
    // }).contains(nameSignUp)


    //Create account
  

    // cy.get('.required form-group > #name')
    // .then(response => {  // Nos traemos la clase que contiene el titulo del prpoducto y luego drealizamos un callback con su respuesta 
    //   cy.log(response.text())   // tira en la consola la respuesta como texto
    //   let obj = response.text() 
    //   cy.log(obj);
    // })
    
    // expect('#name').to.be.equal(nameSignUp)
    // .then(response =>{
    //   titleResponse = response.text()
    //    try {
    //     expect(titleResponse).to.equal(nameSignUp)
    //     cy.log('The item',titleResponse,'matched the previous item selected')
    //   }
    //   catch (e) {
    //     throw new Error( `values did not matched`)
    //   }
    // })
    // expect('#name').to.be.equal(nameSignUp)
    // .contains(nameSignUp)
    // .should('eq', nameSignUp)
    // cy.get('#email')
    // .should('eq', emailSignUp)