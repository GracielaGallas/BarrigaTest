
import loc from './locators'


Cypress.Commands.add('accountsAccess',()=>{
    cy.get(loc.MENU.SETTINGS).click()
    cy.get(loc.MENU.ACCOUNTS).click()

})

Cypress.Commands.add('insertAccount', (account)=>{
    cy.get(loc.ACCOUNTS_PAGE.NAME).type(account)
    cy.get(loc.ACCOUNTS_PAGE.BTN_SAVE).click()    

})

