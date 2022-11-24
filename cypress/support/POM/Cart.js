
import {cart} from './Consts'

let priceFirstProduct;
let titleFirstProduct;
let priceSecondProduct;
let titleSecondProduct;

const filename = '/EnviromentVariables.json';
beforeEach(()=>{
        cy.readFile(filename).then((str)=>{
            cy.log(str);
            const arr = str
            cy.log(arr[0].priceFirstProduct);
            cy.log(arr[1].titleFirstProduct);
            cy.log(arr[2].priceSecondProduct);
            cy.log(arr[3].titleSecondProduct);
            priceFirstProduct =  arr[0].priceFirstProduct;
            titleFirstProduct =  arr[1].titleFirstProduct;
            priceSecondProduct = arr[2].priceSecondProduct;
            titleSecondProduct = arr[3].titleSecondProduct;
            // cy.log(titleSecondProduct).pause();
        });
})

afterEach(function(){
    priceFirstProduct;
    titleFirstProduct;
    priceSecondProduct;
    titleSecondProduct;
});

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
            cy.get(cart.h4FirstProductTitle)  
                .should('have.text', titleFirstProduct).pause();
            cy.get(cart.pPriceFirstProduct)
                .should('have.text', priceFirstProduct)
            cy.get(cart.buttonQuantityFirstProduct)
                .should('have.text', '1');      
    return verifyFirstProduct;
    }
    getSecondProduct(){
        const verifySecondProduct = 
        cy.get(cart.h4SecondProductTitle)
            .should('have.text', titleSecondProduct)       
      cy.get(cart.pPriceSecondProduct)
            .should('have.text', priceSecondProduct)
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