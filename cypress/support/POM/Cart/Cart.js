
import {cart} from '../Consts'

// const filename = '/EnviromentVariables.json';
const filename2 =  '/EnvVariables2.json';

// cy.readFile(filename2).then((testnames)=>{
//     cy.log("test filename2")
//     cy.log(testnames).pause();
//     cy.log(testnames.names).pause();
//     cy.log(testnames.names[0]).pause();
//     cy.log(testnames.names[1]).pause();
//     cy.log(testnames.names[2]).pause();
//     cy.log(testnames.names[3]).pause(); 
// }) 

class VerifyProducts{
constructor(priceFirstProduct, titleFirstProduct, priceSecondProduct, titleSecondProduct
        ,priceFirstRecommendedProduct, titleFirstRecommendedProduct){
        this.priceFirstProduct = priceFirstProduct;
        this.titleFirstProduct = titleFirstProduct;
        this.priceSecondProduct = priceSecondProduct;
        this.titleSecondProduct = titleSecondProduct;
        this.priceFirstRecommendedProduct =priceFirstRecommendedProduct;
        this.titleFirstRecommendedProduct = titleFirstRecommendedProduct;    
    }
}

class VerifyProductsRecommended extends VerifyProducts{
    constructor(){
        super();
    }
    get firstProduct(){
        return this.verifyFirstProduct()
    }
    verifyFirstProduct(){      
        const verifyFirstProduct = 
            cy.readFile(filename2).then((str)=>{
                const arr = str
                this.priceFirstRecommendedProduct = arr.names[0]
                this.titleFirstRecommendedProduct = arr.names[1]
            cy.get(cart.h4FirstProductTitle)  
                .should('have.text', this.titleFirstRecommendedProduct);
            cy.get(cart.pPriceFirstProduct)
                .should('have.text', this.priceFirstRecommendedProduct)
            // cy.get(cart.buttonQuantityFirstProduct)
            //     .should('have.text', '1');  
            
        });    
    return verifyFirstProduct;
    }
}
class VerifyProductsGeneral extends VerifyProducts{
    
        //I have to place the before hook here given that cypres requires 
        // "Removed the Before hook because i needed something to run only once not on EACH test
        constructor(){
            super();
        }
    get firstProduct(){
        return this.verifyFirstProduct()
    }
    get secondProduct(){
        return this.verifySecondProduct()
    }
    // get thirdProduct(){

    // }
    // get lastProduct(){

    // }

    verifyFirstProduct(){     
     
        const verifyFirstProduct =           
            cy.readFile(filename2).then((str)=>{
                const arr = str
                this.priceFirstProduct = arr.names[0]
                this.titleFirstProduct = arr.names[1]
                   cy.get(cart.h4FirstProductTitle)  
                       .should('have.text', this.titleFirstProduct);
                   cy.get(cart.pPriceFirstProduct)
                       .should('have.text', this.priceFirstProduct)
         });    
            // cy.get(cart.buttonQuantityFirstProduct)
            //     .should('have.text', '1');      
                    // const arr = str                
    return verifyFirstProduct;
    }
    verifySecondProduct(){
   
        const verifySecondProduct = 
        cy.readFile(filename2).then((str)=>{
                const arr = str
                this.priceSecondProduct = arr.names[2];
                this.titleSecondProduct = arr.names[3];
                cy.get(cart.h4SecondProductTitle)
                     .should('have.text',  this.titleSecondProduct)       
                cy.get(cart.pPriceSecondProduct)
                    .should('have.text', this.priceSecondProduct)
         });   
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
    VerifyProductsRecommended,
    VerifyProductsGeneral,
    DeleteProducts
 };
 //The "new" is not gonna be used here