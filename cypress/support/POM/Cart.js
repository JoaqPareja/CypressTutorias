
import {cart} from './Consts'

const filename = '/EnviromentVariables.json';
let test = [];
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
        // before(()=>{
            
        //         // const arr = str
        //         test.push({str : []})
        //         cy.writeFile(filename, test)
        //         cy.log(test).pause();
          
        // });
        
        
    
    }
    get firstProduct(){
        return this.verifyFirstProduct()
    }
    verifyFirstProduct(){      
        const verifyFirstProduct = 
        before(()=>{
            cy.readFile(filename).then((str)=>{
                const arr = str
                cy.log(arr).pause();
                this.priceFirstRecommendedProduct  =arr[0].priceFirstRecommendedProduct;

                this.titleFirstRecommendedProduct= arr[1].titleFirstRecommendedProduct
             })
        })
            cy.get(cart.h4FirstProductTitle)  
                .should('have.text', this.titleFirstRecommendedProduct);
            cy.get(cart.pPriceFirstProduct)
                .should('have.text', this.priceFirstRecommendedProduct)
            // cy.get(cart.buttonQuantityFirstProduct)
            //     .should('have.text', '1');  
            afterEach(()=> { 
                this.priceFirstRecommendedProduct;
                this.titleFirstRecommendedProduct;
    
        });    
    return verifyFirstProduct;
    }
}
class VerifyProductsGeneral extends VerifyProducts{
    
        //I have to place the before hook here given that cypres requires 
        // "Move the beforeEach into a suite callback or the global scope."
        constructor(){
            super();
            // before(()=>{
            //     cy.readFile(filename).then( ()=>{
            //         // const arr = str
            //         test.push({str : []})
            //         cy.log(test).pause();
            //         cy.writeFile(filename, test)
            //         cy.log(test).pause();
            //     })
            // });
          
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
            cy.readFile(filename).then((str)=>{
                const arr = str
                this.priceFirstProduct  =arr[0].priceFirstProduct;
                this.titleFirstProduct = arr[1].titleFirstProduct;
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
        cy.readFile(filename).then((str)=>{
                const arr = str
                this.priceSecondProduct = arr[2].priceSecondProduct;
                this.titleSecondProduct = arr[3].titleSecondProduct;
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