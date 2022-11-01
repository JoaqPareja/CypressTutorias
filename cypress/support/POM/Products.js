
import {productsPage} from './Consts'

// let h2TxtPriceFirstProduct;
// let pTxtTitleFirstProduct;
// let h2TxtPriceSecondProduct;
// let pTxtTitleSecondProduct; 

 class StoreProductInformation{
        getFirstProduct(){
            const firstProduct =
                cy.get(productsPage
                    .divFirstProduct)
                        .find(productsPage
                            .h2ProductTitle)
                                .then(response => {
                                     Cypress.env(h2TxtPriceFirstProduct = response.text() )
                                    })
                cy.get(productsPage
                    .divFirstProduct)
                        .find(productsPage
                            .pProductTitle)
                                .then(response => {
                                    Cypress.env(pTxtTitleFirstProduct = response.text()) 
                                       });                  
          return firstProduct;
    }
    getSecondProduct(){
        const secondProduct =
            cy.get(productsPage
                .divSecondProduct)
                    .find(productsPage
                        .h2ProductTitle)
                            .then(response => {
                                Cypress.env(h2TxtPriceSecondProduct = response.text()) })
            cy.get(productsPage
                .divFirstProduct)
                    .find(productsPage
                        .pProductTitle)
                            .then(response => {
                                Cypress.env(pTxtTitleSecondProduct = response.text()) 
        });                  
  return secondProduct
    } 
}

 class AddProducts{
  //Will create an empty contructor
        getFirstProduct() {
        const firstProduct =
                cy.get(productsPage // . Hover over first product and click 'Add to cart'
                    .divFirstProductOnHover)
                        .trigger('mouseover', 
                            {force: true})
                                .find(productsPage
                                    .linkProductOnHover)
                                        .click({force: true});
                                            
                cy.get(productsPage  // . Click 'Continue Shopping' button
                    .buttonDialogContinueShopping)
                        .click();                       
                        return firstProduct;
        }
      
        
        getSecondProduct(){
            const secondProduct = 
                    cy.get(productsPage
                        .divSecondProductOnHover)
                            .trigger('mouseover', {force: true})
                                .find(productsPage
                                    .linkProductOnHover)
                                    .wait(2000)
                                        .click( {force: true});
                    cy.get(productsPage
                            .buttonDialogContinueShopping)
                                .click() 
            return secondProduct;                             
        }
 
        getThirdProduct(){
            const thirdProduct =  
                cy.get(productsPage
                    .divThirdProductOnHover)
                        .trigger('mouseover', {force: true})
                            .find(productsPage
                                .linkProductOnHover)
                                .wait(2000)
                                    .click({force: true}); 
            cy.get(productsPage
                .buttonDialogContinueShopping)
                    .click();                     
            return thirdProduct;          
        }

        getLastProduct(){
            const lastProduct =  
                cy.get(productsPage
                    .divLastProductOnHover)
                        .trigger('mouseover', {force: true})
                            .find(productsPage
                                .linkProductOnHover)
                                .wait(2000)
                                    .click({force: true}) 
            cy.get(productsPage
                .buttonDialogContinueShopping)
                    .click();  
        return lastProduct;   
        }
        
}
 
// class productInformation {

// }
module.exports ={
    AddProducts,
    StoreProductInformation
}
// export default AddProducts;
// export {StoreProductInformation}
// module.exports = new AddProducts();
// module.exports = new StoreProductInformation();