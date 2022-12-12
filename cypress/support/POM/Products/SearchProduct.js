


import {header, productsPage} from '../Consts'

class SearchProducts{

    elements ={
     productsLink: ()=>  cy.get(header.linkProducts),
     productSearchInput: ()=> cy.get(productsPage.inputSearchProduct),
     productSerachClick:()=> cy.get(productsPage.buttonSearchProducts),
    }

    clickProductsLink(){
        this.elements.productsLink().click();
    }
    typeProductSearch(text)
    {
        this.elements.productSearchInput().type(text)
    }
    clickProductSerach(){
        this.elements.productSerachClick().click();
    }
}
module.exports={
    SearchProducts
}