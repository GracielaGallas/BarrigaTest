# BarrigaTest
 Test application created to practice Cypress.
 Using https://barrigareact.wcaquino.me
 The test will have 3 levels: 
 - Functional tests
 - Backend tests (API)
 - Frontend tests
 
## test scope
 - Insert new account
 - Change account
 - Attempt to insert duplicate account
 - Insert transaction
 - Calculate balance
 - Remove a transaction


 # 🚀 Getting Started with Cypress Tests

This project contains automated tests written in [Cypress](https://www.cypress.io/).  
Follow the steps below to set up and run the tests locally:

1. Clone the repo  
   git clone git@github.com:your-username/your-repo.git  
   cd your-repo  

2. Install dependencies  
   npm install  

3. Create `cypress.env.json` at the root (⚠️ do not commit this file; add it to `.gitignore`)  
   {
     "email": "your.email@example.com",
     "psw": "yourPassword"
   }

4. Run the tests  
   - Open Test Runner:  
     npm run cypress:open  
   - Run in headless mode:  
     npx cypress run  
