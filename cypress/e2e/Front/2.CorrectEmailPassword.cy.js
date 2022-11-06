import {inputTypes, header, loginUser} from '../../support/consts';

describe('Login with Correct email and password', () => {

    it('Sing up', ()=>{
      //I should stored this login in a const in order to re use in the next test.
      cy.visit('/')  // 3. Verify that home page is visible successfully
      cy.CheckElement('body')
        cy.login() // . Click on 'Signup / Login' button
        cy.get(loginUser.buttonLogOut) //Verify that you can log out
            .should('have.text',' Logout');
        cy.CheckElement(loginUser.buttonLogOut)    
})

    // 8. Verify that 'Logged in as username' is visible

    // 9. Click 'Delete Account' button
    
    // 10. Verify that 'ACCOUNT DELETED!' is visible

})