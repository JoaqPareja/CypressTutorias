import {cart} from '../Consts'

let textosInCart =[];
let textCart;
let priceCart;
let pricesInCart = [];
let arrStoreIformation;

const filename = '/EnviromentVariables.json';

class VerifyAllProducts{
    
    elements={
        allH4ProductsTitles :()=> cy.get(cart.allh4TitleProducts),
        readJson: ()=> cy.readFile(filename),
        allProductsPrices:()=> cy.get(cart.allPPriceTitleProducts),
        arrStoreIformation:()=>arrStoreIformation,
        textCart:()=>textCart,
        priceCart:()=>priceCart,
        textosInCart:()=> textosInCart,
        pricesInCart:()=>pricesInCart,
        
    }
    storeCartTitles(){
        this.elements.allH4ProductsTitles().each(($el) =>{
            this.elements.textCart = $el.text()
            this.elements.textosInCart().push(this.elements.textCart)
          });
    }
    storeCartPrices(){
        this.elements.allProductsPrices().each(($el) =>{
            this.elements.priceCart = $el.text()
              this.elements.pricesInCart().push(this.elements.priceCart)
          })
    }

    // checkTitles(){
    //     this.elements.allH4ProductsTitles().each(($el) =>{
    //         textCart = $el.text()
    //         textosInCart.push(textCart)
    //       });
    //     this.elements.readJson().then(($arr)=>{
    //     arrStoreIformation = $arr[1].titles
    //     expect(textosInCart).to.deep.eq(arrStoreIformation);
    //     })
    // }
    // checkPrices(){
    //     this.elements.allProductsPrices().each(($el) =>{
    //         priceCart = $el.text()
    //         pricesInCart.push(priceCart)
    //       })
    //       // cy.wrap(pricesInCart)
    //     this.elements.readJson().then(($arr)=>{
    //         arrStoreIformation = $arr[0].prices
    //       expect(pricesInCart).to.deep.eq(arrStoreIformation);
    //     })
    // }

}
module.exports={
    VerifyAllProducts
}