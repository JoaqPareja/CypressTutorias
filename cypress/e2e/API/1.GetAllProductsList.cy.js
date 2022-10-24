// 1: Get All Properties
// API URL: https://swapi.dev/api/people
// Request Method: GET
// Response Code: 200 done
// Get body properties 
//Verify body properties

describe('TODO api testing', () => {
let testBody;
    beforeEach(function(){
        cy.request({
            method: 'GET',
            url: 'https://swapi.dev/api/people'
        }).as('starWasrsCharacters')
    });
    it('Status Code', ()=>{
        cy.get('@starWasrsCharacters')
            .then((response)=>{
                expect(response.status).to.eq(200)
            });
    });
   it('fetches All Products List - GET', () =>{
    cy.get('@starWasrsCharacters')
    .then( ({ body }) => {(
        expect(body)
            .to.have.keys('count', 'next', 'previous', 'results'),
        expect(body
            .results[0])
                .to.have.keys(
                'name', 'height', 'mass', 'hair_color', 'skin_color', 'eye_color', 
                'birth_year','gender','homeworld','films', 'species', 'vehicles', 
                'starships', 'created','edited', 'url')
        
    ) 
});
});
    it('Get specific response from body', ()=>{
        cy.get('@starWasrsCharacters')
            .then((response) =>{
            testBody = response.body.results;  
            expect(testBody[0]
                    .name)
                        .to.eq('Luke Skywalker');
            expect(testBody[0]
                    .height)
                        .to.eq('172');
            expect(testBody[0]
                    .mass)
                        .to.eq('77');
            expect(testBody[0]
                    .hair_color)
                        .to.eq("blond");
            expect(testBody[0]
                    .skin_color)
                        .to.eq("fair");
            expect(testBody[0]
                    .eye_color)
                        .to.eq('blue');
            expect(testBody[0]
                    .birth_year)
                        .to.eq("19BBY");
            expect(testBody[0]
                    .gender)
                        .to.eq('male');
            expect(testBody[0]
                    .homeworld)
                        .to.eq("https://swapi.dev/api/planets/1/");
            expect(testBody[0]
                    .films[0])
                        .to.eq(
                            'https://swapi.dev/api/films/1/'                                  );
            expect(testBody[0]
                    .films[1])
                     .to.eq(
                            'https://swapi.dev/api/films/2/');
            expect(testBody[0]
                    .films[2])
                        .to.eq(
                            'https://swapi.dev/api/films/3/');
            expect(testBody[0]
                    .films[3])
                    .to.eq(
                            'https://swapi.dev/api/films/6/')
            expect(testBody[0]
                    .vehicles[0])
                        .to.eq(
                            "https://swapi.dev/api/vehicles/14/");
            expect(testBody[0]
                .vehicles[1])
                    .to.eq("https://swapi.dev/api/vehicles/30/")
            expect(testBody[0]
                    .starships[0])
                        .to.eq(
                            "https://swapi.dev/api/starships/12/");
            expect(testBody[0]
                    .starships[1])
                        .to.eq("https://swapi.dev/api/starships/22/");
            expect(testBody[0]
                .created)
                    .to.eq("2014-12-09T13:50:51.644000Z");
            expect(testBody[0]
                .edited)
                    .to.eq("2014-12-20T21:17:56.891000Z");
            expect(testBody[0]
                .url)
                    .to.eq("https://swapi.dev/api/people/1/");    
            // expect(testBody).property('products').to.have.keys('id')
            })
        })
        })
  
