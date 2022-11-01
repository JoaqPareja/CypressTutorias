import {header, cart} from "../../support/POM/Consts"
import {addProducts} from '../../support/POM'

describe('Register User', () => {
 
  beforeEach('it should store the credentials',() => {   
    cy.login();
    })
    it('Adding items to the cart', ()=>{   
      cy.visit('/')    // Add products to cart
      //Store cantidad de Productos seleccionados en un array
      addProducts.getFirstProduct();
      addProducts.getSecondProduct();
      addProducts.getThirdProduct();
      addProducts.getLastProduct();
        cy.get(header  // Click 'Cart' button
            .linkCart)
              .click();                              
        }); 
          // 6. Verify that cart page is displayed
          //Missing

    it('Delete Products from cart', ()=>{
        //Colocar luego un if para indicar que dependiendo la cantidad de productos
        //  elegidos anteriormente debas de eliminar la misma cantidad
        //for  recorrer  array de Sheader  tore cantidad de Productos seleccionados y 
        // dependiendo la cantidad de productos selecionados llamar a la cantidad
        //  de metodos de eliminacion de productos del carrito
        cy.visit('/view_cart')  // 7. Click 'X' button corresponding to particular product
          cy.get(cart
              .tdFirstProduct)//First child of the table
                .find(cart
                  .linkDelete)
                    .click();
                    //what i can do right is to store the first product title and then after it 
                    // has been deleted assert that product name does not exist in the DOM
                      // .should('not.exist');            
                        // 8. Verify that product is removed from the cart
                        //MISSING
          cy.get(cart
            .tdSecondProduct)//First child of the table
              .find(cart
                .linkDelete)
                  .click();
          cy.get(cart
            .tdThirdProduct)//First child of the table
              .find(cart
                .linkDelete)
                  .click();
          cy.get(cart
            .tdLastProduct)//First child of the table
              .find(cart
                .linkDelete)
                  .click();
          cy.get('#empty_cart > .text-center')
              .should('have.text','Cart is empty! Click here to buy products.')
        })
    })