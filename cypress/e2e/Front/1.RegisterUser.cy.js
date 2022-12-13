import {inputTypes} from '../../support/POM/Consts';
// import {consts} from '../fixtures/consts.json'
import {registerUser, createLogin} from '../../support/POM'

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
            createLogin.clickSignUpLogin();
            cy.url().should('contain', '/login')   
            createLogin.elements.signUpH2NewUser().contains("New User Signup!");  
            createLogin.typeSignUpName(Cypress.env("userName", inputTypes.nameSingUp2))
            createLogin.typeSignUpEmail(inputTypes.emailSignUp2)
            createLogin.clickSignButton();
            createLogin.elements.emailAlreadyExistP().should('not.exist')
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