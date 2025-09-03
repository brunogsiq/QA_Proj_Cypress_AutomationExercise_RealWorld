const { defineConfig } = require("cypress");

module.exports = defineConfig(
{
    viewportWidth: 1300,
    viewportHeight: 800,
    video: true,
    chromeWebSecurity: false,
    e2e: {
        defaultCommandTimeout: 9000,
        experimentalRunAllSpecs: true,
        hideXHRInCommandLog: true,
        baseUrl: "https://www.automationexercise.com/",
        //Aqui ficarão todos os meus testes:
        setupNodeEvents(on, config) {
          // implement node event listeners here
        },
    },
});