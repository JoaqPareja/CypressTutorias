
import {productsPage, productsPageRecommendedItem} from './Consts'
let h2TxtPriceFirstProduct;
let pTxtTitleFirstProduct;
let h2TxtPriceSecondProduct;
let pTxtTitleSecondProduct;
let priceFirstRecommendedProduct;
let test = []; //Create an empty array to then be able to add new items
const filename = '/EnviromentVariables.json';
// const filename2 = '/EnviromentVariables.json';
class StoreProductInformationReWriteJson{
    getFirstProduct(){
        const firstProduct =
            cy.get(productsPage.divFirstProduct)
                .find(productsPage.h2ProductTitle)
                .then(response => {
                    h2TxtPriceFirstProduct = response.text();
                        test.push({'priceFirstProduct': h2TxtPriceFirstProduct})
                        cy.writeFile(filename,  test)  //This will re write the existing json
                });
                cy.readFile(filename).then((str)=>{
                    // cy.log(str).pause();
                    // cy.log(str[0].priceFirstProduct).pause();
                }) 
            cy.get(productsPage.divFirstProduct)
                    .find(productsPage.pProductTitle)
                        .then(response => {
                            pTxtTitleFirstProduct = response.text();
                               
                                    test.push({'titleFirstProduct': pTxtTitleFirstProduct})
                                     cy.writeFile(filename,  test);})
                                    //   cy.log(test).pause();
                            cy.readFile(filename).then((str)=>{
                                // cy.log(str).pause();
                                // cy.log(str[1].titleFirstProduct).pause();
                            })   
                                  
        return firstProduct;
        }
    getSecondProduct(){
        const secondProduct =
            cy.get(productsPage.divSecondProduct)
                .find(productsPage.h2ProductTitle)
                    .then(response => {
                        h2TxtPriceSecondProduct = response.text();     
                                    test.push({'priceSecondProduct': h2TxtPriceSecondProduct}) 
                                     cy.writeFile(filename, test);          
                });  
                cy.readFile(filename).then((str)=>{
                    // cy.log(str).pause();
                    // cy.log(str[2]).pause();
                    // cy.log(str[2].priceSecondProduct).pause();
                })
            cy.get(productsPage.divSecondProduct)
                .find(productsPage.pProductTitle)
                    .then(response => {
                        pTxtTitleSecondProduct = response.text();
                            test.push({'titleSecondProduct': pTxtTitleSecondProduct})
                                cy.writeFile(filename, test);  
                    });                    
  return secondProduct
                }
    getFirstRecommendedItem(){
    const firstRecommended =
    cy.scrollTo('bottom');
    cy.get('div.carousel-inner:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(4)')
        .invoke('show')
            .should('be.visible')
                .then(response => {
                    priceFirstRecommendedProduct = response.text();
                        test.push({'firstRecommendedProduct': priceFirstRecommendedProduct})
                            cy.writeFile(filename,  test); 
                            });
                          
                            cy.readFile(filename).then((str)=>{
                                cy.log(str).pause();
                                // cy.log(str.priceFirstRecommendedProduct).pause();
                                // cy.log(str[3]).pause();
                            });

    return firstRecommended
    
  }
}
 class StoreProductInformationPushJson{
    getFirstProduct(){
        const firstProduct =
            cy.get(productsPage.divFirstProduct)
                .find(productsPage.h2ProductTitle)
                .then(response => {
                    h2TxtPriceFirstProduct = response.text();
                        test.push({'priceFirstProduct': h2TxtPriceFirstProduct})
                        cy.readFile(filename).then((test) =>{// This will first the json and then it will write new objects to it, pushing the new ones to one that already exist
                            cy.writeFile(filename,  test); })      
                });
                cy.readFile(filename).then((str)=>{
                    cy.log(str).pause();
                    cy.log(str[0].priceFirstProduct).pause();
                }) 
            cy.get(productsPage.divFirstProduct)
                    .find(productsPage.pProductTitle)
                        .then(response => {
                            pTxtTitleFirstProduct = response.text();
                                cy.readFile(filename).then((test)=>{
                                    test.push({'titleFirstProduct': pTxtTitleFirstProduct})
                                     cy.writeFile(filename,  test);})
                                    //   cy.log(test).pause();
                                });         
                                   
                           
                            cy.readFile(filename).then((str)=>{
                                cy.log(str).pause();
                                cy.log(str[1].titleFirstProduct).pause();
                            })   
                            // cy.readFile(filename).then((str)=>{
                            //     cy.log(str).pause();
                            //     cy.log(str[1].titleFirstProduct).pause();
                            // })                              
        return firstProduct;
        }
    getSecondProduct(){
        const secondProduct =
            cy.get(productsPage.divSecondProduct)
                .find(productsPage.h2ProductTitle)
                    .then(response => {
                        h2TxtPriceSecondProduct = response.text();     
                                cy.readFile(filename).then((test)=>{  
                                    test.push({'priceSecondProduct': h2TxtPriceSecondProduct}) 
                                     cy.writeFile(filename, test);}); 
                                    //   cy.log(test).pause();  
                                    
                });  
                cy.readFile(filename).then((str)=>{
                    cy.log(str).pause();
                    cy.log(str[2]).pause();
                    cy.log(str[2].priceSecondProduct).pause();
                })
            cy.get(productsPage.divSecondProduct)
                .find(productsPage.pProductTitle)
                    .then(response => {
                        pTxtTitleSecondProduct = response.text();
                        cy.readFile(filename).then((test)=>{
                            test.push({'titleSecondProduct': pTxtTitleSecondProduct})
                                cy.writeFile(filename, test);  })
                    });                    
  return secondProduct
                }
    getFirstRecommendedItem(){
    const firstRecommended =
    cy.scrollTo('bottom');
    cy.get(productsPageRecommendedItem.divCarousel)
        .find(productsPageRecommendedItem.linkItemActive)
                .then(response => {
                    priceFirstRecommendedProduct = response.text();
                    cy.readFile(filename).then((test)=>{
                        test.push({'firstRecommendedProduct': priceFirstRecommendedProduct})
                            cy.writeFile(filename,  test); });
                           
                            });
                          
                            cy.readFile(filename).then((str)=>{
                                cy.log(str).pause();
                                cy.log(str.priceFirstRecommendedProduct).pause();
                                cy.log(str[20]).pause();
                                cy.log(str[21]).pause();
                                cy.log(str[22]).pause();
                                cy.log(str[23]).pause();});

    return firstRecommended
    
  }
}
class StoreProducRecommendedtInformation{
     // getFirstRecommendedItem(){
//     const firstRecommended =
//     cy.get(productsPageRecommendedItem.divCarousel)
//             .find(productsPageRecommendedItem.linkItemActive)
//                 .then(response => {
//                     let priceFirstRecommendedProduct;
//                     priceFirstRecommendedProduct = response.text();
//                         test.push({'firstRecommendedProduct': priceFirstRecommendedProduct})
//                             cy.writeFile(filename,  test);       })

//     return firstRecommended
    
//   }
}
 class AddProducts{
  //Will create an empty contructor
        getFirstProduct() {
        const firstProduct =
                cy.get(productsPage.divFirstProductOnHover) // . Hover over first product and click 'Add to cart'
                    .trigger('mouseover', {force: true})
                        .find(productsPage.linkProductOnHover)
                            .click({force: true});                                       
                cy.get(productsPage.buttonDialogContinueShopping)  // . Click 'Continue Shopping' button                    
                    .click();                       
        return firstProduct;
        }
        getSecondProduct(){
            const secondProduct = 
                    cy.get(productsPage.divSecondProductOnHover)
                            .trigger('mouseover', {force: true})
                                .find(productsPage.linkProductOnHover)
                                        .click( {force: true});
                    cy.get(productsPage.buttonDialogContinueShopping)
                        .click(); 
            return secondProduct;                             
        }
        getThirdProduct(){
            const thirdProduct =  
                cy.get(productsPage.divThirdProductOnHover)   
                    .trigger('mouseover', {force: true})
                        .find(productsPage.linkProductOnHover)
                             .click({force: true}); 
            cy.get(productsPage.buttonDialogContinueShopping)
                .click();                     
            return thirdProduct;          
        }
        getLastProduct(){
            const lastProduct =  
                cy.get(productsPage.divLastProductOnHover)
                    .trigger('mouseover', {force: true})
                        .find(productsPage.linkProductOnHover)
                            .click({force: true}) 
            cy.get(productsPage.buttonDialogContinueShopping)
                .click();  
                // verifiyAlertMessage();
        return lastProduct;   
        }
        // verifiyAlertMessage(){
        //     const alertMessage =
        //     cy.get(productsPage.pAddedText)
        //         .should('have.text', 'Added!')
        //     cy.get(productsPage.pProducAddedToCart)
        //         .should('have.text', 'Your product has been added to cart.')
        //     cy.get(productsPage.pLinkViewCart)
        //         .should('have.text','View Cart')
        //     cy.get(productsPage.buttonDialogContinueShopping)
        //     cy.get(header.linkCart)
        //         .click({force: true});     
        //     return alertMessage;
        // }
}
class AddRecommendedProducts {
    
    //if the class active then do the following method else do the second one
    //First do the first methods
    getThirstProductNotActive(){

    }
    getThirstProductActive(){
        
    }
}

 
module.exports ={
    AddProducts,
    StoreProductInformationReWriteJson,
    StoreProductInformationPushJson
}
// export default AddProducts;
// export {StoreProductInformation}
// module.exports = new AddProducts();
// module.exports = new StoreProductInformation();


// getFirstRecommendedItem(){
//     const firstRecommended =
//     cy.get(productsPageRecommendedItem.divCarousel)
//             .find(productsPageRecommendedItem.linkItemActive)
//                 .then(response => {
//                     let priceFirstRecommendedProduct;
//                     priceFirstRecommendedProduct = response.text();
//                         test.push({'firstRecommendedProduct': priceFirstRecommendedProduct})
//                             cy.writeFile(filename,  test);       })

//     return firstRecommended
    
//   }