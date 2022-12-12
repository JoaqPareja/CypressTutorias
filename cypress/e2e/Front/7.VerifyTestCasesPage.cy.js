import {testCases} from '../../support/POM';

    describe('Register User', () => {
    it('Verify user is navigated to test cases page', ()=>{
      cy.visit('/')  
      testCases.clickTestCases();
        cy.url() 
            .should('include', '/test_cases') // . Verify user is navigated to test cases page successfully
              .should('not.include', '/test_cases/');
      testCases.clickRegisterUser();
    })   
    })