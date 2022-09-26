

  import {inputTypes, header, loginUser, singUpUser} from '../support/consts'
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