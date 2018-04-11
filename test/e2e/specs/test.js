// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {

  'When the app starts I expect to be able to add a text field': function(browser) {
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.containsText('button#TextInput', 'Text Input')
      .end()


  }
}
