# WebDriverIO - Automation tests with JavaScript-Node.js-Page Object Design Pattern

Design Page Objects and run Tests

## Run application

Clone the repository

```bash
git clone https://github.com/JayKishoreDuvvuri/WebdriverIO
```

Install dependencies

```bash
Install Node modules with command : npm i
```

Start Selenium Server

```bash
Install Selenium standalone: npm i -D selenium-standalone
Install web drivers: npx selenium-standalone install
Start selenium server before running the test with command : npm run selenium-server (OR) npx selenium-standalone start
```

Run test

```bash
npm run test (OR) npm test                   #For sequential Execution of tests
npm test -- --spec ./test/homePage.test.js   #For running individual test
(OR)
npm test -- --spec=homePage.test.js          #For running individual test
```

Folder Structure

    ├── ...
    │
    ├── pages                        # Generic functionality for tests
    |   |
    │   ├── basePage.js              # Base page testing functionality
    |   ├── homePage.js              # Login page testing functionality
    |   ├── hotelsPage.js            # Hotels page testing functionality
    |   ├── hotelSearchPage.js       # Hotel search page testing functionality
    |   ├── hotelSelectionPage.js    # Hotel selection page testing functionality
    |
    |
    ├── test                         # Test suite
    │    ├── homePage.test.js        # Automated Test Script
    |    ├── hotels.test.js          # Automated Test Script
    │ 
    |
    ├── utils                        # Utility files for testing
    │    ├──locators.js              # HTML and CSS identifier for elements to test
    |
    |
    ├── allure-results               # allure generate {Directory} [on terminal]
    |
    ├── allure-report                # allure open                 [on terminal]
    |
    └─── errorShots                  # Screenshot captured for failed tests

Generate Allure Test Report

```bash
Run on Terminal :
        |
        ├── allure generate --clean
        |
        ├── allure generate C:/Users/{username}/Desktop/WebdriverIO-Project/allure-results
        |
        ├── allure open
```
