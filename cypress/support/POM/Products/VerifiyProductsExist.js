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
    checkProductsPageTitle(text){
        this.elements.h2ProductsTitlePage().should('have.text', text)
    }            
    clickViewFirstProduct(){
        this.elements.firstProductButton().click();
    }
    checkPriceInformartion(text){
        this.elements.priceInformartion().contains(text)
    }
    checkStockAvaivialbiliyP(text){
        this.elements.stockAvaivialbiliyParagraph().should('have.text',text)
    }
}
module.exports={
    VerifyProductsExist
}