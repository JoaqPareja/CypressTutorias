

  import {inputTypes, header, singUpUser} from '../../support/consts'
    describe('Register User', () => {
      it('Sing up', ()=>{
        cy.visit('/')
          cy.get(header  //Click on 'Signup / Login' button
              .buttonSingUpLogin)
                .click() 
          cy.get('body')  // Verify 'New User Signup!' is visible
              .contains("New User Signup!")  
          cy.get(singUpUser  //Enter name and email address
              .inputNameSingUp)
                .type(inputTypes
                  .nameSignUp) // name
          cy.get(singUpUser
              .inputEmailSingup)
                .type(inputTypes
                  .emailSignUp) //email
          cy.get(singUpUser  //Click 'Signup' button
              .buttonSingUp)
                  .click();   
          cy.CheckElement(singUpUser  // . Verify error 'Email Address already exist!' is visible
              .emailAlreadyExist);
          cy.get(singUpUser
              .emailAlreadyExist)
                .should('have.text','Email Address already exist!') 
  })
})