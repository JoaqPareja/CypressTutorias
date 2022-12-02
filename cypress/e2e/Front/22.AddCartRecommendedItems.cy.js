

//  22: Add to cart from Recommended items
import {productsPageRecommendedItem} from '../../support/POM/Consts'
import {storeProductInformation} from '../../support/POM'

// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
describe('Register User', () => {
  beforeEach('Stored loggin', ()=>{     
    cy.login();  
  })
  
    it('Check Recommend items',()=>{
      cy.visit('/')
        cy.scrollTo('bottom')// . Scroll to bottom of page
         cy.CheckElement(productsPageRecommendedItem.divRecommendedSection)
         storeProductInformation.getFirstRecommendedItem();
         cy.get(productsPageRecommendedItem.divCarousel).find(productsPageRecommendedItem.linkItemActive).click();  
          cy.contains('View Cart').click();
      })
      it('Verify product in Cart', ()=>{
        cy.visit('/view_cart')
      })
// 4. Verify 'RECOMMENDED ITEMS' are visible
// 5. Click on 'Add To Cart' on Recommended product
// 6. Click on 'View Cart' button
// 7. Verify that product is displayed in cart page

})