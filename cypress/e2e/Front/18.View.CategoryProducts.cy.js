import {productsPageLeftSideBar} from '../../support/consts'

describe('Register User', () => {
    // 1. Launch browser
    // 2. Navigate to url 'http://automationexercise.com'
    it('Verifies categories',()=>{
      cy.visit('/')
        cy.get(productsPageLeftSideBar
            .divWomenCategory)
              .find(productsPageLeftSideBar
                .linkCategory)
                  .click();
        cy.get(productsPageLeftSideBar
            .linkWomenDress)
              .click();
        cy.url()
            .should('contain','category_products/1')
    })

 
    // it('',()=>{
    // })
    // 3. Verify that categories are visible on left side bar
    // 4. Click on 'Women' category
    // 5. Click on any category link under 'Women' category, for example: Dress
    // 6. Verify that category page is displayed and confirm text 'WOMEN - TOPS PRODUCTS'
    // 7. On left side bar, click on any sub-category link of 'Men' category
    // 8. Verify that user is navigated to that category page

    })