import{header} from '../../support/POM/Consts'

// import {addProducts,storeProductInformationPushJson, verifyProducts} from '../../support/POM'
//Falta generar array vacio de enteros y luego que por cada elemento 
// anadido al carrito este se incremente y luego comprararlo
// const filename = '/EnviromentVariables.json';
// let test = [];
const filename = '/EnviromentVariables.json';

let cantidad =0;
let prices = [];//Create an empty array to then be able to add new items
let titles = [];

let price;
let title;
describe('Add products and verified each on the Cart',{failOnStatusCode: false}, () => {  
  beforeEach('Stored loggin', ()=>{     
    cy.login();  
  })
  it('Add All Products',()=>{
    cy.visit('/')
      cy.get('.features_items > .col-sm-4 > .product-image-wrapper > .single-products > .productinfo > .btn' ).each(($el) =>{
        cy.wrap($el).click({force: true}).each(() =>{
          cantidad +=1;
          // cy.log(cantidad).pause();
          (Cypress.env("cantidad", cantidad));
          // cy.log(Cypress.env("cantidad")).pause();
        })
      })
  })
  it('Store All Products information', ()=>{
    cy.visit('/')
    cy.get('.features_items > .col-sm-4 > .product-image-wrapper > .single-products > .productinfo > h2' ).each(($el) =>{
      cy.wrap($el).each($el =>{
        price = $el.text()
        // cy.log(price).pause();
       Cypress.env(prices.push(price));
      //  cy.log((Cypress.env(prices))).pause();

      })
  })
 
  
})
it('Store All Products information', ()=>{
  cy.visit('/')
  cy.get('.features_items > .col-sm-4 > .product-image-wrapper > .single-products > .productinfo > p' ).each(($el) =>{
    cy.wrap($el).each($el =>{
      title = $el.text()
      // cy.log(title).pause();
       Cypress.env(titles.push(title));
      //  cy.log((Cypress.env(titles))).pause();  
      }) 
    })
})
// it('tessts',()=>{
//   cy.visit('/')
//   // cy.log(Cypress.env(prices)).pause();
//   // cy.log(Cypress.env(prices[0])).pause();
//   let pricesArr = Cypress.env(prices);
//   // cy.log(pricesArr).pause(); 
//   // cy.log(pricesArr[0]).pause(); // este solo trae uno
//  cy.wrap(pricesArr).pause();
//   cy.wrap(pricesArr).each(($el) =>{
//     cy.log($el)

//     })

//   // cy.log(Cypress.env(titles)).pause(); 
// let titlesArr = (Cypress.env(titles))
//   // cy.log(titlesArr[0]).pause(); 
//   cy.wrap(titlesArr).pause();
//   cy.wrap(titlesArr).each(($el) =>{
//     cy.log($el)

//     })
// })
it('Cart verification', ()=>{
 
  cy.visit('/view_cart')
  cy.get('tbody > tr > .cart_description > h4').each(($el) =>{
    let titlesArr = (Cypress.env(titles))
    cy.wrap($el).each(($elArray)=>{
      cy.wrap(titlesArr).each(($idexArray) =>{
        cy.log($elArray).pause();
        expect($elArray).to.have.text($idexArray).pause();
      })
        
    // cy.wra(titlesArr).each(($elArray, $indexArray) =>{
    //   cy.wrap(($elArray, $indexArray)=>{ 
    //       if ($index == $indexArray) {
    //         expect($elArray).to.have.text($el).pause();
    //       }
    //     })
    //     })
      })
    })
})
})   
      // cy.wrap($el, $index).each(()=>{
      //   let titlesArr = (Cypress.env(titles))
      //   // cy.log(titlesArr).pause();
      //   for (let i =0; i< $el.length; i++){
      //     cy.then(()=>{
      //       cy.wrap(titlesArr).each(($titles)=>{
      //         cy.log($titles).pause();
      //           expect($titles).to.have.text($el).pause();    
      //   })
      //     })
        // }
         
    
      

      // $el.each({failOnStatusCode: false},() =>{
      // })
      // cy.wrap($el).each({failOnStatusCode: false},() =>{
      //   cy.log(titlesArr).pause();
      //   expect($el).to.have.text(titlesArr).pause();
   
        
   
      //   }) 
     
    
   
 
//cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn')

//   cy.get('ul>li').each(($el, index, $list) => {
//     // $el is a wrapped jQuery element
//     if ($el.someMethod() === 'something') {
//       // wrap this element so we can
//       // use cypress commands on it
//       cy.wrap($el).click()
//     } else {
//       // do something else
//     }
//   })

//   it('Store product information',()=>{
//     cy.visit('/')
//       cy.get(header.linkProducts) // .Click 'Products' button
//           .click();
//           storeProductInformationPushJson.firstProduct;    
//           storeProductInformationPushJson.secondProduct;   
//           // storeProductInformationPushJson.getFirstRecommendedItem();   
// })  
    
//   it('Add products to the cart', ()=>{
//     cy.visit('/')
//     addProducts.firstProduct;
//     addProducts.secondProduct;
//     });     
//   it('Cart products verify first product', ()=>{ // . Verify their prices, quantity and total price
//     cy.visit('/view_cart')
//     verifyProducts.firstProduct;
//     verifyProducts.secondProduct;
//   });

    