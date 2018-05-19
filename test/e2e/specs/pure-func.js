module.exports = {
  'pure func': function (client) {
    client
      .url('http://localhost:8080/examples/pure-func/')
      .waitForElementVisible('body', 1000)
      .assert.containsText('#first', '3')
      .assert.containsText('#second', '3')
      .end()
  }
}
