import {productsPage} from '../../support/POM/Consts';
import {verifyProductsExist} from '../../support/POM'
    describe('Register User', () => {
     it('Verify products exist in product Page', ()=>{
      cy.visit('/') //Vist page
      verifyProductsExist.clickProductsLink();
      cy.url()     // . Verify user is navigated to ALL PRODUCTS page successfully
            .should('include', '/products')
                .should('not.include', '/products/');  
        cy.CheckElement(productsPage.listOfItems);// . The products list is visible
        verifyProductsExist.checkProductsPageTitle('All Products');
        verifyProductsExist.clickViewFirstProduct()
        cy.CheckElement(productsPage.imgViewProduct);  // . User is landed to product detail page
        cy.CheckElement(productsPage.h2ProductInformation);  // . Verify that detail detail is visible: product name, category, price, availability, condition, brand
        verifyProductsExist.checkPriceInformartion('Rs') // Checking that the price contain the right coin    
        cy.CheckElement(productsPage.buttonProductInformationAddToCart);
        verifyProductsExist.checkStockAvaivialbiliyP('Availability: In Stock')
  }) 
    })