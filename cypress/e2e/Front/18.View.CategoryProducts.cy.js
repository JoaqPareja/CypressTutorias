
describe('Register User', () => {
  
    it('Visit page',()=>{
      cy.visit('/')
      //I retrieve the baseURL from the cypress.config.js file and avoid to re call the url for each test
    })
    it('Verify that home page is visible successfully', () => {
        // Verify that home page is visible successfully
        // 3. Verify that home page is visible successfully
        cy.CheckElement('body')
        cy.CheckHidden('body')
      }) 
    // 1. Launch browser
    // 2. Navigate to url 'http://automationexercise.com'
    // 3. Verify that categories are visible on left side bar
    // 4. Click on 'Women' category
    // 5. Click on any category link under 'Women' category, for example: Dress
    // 6. Verify that category page is displayed and confirm text 'WOMEN - TOPS PRODUCTS'
    // 7. On left side bar, click on any sub-category link of 'Men' category
    // 8. Verify that user is navigated to that category page

    })