  import {inputTypes, header, loginUser} from '../../support/consts';

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
      })  
      it('Sing up', ()=>{
        cy.visit('/')
       cy.login()
       //Verify that you can log out
       cy.get(loginUser
        .buttonLogOut)
          .should('have.text',' Logout');
    cy.CheckElement(loginUser
        .buttonLogOut)
      });
    });