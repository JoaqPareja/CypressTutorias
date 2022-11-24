const { defineConfig } = require("cypress");


module.exports = defineConfig({
  projectId: 'zs8v5h', 
  e2e: {
    projectId: 'zs8v5h',
    viewportWidth: 1980,
    viewportHeight: 1050,
    "supportFile": "cypress/support/commands.js",
    baseUrl: 'http://automationexercise.com',
    experimentalSessionAndOrigin: true,
   env:{

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
