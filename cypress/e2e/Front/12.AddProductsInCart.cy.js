import{header, productsPage} from '../../support/consts'

//Falta generar array vacio de enteros y luego que por cada elemento 
// anadido al carrito este se incremente y luego comprararlo
describe('Register User', () => {   
  let h2TxtPriceFirstProduct;
  let pTxtTitleFirstProduct;
  let h2TxtPriceSecondProduct;
  let pTxtTitleSecondProduct;

    it('Visit page',()=>{
      cy.visit('/')
    })
//     4. Click 'Products' button
    it('Add products',()=>{
      cy.get(header
             .buttonProducts)
              .click();
      //Debo de obtener Price & name of the product
      cy.get(productsPage
              .divFirstProduct)
                .find(productsPage
                  .h2ProductTitle)
                    .then(response => {
                      h2TxtPriceFirstProduct = response.text() 
            });   
      cy.get(productsPage
              .divFirstProduct)
                .find(productsPage
                      .pProductTitle)
                       .then(response => {
                         pTxtTitleFirstProduct = response.text() 
          });
      cy.get(productsPage
              .divFirstProduct)
                  .realHover()
                    .wait(2500)
      cy.get(productsPage
              .divFirstProductOnHover)
                .should('be.visible')
                  .find(productsPage
                    .linkProductOnHover)
                      .click({waitForAnimations: false}) //disables waiting on animations
      //    5. Hover over first product and click 'Add to cart'
      //    6. Click 'Continue Shopping' button
      cy.get(productsPage
              .pAddedText)
                .should('have.text', 'Added!')
      cy.get(productsPage
              .pProducAddedToCart)
               .should('have.text', 'Your product has been added to cart.')
      cy.get(productsPage
             .pLinkViewCart)
              .should('have.text','View Cart')
      cy.get(productsPage
             .buttonContinueShopping)
              .click()
//     7. Hover over second product and click 'Add to cart'
//     8. Click 'View Cart' button
      cy.get(productsPage
             .divSecondProduct)
              .find(productsPage
                    .h2ProductTitle)
                      .then(response => {
                         h2TxtPriceSecondProduct = response.text() 
      }); 
      cy.get(productsPage
              .divSecondProduct)
               .find(productsPage.pProductTitle)
                .then(response => {
                  pTxtTitleSecondProduct = response.text() 
      });
      cy.get(productsPage
              .divSecondProduct)
                .realHover()
                  .wait(2500)
      cy.get(productsPage
              .divSecondProductOnHover)
                .should('be.visible')
                  .find(productsPage
                        .linkProductOnHover)
                          .click({waitForAnimations: false}) //disables waiting on animations   
      cy.get(productsPage
              .pAddedText)
                .should('have.text', 'Added!')
      cy.get(productsPage
              .pProducAddedToCart)
                .should('have.text', 'Your product has been added to cart.')
      cy.get(productsPage
              .pLinkViewCart)
                .should('have.text','View Cart')
      cy.get(productsPage
              .buttonContinueShopping)
                .click();
      cy.get(header
              .buttonCart)
                .click();
    //  10. Verify their prices, quantity and total price
    })

    it('Cart products verify first product', ()=>{
      cy.get(productsPage
              .h4CartFirstProductTitle) 
               .then(response =>{
                expect(response.text())
                        .to.eq(pTxtTitleFirstProduct)
               });         
      cy.get(productsPage
              .pPriceFirstProduct)
               .then(response =>{
                expect(response.text())
                      .to.eq(h2TxtPriceFirstProduct)
               });
      cy.get(productsPage.buttonQuantityFirstProduct)
              .should('have.text', '1');
            });
it('Cart products verify second product', ()=>{
      cy.get(productsPage
              .h4CartSecondProductTitle)
                .then(response =>{
                 expect(response.text())
                        .to.eq(pTxtTitleSecondProduct)
                });         
       cy.get(productsPage
              .pPriceSecondProduct)
                .then(response =>{
                 expect(response.text())
                        .to.eq(h2TxtPriceSecondProduct)
                });
       cy.get(productsPage
                .buttonQuantitySecondProduct)
                 .should('have.text', '1')
                })
//Poner en variables de ambiente en vez de codigo spaghetti
//No logrado

//Comparar desde un objeto
//Se compara desde variables
    })