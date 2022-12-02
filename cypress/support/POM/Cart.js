
import {cart} from './Consts'

let priceFirstProduct;
let titleFirstProduct;
let priceSecondProduct;
let titleSecondProduct;
let firstRecommendedProduct;

const filename = '/EnviromentVariables.json';
// beforeEach(()=>{
//     cy.readFile(filename).then((str)=>{
//         // cy.log(str).pause();
//         const arr = str
//        cy.log(arr)
//         // cy.log(arr[0]).pause();
//         // cy.log(arr[1]).pause();
  
//         priceFirstProduct  =arr[0].priceFirstProduct;
//         titleFirstProduct =arr[1].titleFirstProduct;
//         priceSecondProduct = arr[2].priceSecondProduct;
//         titleSecondProduct = arr[3].titleSecondProduct;
//     });
// })
// afterEach(()=> { 
//     priceFirstProduct;
//     titleFirstProduct;
//     priceSecondProduct;
//     titleSecondProduct;
// });
class VerifyProducts{
    constructor(priceFirstProduct, titleFirstProduct, priceSecondProduct, titleSecondProduct){
        this.priceFirstProduct = priceFirstProduct;
        this.titleFirstProduct = titleFirstProduct;
        this.priceSecondProduct = priceSecondProduct;
        this.titleSecondProduct = titleSecondProduct;
        //I have to place the before hook here given that cypres requires 
        // "Move the beforeEach into a suite callback or the global scope."
        beforeEach(()=>{
            cy.readFile(filename).then((str)=>{
                const arr = str
                this.priceFirstProduct  =arr[0].priceFirstProduct;
                this.titleFirstProduct = arr[1].titleFirstProduct;
                this.priceSecondProduct = arr[2].priceSecondProduct;
                this.titleSecondProduct = arr[3].titleSecondProduct;
             })
        })
        afterEach(()=> { 
            this.priceFirstProduct;
            this.titleFirstProduct;
            this.priceSecondProduct;
            this.titleSecondProduct;
    });
    }
    get firstProduct(){
        return this.verifyFirstProduct()
    }
    get secondProduct(){
        return this.verifySecondProduct()
    }

    verifyFirstProduct(){      
        const verifyFirstProduct = 
            cy.get(cart.h4FirstProductTitle)  
                .should('have.text', this.titleFirstProduct);
            cy.get(cart.pPriceFirstProduct)
                .should('have.text', this.priceFirstProduct)
            // cy.get(cart.buttonQuantityFirstProduct)
            //     .should('have.text', '1');      
    return verifyFirstProduct;
    }
    verifySecondProduct(){
        // this.onSetUp();
        const verifySecondProduct = 
        cy.get(cart.h4SecondProductTitle)
            .should('have.text',  this.titleSecondProduct)       
      cy.get(cart.pPriceSecondProduct)
            .should('have.text', this.priceSecondProduct)
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