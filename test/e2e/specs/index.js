module.exports = {
  'pure func': function (client) {
    client
      .url('http://localhost:8080/examples/index.html')
      .waitForElementVisible('body', 1000)
      .assert.containsText('#pureFmRst01', '3')
      .assert.containsText('#pureFmRst02', '3')
      .end()
  },
  'promise function memory': function (client) {
    client
      .url('http://localhost:8080/examples/index.html')
      .pause(2500)
      .assert.containsText('#promiseFmRst01', 'hello')
      .assert.containsText('#promiseFmRst02', 'hello')
      .end()
  },
  'promise function session storage': function (client) {
    client
      .url('http://localhost:8080/examples/index.html')
      .pause(2500)
      .assert.containsText('#promiseFsRst01', 'hello')
      .assert.containsText('#promiseFsRst02', 'hello')
      .end()
  }
}
