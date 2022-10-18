

    // 1. Launch browser
    // 2. Navigate to url 'http://automationexercise.com'
    describe('Register User', () => {
  
        it('Visit page',()=>{
          cy.visit('/')
          //I retrieve the baseURL from the cypress.config.js file and avoid to re call the url for each test
        })
    // 3. Click on 'Products' button
    // 4. Verify user is navigated to ALL PRODUCTS page successfully
    // 5. Enter product name in search input and click search button
    // 6. Verify 'SEARCHED PRODUCTS' is visible
    // 7. Verify all the products related to search are visible
    // 8. Add those products to cart
    // 9. Click 'Cart' button and verify that products are visible in cart
    // 10. Click 'Signup / Login' button and submit login details
    // 11. Again, go to Cart page
    // 12. Verify that those products are visible in cart after login as well

    })