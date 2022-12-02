import{header} from '../../support/POM/Consts'

import {addProducts,storeProductInformationReWriteJson, verifyProductsGeneral} from '../../support/POM'
//Falta generar array vacio de enteros y luego que por cada elemento 
// anadido al carrito este se incremente y luego comprararlo
const filename = '/EnviromentVariables.json';
let test = [];

describe('Add products and verified each on the Cart', () => {  

  
  beforeEach('Stored loggin', ()=>{     
    cy.login();  
  })
  it('Store product information',()=>{
    cy.visit('/')
      // test.push({str : []}) //Make the array empty
      cy.writeFile(filename, test)
      cy.readFile(filename).then((str)=>{cy.log(str).pause();})
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
    verifyProductsGeneral.firstProduct;
    verifyProductsGeneral.secondProduct;
  });
})

    