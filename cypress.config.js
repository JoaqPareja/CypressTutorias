const { defineConfig } = require("cypress");


module.exports = defineConfig({
  e2e: {
    "supportFile": "cypress/support/commands.js",
    baseUrl: 'http://automationexercise.com'
    // setupNodeEvents(on, config) {
    //   // implement node event listeners here
    // },
    
  },
});
