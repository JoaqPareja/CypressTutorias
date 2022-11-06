import {header, testCases} from '../../support/POM/Consts';

    describe('Register User', () => {
    it('Verify user is navigated to test cases page', ()=>{
      cy.visit('/')
        cy.get(header.buttonTestCAses) // . Click on 'Test Cases' button
            .click();
        cy.url() 
            .should('include', '/test_cases') // . Verify user is navigated to test cases page successfully
              .should('not.include', '/test_cases/');
        cy.get(testCases.registerUser)
            .click();
    })   
    })