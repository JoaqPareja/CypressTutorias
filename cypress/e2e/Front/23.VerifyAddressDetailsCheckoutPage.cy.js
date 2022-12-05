import {header} from '../../support/POM/Consts'
import {addProducts} from '../../support/POM'

    // 1. Launch browser
    // 2. Navigate to url 'http://automationexercise.com'
    // 3. Verify that home page is visible successfully
    describe('Verify Address Details', () => {
      beforeEach('Stored loggin', ()=>{     
        cy.login();  
      })
      
        it('Add products',()=>{
          cy.visit('/')
          addProducts.firstProduct;
          addProducts.secondProduct;
          cy.get(header.linkCart).click();
          cy.url().should('include', '/view_cart')
        })
        it('Verify information',()=>{
          cy.visit('/view_cart')

        })

    // 8. Add products to cart
    // 9. Click 'Cart' button
    // 10. Verify that cart page is displayed
    // 11. Click Proceed To Checkout
    // 12. Verify that the delivery address is same address filled at the time registration of account
    // 13. Verify that the billing address is same address filled at the time registration of account
    // 14. Click 'Delete Account' button
    // 15. Verify 'ACCOUNT DELETED!' and click 'Continue' button

        })