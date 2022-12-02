
import {productsPage, productsPageRecommendedItem} from './Consts'

let test = []; //Create an empty array to then be able to add new items
const filename = '/EnviromentVariables.json';
// const filename2 = '/EnviromentVariables.json';

class storeProduct{
    constructor(h2TxtPriceFirstProduct, pTxtTitleFirstProduct, h2TxtPriceSecondProduct, 
        pTxtTitleSecondProduct, priceFirstRecommendedProduct, pTxtFirstRecommendedProduct){
        this.h2TxtPriceFirstProduct = h2TxtPriceFirstProduct;
        this.pTxtTitleFirstProduct = pTxtTitleFirstProduct;
        this.h2TxtPriceSecondProduct = h2TxtPriceSecondProduct;
        this.pTxtTitleSecondProduct = pTxtTitleSecondProduct;
        this.priceFirstRecommendedProduct = priceFirstRecommendedProduct; 
        this.pTxtFirstRecommendedProduct = pTxtFirstRecommendedProduct;
    }
}
class StoreProductInformationReWriteJson extends storeProduct{
    constructor() {
        super();
    }
    get firstProduct(){
        return this.storeFirstProduct();
    }
    get secondProduct(){
        return this.storeSecondProduct();
    }
    get firstRecommendedProduct(){
        return this.storeFirstRecommendedItem();
    }
    storeFirstProduct(){
        const firstProduct =
            cy.get(productsPage.divFirstProduct)
                .find(productsPage.h2ProductPrice)
                    .then(response => {
                        this.h2TxtPriceFirstProduct = response.text();
                            test.push({'priceFirstProduct': this.h2TxtPriceFirstProduct})
                            cy.writeFile(filename,  test)  //This will re write the existing json
                    });
            cy.get(productsPage.divFirstProduct)
                    .find(productsPage.pProductTitle)
                        .then(response => {
                            this.pTxtTitleFirstProduct = response.text();
                                    test.push({'titleFirstProduct': this.pTxtTitleFirstProduct})
                                     cy.writeFile(filename,  test);})           
        return firstProduct;
        }
    storeSecondProduct(){
        const secondProduct =
            cy.get(productsPage.divSecondProduct)
                .find(productsPage.h2ProductPrice)
                    .then(response => {
                        this.h2TxtPriceSecondProduct = response.text();     
                                    test.push({'priceSecondProduct': this.h2TxtPriceSecondProduct}) 
                                     cy.writeFile(filename, test);          
                });  
            cy.get(productsPage.divSecondProduct)
                .find(productsPage.pProductTitle)
                    .then(response => {
                        this.pTxtTitleSecondProduct = response.text();
                            test.push({'titleSecondProduct': this.pTxtTitleSecondProduct})
                                cy.writeFile(filename, test);  
                    });                    
  return secondProduct
                }
storeFirstRecommendedItem(){
    const firstRecommended =
        cy.scrollTo('bottom');
        cy.get(productsPageRecommendedItem.divRecommendedSection)
            .invoke('show')
             .find(productsPageRecommendedItem.linkItemActive).should('be.visible')
                .then(response => {
                    priceFirstRecommendedProduct = response.text();
                        test.push({'firstRecommendedProduct': priceFirstRecommendedProduct})
                            cy.writeFile(filename,  test); 
                            });
    return firstRecommended
  }
}//End of class StoreProductInformationReWriteJson

 class StoreProductInformationPushJson extends storeProduct{
    constructor() {
        super();
    }
    get firstProduct(){
        return this.storeFirstProduct();
    }
    get secondProduct(){
        return this.storeSecondProduct();
    }
    // get lastProduct(){
    //     return this.lastProduct();
    // }
    // get firstRecommendedProduct(){
    //     return this.storeFirstRecommendedItem();
    // }

    storeFirstProduct(){
        const firstProduct =
            cy.get(productsPage.divFirstProduct)
                .find(productsPage.h2ProductPrice)
                    .then(response => {
                        this.h2TxtPriceFirstProduct = response.text();
                            test.push({'priceFirstProduct': this.h2TxtPriceFirstProduct})
                            cy.readFile(filename).then((test) =>{// This will first the json and then it will write new objects to it, pushing the new ones to one that already exist
                                cy.writeFile(filename,  test); })      
                }); 
            cy.get(productsPage.divFirstProduct)
                    .find(productsPage.pProductTitle)
                        .then(response => {
                            this.pTxtTitleFirstProduct = response.text();
                                cy.readFile(filename).then((test)=>{
                                    test.push({'titleFirstProduct': this.pTxtTitleFirstProduct})
                                    cy.writeFile(filename,  test);})
                                });                                   
        return firstProduct;
        }
    storeSecondProduct(){
        const secondProduct =
            cy.get(productsPage.divSecondProduct)
                .find(productsPage.h2ProductPrice)
                    .then(response => {
                        this.h2TxtPriceSecondProduct = response.text();     
                                cy.readFile(filename).then((test)=>{  
                                    test.push({'priceSecondProduct': this.h2TxtPriceSecondProduct}) 
                                     cy.writeFile(filename, test);});                         
                });  
            cy.get(productsPage.divSecondProduct)
                .find(productsPage.pProductTitle)
                    .then(response => {
                        this.pTxtTitleSecondProduct = response.text();
                        cy.readFile(filename).then((test)=>{
                            test.push({'titleSecondProduct': this.pTxtTitleSecondProduct})
                                cy.writeFile(filename, test);  })
                    }); 
            return secondProduct;
                }; 
        storeLastProduct(){
            const lastProduct =  
            cy.get(productsPage.divLastProduct)
              .find(productsPage.pProductTitle)
                    .then(response => {
                        this.priceFirstRecommendedProduct = response.text();
                        cy.readFile(filename).then((test)=>{
                            test.push({ 'priceFirstRecommendedProduct': priceFirstRecommendedProduct})
                            cy.writeFile(filename, test);  })
                     });      
    return lastProduct;   
            }
    storeFirstRecommendedItem(){
    const firstRecommended =
    cy.scrollTo('bottom');
    cy.get(productsPageRecommendedItem.divCarousel)
        .find(productsPageRecommendedItem.linkItemActive)
                .then(response => {
                    this.priceFirstRecommendedProduct = response.text();
                    cy.readFile(filename).then((test)=>{
                        test.push({'firstRecommendedProduct': this.priceFirstRecommendedProduct})
                            cy.writeFile(filename,  test); });
                          });
    return firstRecommended
    }
}
 

module.exports ={
    StoreProductInformationReWriteJson,
    StoreProductInformationPushJson
}
