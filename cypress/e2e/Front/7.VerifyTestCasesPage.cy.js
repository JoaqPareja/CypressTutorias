import {header, testCases} from '../../support/consts';
    // 1. Launch browser
    // 2. Navigate to url 'http://automationexercise.com'
    describe('Register User', () => {
    // 3. Verify that home page is visible successfully
    // 4. Click on 'Test Cases' button
    // 5. Verify user is navigated to test cases page successfully
    it('Verify user is navigated to test cases page', ()=>{
      cy.visit('/')
      cy.get(header
          .buttonTestCAses)
           .click();
      cy.url()
          .should('include', '/test_cases')
            .should('not.include', '/test_cases/');
      cy.get(testCases
          .registerUser)
            .click();
    })   
    })