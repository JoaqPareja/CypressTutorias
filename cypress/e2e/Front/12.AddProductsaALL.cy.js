import{storeAllProduct, addAllProducts, verifyAllProducts} from '../../support/POM'
// import {addProducts,storeProductInformationPushJson, verifyProducts} from '../../support/POM'
//Falta generar array vacio de enteros y luego que por cada elemento 
// anadido al carrito este se incremente y luego comprararlo

describe('Add products and verified each on the Cart',{failOnStatusCode: false}, () => {  
  beforeEach('Stored loggin', ()=>{     
    cy.login();  
  })

  it('Add All Products',()=>{
    cy.visit('/')
    addAllProducts.clickAll();
    // storeAllProduct.addAllProducts();
  })
  it('Store All Products information', ()=>{
    cy.visit('/')
    storeAllProduct.allH2Prices();
    storeAllProduct.allPTitles();
})

it('Verify products in cart', ()=>{
  cy.visit('/view_cart')
  verifyAllProducts.checkTitles();
  verifyAllProducts.checkPrices();
      
    })
 
})
