const { defineConfig } = require("cypress");


module.exports = defineConfig({ 
  e2e: {
    viewportWidth: 1980,
    viewportHeight: 1050,
    "supportFile": "cypress/support/commands.js",
    baseUrl: 'http://automationexercise.com',
    experimentalSessionAndOrigin: true,
   env:{
    h2TxtPriceFirstProduct: '',
    pTxtTitleFirstProduct:'',
    h2TxtPriceSecondProduct:'',
    pTxtTitleSecondProduct:'',
    userName: '',
   }
   

    
//     setupNodeEvents(on, config) {
//       on('before:run', (details) => {
//         config
//         {
//       experimentalSessionAndOrigin: true,

//       })
//       on('after:run', (results) => {
//         config{
//         experimentalSessionAndOrigin: false,
//         }
//       })
// } 
}

});
