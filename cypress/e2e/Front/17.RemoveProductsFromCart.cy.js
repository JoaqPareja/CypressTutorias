

    // 1. Launch browser
    // 2. Navigate to url 'http://automationexercise.com'
    // 3. Verify that home page is visible successfully
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
    // 4. Add products to cart
    // 5. Click 'Cart' button
    // 6. Verify that cart page is displayed
    // 7. Click 'X' button corresponding to particular product
    // 8. Verify that product is removed from the cart

        })