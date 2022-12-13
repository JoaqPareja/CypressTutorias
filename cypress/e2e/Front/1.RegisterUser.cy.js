import {header, inputTypes, singUpUser} from '../../support/POM/Consts';
// import {consts} from '../fixtures/consts.json'
import {registerUser} from '../../support/POM'



let userName;
describe('Register User',() => {
    beforeEach(() =>{
        userName = Cypress.env('userName')
      });
    afterEach(() =>{
        userName = '';
    });

  it('Sing up', ()=>{
    cy.visit('/')
        cy.CheckHidden('body')
            cy.get(header.linkSingUpLogin)//Click on 'Signup / Login' button
                .click();  
            cy.url().should('contain', '/login')   
            cy.get(singUpUser.newUserSignUpH2)// Verify 'New User Signup!' is visible
                .contains("New User Signup!");  
            cy.get(singUpUser.inputNameSingUp)     
                .type(Cypress.env("userName", inputTypes.nameSingUp2)); // name
                cy.log(Cypress.env("userName"));
            cy.get(singUpUser.inputEmailSingup)
                .type(inputTypes.emailSignUp2);          
            cy.get(singUpUser.buttonSingUp)
                .click();
            cy.get(singUpUser.pEmailAlreadyExist)
                .should('not.exist')  // .should('have.text','Email Address already exist!');
            cy.url().should('contain', '/signup')   
 
            })
  it('Register Account information',  ()=>{
        registerUser.clickRadioButton();
        registerUser.elements.userName().should('have.value', userName);
        registerUser.typePassword(inputTypes.passwordSignUp);
        registerUser.selectDay('1');
        registerUser.selectMonth('1');
        registerUser.selectYear('1995');
        registerUser.clickNewsLetterRadioButton();
        registerUser.clickSpecialOffersRadioButton();
        registerUser.typeFirstName(inputTypes.test);
        registerUser.typeLastName(inputTypes.test);
        registerUser.typeCompanyName(inputTypes.test);
        registerUser.typeAddressName1(inputTypes.test);
        registerUser.typeAddressName2(inputTypes.test);
        registerUser.typeCountryName('India');
        registerUser.typeStateName(inputTypes.test);
        registerUser.typeCityName(inputTypes.test);
        registerUser.typeZipCode(inputTypes.test);
        registerUser.typeMobileNumber(inputTypes.testNumber);
        registerUser.typeCreateAccount();
  })
})