
import {header, productsPage} from '../../support/POM/Consts'
import {addProducts} from '../../support/POM'
    describe('Register User', () => {
  
        it('Visit page',()=>{
          cy.visit('/')
           cy.get(header
              .buttonProducts)
                .click();
          cy.get(productsPage
              .inputSearchProducts)
                .type('Dress');
          cy.get(productsPage
              .buttonSearchProducts)
                .click();
          cy.url()
              .should('contain', '/products')
        })
        it('Add products', ({ cacheSession = true } = {})  =>{
          cy.visit('/products?search=dress')
            addProducts.getFirstProduct();
            addProducts.getSecondProduct();
            addProducts.getThirdProduct();
            addProducts.getLastProduct();
      })
      
        it('Go Back to check those products',()=>{
          cy.login();
          cy.visit('/')
          cy.get(header
             .buttonCart)
              .click();
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