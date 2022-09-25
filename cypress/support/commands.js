
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