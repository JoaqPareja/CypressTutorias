// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import {productsPage} from './consts'

class AddProducts{
    getFirstProuct() {
      const firstProuct =  
            cy.get(productsPage
                .divFirstProductOnHover)
                    .trigger('mouseover', 
                        {force: true})
                            .find(productsPage
                                .linkProductOnHover)
                                    .click({force: true})
                                        .wait(1000)
            cy.get(productsPage
                .buttonDialogContinueShopping)
                    .click();                       
        return firstProuct;
    }
    getSecondProduct(){
        const secondProduct =   
                cy.get(productsPage
                    .divSecondProductOnHover)
                        .trigger('mouseover', {force: true})
                            .find(productsPage
                                .linkProductOnHover)
                                    .click( {force: true})
                cy.get(productsPage
                        .buttonDialogContinueShopping)
                          .click();                        
        return secondProduct;
    }
    getThirdProduct(){
        const thirdProduct =   
        cy.get(productsPage
            .divThirdProductOnHover)
                .trigger('mouseover', {force: true})
                .find(productsPage
                .linkProductOnHover)
                    .click({force: true}) 
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
                        .click({force: true}); 
        cy.get(productsPage
            .buttonDialogContinueShopping)
                .click();  
        return lastProduct;
    }

}
module.exports = new AddProducts();
// describe('Add products', ()=>{ 
//     it('Adding items to the cart', ()=>{   
//       // const productsPage = new productsPage()
//       cy.visit('/')
//         cy.get(productsPage
//             .divFirstProductOnHover)
//               .trigger('mouseover', {force: true})
//                         .find(productsPage
//                           .linkProductOnHover)
//                             .click({force: true})
//                               .wait(1000);
//         cy.get(productsPage
//             .buttonDialogContinueShopping)
//               .click();
//         cy.get(productsPage
//             .divSecondProductOnHover)
//             .trigger('mouseover', {force: true})
//                         .find(productsPage
//                           .linkProductOnHover)
//                             .click( {force: true})
//                               .wait(1000);
//         cy.get(productsPage
//             .buttonDialogContinueShopping)
//               .click();  
//         
//         
//         cy.get(header
//             .buttonCart)
//               .click();
                                    
//         });
        
    // })

   
// Alternatively you can use CommonJS syntax:
// require('./commands')

