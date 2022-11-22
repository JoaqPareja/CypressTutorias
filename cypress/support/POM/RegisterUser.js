
import { inputTypes, enterAccountInformation} from '../../support/POM/Consts';
let titleSection = '.clearfix';
let radioButtonMr ='#id_gender1';
let userName;
beforeEach(function(){
    userName = Cypress.env('userName')
  });
afterEach(function(){
userName = '';
});
  
class RegisterUser {
    
    postUser(){
        
        const registerUser =  
            cy.url().should('contain', '/signup')   
                cy.get(radioButtonMr)  
                        .click();
                cy.get(enterAccountInformation.inputName)// Validate name and email previously place it the step before
                        .should('have.value', userName);            
                cy.get(enterAccountInformation.inputPassword)
                    .invoke('show')    //avoid disabled input   
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
    return registerUser;  
    }
}

module.exports = { 
    RegisterUser
}