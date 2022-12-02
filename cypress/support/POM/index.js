
import {StoreProductInformationReWriteJson, StoreProductInformationPushJson} from './ProductsStoreInformation'
import {AddProducts} from '../POM/ProductsAddItems'
import {VerifyProducts, DeleteProducts} from '../POM/Cart'
import {RegisterUser} from '../POM/RegisterUser'

//DO NOT ADD THE "DEFAULT" value to any of new class
export const addProducts = new AddProducts();

export const storeProductInformationReWriteJson = new StoreProductInformationReWriteJson();
export const storeProductInformationPushJson = new StoreProductInformationPushJson();
export const verifyProducts = new VerifyProducts();
export const deleteProducts = new DeleteProducts();
export const registerUser = new RegisterUser();