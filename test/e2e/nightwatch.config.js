// http://nightwatchjs.org/guide#settings-file
module.exports = {
  'src_folders': ['test/e2e/specs'],
  'output_folder': 'test/e2e/reports',
  'custom_commands_path': ['node_modules/nightwatch-helpers/commands'],
  'custom_assertions_path': ['node_modules/nightwatch-helpers/assertions'],
  
  test_workers: {
    enabled: true,
    workers: 'auto'
  },
  
  'selenium': {
    'start_process': !process.env.TRAVIS_JOB_NUMBER, // no start when travis
    'server_path': require('selenium-server').path,
    'host': '127.0.0.1',
    'port': 4445,
    'cli_args': {
      'webdriver.chrome.driver': require('chromedriver').path
      // , 'webdriver.gecko.driver': require('geckodriver').path
    }
  },
  
  'test_settings': {
    'default': {
      'selenium_port': 4445,
      'selenium_host': 'localhost',
      'username': 'nqdy666',
      'access_key': '11843f06-009f-4ad0-a4e3-16e705edaf32',
      'silent': true,
      'screenshots': {
        'enabled': true,
        'on_failure': true,
        'on_error': false,
        'path': 'test/e2e/screenshots'
      },
      'desiredCapabilities': {
        'build': `build-${process.env.TRAVIS_JOB_NUMBER}`,
        'passed': true,
        'public': 'public',
        'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER
      }
    },
    
    'chrome': {
      'desiredCapabilities': {
        'browserName': 'chrome',
        'javascriptEnabled': true,
        'acceptSslCerts': true
      }
    },
    
    'firefox': {
      'desiredCapabilities': {
        'browserName': 'firefox',
        'javascriptEnabled': true,
        'acceptSslCerts': true,
        'marionette': true
      }
    },
    
    'phantomjs': {
      'desiredCapabilities': {
        'browserName': 'phantomjs',
        'javascriptEnabled': true,
        'acceptSslCerts': true
      }
    }
  }
}
