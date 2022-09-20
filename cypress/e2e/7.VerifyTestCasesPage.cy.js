import {TestCasesSectionButton} 
from "../support/Consts";


    // 1. Launch browser
    // 2. Navigate to url 'http://automationexercise.com'
    
    describe('Register User', () => {
  
        it('Visit page',()=>{
            //Navigate to url 'http://automationexercise.com'
          cy.visit('http://automationexercise.com')
        })
    
    // 3. Verify that home page is visible successfully
    
    it('Verify that home page is visible successfully', () => {
        // Verify that home page is visible successfully
        cy.CheckElement('body')
        cy.CheckHidden('body')
        //Check Width and Height is greater and less than
        cy.getWidth('body')
        cy.getHeight('body')
      })
    
    
    // 4. Click on 'Test Cases' button
    // 5. Verify user is navigated to test cases page successfully
    it('', ()=>{
      cy.get(TestCasesSectionButton).click()

      cy.url().should('include', '/test_cases');

      cy.get('.panel-group:nth-child(2) .panel > .panel-heading > .panel-title > a').click()
    })
    
    // cy.get(':nth-child(2) > .panel > .panel-heading > .panel-title > a > u')
    })