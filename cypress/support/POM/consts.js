//Structure [typeOfElement] [nameOfTheElement] (if aplicable [nameOfTheChildElement]) 
// First letter of the text must be in camelcase

export const inputTypes = {
    nameSignUp: 'JoaqTest2',
    nameSingUp2: 'JoaqTest02',
    emailSignUp:  'joaqTest221@gmail.com',
    emailSignUp2:  'joaqTest321@gmail.com',
    emailAlternativeSingUp: 'joaqTestAlternative221@gmail.com',
    passwordSignUp: 'PasswordTest',
    test: "test",
    testNumber: '13570',
    incorrectEmail:'IncorrectEmail@gmail.com',
    incorrectPassword: 'IncorrectPassowrd'
}

export const header =
{
    linkHome: '.shop-menu >.navbar-nav > li:nth-child(1) > a',
    linkProducts: '.shop-menu >.navbar-nav > li:nth-child(2) > a',
    linkCart: '.shop-menu >.navbar-nav > li:nth-child(3) > a' ,
    linkSingUpLogin: '.shop-menu >.navbar-nav > li:nth-child(4) > a',
    linkDelete: '.shop-menu >.navbar-nav > li:nth-child(5) > a',
    linkTestCAses: '.shop-menu >.navbar-nav > li:nth-child(5) > a',
    linkApiTesting: '.shop-menu >.navbar-nav > li:nth-child(6) > a',
    linkVideoTutorials: '.shop-menu >.navbar-nav > li:nth-child(7) > a',
    linkContactUs: '.shop-menu >.navbar-nav > li:nth-child(8) > a',
    linkViewUserlogged: '.shop-menu >.navbar-nav > li:nth-child(10) > a'
}

export const loginUser = 
{
    loginToYourAccountH2: '.login-form > h2',
    inputEmailAddressLogIn: '.login-form > form > [type="email"]',
    inputPasswordLogIn: '[type="password"]',
    buttonLogin: '.login-form > form > .btn',
    incorrectEmailORPasswordMsg: '.login-form > form > p',
    buttonLogOut: '.shop-menu > .nav > :nth-child(4) > a'
}

 export const singUpUser = 
    {
    sectionForm: '#form',
    newUserSignUpH2:'.signup-form > h2',
    inputNameSingUp: '[type="text"]',
    inputEmailSingup: '.signup-form > form > [type="email"]',
    buttonSingUp:'.signup-form > form > .btn',
    pEmailAlreadyExist: '.signup-form > form > p'
    }
 export const  enterAccountInformation = {
    radioButtonMr :'#id_gender1',
  inputName: '#name',
  inputEmail: '#email',
  inputPassword: '#password',
  selectDateDay: '#days',
  selectDateMonth: '#months',
  selectDateYear: '#years',
  radioButtonNewsLetter: '#newsletter',
  radioButtonReceiveSpecialOffers: '#optin',
  inputFirstName:'#first_name', 
  inputLastName: '#last_name',
  inputCompany: '#company',
  inputAddressName1: '#address1',
  inputAddressName2: '#address2',
  inputCountry: '#country',
  inputState: '#state',
  inputCity: '#city',
  inputZipcode:'#zipcode',
  inputMobileNumber:'#mobile_number',
  buttonCreateAccount: '.login-form > form > .btn'
 }

 export const contactUsInformation =
    {
    getInTouchTitle: 'div.contact-form > .title',
    inputNameForm:':nth-child(2) > .form-control',
    inputEmailField: ':nth-child(3) > .form-control',
    inputSubjectField: ':nth-child(4) > .form-control',
    inputMessageField:'#message',
    buttonChooseFile: '#contact-us-form > div:nth-child(6) > input',
    buttonSubmit: ':nth-child(7) > .btn',
    succesFormChangesMsg: '.status'
    }


