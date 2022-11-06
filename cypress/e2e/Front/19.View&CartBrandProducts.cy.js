import {productsPageLeftSideBar} from '../../support/POM/consts'

describe('Register User', () => {
    it('Visit page',()=>{
      cy.visit('/')
        cy.get(productsPageLeftSideBar  // . Click on 'Products' button
            .divMenCategory)
              .find(productsPageLeftSideBar // . Verify that Brands are visible on left side bar
                .linkCategory)
                  .click();
        cy.get(productsPageLeftSideBar  // . Click on any brand name
            .linkMenTSHIRTS)
              .click();
        cy.url() // . Verify that user is navigated to brand page and brand products are displayed
            .should('contain','category_products/3')       
        })
        it('Change Category Product',()=>{
          cy.visit('/category_products/3')
            cy.get(productsPageLeftSideBar // . On left side bar, click on any other brand link
                .divKidsCategory)
                  .find(productsPageLeftSideBar // . Verify that Brands are visible on left side bar
                    .linkCategory)
                      .click();
            cy.get(productsPageLeftSideBar  // . Click on any brand name
                .linkKidsSecondElement)
                  .click();
            cy.url()  // . Verify that user is navigated to that brand page and can see products
                .should('contain','category_products/5') 
        })
    })

