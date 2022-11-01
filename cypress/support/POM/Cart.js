
import {cart} from './Consts'

class DeleteProducts{
    getDeleteFirstProduct(){
        const deleteFirstProduct =   
            cy.get(cart
                .tdFirstProduct)//First child of the table
                .find(cart
                    .linkDelete)
                        .click();
      return deleteFirstProduct;
    }
   
}
class VerifyProducts{
    getFirstProduct(){
        const verifyFirstProduct = 
            cy.get(cart
                 .h4FirstProductTitle) 
                    .then(response =>{
                         expect(response.text())
                            .to.eq(Cypress.env(pTxtTitleFirstProduct))
              });         
            cy.get(cart
                .pPriceFirstProduct)
                    .then(response =>{
                         expect(response.text())
                            .to.eq(Cypress.env(h2TxtPriceFirstProduct))
                    });
            cy.get(cart
                    .buttonQuantityFirstProduct)
                        .should('have.text', '1');
          
    return verifyFirstProduct;
    }
    getSecondProduct(){
        const verifySecondProduct = 
        cy.get(cart
            .h4SecondProductTitle)
              .then(response =>{
                expect(response.text())
                      .to.eq(pTxtTitleSecondProduct)
              });         
      cy.get(cart
            .pPriceSecondProduct)
              .then(response =>{
                expect(response.text())
                      .to.eq(h2TxtPriceSecondProduct)
              });
      cy.get(cart
            .buttonQuantitySecondProduct)
              .should('have.text', '1');
    return verifySecondProduct;     
    }
}
module.exports = { 
    VerifyProducts,
    DeleteProducts
 };
 //The "new" is not gonna be used here