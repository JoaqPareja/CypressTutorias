import{header, productsPage, cart} from '../../support/consts'

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
            })
      //Debo de obtener Price & name of the product
        it('Store first product details', ()=>{
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
        })
        it('Store second product details', ()=>{
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
        })
        
        it('Add products to the cart', ()=>{
      cy.get(productsPage
              .divFirstProduct)
                  .realHover()
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
             .buttonDialogContinueShopping)
              .click()
//     7. Hover over second product and click 'Add to cart'
//     8. Click 'View Cart' button
      cy.get(productsPage
              .divSecondProduct)
                .realHover()
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
              .buttonDialogContinueShopping)
                .click();
      cy.get(header
              .buttonCart)
                .click();
              })
    //  10. Verify their prices, quantity and total price
  
    it('Cart products verify first product', ()=>{
      cy.get(cart
              .h4FirstProductTitle) 
               .then(response =>{
                expect(response.text())
                        .to.eq(pTxtTitleFirstProduct)
               });         
      cy.get(cart
              .pPriceFirstProduct)
               .then(response =>{
                expect(response.text())
                      .to.eq(h2TxtPriceFirstProduct)
               });
      cy.get(cart
                .buttonQuantityFirstProduct)
                  .should('have.text', '1');
            });
it('Cart products verify second product', ()=>{
      cy.get(cart
              .h4SecondProductTitle)
                .then(response =>{
                 expect(response.text())
                        .to.eq(pTxtTitleSecondProduct)
                });         
       cy.get(cart
              .pPriceSecondProduct)
                .then(response =>{
                 expect(response.text())
                        .to.eq(h2TxtPriceSecondProduct)
                });
       cy.get(cart
              .buttonQuantitySecondProduct)
                .should('have.text', '1')
                })
//Poner en variables de ambiente en vez de codigo spaghetti
//No logrado

//Comparar desde un objeto
//Se compara desde variables
    })