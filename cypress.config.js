const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://jsonplaceholder.typicode.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
