module.exports = {
  'pure func': function (client) {
    client
      .url('http://localhost:8080/examples/pure-func/')
      .waitForElementVisible('body', 1000)
      .assert.count('div', 2)
      .assert.containsText('div:nth-child(1)', '3')
      .assert.containsText('div:nth-child(2)', '3')
      .end()
  }
}
