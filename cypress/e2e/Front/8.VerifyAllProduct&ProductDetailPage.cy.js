import {header,productsPage} from '../../support/consts';
    // 1. Launch browser
    describe('Register User', () => {
        it('Visit page',()=>{
              // 2. Navigate to url 'http://automationexercise.com'
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
    cy.get(header
      .buttonProducts).click();
    // 5. Verify user is navigated to ALL PRODUCTS page successfully
    cy.url() 
    // cambiar por 'eq', Cypress.config() https://docs.cypress.io/api/commands/url#Arguments
    //Quiero verificar que tenga solo ese tipo de url.
    //cy.url().should('eq', 'http://localhost:8000/users/1/edit')
    .should('include', '/products')
    .should('not.include', '/products/'); 
    // 6. The products list is visible
    cy.CheckElement(productsPage.listOfItems);
    cy.get(productsPage.h2TitlePageProducts)
    .should('have.text', 'All Products');
    // 7. Click on 'View Product' of first product
    // cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click()
    // 8. User is landed to product detail page
    cy.get(productsPage
        .buttonViewFirstProduct)
          .click();
    // 9. Verify that detail detail is visible: product name, category, price, availability, condition, brand
    cy.CheckElement(productsPage
       .imgViewProduct);
    cy.CheckElement(productsPage
        .h2ProductInformation);
    cy.get(productsPage
      .spanPriceInformation)
        .contains('Rs'); // Checking that the price contain the right coin
    cy.CheckElement(productsPage
      .buttonProductInformationAddToCart);
    cy.get(productsPage.pAvailabilityInStock)
    .should('have.text', 'Availability: In Stock');
  }) 
    })