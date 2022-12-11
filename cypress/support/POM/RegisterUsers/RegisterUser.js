
import { enterAccountInformation} from '../Consts';
class RegisterUser {

    elements = {
      mrButtonRadio: () => cy.get(enterAccountInformation.radioButtonMr), 
      userInformation: () => cy.get(enterAccountInformation.inputName),
      passwordInput: ()=> cy.get(enterAccountInformation.inputPassword),
      newsLetterRadioButton: ()=> cy.get(enterAccountInformation.radioButtonNewsLetter),  
      specialOffersRadioButton: ()=> cy.get(enterAccountInformation.radioButtonReceiveSpecialOffers),
      selectDateDay: ()=> cy.get(enterAccountInformation.selectDateDay),
      selectDateMonth: ()=> cy.get(enterAccountInformation.selectDateMonth),
      selectDateYear: ()=> cy.get(enterAccountInformation.selectDateYear),
      firstNameInput: ()=> cy.get(enterAccountInformation.inputFirstName),
      lastNameInput: ()=> cy.get(enterAccountInformation.inputLastName),
      companyNameInput: ()=> cy.get(enterAccountInformation.inputCompany),
      addressName1Input: ()=> cy.get(enterAccountInformation.inputAddressName1),
      addressName2Input:()=> cy.get(enterAccountInformation.inputAddressName2),
      countryNameInput: ()=> cy.get(enterAccountInformation.inputCountry),
      stateNameInput: ()=> cy.get(enterAccountInformation.inputState),
      cityNameInput: ()=> cy.get(enterAccountInformation.inputCity),
      zipCodeInput: ()=> cy.get(enterAccountInformation.inputZipcode),
      mobileNumberInput: ()=> cy.get(enterAccountInformation.inputMobileNumber),
      createAccountButton:()=> cy.get(enterAccountInformation.buttonCreateAccount),
    }
    
    clickRadioButton(){
        this.elements.mrButtonRadio().click();
    }
    checkUserEntered(userName){
        this.elements.userInformation().should('have.value', userName);    
    }
    typePassword(passsword){
        this.elements.passwordInput().type(passsword);
    }
    selectDay(number){
        this.elements.selectDateDay().type(number);
    }
    selectMonth(number){
        this.elements.selectDateMonth().type(number);    
    }
    selectYear(number){
        this.elements.selectDateYear().type(number);
        }
    clickNewsLetterRadioButton(){
        this.elements.newsLetterRadioButton().click();
    }
    clickSpecialOffersRadioButton(){
        this.elements.specialOffersRadioButton().click();
    } 
    typeFirstName(text){
        this.elements.firstNameInput().type(text);
        }
    typeLastName(text){
        this.elements.lastNameInput().type(text);
    }    
    typeCompanyName(text){
        this.elements.companyNameInput().type(text);
        }
    typeCompanyName(text){
        this.elements.companyNameInput().type(text);
        }
    typeAddressName1(text){
        this.elements.addressName1Input().type(text);
        }
    typeAddressName2(text){
        this.elements.addressName2Input().type(text);
        }
    typeCountryName(text){
        this.elements.countryNameInput().type(text);
        }
    typeStateName(text){
        this.elements.stateNameInput().type(text);
        }
    typeCityName(text){
        this.elements.cityNameInput().type(text);
        }
    typeZipCode(text){
        this.elements.zipCodeInput().type(text);
        }
    typeMobileNumber(number){
        this.elements.mobileNumberInput().type(number);
        }
    typeCreateAccount(){
        this.elements.createAccountButton().click();
        }  
}

module.exports = { 
    RegisterUser
}