export const productsPage = 
    {
    allBtnProducts: '.features_items > .col-sm-4 > .product-image-wrapper > .single-products > .productinfo > .btn',
    allH2PriceProducts: '.features_items > .col-sm-4 > .product-image-wrapper > .single-products > .productinfo > h2',
    allPTitleProducts: '.features_items > .col-sm-4 > .product-image-wrapper > .single-products > .productinfo > p',
    inputSearchProducts: '#search_product',
    buttonSearchProducts: '#submit_search',
    listOfItems: '.features_items',
    imgFirstProduct: '.features_items:last-child > :nth-child(3) > .product-image-wrapper',
    buttonViewFirstProduct: '.features_items:last-child > :nth-child(3) > .product-image-wrapper > .choose > .nav > li > a',
    imgViewProduct: '.view-product > img',
    h2ProductInformation: '.product-information > h2',
    pProductInformation: '.product-information > p',
    pAvailabilityInStock: '.product-information > :nth-child(6)',
    spanPriceInformation: '.product-information > span:nth-child(5) > span:nth-child(1)',
    buttonProductInformationAddToCart: 'button.btn:nth-child(5)',
    h2TitlePageProducts: '.title',
    inputSearchProduct: '#search_product',
    pAddedText: '.modal-title',
    pProducAddedToCart: '.modal-body > :nth-child(1)',
    pLinkViewCart: 'u',
    divFirstProduct: 'div.col-sm-4:nth-child(3)',
    divSecondProduct: 'div.col-sm-4:nth-child(4)',
    divThirdProduct: 'div.col-sm-4:nth-child(5)',
    divLastProduct: 'div.col-sm-4:last-child',
    h2priceFirstProduct: 'div.col-sm-4:nth-child(3) > h2',
    divProductOnHoverOnlyDiv: ' div.single-products > div.product-overlay',
    divFirstProductOnHover: 'div.col-sm-4:nth-child(3) > div.product-image-wrapper > div.single-products> div.product-overlay',
    divSecondProductOnHover: 'div.col-sm-4:nth-child(4) > div.product-image-wrapper > div.single-products> div.product-overlay',
    divThirdProductOnHover: 'div.col-sm-4:nth-child(5) > div.product-image-wrapper > div.single-products> div.product-overlay',
    divLastProductOnHover: 'div.col-sm-4:last-child > div.product-image-wrapper > div.single-products> div.product-overlay',
    h2ProductPrice: 'h2:nth-child(2)',
    pProductTitle: 'p:nth-child(2)',
    linkProductOnHover: 'div > a',
    buttonDialogContinueShopping:'.modal-footer > .btn',
    linkViewProducts: ' .product-image-wrapper > .choose > .nav > li > a' //Used for a .find()
}
export const productsPageSelectedProduct ={
    pWriteYourReview: '.active > a',
    inputYourName: '#name',
    inputYourEmail: '#email',
    textArea: '#review',
    buttonSubmit: '#button-review',
    spanSuccesAlert: '.alert-success > span'
}
export const productsPageLeftSideBar ={
    sectionLeft: 'left-sidebar',
    h2Category:'.left-sidebar > :nth-child(1)',
    divCategory:'#accordian',
    divWomenCategory:':nth-child(1) > .panel-heading > .panel-title',
    divMenCategory:':nth-child(2) > .panel-heading > .panel-title',
    divKidsCategory:':nth-child(3) > .panel-heading > .panel-title',
    linkCategory: '> a', //Gonna use this to find each of the categories child element
    spanOpenWomenCategory: ' > span > i', //Example get(divWomenCategory).find(spanCategory)
    linkWomenDress:'#Women > .panel-body ul > :nth-child(1) > a',
    linkWomenTops: '#Women > .panel-body ul > :nth-child(2) > a',
    linkWomenSaree: '#Women > .panel-body ul > :nth-child(3) > a',
    linkMenTSHIRTS: '#Men > .panel-body ul > :nth-child(1) > a',
    linkMenJEANS: '#Men > .panel-body ul > :nth-child(2) > a',
    linkKidsSecondElement: '#Kids > .panel-body > ul > :nth-child(2) > a'
}
export const productsPageRecommendedItem ={
    h2PriceFirst: '#recommended-item-carousel > div > div.item.active > div:nth-child(1) > div > div > div > h2',
    pTitleFirst: '#recommended-item-carousel > div > div.item.active > div:nth-child(1) > div > div > div > p',
    divRecommendedSection: '.recommended_items',
    h2Recommendedtitle: '.recommended_items > .title',
    divCarousel: 'div.carousel-inner:nth-child(1)',
    divCarouselActive: 'item active',
    divProduct:'productinfo text-center',
    linkItemActive: '.active > :nth-child(1) > .product-image-wrapper > .single-products > .productinfo > .btn',
    carouselNewFirstItem: '#recommended-item-carousel > div > div:nth-child(1) > div:nth-child(1) > div > div > div > a',    
    h2CarouselNewFirstItem : '#recommended-item-carousel > div > div:nth-child(1) > div:nth-child(1) > div > div > div > h2',
    pTitleCarouselNewFirstItem: '#recommended-item-carousel > div > div:nth-child(1) > div:nth-child(1) > div > div > div > p'
}//#recommended-item-carousel > div > div.item.active > div:nth-child(1) > div > div > div > p
// 
export const cart = {
    allh4TitleProducts: 'tbody > tr > .cart_description > h4',
    allPPriceTitleProducts:'tbody > tr > .cart_price > p',
    sectionCartItems: '.cart_items',
    tdFirstProduct: 'tbody > tr:first-child > td:last-child ',
    tdSecondProduct: 'tbody > tr:nth-child(2)> td:last-child' ,
    tdThirdProduct: 'tbody > tr:nth-child(3) > td:last-child',
    tdLastProduct: 'tbody > tr:last-child > td:last-child',
    h4FirstProductTitle: 'tbody > tr:first-child > td.cart_description > h4',
    pPriceFirstProduct: 'tbody > tr:first-child > td.cart_price > p',
    buttonQuantityFirstProduct: 'tbody > tr:first-child > td.cart_quantity > button',
    h4SecondProductTitle: 'tbody > tr:nth-child(2) > td.cart_description > h4',
    pPriceSecondProduct: 'tbody > tr:nth-child(2) > td.cart_price > p',
    buttonQuantitySecondProduct: 'tbody > tr:nth-child(2) > td.cart_quantity > button',
    buttonProceedtoCheckout:'.col-sm-6 > .btn',
    linkRegisterOrLogin: '.modal-body > :nth-child(2) > a > u', 
    buttonContinueOnCart:'.modal-footer > .btn',
    textAreaForm: '.form-control',
    buttonPlaceOrder: ':nth-child(7) > .btn',
    // buttonDelete:'.cart_delete > .cart_quantity_delete',
    linkDelete: ' > a:first-child',
}
export const deleteCartItem ={

    

}
export const cartAddress={
    pAddressDetailHeader: ':nth-child(2) > .heading',
    pYourDeliveryAddressTitle:'#address_delivery > .address_title > .page-subheading',
    pYourDeliveryAddressFirstName:'#address_delivery > .address_firstname',
    pYourDeliveryAddressLastName: '#address_delivery > :nth-child(3)',
    pYourDeliveryAddresCompany: '#address_delivery > :nth-child(4)',
    pYourDeliveryAddressCity: '#address_delivery > .address_city',
    pYourDeliveryAddressCountryName: '#address_delivery > .address_country_name',
    pYourDeliveryAddressPhoneNumber:'#address_delivery > .address_phone',
    pYourBillingAddressHeader: ':nth-child(3) > .heading',
    pYourBillingAddressTitle: '#address_invoice > .address_title > .page-subheading',
    pYourBillingAddressFirstName: '#address_invoice  > .address_firstname',
    pYourBillingAddressLastName: '#address_invoice > :nth-child(3)',
    pYourBillingAddressCompany: '#address_invoice > :nth-child(4)',
    pYourBillingAddressCity:'#address_invoice  > .address_city',
    pYourBillingAddresCountryName:'#address_invoice > .address_country_name',
    pYourBillingAddresPhoneNumber:'#address_invoice  > .address_phone'
    }
