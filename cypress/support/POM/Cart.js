
import {cart} from './Consts'

let priceFirstProduct;
let titleFirstProduct;
let priceSecondProduct;
let titleSecondProduct;
// let firstRecommendedProduct;

const filename = '/EnviromentVariables.json';
beforeEach(()=>{
    cy.readFile(filename).then((str)=>{
        cy.log(str).pause();
        const arr = str
       cy.log(arr)
        cy.log(arr[0]).pause();
        cy.log(arr[1]).pause();
        // cy.log(arr[3]).pause();
        // cy.log(arr[4]).pause();
        // cy.log(arr[5]).pause();
        // cy.log(arr[6]).pause();
        // cy.log(arr[7]).pause();
        // cy.log(arr[8]).pause();
        // cy.log(arr[9]).pause();
        // cy.log(arr[10]).pause();
        // cy.log(arr[11]).pause();
        // cy.log(arr[12]).pause();
        // cy.log(arr[13]).pause();
        // cy.log(arr[14]).pause();
        // cy.log(arr[15]).pause();
        // cy.log(arr[16]).pause();
        // cy.log(arr[17]).pause();
        // cy.log(arr[18]).pause();
        // cy.log(arr[19]).pause();
        // cy.log(arr[20]).pause();
        cy.log(arr[21]).pause();
        // cy.log(str[2].priceSecondProduct).pause();
        // priceFirstProduct =  arr[0].priceFirstProduct;
        // titleFirstProduct =  arr[1].titleFirstProduct;
        // priceSecondProduct = arr[2].priceSecondProduct;
        // titleSecondProduct = arr[3].titleSecondProduct;
        
    });
})
afterEach(()=> { 
    priceFirstProduct;
    titleFirstProduct;
    priceSecondProduct;
    titleSecondProduct;
});
class VerifyProducts{
    getFirstProduct(){      
        const verifyFirstProduct = 
            cy.get(cart.h4FirstProductTitle)  
                .should('have.text', titleFirstProduct);
            cy.get(cart.pPriceFirstProduct)
                .should('have.text', priceFirstProduct)
            // cy.get(cart.buttonQuantityFirstProduct)
            //     .should('have.text', '1');      
    return verifyFirstProduct;
    }
    getSecondProduct(){
        const verifySecondProduct = 
        cy.get(cart.h4SecondProductTitle)
            .should('have.text', titleSecondProduct)       
      cy.get(cart.pPriceSecondProduct)
            .should('have.text', priceSecondProduct)
    //   cy.get(cart.buttonQuantitySecondProduct)
    //           .should('have.text', '1');
    return verifySecondProduct;     
    }

}

class DeleteProducts{
    getDeleteFirstProduct(){
        const deleteFirstProduct =   
            cy.get(cart.tdFirstProduct)//First child of the table
                .find(cart.linkDelete)
                    .click();
      return deleteFirstProduct;
    }
}
module.exports = { 
    VerifyProducts,
    DeleteProducts
 };
 //The "new" is not gonna be used here