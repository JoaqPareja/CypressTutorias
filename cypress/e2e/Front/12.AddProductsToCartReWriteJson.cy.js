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
          storeProductInformationReWriteJson.firstProduct;    
          storeProductInformationReWriteJson.secondProduct;   
})
    
  it('Add products to the cart', ()=>{
    cy.visit('/')
    addProducts.firstProduct;
    addProducts.secondProduct;
    // addProducts.lastProduct;
    
    });     
  it('Cart products verify first product', ()=>{ // . Verify their prices, quantity and total price
    cy.visit('/view_cart')
    verifyProducts.firstProduct;
    verifyProducts.secondProduct;
  });
})

    