/// <reference types="cypress"/>

import loc from '../../../support/locators'
import '../../../support/commandsAccount'

describe("all functional tests", () => {
  beforeEach(() => {
     cy.fixture('barrigaData').then((dados) => {
      cy.login(dados.email, dados.psw)
     })
  })
 
    it('Should create a new account', ()=>{
        cy.accountsAccess()
        cy.insertAccount('conta Graciela')
        cy.get(loc.MESSAGE).should('contain', 'inserida com sucesso')
    
    })  

    it('Should change an account', ()=>{
        cy.accountsAccess()
        cy.contains('td', 'conta Graciela').parent('tr').find('i.fa-edit').click()
        cy.get(loc.ACCOUNTS_PAGE.NAME).clear().type('conta Graciela Alterada')
        cy.get(loc.ACCOUNTS_PAGE.BTN_SAVE).click()
        cy.get(loc.MESSAGE).should('contain', 'sucesso')

    })

    it('Should try to add account with the same name', ()=>{
        cy.accountsAccess()
        cy.insertAccount('conta Graciela Alterada')
        cy.get(loc.MESSAGE).should('contain', 'Request failed')
    
    })
    
    it('should reset database',()=>{
        cy.resetApp() 
    })
    
    
})


         
