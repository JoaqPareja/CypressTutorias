

//  22: Add to cart from Recommended items
import {productsPageRecommendedItem } from '../../support/POM/Consts'
import {storeProductInformationReWriteJson,addProducts, verifyProductsRecommended} from '../../support/POM'

// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
describe('Register User', () => {
  beforeEach('Stored loggin', ()=>{     
    cy.login();  
  })
  
    it('Check Recommend items',()=>{
      cy.clearLocalStorage();
      cy.visit('/')
        cy.scrollTo('bottom')// . Scroll to bottom of page
         cy.CheckElement(productsPageRecommendedItem.divRecommendedSection)
         storeProductInformationReWriteJson.firstRecommendedProduct
        //  cy.get(productsPageRecommendedItem.divCarousel).find(productsPageRecommendedItem.linkItemActive).click();  
          
      })
      it('Add Recommended product', ()=>{
        cy.visit('/')
        addProducts.firstRecommendedProduct;
        cy.contains('View Cart')
            .click({force: true});
      })
      it('Verify product information recommended product',()=>{
        cy.visit('/view_cart')
        verifyProductsRecommended.firstProduct;   
        
      })   
// 4. Verify 'RECOMMENDED ITEMS' are visible
// 5. Click on 'Add To Cart' on Recommended product
// 6. Click on 'View Cart' button
// 7. Verify that product is displayed in cart page

})