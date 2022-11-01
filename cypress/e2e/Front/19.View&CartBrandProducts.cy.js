import {productsPageLeftSideBar} from '../../support/POM/consts'

    // 1. Launch browser
    // 2. Navigate to url 'http://automationexercise.com'
    describe('Register User', () => {
  
        it('Visit page',()=>{
          cy.visit('/')
          cy.get(productsPageLeftSideBar
            .divMenCategory)
              .find(productsPageLeftSideBar
                .linkCategory)
                  .click();
          cy.get(productsPageLeftSideBar
              .linkMenTSHIRTS)
                .click();
          cy.url()
              .should('contain','category_products/3')       
           })
    })
    // 3. Click on 'Products' button
    // 4. Verify that Brands are visible on left side bar
    // 5. Click on any brand name
    // 6. Verify that user is navigated to brand page and brand products are displayed
    // 7. On left side bar, click on any other brand link
    // 8. Verify that user is navigated to that brand page and can see products
