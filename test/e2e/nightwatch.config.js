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
      'username': '$SAUCE_USERNAME',
      'access_key': '$SAUCE_ACCESS_KEY',
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
    },
  
    'ie11': {
      'desiredCapabilities': {
        'browserName': 'internet explorer',
        'version': '11'
      }
    },
  
    'ie10': {
      'desiredCapabilities': {
        'browserName': 'internet explorer',
        'version': '10'
      }
    },
  
    'ie9': {
      'desiredCapabilities': {
        'browserName': 'internet explorer',
        'version': '9'
      }
    },
  
    'ie8': {
      'desiredCapabilities': {
        'browserName': 'internet explorer',
        'version': '8'
      }
    },
  
    'edge': {
      'desiredCapabilities': {
        'browserName': 'MicrosoftEdge'
      }
    },
  
    'safari': {
      'desiredCapabilities': {
        'browserName': 'Safari'
      }
    },
  
    'iphone6': {
      'deviceName': 'iPhone 6 Device',
      'platformName': 'iOS',
      'platformVersion': '8.0',
      'browserName': 'Safari',
      'appium-version': '1.5.1'
    },
    
    'android4.4': {
      'deviceName': 'Samsung Galaxy S5 Device',
      'platformName': 'Android',
      'platformVersion': '4.4',
      'browserName': 'Chrome',
      'name': 'S5 real device google.com'
    }
  }
}
