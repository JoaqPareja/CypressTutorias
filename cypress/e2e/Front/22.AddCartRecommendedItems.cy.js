

//  22: Add to cart from Recommended items
import {productsPageRecommendedItem } from '../../support/POM/Consts'
import {storeRecommendedReWriteJson,addProducts, verifyProductsRecommended} from '../../support/POM'
const filename = '/EnviromentVariables.json';
let test = [];
// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'

describe('Store and verified recommended product', () => {
  beforeEach('Stored loggin', ()=>{     
    cy.login();  
  })
  
    it('Store Recommend items',()=>{
      cy.visit('/')
      // test.push({str : []})
        cy.writeFile(filename, test)
        // cy.log(str).pause();
         cy.CheckElement(productsPageRecommendedItem.divRecommendedSection) // 4. Verify 'RECOMMENDED ITEMS' are visible
         //Routed to POM/ProductsStoreInformation
         storeRecommendedReWriteJson.firstRecommendedProduct
      })
      it('Add Recommended product', ()=>{
        cy.visit('/')
         //Routed to POM/ProductsAddItems
        addProducts.firstRecommendedProduct; // 5. Click on 'Add To Cart' on Recommended product
        cy.contains('View Cart') // 6. Click on 'View Cart' button
            .click({force: true}); 
      })
      it('Verify product information recommended product',()=>{
        cy.visit('/view_cart')
        / //Routed to POM/Cart
        verifyProductsRecommended.firstProduct; // 7. Verify that product is displayed in cart page   
        // cy.writeFile(filename, test) //Cleaning the Json Again
      });   

})