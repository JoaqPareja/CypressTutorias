import{header} from '../../support/POM/Consts'

import {addProducts,storeProductReWriteJson, verifyProductsGeneral} from '../../support/POM'
//Falta generar array vacio de enteros y luego que por cada elemento 
// anadido al carrito este se incremente y luego comprararlo
const filename = '/EnviromentVariables.json';
let test = [];

describe('Add products and verified each on the Cart', () => {  

  beforeEach('Stored loggin', ()=>{     
    cy.login();  
  })
  it('Add products to the cart', ()=>{
    cy.visit('/')
    addProducts.firstProduct;
    addProducts.secondProduct;
    // addProducts.lastProduct;
    });   
  it('Store product information',()=>{
      cy.visit('/')
        // test.push({str : []}) //Make the array empty
        cy.writeFile(filename, test)
        cy.get(header.linkProducts) // .Click 'Products' button
            .click();
            storeProductReWriteJson.firstProduct;    
            storeProductReWriteJson.secondProduct;   
            storeProductReWriteJson.pushNamesJson;
  })
  it('Cart products verify first product', ()=>{ // . Verify their prices, quantity and total price
    cy.visit('/view_cart')
    verifyProductsGeneral.firstProduct;
    verifyProductsGeneral.secondProduct;
  });
})

    