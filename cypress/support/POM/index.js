
import {StoreRecommendedReWriteJson, StoreProductReWriteJson, StoreProductPushJson} from './Products/ProductsStoreInformation'
import {AddProducts} from './Products/ProductsAddItems'
import {VerifyProductsGeneral, DeleteProducts, VerifyProductsRecommended} from '../POM/Cart/Cart'
import {RegisterUser} from './RegisterUsers/RegisterUser'

//DO NOT ADD THE "DEFAULT" value to any of new class
export const addProducts = new AddProducts();

export const storeProductReWriteJson = new StoreProductReWriteJson();
export const storeProductPushJson = new StoreProductPushJson();
export const storeRecommendedReWriteJson = new StoreRecommendedReWriteJson();
export const verifyProductsGeneral = new VerifyProductsGeneral();
export const verifyProductsRecommended = new VerifyProductsRecommended();
export const deleteProducts = new DeleteProducts();
export const registerUser = new RegisterUser();