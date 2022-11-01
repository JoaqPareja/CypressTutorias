import {productsPage, cart, header, singUpUser, inputTypes, enterAccountInformation} from '../../support/POM/consts'
    // 1. Launch browser
    // 2. Navigate to url 'http://automationexercise.com'
    // 3. Verify that home page is visible successfully
describe('Adding items to the cart', () => {
  
      it('Visit page',()=>{
        cy.visit('/')
        //I retrieve the baseURL from the cypress.config.js file and avoid to re call the url for each test
      })
          // 4. Add products to cart
     it('Adding items to the cart', ()=>{   
      // it('Adding first item to the cart', ()=>{
          cy.get(productsPage
              .divFirstProduct)
                .realHover()
                  .find(productsPage
                    .divProductOnHoverOnlyDiv)
                      .should('be.visible')
                        .find(productsPage
                          .linkProductOnHover)
                            .click({force: true})
                            .wait(1000);
          cy.get(productsPage
            .buttonDialogContinueShopping)
              .click();
                            // .click({waitForAnimations: false});
                        // });
      // it('Adding Second item to the cart',()=>{
        cy.get(productsPage
          .divSecondProduct)
            .realHover()
              .find(productsPage
                .divProductOnHoverOnlyDiv)
                  .should('be.visible')
                    .find(productsPage
                      .linkProductOnHover)
                        .click({waitForAnimations: false})
                          .wait(1000);
        cy.get(productsPage
            .buttonDialogContinueShopping)
              .click();
                        // .click({waitForAnimations: false});       
      // });     
      // it('Adding Third item to the cart',()=>{      
        cy.get(productsPage
          .divThirdProduct)
            .realHover()
              .find(productsPage
                .divProductOnHoverOnlyDiv)
                  .should('be.visible') 
                    .find(productsPage
                      .linkProductOnHover)
                        .click({waitForAnimations: false});
        cy.get(productsPage
            .buttonDialogContinueShopping)
              .click();
                        // .click({waitForAnimations: false});                  
                          // });             
      // it('Adding last item to the cart',()=>{
        cy.get(productsPage
          .divLastProduct)
            .realHover()
              .find(productsPage
                .divProductOnHoverOnlyDiv)
                  .should('be.visible')
                    .find(productsPage
                      .linkProductOnHover)
                        .click({waitForAnimations: false}); 
        cy.get(productsPage
            .buttonDialogContinueShopping)
              .click();          
               // Verify 'New User Signup!' is visible
            cy.get(header
              .buttonCart)
                .click();                                         
        });
        it('Register user',()=>{
            //Click on 'Signup / Login' button
       cy.get(header
          .buttonSingUpLogin)
            .click();
        cy.get(singUpUser
          .newUserSignUpH2)
            .contains("New User Signup!");  
        cy.get(singUpUser
          .inputNameSingUp)
            .type(inputTypes
              .nameSignUp); // name
        cy.get(singUpUser
            .inputEmailSingup)
             .type(inputTypes
              .emailSignUp)     
        cy.get(singUpUser
            .buttonSingUp)
              .click();
        cy.get(singUpUser
            .pEmailAlreadyExist)
              .should('not.exist')
        })
        it('Account information', function (){
          cy.get('.clearfix')
          .contains("Mr")
          .click();
          // Validate name and email previously place it the step before
          cy.get(enterAccountInformation
            .inputName)
              .should('have.value',
                inputTypes.nameSignUp);
         
          cy.get(enterAccountInformation
            .inputPassword)
          .type(inputTypes
            .passwordSignUp);
          //Date of birth
          cy.get(enterAccountInformation
            .selectDateDay)
              .select('1');
          cy.get(enterAccountInformation
            .selectDateMonth)
              .select('1');
          cy.get(enterAccountInformation
            .selectDateYear)
              .select('1995');
          //Checkboxes
          cy.get(enterAccountInformation
            .radioButtonNewsLetter)
              .click();
          cy.get(enterAccountInformation
            .radioButtonReceiveSpecialOffers)
              .click();
          //Address information
          cy.get(enterAccountInformation
            .inputFirstName)
              .type(inputTypes
                  .test);
          cy.get(enterAccountInformation
              .inputLastName)
                .type(inputTypes
                  .test);
          cy.get(enterAccountInformation
                .inputCompany)
                  .type(inputTypes
                    .test);
          cy.get(enterAccountInformation
                .inputAddressName1)
                  .type(inputTypes
                  .test);
          cy.get(enterAccountInformation
                .inputAddressName2)
                  .type(inputTypes
                    .test);
          cy.get(enterAccountInformation
                .inputCountry)
                  .select('India');
          cy.get(enterAccountInformation
                .inputState)
                  .type(inputTypes
                    .test);
          cy.get(enterAccountInformation
                .inputCity)
                  .type(inputTypes
                    .test);
          cy.get(enterAccountInformation
                .inputZipcode)
                  .type(inputTypes
                    .test);
          cy.get(enterAccountInformation
            .inputMobileNumber)
              .type(inputTypes
                .testNumber);
        })
      it("Create account", ()=>{
        cy.get(enterAccountInformation
              .buttonCreateAccount)
                .click()
      })

      }); 
// describe('Verify that Products in carts',()=>{
      // 5. Click 'Cart' button
          // 6. Verify that cart page is displayed
    // 7. Click Proceed To Checkout
    // 8. Click 'Register / Login' button
      // it('Cart',()=>{
      //   cy.get(header
      //       .buttonCart)
      //         .click();
      //        })
      // it('Cart',()=>{
      //   cy.CheckElement(cart
      //     .sectionCartItems)
      //   cy.get('.col-sm-6')
      //       .find('>a')
      //         .click()
      //   cy.get('.modal-body > p:nth-child(2) > a:nth-child(1) > u:nth-child(1)').click()
      // })
// })
 
    // 9. Fill all details in Signup and create account
    // 10. Verify 'ACCOUNT CREATED!' and click 'Continue' button
    // 11. Verify ' Logged in as username' at top
    // 12.Click 'Cart' button
    // 13. Click 'Proceed To Checkout' button
    // 14. Verify Address Details and Review Your Order
    // 15. Enter description in comment text area and click 'Place Order'
    // 16. Enter payment details: Name on Card, Card Number, CVC, Expiration date
    // 17. Click 'Pay and Confirm Order' button
    // 18. Verify success message 'Your order has been placed successfully!'
    // 19. Click 'Delete Account' button
    // 20. Verify 'ACCOUNT DELETED!' and click 'Continue' button

       