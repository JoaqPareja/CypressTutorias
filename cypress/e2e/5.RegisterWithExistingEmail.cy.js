

import {singUpLogin, inputNameSingUp, nameSignUp, inputEmailSingup, emailSignUp, singUpButton,  emailAlreadyExist
  } from "../support/Consts";
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
        cy.CheckHidden('body')
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

      // 8. Verify error 'Email Address already exist!' is visible
    cy.CheckElement(emailAlreadyExist);
    cy.CheckHidden(emailAlreadyExist);

    cy.get(emailAlreadyExist).should('have.text','Email Address already exist!') 

  })

 

})