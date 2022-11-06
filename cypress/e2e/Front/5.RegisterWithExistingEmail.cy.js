

  import {inputTypes, header, singUpUser} from '../../support/consts'
    describe('Register User', () => {
      it('Sing up', ()=>{
        cy.visit('/')
          cy.get(header.buttonSingUpLogin)  //Click on 'Signup / Login' button
              .click() 
          cy.get('body')  // Verify 'New User Signup!' is visible
              .contains("New User Signup!")  
          cy.get(singUpUser.inputNameSingUp)  //Enter name and email address
              .type(inputTypes.nameSignUp) // name
          cy.get(singUpUser.inputEmailSingup)     
              .type(inputTypes.emailSignUp) //email
          cy.get(singUpUser.buttonSingUp)  //Click 'Signup' button
              .click();   
          cy.CheckElement(singUpUser.emailAlreadyExist);  // . Verify error 'Email Address already exist!' is visible
          cy.get(singUpUser.emailAlreadyExist)
              .should('have.text','Email Address already exist!') 
  })
})