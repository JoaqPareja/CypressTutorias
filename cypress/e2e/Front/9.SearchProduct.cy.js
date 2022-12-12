import {productsPage} from '../../support/POM/Consts';
import {searchProducts} from '../../support/POM'    
describe('Register User', () => {
      it('Verify products', ()=>{
      cy.visit('/')  // Navigate to url 'http://automationexercise.com'
      searchProducts.clickProductsLink();
        cy.url()  // . Verify user is navigated to ALL PRODUCTS page successfully
            .should('include', '/products')
              .should('not.include', '/products/');
        cy.CheckElement(productsPage.listOfItems) // The products list is visible
        cy.CheckElement(productsPage.inputSearchProduct); // Enter product name in search input and click search button\
        searchProducts.typeProductSearch('Blue Top');
        searchProducts.clickProductSerach();
        cy.CheckElement(productsPage.listOfItems) // Verify all the products related to search are visible            
    })
  })