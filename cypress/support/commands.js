
import "cypress-real-events/support";

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

export const inputTypes = {
    nameSignUp: 'JoaqTest2',
    emailSignUp:  'joaqTest221@gmail.com',
   passwordSignUp: 'PasswordTest',
    test: "test",
testNumber: '13570',
incorrectEmail:'IncorrectEmail@gmail.com',
incorrectPassword: 'IncorrectPassowrd'
}
export const header =
{
   buttonHome: '.navbar-nav > li:nth-child(1)',
   buttonProducts: '.navbar-nav > li:nth-child(2)',
   buttonCart: '.navbar-nav > li:nth-child(3)',
   buttonSingUpLogin: '.navbar-nav > li:nth-child(4)',
   buttonTestCAses: '.navbar-nav > li:nth-child(5)',
   buttonApiTesting: '.navbar-nav > li:nth-child(6)',
   buttonVideoTutorials: '.navbar-nav > li:nth-child(7)',
   buttonContactUs: '.navbar-nav > li:nth-child(8)'
}

export const loginUser = 
{
   loginToYourAccountH2: '.login-form > h2',
   inputEmailAddressLogIn: '.login-form > form > [type="email"]',
   inputPasswordLogIn: '[type="password"]',
   buttonLogin: '.login-form > form > .btn',
   incorrectEmailORPasswordMsg: '.login-form > form > p',
   buttonLogOut: '.shop-menu > .nav > :nth-child(4) > a'
}

export const singUpUser = 
{
sectionForm: '#form',
newUserSignUpH2:'.signup-form > h2',
inputNameSingUp: '[type="text"]',
inputEmailSingup: '.signup-form > form > [type="email"]',
buttonSingUp:'.signup-form > form > .btn',
emailAlreadyExist: '.signup-form > form > p'
}
export const  enterAccountInformation = {
 inputName: '#name',
 inputEmail: '#email',
 inputPassword: '#password',
 selectDateDay: '#days',
 selectDateMonth: '#months',
 selectDateYear: '#years',
 radioButtonNewsLetter: '#newsletter',
 radioButtonReceiveSpecialOffers: '#optin',
 inputFirstName:'#first_name', 
 inputLastName: '#last_name',
 inputCompany: '#company',
 inputAddressName1: '#address1',
 inputAddressName2: '#address2',
 inputCountry: '#country',
 inputState: '#state',
 inputCity: '#city',
 inputZipcode:'#zipcode',
 inputMobileNumber:'#mobile_number',
 buttonCreateAccount: '.login-form > form > .btn'
}

export const contactUsInformation =
{
 getInTouchTitle: 'div.contact-form > .title',
 inputNameForm:':nth-child(2) > .form-control',
 inputEmailField: ':nth-child(3) > .form-control',
 inputSubjectField: ':nth-child(4) > .form-control',
 inputMessageField:'#message',
 buttonChooseFile: '#contact-us-form > div:nth-child(6) > input',
 buttonSubmit: ':nth-child(7) > .btn',
 succesFormChangesMsg: '.status'
}
export const productsPage = 
{
   listOfItems: '.features_items',
   firstProductImage: '.features_items:last-child > :nth-child(3) > .product-image-wrapper',
   buttonViewFirstProduct: '.features_items:last-child > :nth-child(3) > .product-image-wrapper > .choose > .nav > li > a',
   imgViewProduct: '.view-product > img',
   h2ProductInformation: '.product-information > h2',
   pProductInformation: '.product-information > p',
   pAvailabilityInStock: '.product-information > :nth-child(6)',
   spanPriceInformation: '.product-information > span:nth-child(5) > span:nth-child(1)',
   buttonProductInformationAddToCart: 'button.btn:nth-child(5)',
   h2TitlePageProducts: '.title',
   inputSearchProduct: '#search_product',
   pAddedText: '.modal-title',
   pProducAddedToCart: '.modal-body > :nth-child(1)',
   buttonContinueShopping: '.modal-footer > .btn',
   pLinkViewCart: 'u',
   divFirstProduct: 'body > section:nth-child(3) > div > div > div.col-sm-9.padding-right > div > div:nth-child(3) > div > div.single-products',
   divFirstProductOnHover: 'body > section:nth-child(3) > div > div > div.col-sm-9.padding-right > div > div:nth-child(3) > div > div.single-products > div.product-overlay'
}
export const subscriptionSection =
{
   h2Subscription: '.single-widget > h2:nth-child(1)',    
   inputSubscriptionEmail: '#susbscribe_email',
   buttonSubscribe: '#subscribe',
   alertMessageofSuccess: '.alert-success'
}

export const testCases ={
   registerUser: '.panel-group:nth-child(2) .panel > .panel-heading > .panel-title > a'

}

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