import {header, productsPage} from '../Consts'

class VerifyProductsExist{

    elements ={
     productsLink: ()=>  cy.get(header.linkProducts),
     h2ProductsTitlePage:()=> cy.get(productsPage.h2TitlePageProducts),
     firstProductButton: ()=> cy.get(productsPage.buttonViewFirstProduct),
     priceInformartion:()=> cy.get(productsPage.spanPriceInformation),
     stockAvaivialbiliyParagraph:()=> cy.get(productsPage.pAvailabilityInStock),
    }

    clickProductsLink(){
        this.elements.productsLink().click();
    }           
    clickViewFirstProduct(){
        this.elements.firstProductButton().click();
    }
}
module.exports={
    VerifyProductsExist
}