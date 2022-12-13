import {productsPage, productsPageRecommendedItem} from '../Consts'


class AddProducts{
    //Will create an empty contructor
  
  get firstProduct(){
      return this.storeFirstProduct();
  }
  get secondProduct(){
      return this.storeSecondProduct();
  }
//   get thirdProduct(){
//       return this.thirdProduct();
//   }
//   get lastProduct(){
//       return this.lastProduct();
//   }
  get firstRecommendedProduct(){
      return this.storeFirstRecommendedItem();
  }
  storeFirstProduct() {
          const storeFirstProduct =
                  cy.get(productsPage.divFirstProductOnHover) // . Hover over first product and click 'Add to cart'
                      .trigger('mouseover', {force: true})
                          .find(productsPage.linkProductOnHover)
                              .click({force: true});                                       
                  cy.get(productsPage.buttonDialogContinueShopping)  // . Click 'Continue Shopping' button                    
                      .click();                       
          return storeFirstProduct;
          };
          storeSecondProduct(){
              const storeSecondProduct = 
                      cy.get(productsPage.divSecondProductOnHover)
                              .trigger('mouseover', {force: true})
                                  .find(productsPage.linkProductOnHover)
                                          .click( {force: true});
                      cy.get(productsPage.buttonDialogContinueShopping)
                          .click(); 
              return storeSecondProduct;                             
          };
          thirdProduct(){
              const thirdProduct =  
                  cy.get(productsPage.divThirdProductOnHover)   
                      .trigger('mouseover', {force: true})
                          .find(productsPage.linkProductOnHover)
                               .click({force: true}); 
              cy.get(productsPage.buttonDialogContinueShopping)
                  .click();                     
              return thirdProduct;          
          };
          lastProduct(){
              const lastProduct =  
                  cy.get(productsPage.divLastProductOnHover)
                      .trigger('mouseover', {force: true})
                          .find(productsPage.linkProductOnHover)
                              .click({force: true}) 
              cy.get(productsPage.buttonDialogContinueShopping)
                  .click();  
                  // verifiyAlertMessage();
          return lastProduct;   
          };
            storeFirstRecommendedItem(){
        const storeFirstRecommendedItem=
            cy.get(productsPageRecommendedItem.divRecommendedSection)
                        .find(productsPageRecommendedItem.linkItemActive).then(($btn)=>{
                           if($btn.hasClass('active')){
                            cy.get(productsPageRecommendedItem.divRecommendedSection)
                                .find(productsPageRecommendedItem.linkItemActive)
                                    .click({force: true})  
                           } 
                           else{
                            cy.get(productsPageRecommendedItem.divRecommendedSection)
                                .find(productsPageRecommendedItem.CarouselNewFirstItem) //CarouselNewFirstItem
                                    .click({force: true})                      
                               }
   
                            })
                                         
            return storeFirstRecommendedItem;
          }
  }

  module.exports ={
    AddProducts,

}