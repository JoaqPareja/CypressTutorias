
// import "cypress-real-events/support";
import 'cypress-plugin-api'

import {header,loginUser, inputTypes} from './POM/Consts'
//{experimentalSessionAndOrigin = true} = {}

Cypress.Commands.add('login', ()=>{
    
    cy.session('Stored session', () => {
        
        cy.visit('/')
          cy.get(header.linkSingUpLogin)
              .click();
         cy.get(loginUser.loginToYourAccountH2)
              .contains("Login to your account")  
          cy.get(loginUser.inputEmailAddressLogIn)
                .type(inputTypes.emailSignUp) //email       
          cy.get(loginUser.inputPasswordLogIn)
               .type(inputTypes.passwordSignUp);      
          cy.get(loginUser.buttonLogin)
                .click();
          cy.get(loginUser.incorrectEmailORPasswordMsg)
              .should('not.exist','Your email or password is incorrect!'); 
          cy.url()
              .should('contain', '/')
          
      })
   

})

// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add('CheckElement', (label) =>{
cy.get(label).then(($el) => {
    Cypress.dom.isDom($el) // true
  })
})

//Cypress internally uses this method everywhere to figure out whether an element is hidden
Cypress.Commands.add('CheckHidden', (label) =>{
    cy.get(label).then(($el) => {
        Cypress.dom.isHidden($el) // false
      })
})

Cypress.Commands.add('getWidth', (label) =>{
    cy.get(label).invoke('width')
    .then(function(owidth){
          cy.log(owidth)
          expect(owidth)
             .to.be.greaterThan(900)
                .to.be.lessThan(1200);
    });
})
Cypress.Commands.add('getHeight', (label) =>{
    cy.get(label).invoke('height')
    .then(function(oHeight){
        cy.log(oHeight)
        expect(oHeight)
        .to.be.within(2000, 10000)
    });
})



//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })