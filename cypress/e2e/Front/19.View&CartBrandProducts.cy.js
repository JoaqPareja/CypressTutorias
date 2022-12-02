import {productsPageLeftSideBar} from '../../support/POM/consts'

describe('Register User', () => {
    it('Visit page',()=>{
      cy.visit('/')
        cy.get(productsPageLeftSideBar.divMenCategory)  // . Click on 'Products' button
            .find(productsPageLeftSideBar.linkCategory) // . Verify that Brands are visible on left side bar
              .click();
        cy.get(productsPageLeftSideBar.linkMenTSHIRTS)  // . Click on any brand name
              .click();
        cy.url() // . Verify that user is navigated to brand page and brand products are displayed
            .should('contain','category_products/3');       
        })
        it('Change Category Product',()=>{
          cy.visit('/category_products/3')
            cy.get(productsPageLeftSideBar.divKidsCategory) // . On left side bar, click on any other brand link
                  .find(productsPageLeftSideBar.linkCategory) // . Verify that Brands are visible on left side bar
                      .click();
            cy.get(productsPageLeftSideBar.linkKidsSecondElement)  // . Click on any brand name
                  .click();
            cy.url()  // . Verify that user is navigated to that brand page and can see products
                .should('contain','category_products/5') 
        })
    })

