const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    retries: {
      runMode: 2, // Retry tests twice in 'cypress run' mode
      openMode: 1, // Retry tests once in 'cypress open' mode
    },

    reporter: 'mochawesome',
      reporterOptions: {
          reportDir: 'cypress/reports',
          overwrite: false,
          html: true,
          json: false,
    },
  
    specPattern: 'cypress/e2e/Specs/*.js'
  },


});
