
import {productsPage, productsPageRecommendedItem} from '../Consts'

let test = []; //Create an empty array to then be able to add new items
let arr =[];
let arrTextos;
const filename = '/EnviromentVariables.json';
const filename2 =  '/EnvVariables2.json';
// const filename2 = cypress\fixtures\EnviromentVariables2.json
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

class StoreRecommendedReWriteJson extends storeProduct{
    constructor() {
        super();
    }
    get firstRecommendedProduct(){
        return this.storeFirstRecommendedItem();
    }
    storeFirstRecommendedItem(){
        const firstRecommended =
            // cy.scrollTo('bottom');
        cy.get(productsPageRecommendedItem.divRecommendedSection)
            .find(productsPageRecommendedItem.linkItemActive)   
             .then(($btn)=>{
                if($btn.hasClass('active')){
                    cy.get(productsPageRecommendedItem.h2Recommendedtitle).then(response => {
                        this.priceFirstRecommendedProduct = response.text();
                            test.push({'priceFirstRecommendedProduct': this.priceFirstRecommendedProduct})
                                cy.writeFile(filename,  test); 
                                });
            cy.get(productsPageRecommendedItem.pTitleFirst)
                    .then(response => {
                        this.pTxtFirstRecommendedProduct = response.text();
                            test.push({'titleFirstRecommendedProduct': this.pTxtFirstRecommendedProduct})
                                cy.writeFile(filename, test);  
                    
                            })       
                         }
                    else{
                         //CarouselNewFirstItem
                        cy.get(productsPageRecommendedItem.h2CarouselNewFirstItem).then(response => {
                                this.priceFirstRecommendedProduct = response.text();
                                    test.push({'priceFirstRecommendedProduct': this.priceFirstRecommendedProduct})
                                        cy.writeFile(filename,  test); 
                                        });
                    cy.get(productsPageRecommendedItem.pTitleCarouselNewFirstItem)
                            .then(response => {
                                this.pTxtFirstRecommendedProduct = response.text();
                                    test.push({'titleFirstRecommendedProduct': this.pTxtFirstRecommendedProduct})
                                        cy.writeFile(filename, test);  
                            
                    })             
                    }   
                }); 
            ;          
        return firstRecommended
      }
}
class StoreProductReWriteJson extends storeProduct{
    constructor() {
        super();
    }
    get firstProduct(){
        return this.storeFirstProduct();
    }
    get secondProduct(){
        return this.storeSecondProduct();
    }
    get pushNamesJson(){
        return this.pushNamesJson();
    }
    
