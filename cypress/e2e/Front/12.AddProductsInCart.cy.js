import{header, productsPage} from '../../support/POM/Consts'

import {addProducts,storeProductInformation, verifyProducts} from '../../support/POM'
//Falta generar array vacio de enteros y luego que por cada elemento 
// anadido al carrito este se incremente y luego comprararlo



describe('Add products and verified each on the Cart', () => {  

  beforeEach('Stored loggin', ()=>{     
    cy.login();  
  })
  it('Store product information',()=>{
    cy.visit('/')
      cy.get(header.linkProducts) // .Click 'Products' button
          .click();
    storeProductInformation.getFirstProduct();    
    storeProductInformation.getSecondProduct();      
})      
  it('Add products to the cart', ()=>{
    cy.visit('/')
    addProducts.getFirstProduct();
      cy.get(productsPage.pAddedText)
          .should('have.text', 'Added!')
      cy.get(productsPage.pProducAddedToCart)
          .should('have.text', 'Your product has been added to cart.')
      cy.get(productsPage.pLinkViewCart)
          .should('have.text','View Cart')
      cy.get(productsPage.buttonDialogContinueShopping)
          .click({force: true});
      addProducts.getSecondProduct();
      cy.get(productsPage.pAddedText)
          .should('have.text', 'Added!')
      cy.get(productsPage.pProducAddedToCart)
          .should('have.text', 'Your product has been added to cart.')
      cy.get(productsPage.pLinkViewCart)
          .should('have.text','View Cart')
      cy.get(productsPage.buttonDialogContinueShopping)
      cy.get(header.linkCart)
          .click({force: true});     
    });     
  it('Cart products verify first product', ()=>{ // . Verify their prices, quantity and total price
    cy.visit('/view_cart')
    verifyProducts.getFirstProduct();
    verifyProducts.getSecondProduct();
  });
})

    