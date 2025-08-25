// cypress.config.js
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://barrigarest.wcaquino.me',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})


