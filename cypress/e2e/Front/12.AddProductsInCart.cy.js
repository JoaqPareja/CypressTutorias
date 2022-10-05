import{header, productsPage} from '../../support/consts'
// 12: Add Products in Cart
//     1. Launch browser
//     2. Navigate to url 'http://automationexercise.com'
//     3. Verify that home page is visible successfully
describe('Register User', () => {
  
    it('Visit page',()=>{
      cy.visit('/')
      //I retrieve the baseURL from the cypress.config.js file and avoid to re call the url for each test
    })
    it('Verify that home page is visible successfully', () => {
        // Verify that home page is visible successfully
        // 3. Verify that home page is visible successfully
        cy.CheckElement('body')
        cy.CheckHidden('body')
      }) 
//     4. Click 'Products' button
      it('Add product',()=>{
    cy.get(header
      .buttonProducts).click();
      cy.get
      (productsPage.divFirstProduct).realHover()
       .wait(2500)
      cy.get(productsPage.divFirstProductOnHover)
      .should('be.visible')
      .find('div > a')
      // Timed out retrying after 4050ms: cy.click()
      //  could not be issued because this element is currently animating:
      // .click()
      .click({waitForAnimations: false}) //disables waiting on animations
      //  .click()
      //    5. Hover over first product and click 'Add to cart'
      //    6. Click 'Continue Shopping' button
      cy.get(productsPage
        .pAddedText).should('have.text', 'Added!')
      cy.get(productsPage
        .pProducAddedToCart).should('have.text', 'Your product has been added to cart.')
      cy.get(productsPage
        .pLinkViewCart).should('have.text','View Cart')
      cy.get(productsPage
        .buttonContinueShopping).click()
//     7. Hover over second product and click 'Add to cart'
//     8. Click 'View Cart' button
cy.get
(productsPage.divSecondProduct).realHover()
 .wait(2500)
cy.get(productsPage.divSecondProductOnHover)
.should('be.visible')
.find('div > a')
.click({waitForAnimations: false}) //disables waiting on animations
    
    cy.get(productsPage
      .pAddedText).should('have.text', 'Added!')
    cy.get(productsPage
      .pProducAddedToCart).should('have.text', 'Your product has been added to cart.')
    cy.get(productsPage
      .pLinkViewCart).should('have.text','View Cart')
    cy.get(productsPage
      .buttonContinueShopping).click();
      cy.get(header
        .buttonCart).click();

//     9. Verify both products are added to Cart
// cy.get('#cart_items > :nth-child(1)')
 //Aca generar un objeto que me traiga los productos previamente agregados para 
//  comparar que los productos en el carrito son los mismos elegidos previamente y tambien lograr comparar cantidad y precios

// Falta agregar el codigo que me genere un json con los datos agregados para luego traerlos nuevamente y generar la comparacion

      //     10. Verify their prices, quantity and total price


  })   // cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo')
    // cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > img')
//  




    })