# playwright-api-testing
Basic examples of using TypeScript with PlayWright doing REST API testing

Steps to install:
- Install Node.js on your machine using this link: https://nodejs.org/en
- Install Visual Studio Code: https://code.visualstudio.com/
- (optional) Add extensions for TypeScript and Playwright to better coding experience: https://code.visualstudio.com/docs/getstarted/extensions

Once you have both installed, open your visual studio code and use it's terminal to initialized a new node project:
- first, create your project folder (use the exact name otherwise you would need to reconfigure the settings): 'mkdir playwright-api-project'
- enter to this folder: 'cd playwright-api-project'
- initialize node project, this step will create package.json file with default settings: 'npm init -y'
- install typescript: 'npm install typescript @types/node --save-dev'
- (optional) configure npm to skip SSL verification (can be useful to avoid technical problems in some cases): 'npm config set strict-ssl false'
- install playwright: 'npm install playwright --save-dev'
- configure typescript: 'npx tsc --init'
This will generate a tsconfig.json file, overwrite it with the tsconfig.json file in this repositiory.
- install PlayWright test runner: 'npm install @playwright/test --save-dev'
- download the playwright.config.ts file from this repository into your project folder.
- download source code, typesciprt files needs to be in the src folder as in this repository (you can skip package.json file as you should have your onw)

To build and execute, follow run these commands in your terminal in the project folder:
- first, compile your code: 'npx tsc'
- execute test cases: 'npx playwright test'
- if all passed, you need to open the HTML report to see the detailed results: 'npx playwright show-report'
- if any of the test cases failed, shoot me a message/e-mail and I will help to make it passed.
