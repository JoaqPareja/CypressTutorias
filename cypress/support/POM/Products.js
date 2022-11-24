
import {productsPage} from './Consts'
let h2TxtPriceFirstProduct;
let pTxtTitleFirstProduct;
let h2TxtPriceSecondProduct;
let pTxtTitleSecondProduct;
let test = []; //Create an empty array to then be able to add new items
const filename = '/EnviromentVariables.json';
 class StoreProductInformation{
    getFirstProduct(){
        const firstProduct =
            cy.get(productsPage.divFirstProduct)
                .find(productsPage.h2ProductTitle)
                    .then(response => {
                        h2TxtPriceFirstProduct = response.text();
                            test.push({'priceFirstProduct': h2TxtPriceFirstProduct})
                                cy.writeFile(filename,  test);       
                    });
            cy.get(productsPage.divFirstProduct)
                    .find(productsPage.pProductTitle)
                        .then(response => {
                            pTxtTitleFirstProduct = response.text();
                                test.push({'titleFirstProduct': pTxtTitleFirstProduct})
                                    cy.writeFile(filename,  test);
                            });                                  
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
            cy.get(productsPage.divSecondProduct)
                .find(productsPage.pProductTitle)
                    .then(response => {
                        pTxtTitleSecondProduct = response.text();
                            test.push({'titleSecondProduct': pTxtTitleSecondProduct})
                                cy.writeFile(filename, test);  
                    });                    
  return secondProduct
    } 
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
        return lastProduct;   
        }
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
    StoreProductInformation
}
// export default AddProducts;
// export {StoreProductInformation}
// module.exports = new AddProducts();
// module.exports = new StoreProductInformation();