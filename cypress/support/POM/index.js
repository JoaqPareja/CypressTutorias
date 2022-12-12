
import { StoreRecommendedReWriteJson, StoreProductReWriteJson, StoreProductPushJson} from './Products/ProductsStoreInformation'
import {AddProducts} from './Products/ProductsAddItems'
import {VerifyProductsGeneral, DeleteProducts, VerifyProductsRecommended} from '../POM/Cart/Cart'
import {RegisterUser} from './RegisterUsers/RegisterUser'
import {ContactUs} from '../POM/ContactUs/ContactUs'
import {TestCases} from '../POM/TestCases/TestCases'
import {VerifyProductsExist} from '../POM/Products/VerifiyProductsExist'
import {SearchProducts} from '../POM/Products/SearchProduct'
import {SubscribeInHome} from '../POM/Subscription/SubscriptionInHomePage'
import {SubscribeInCart} from '../POM/Subscription/SubscriptionInCartPage'
//DO NOT ADD THE "DEFAULT" value to any of new class

export const addProducts = new AddProducts();
export const storeProductReWriteJson = new StoreProductReWriteJson();
export const storeProductPushJson = new StoreProductPushJson();
export const storeRecommendedReWriteJson = new StoreRecommendedReWriteJson();
export const verifyProductsGeneral = new VerifyProductsGeneral();
export const verifyProductsRecommended = new VerifyProductsRecommended();
export const deleteProducts = new DeleteProducts();
export const registerUser = new RegisterUser();
export const contactUs = new ContactUs();
export const testCases = new TestCases();
export const verifyProductsExist = new VerifyProductsExist();
export const searchProducts = new SearchProducts();
export const subscribeInHome = new SubscribeInHome();
export const subscribeInCart = new SubscribeInCart();