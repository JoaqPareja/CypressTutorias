const { defineConfig } = require("cypress");


module.exports = defineConfig({
  viewportWidth: 1980,
  viewportHeight: 1050,
  e2e: {
    "supportFile": "cypress/support/commands.js",
    baseUrl: 'http://automationexercise.com',
    experimentalSessionAndOrigin: true,
   
    // setupNodeEvents(on, config) {
    //   // implement node event listeners here
    // },
   
    
  }

});