export const cartPayment ={
    pHeading: '.heading',
    pNameOnCard: ':nth-child(2) > .col-sm-12 > .control-label',
    inputNameOnCard: ':nth-child(2) > .col-sm-12 > .form-control',
    pCardNumber:':nth-child(3) > .col-sm-12 > .control-label',
    inputCardNumber:':nth-child(3) > .col-sm-12 > .form-control',
    pCVC:'.cvc > .control-label',
    inputCVC: '.cvc > .form-control',
    pExpiration: '.cvc > .form-control',
    inputExpirationMonth:':nth-child(2) > .form-control',
    inputExpirationYear: ':nth-child(3) > .form-control',
    buttonPayConfirmOrder: '#submit',
    alertSuccessMessage:'#success_message > .alert-success'
}
export const paymentDone ={
   pOrderPlaced: '.title > b',
   pSuccesfullMessage: '.col-sm-9 > p',
   buttonDoanloadInvoice: '.col-sm-9 > .btn-default',
   buttonContinue: '.pull-right > .btn'
}
export const subscriptionSection =
{
    h2Subscription: '.single-widget > h2:nth-child(1)',    
    inputSubscriptionEmail: '#susbscribe_email',
    buttonSubscribe: '#subscribe',
    alertMessageofSuccess: '.alert-success'
}

export const testCases ={
    registerUser: '.panel-group:nth-child(2) .panel > .panel-heading > .panel-title > a'

 }