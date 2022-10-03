import{header} from '../../support/consts'
// 12: Add Products in Cart
//     1. Launch browser
//     2. Navigate to url 'http://automationexercise.com'
//     3. Verify that home page is visible successfully

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
      it('',()=>{

    })
//     4. Click 'Products' button
//     5. Hover over first product and click 'Add to cart'
//     6. Click 'Continue Shopping' button
//     7. Hover over second product and click 'Add to cart'
//     8. Click 'View Cart' button
//     9. Verify both products are added to Cart
//     10. Verify their prices, quantity and total price

    })