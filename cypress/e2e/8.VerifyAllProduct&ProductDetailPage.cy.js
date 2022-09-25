


    // 1. Launch browser

import { productsbutton, listOfItems, viewProductImg, titlePageProducts, productInformationAddToCart, productInformationH2, productInformationP} from '../support/Consts'
    // 2. Navigate to url 'http://automationexercise.com'
   
    describe('Register User', () => {
  
        it('Visit page',()=>{
            //Navigate to url 'http://automationexercise.com'
          cy.visit('/')
        })
    
    // 3. Verify that home page is visible successfully
    
    it('Verify that home page is visible successfully', () => {
        // Verify that home page is visible successfully
        cy.CheckElement('body')
        cy.CheckHidden('body')
      })
    
     it('Verify products', ()=>{

    // 4. Click on 'Products' button
    cy.get(productsbutton).click()
   
    // 5. Verify user is navigated to ALL PRODUCTS page successfully
    cy.url()
    .should('include', '/products')
    .should('not.include', '/products/');
    // 6. The products list is visible
    cy.CheckElement(listOfItems)
    cy.CheckHidden(listOfItems)
    cy.get(titlePageProducts).should('have.text', 'All Products')
    
    // 7. Click on 'View Product' of first product
    // cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click()
    // 8. User is landed to product detail page
    cy.get('.features_items:last-child > :nth-child(3) > .product-image-wrapper > .choose > .nav > li > a ').click()
    // 9. Verify that detail detail is visible: product name, category, price, availability, condition, brand
    
    cy.CheckElement(viewProductImg)
    cy.CheckElement(productInformationH2)
    cy.get('.product-information').contains('Rs')
    cy.CheckElement(productInformationAddToCart)
    cy.get('.product-information > :nth-child(6)').should('have.text', 'Availability: In Stock')
    // cy.CheckHidden(viewProductImg)
  }) 
    })