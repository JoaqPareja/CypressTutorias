
import {StoreRecommendedReWriteJson, StoreProductReWriteJson, StoreProductPushJson} from './Products/StoreInformation'
import {AddProducts} from './Products/AddItems'
import {VerifyProductsGeneral, DeleteProducts, VerifyProductsRecommended} from './Cart/Cart'; 
import {RegisterUser} from './RegisterUsers/RegisterUser'
import {ContactUs} from './ContactUs/ContactUs';
import {TestCases} from './TestCases/TestCases';
import {VerifyProductsExist} from './Products/VerifiyProductsExist';
import {SearchProducts} from './Products/SearchProduct';
import {SubscribeInHome} from './Subscription/SubscriptionInHomePage';
import {SubscribeInCart} from './Subscription/SubscriptionInCartPage';
import {StoreAllProduct, AddAllProducts} from './Products/AllProducts'
import {VerifyAllProducts} from './Cart/VerifyAllProduct'

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
export const storeAllProduct = new StoreAllProduct();
export const addAllProducts = new AddAllProducts();
export const verifyAllProducts = new VerifyAllProducts();