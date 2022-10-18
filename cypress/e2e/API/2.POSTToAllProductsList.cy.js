
// 2: POST To All Products List

// API URL: https://automationexercise.com/api/productsList
// Request Method: POST
// Response Code: 405
// Response Message: This request method is not supported.

describe('TODO api testing', () => {

    before(function(){
        cy.request({
            method: 'GET',
            url: 'https://automationexercise.com/api/productsList'
        }).as('productsList')
    })
    
// let 
})
