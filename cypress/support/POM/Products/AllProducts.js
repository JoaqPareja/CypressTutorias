import {productsPage} from '../Consts'


const filename = '/EnviromentVariables.json';

let textosToStore = [];
let prices = [];//Create an empty array to then be able to add new items
let titles = [];
let price;
let title;
let cantidad;


class AllProducts{
    elements={
        allBtnProducts: ()=> cy.get(productsPage.allBtnProducts),
        allH2PriceProducts:()=> cy.get(productsPage.allH2PriceProducts),
        allPTitleProducts:()=>cy.get(productsPage.allPTitleProducts),
    }
}

class AddAllProducts extends AllProducts{
    constructor() {
        super();
    }
    clickAll(){
        this.elements.allBtnProducts().each(($el) =>{
        cy.wrap($el).click({force: true})
        cantidad +=1;
        // cy.log(cantidad).pause();
        Cypress.env("cantidad", cantidad)
    });
       
    }
}

class StoreAllProduct extends AllProducts{
    constructor() {
        super();
    }
    
    allH2Prices(){
        this.elements.allH2PriceProducts().each(($el) =>{
            price = $el.text()
            prices.push(price)
      });
      let prices2 = {"prices": prices} // add prices name to the prices
      textosToStore.push(prices2)    
    }
    allPTitles(){
        this.elements.allPTitleProducts().each(($el) =>{
            title = $el.text()
            titles.push(title)
          })
            let titles2 = {"titles": titles}// add titles name to the prices
            textosToStore.push(titles2)
            cy.writeFile(filename, textosToStore)
    }
    
}

module.exports ={
    AddAllProducts,
    StoreAllProduct
}