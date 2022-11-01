import{header, productsPage} from '../../support/POM/Consts'

import {addProducts,storeProductInformation, verifyProducts} from '../../support/POM'
//Falta generar array vacio de enteros y luego que por cada elemento 
// anadido al carrito este se incremente y luego comprararlo
describe('Register User', () => {  

  beforeEach('Stored loggin', ()=>{     
    cy.login();  
  })
  it('Store product information',()=>{
    cy.visit('/')
      cy.get(header // .Click 'Products' button
            .linkProducts)
              .click();
      storeProductInformation.getFirstProduct();    
      storeProductInformation.getSecondProduct();      
})      
  it('Add products to the cart', ()=>{
    cy.visit('/')
    addProducts.getFirstProduct();
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
              .click({force: true});
              addProducts.getSecondProduct();
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
      cy.get(header
              .linkCart)
                .click({force: true});     
    })     
  it('Cart products verify first product', ()=>{ // . Verify their prices, quantity and total price
    cy.visit('/view_cart')
    verifyProducts.getFirstProduct();
  })
it('Cart products verify second product', ()=>{
  cy.visit('/view_cart')
    verifyProducts.getSecondProduct();
})
})
//Poner en variables de ambiente en vez de codigo spaghetti
//No logrado
//Comparar desde un objeto
//Se compara desde variables
    