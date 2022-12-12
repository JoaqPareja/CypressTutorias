import {header, testCases} from '../Consts'

class TestCases {
elements = {
   testCasesButton: ()=> cy.get(header.linkTestCAses),
   registerUserButton: () => cy.get(testCases.registerUser),
}
clickTestCases(){
    this.elements.testCasesButton().click();
}
clickRegisterUser(){
    this.elements.registerUserButton().click();
}

}

module.exports ={
    TestCases
}