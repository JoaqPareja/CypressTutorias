import {cart} from '../../support/POM/Consts'

describe('Register User', () => {
  
    it('Test add quantity', ()=>{
      cy.visit('/')
        cy.get('div.col-sm-4:nth-child(3) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(1) > a:nth-child(1)').click()
              //Still missing an alogirithim to avoid repeating the .type()
        cy.get('#quantity')
                .type('{uparrow}')
                  .type('{uparrow}') 
                      .type('{uparrow}')
                        // .type('{uparrow}')
        cy.get('button.btn:nth-child(5)')
              .click()
        cy.get('p.text-center:nth-child(2) > a:nth-child(1)')
                .click()
        cy.get(cart.buttonQuantityFirstProduct)
            .should('have.text', '4')
})

      // 4. Click 'View Product' for any product on home page
    // 5. Verify product detail is opened
    // 6. Increase quantity to 4
    // 7. Click 'Add to cart' button
    // 8. Click 'View Cart' button
    // 9. Verify that product is displayed in cart page with exact quantity

    })