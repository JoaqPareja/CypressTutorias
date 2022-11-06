  import {inputTypes, header, loginUser} from '../../support/consts';

    describe('Register User', () => {
      it('Sing up', ()=>{
        cy.visit('/')
          cy.CheckElement('body')    
            cy.login()
            cy.get(loginUser.buttonLogOut)  //Verify that you can log out
                  .should('have.text',' Logout');
            cy.CheckElement(loginUser.buttonLogOut)
      });
    });