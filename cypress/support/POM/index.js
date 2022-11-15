
import {AddProducts, StoreProductInformation} from '../POM/Products'
import {VerifyProducts, DeleteProducts} from '../POM/Cart'
import {RegisterUser} from '../POM/RegisterUser'

//DO NOT ADD THE "DEFAULT" value to any of new class
export const addProducts = new AddProducts();

export const storeProductInformation = new StoreProductInformation();
export const verifyProducts = new VerifyProducts();
export const deleteProducts = new DeleteProducts();
export const registerUser = new RegisterUser();