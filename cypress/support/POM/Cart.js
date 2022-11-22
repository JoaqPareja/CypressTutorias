
import {cart} from './Consts'

let titleFirstProduct;
let priceFirstProduct;
let titleSecondProduct;
let priceSecondProduct;

// afterEach(function(){
//     h2TxtPriceFirstProduct = "";
//     pTxtTitleFirstProduct = "";
//     h2TxtPriceSecondProduct = "";
//     pTxtTitleSecondProduct = "";
// });

class DeleteProducts{
    getDeleteFirstProduct(){
        const deleteFirstProduct =   
            cy.get(cart.tdFirstProduct)//First child of the table
                .find(cart.linkDelete)
                    .click();
      return deleteFirstProduct;
    }
}

class VerifyProducts{
    getFirstProduct(){
        
        const verifyFirstProduct = 
            cy.get(cart.h4FirstProductTitle).then(response =>{
                let h4FirstProductTitleText =  response.text()
                cy.readFile('/EnviromentVariables.json').then((str)=>{ 
                    titleFirstProduct =  str;
                    cy.log(titleFirstProduct).pause();
                    cy.get(h4FirstProductTitleText).should('have.text', titleFirstProduct).pause();
                })
            })
                
            cy.get(cart.pPriceFirstProduct)
                // .should('have.text', priceFirstProduct)
            cy.get(cart.buttonQuantityFirstProduct)
                .should('have.text', '1');      
    return verifyFirstProduct;
    }
    getSecondProduct(){
        const verifySecondProduct = 
        cy.get(cart.h4SecondProductTitle)
            // .should('have.text', titleSecondProduct)       
      cy.get(cart.pPriceSecondProduct)
            // .should('have.text', priceSecondProduct)
      cy.get(cart.buttonQuantitySecondProduct)
              .should('have.text', '1');
    return verifySecondProduct;     
    }

}
module.exports = { 
    VerifyProducts,
    DeleteProducts
 };
 //The "new" is not gonna be used here