  import {inputTypes, header, loginUser} from '../../support/consts';

    // 1. Launch browser
    // 2. Navigate to url 'http://automationexercise.com'
    describe('Register User', () => {
      it('Sing up', ()=>{
        cy.visit('/')
        cy.CheckElement('body')    
          cy.login()
          //Verify that you can log out
          cy.get(loginUser
              .buttonLogOut)
                .should('have.text',' Logout');
          cy.CheckElement(loginUser
              .buttonLogOut)
      });
    });