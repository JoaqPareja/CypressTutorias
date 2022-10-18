import {cart} from '../../support/consts'

describe('Register User', () => {
  
    // 1. Launch browser
    // 2. Navigate to url 'http://automationexercise.com'

    it('Visit page',()=>{
      cy.visit('/')
      //I retrieve the baseURL from the cypress.config.js file and avoid to re call the url for each test
    })
    it('Test add quantity', ()=>{
cy.get('div.col-sm-4:nth-child(3) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(1) > a:nth-child(1)').click()
cy.get('#quantity')
        .type('{uparrow}')
           .type('{uparrow}') 
              .type('{uparrow}')
                // .type('{uparrow}')
cy.get('button.btn:nth-child(5)')
      .click()
cy.get('p.text-center:nth-child(2) > a:nth-child(1)')
        .click()
})
it('Cart', ()=>{
  cy.get(cart
    .buttonQuantityFirstProduct)
      .should('have.text', '4')
})
      // 4. Click 'View Product' for any product on home page
    // 5. Verify product detail is opened
    // 6. Increase quantity to 4
    // 7. Click 'Add to cart' button
    // 8. Click 'View Cart' button
    // 9. Verify that product is displayed in cart page with exact quantity

    })