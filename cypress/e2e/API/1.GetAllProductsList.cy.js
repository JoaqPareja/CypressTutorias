// 1: Get All Properties
// API URL: https://automationexercise.com/api/productsList
// Request Method: GET
// Response Code: 200 done
// Get body properties 
//Verify body properties

describe('TODO api testing', () => {
let testBody;
    beforeEach(function(){
        cy.request({
            method: 'GET',
            url: 'https://automationexercise.com/api/productsList'
        }).as('productList')
    });
    it('Status Code', ()=>{
        cy.get('@productList')
            .then((response)=>{
                expect(response.status).to.eq(200)
            });
    });
   it('fetches All Products List - GET', () =>{
    cy.get('@productList')
    .then( ({ body }) => {(
        expect(body).to.have.length.greaterThan(1)
    )
});
});
   
        })
  
