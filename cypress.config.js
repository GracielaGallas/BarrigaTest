// cypress.config.js
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://barrigarest.wcaquino.me',

    video: true,
    screenshotOnRunFailure: true,
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos',
    videoCompression: 32,
    trashAssetsBeforeRuns: true, 

    setupNodeEvents(on, config) {
      return config
    },
  },
})
