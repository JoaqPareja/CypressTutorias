
import { productsbutton, listOfItems, viewProductH2, viewProductp, viewProductAddToCart, allProducts} from '../support/Consts'

    // 1. Launch browser
    
    // 2. Navigate to url 'http://automationexercise.com'
    
    describe('Register User', () => {
  
        it('Visit page',()=>{
            //Navigate to url 'http://automationexercise.com'
          cy.visit('http://automationexercise.com')
        })
    
    // 3. Verify that home page is visible successfully
    
    it('Verify that home page is visible successfully', () => {
        // Verify that home page is visible successfully
        cy.CheckElement('body')
        cy.CheckHidden('body')
        //Check Width and Height is greater and less than
        cy.getWidth('body')
        cy.getHeight('body')
      })
    
    
      it('Verify products', ()=>{

        // 4. Click on 'Products' button
        cy.get(productsbutton).click()
       
        // 5. Verify user is navigated to ALL PRODUCTS page successfully
        cy.url().should('include', '/products')
        // 6. The products list is visible
        cy.CheckElement(listOfItems)
        cy.CheckHidden(listOfItems)
        cy.get(allProducts).should('have.text', 'All Products')
    
    // 6. Enter product name in search input and click search button\
    cy.CheckElement('#search_product')
    cy.get('#search_product').type('Blue Top')
    cy.get('#submit_search').click()
    // 7. Verify 'SEARCHED PRODUCTS' is visible
    
    // 8. Verify all the products related to search are visible
    cy.CheckElement(listOfItems)

    })
  })