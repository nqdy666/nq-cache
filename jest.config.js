module.exports = {
  'collectCoverage': true,
  'collectCoverageFrom': [
    'src/**/*.js'
  ],
  'transform': {
    '^.+\\.js$': 'babel-jest'
  },
  'transformIgnorePatterns': [],
  'testRegex': '/test/.+\\.spec\\.js$',
  'moduleDirectories': [
    'node_modules',
    '<rootDir>',
    '<rootDir>/src'
  ],
  "setupFiles": ["jest-localstorage-mock"]
}
