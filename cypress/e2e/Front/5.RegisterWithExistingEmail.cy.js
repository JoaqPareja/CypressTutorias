

  import {inputTypes, header, singUpUser} from '../../support/consts'
    describe('Register User', () => {
    // 3. Verify that home page is visible successfully
      it('Sing up', ()=>{
        cy.visit('/')
        //Click on 'Signup / Login' button
      cy.get(header.buttonSingUpLogin).click() 
    // Verify 'New User Signup!' is visible
    cy.get('body').contains("New User Signup!")  
    //Enter name and email address
    cy.get(singUpUser.inputNameSingUp)
    .type(inputTypes.nameSignUp) // name
    cy.get(singUpUser.inputEmailSingup)
    .type(inputTypes.emailSignUp) //email
    //Click 'Signup' button
    cy.get(singUpUser.buttonSingUp).click()

      // 8. Verify error 'Email Address already exist!' is visible
    cy.CheckElement(singUpUser.emailAlreadyExist);
    cy.get(singUpUser.emailAlreadyExist)
    .should('have.text','Email Address already exist!') 
  })
})