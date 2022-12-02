import{header} from '../../support/POM/Consts'

import {addProducts,storeProductInformationPushJson, verifyProducts} from '../../support/POM'
//Falta generar array vacio de enteros y luego que por cada elemento 
// anadido al carrito este se incremente y luego comprararlo

describe('Add products and verified each on the Cart', () => {  

  
  beforeEach('Stored loggin', ()=>{     
    cy.login();  
  })
  it('Store product information',()=>{
    cy.visit('/')
      cy.get(header.linkProducts) // .Click 'Products' button
          .click();
          storeProductInformationPushJson.getFirstProduct();    
          storeProductInformationPushJson.getSecondProduct();   
          // storeProductInformationPushJson.getFirstRecommendedItem();   
})  
it('Store product information recommended product',()=>{
  cy.visit('/')
  storeProductInformationPushJson.getFirstRecommendedItem();   

})       
  it('Add products to the cart', ()=>{
    cy.visit('/')
    addProducts.getFirstProduct();
    addProducts.getSecondProduct();
    });     
  it('Cart products verify first product', ()=>{ // . Verify their prices, quantity and total price
    cy.visit('/view_cart')
    verifyProducts.getFirstProduct();
    verifyProducts.getSecondProduct();
  });
})

    