    storeFirstProduct(){
        const firstProduct =
            cy.get(productsPage.divFirstProduct)
                .find(productsPage.h2ProductPrice)
                    .then(response => {
                        this.h2TxtPriceFirstProduct = response.text();
                            test.push(this.h2TxtPriceFirstProduct)
                            cy.writeFile(filename,  test)  //This will re write the existing json
                    });
            cy.get(productsPage.divFirstProduct)
                    .find(productsPage.pProductTitle)
                        .then(response => {
                            this.pTxtTitleFirstProduct = response.text();
                            test.push(this.pTxtTitleFirstProduct)
                                     cy.writeFile(filename,  test);})       
        return firstProduct;
        }
       
        
    storeSecondProduct(){
        const secondProduct =
            cy.get(productsPage.divSecondProduct)
                .find(productsPage.h2ProductPrice)
                    .then(response => {
                        this.h2TxtPriceSecondProduct = response.text();     
                                    test.push(this.h2TxtPriceSecondProduct) 
                                     cy.writeFile(filename, test);          
                });  
            cy.get(productsPage.divSecondProduct)
                .find(productsPage.pProductTitle)
                    .then(response => {
                        this.pTxtTitleSecondProduct = response.text();
                            test.push(this.pTxtTitleSecondProduct)
                                cy.writeFile(filename, test);  
                    });
        
                    // cy.readFile(filename).then((test)=>{
                    //     cy.log(test).pause();
                    //    let testArr = test;
                    //     cy.wrap(testArr).pause();
                    //     cy.wrap(testArr).each(($el)=>{           
                    //         for (let value in $el) {                               
                    //             arrTextos =  (`${$el[value]}`);
                    //             arr.push(arrTextos);
                    //             cy.writeFile(filename2, arr)
                    //             }         
                    //     })
                    // })
                    // cy.readFile(filename2).then((testnames)=>{
                    //     let testnamesArr = testnames
                    //     testnamesArr = {"names": testnamesArr}
                    //     cy.writeFile(filename2, testnamesArr)
                    // })
                                   
  return secondProduct
                }
    pushNamesJson(){
        const pushNamesJson =
                cy.readFile(filename).then((testnames)=>{
                    let testnamesArr = testnames
                    testnamesArr = {"names": testnamesArr}
                    cy.writeFile(filename2, testnamesArr)
                })   
            return  pushNamesJson;          
            }

}//End of class StoreProductInformationReWriteJson

 class StoreProductPushJson extends storeProduct{
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
    get firstRecommendedProduct(){
        return this.storeFirstRecommendedItem();
    }
    get pushNamesJson(){
        return this.pushNamesJson();
    }

    storeFirstProduct(){
        const firstProduct =
            cy.get(productsPage.divFirstProduct)
                .find(productsPage.h2ProductPrice)
                    .then(response => {
                        this.h2TxtPriceFirstProduct = response.text();
                            test.push(this.h2TxtPriceFirstProduct)
                            cy.readFile(filename).then((test) =>{// This will first the json and then it will write new objects to it, pushing the new ones to one that already exist
                                cy.writeFile(filename,  test); })      
                }); 
            cy.get(productsPage.divFirstProduct)
                    .find(productsPage.pProductTitle)
                        .then(response => {
                            this.pTxtTitleFirstProduct = response.text();
                                cy.readFile(filename).then((test)=>{
                                    test.push(this.pTxtTitleFirstProduct)
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
                                    test.push(this.h2TxtPriceSecondProduct) 
                                     cy.writeFile(filename, test);});                         
                });  
            cy.get(productsPage.divSecondProduct)
                .find(productsPage.pProductTitle)
                    .then(response => {
                        this.pTxtTitleSecondProduct = response.text();
                        cy.readFile(filename).then((test)=>{
                            test.push(this.pTxtTitleSecondProduct)
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
                            test.push(this.priceFirstRecommendedProduct)
                            cy.writeFile(filename, test);  })
                     });      
    return lastProduct;   
            }
            storeFirstRecommendedItem(){
                const firstRecommended =
                    cy.scrollTo('bottom');
                    cy.get(productsPageRecommendedItem.divRecommendedSection)
                        .invoke('show')
                            .find(productsPage.h2ProductPrice)
                                .then(response => {
                                this.priceFirstRecommendedProduct = response.text();
                                    test.push(this.priceFirstRecommendedProduct)
                                        cy.writeFile(filename,  test); 
                                        });
                    cy.get(productsPageRecommendedItem.divRecommendedSection)
                        .find(productsPage.h2ProductPrice)
                            .then(response => {
                                this.pTxtFirstRecommendedProduct = response.text();
                                    test.push(this.pTxtFirstRecommendedProduct)
                                        cy.writeFile(filename, test);  
                        });           
                return firstRecommended
    }
    pushNamesJson(){
        const pushNamesJson =
                cy.readFile(filename).then((testnames)=>{
                    let testnamesArr = testnames
                    testnamesArr = {"names": testnamesArr}
                    cy.writeFile(filename2, testnamesArr)
                })   
            return  pushNamesJson;          
            }
}
 

module.exports ={
    StoreProductReWriteJson,
    StoreRecommendedReWriteJson,
    StoreProductPushJson
}
