import {header, inputTypes, singUpUser, enterAccountInformation} from '../../support/consts';
// import {consts} from '../fixtures/consts.json'
// import { inputTypes } from '../support/consts'

describe('Register User',() => {
  it('Sing up', ()=>{
    cy.visit('/')
    cy.CheckHidden('body')
      cy.get(header.buttonSingUpLogin)//Click on 'Signup / Login' button
         .click();     
      cy.get(singUpUser.newUserSignUpH2)// Verify 'New User Signup!' is visible
          .contains("New User Signup!");  
      cy.get(singUpUser.inputNameSingUp)     
          .type(inputTypes.nameSingUp2); // name
      cy.get(singUpUser.inputEmailSingup)
          .type(inputTypes.emailSignUp2);          
      cy.get(singUpUser.buttonSingUp)
          .click();
      cy.get(singUpUser.pEmailAlreadyExist)
          .should('not.exist')  // .should('have.text','Email Address already exist!');
        })
  it('Account information', function (){
    cy.visit('/signup')
      cy.get('.clearfix')  // Validate name and email previously place it the step before
          .contains("Mr")
            .click();
      cy.get(enterAccountInformation.inputName)
          .should('have.value', inputTypes.nameSignUp);
      cy.get(enterAccountInformation.inputPassword)     
          .type(inputTypes.passwordSignUp);//Date of birth            
      cy.get(enterAccountInformation.selectDateDay)    
          .select('1');
      cy.get(enterAccountInformation.selectDateMonth)     
          .select('1');
      cy.get(enterAccountInformation.selectDateYear)
          .select('1995');
      //Checkboxes
      cy.get(enterAccountInformation.radioButtonNewsLetter)  
          .click();
      cy.get(enterAccountInformation.radioButtonReceiveSpecialOffers)
          .click();
      //Address information
      cy.get(enterAccountInformation.inputFirstName)   
          .type(inputTypes.test);       
      cy.get(enterAccountInformation.inputLastName)  
          .type(inputTypes.test);         
      cy.get(enterAccountInformation.inputCompany)      
          .type(inputTypes.test);      
      cy.get(enterAccountInformation.inputAddressName1)
          .type(inputTypes.test);          
      cy.get(enterAccountInformation.inputAddressName2)
          .type(inputTypes.test);           
      cy.get(enterAccountInformation.inputCountry)
          .select('India');
      cy.get(enterAccountInformation.inputState)
          .type(inputTypes.test);
      cy.get(enterAccountInformation.inputCity)
          .type(inputTypes.test);           
      cy.get(enterAccountInformation.inputZipcode) 
          .type(inputTypes.test);
      cy.get(enterAccountInformation.inputMobileNumber)  
          .type(inputTypes.testNumber);
      cy.get(enterAccountInformation.buttonCreateAccount)
          .click();
})

})