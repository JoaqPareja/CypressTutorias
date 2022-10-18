// 1: Get All Products List
// API URL: https://automationexercise.com/api/productsList
// Request Method: GET
// Response Code: 200 done

// Response JSON: All products list
describe('TODO api testing', () => {

    beforeEach(function(){
        cy.request({
            method: 'GET',
            url: 'https://automationexercise.com/api/productsList'
        }).as('productsList')
    });
   it('fetches All Products List - GET', () =>{
    cy.get('@productsList')
    .should(
    response =>{
        expect(response.status).to.eq(200)
    });
});
    it('Get specific response from body', ()=>{
        cy.get('@productsList')
            // .its('body').then((body) =>{
            //     const test = body.test;
            //     // test = test;
            //     cy.log(body['products'])
            // })
            .then((response) =>{
                cy.log(response.body)
                const testBody = response.body;
                cy.log(testBody)
                expect(testBody).to.have.property('products')
                expect(testBody).property('products').to.have.keys('id')

            })
            // .should(response => {
            //     const test = response.test;
            //     cy.log(test)
            //     // cy.log(response.body.products)
            //     // expect(response.body).property('products').to.have.keys(['id']);
            //     // expect(value).to.have.keys('id')
            // })
        })
            // .should(
            //     response =>{
                    // cy.log(response.body);\
                    
            //         cy.log(response,
            //             'responseCode')  
            
            //     })
            // .then({
            //     body:{
            //      'id' : 1,
            // }
        })
  
