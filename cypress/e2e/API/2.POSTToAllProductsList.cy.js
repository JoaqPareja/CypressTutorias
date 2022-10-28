
// 2: POST To All Products List

// API URL: https://automationexercise.com/api/productsList
// Request Method: POST
// Response Code: 405
// Response Message: This request method is not supported.

describe('TODO api testing', () => {

    before(function(){
        let username = 'test';
        let password = 'test';
        cy.request({
          method: 'POST',
          url: '/login',
          body: { username, password },
        }).then(({ body }) => {
          window.localStorage.setItem('authToken', body.token)
        }).as('login')
    })
    
// let 
})
