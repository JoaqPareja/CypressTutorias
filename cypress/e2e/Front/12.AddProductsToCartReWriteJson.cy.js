import{header} from '../../support/POM/Consts'

import {addProducts,storeProductInformationReWriteJson, verifyProducts} from '../../support/POM'
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
          storeProductInformationReWriteJson.getFirstProduct();    
          storeProductInformationReWriteJson.getSecondProduct();   
          storeProductInformationReWriteJson.getFirstRecommendedItem();   
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

    