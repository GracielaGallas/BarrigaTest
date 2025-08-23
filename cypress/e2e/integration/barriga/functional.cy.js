/// <reference types="cypress"/>

import loc from '../../../support/locators'

describe("all functional tests", () => {
  beforeEach(() => {
    cy.visit("https://barrigareact.wcaquino.me/")
    cy.fixture('barrigaData').then((dados) => {
      cy.get(loc.LOGIN.USER).type(dados.email)
      cy.get(loc.LOGIN.PASSWORD).type(dados.psw)
      cy.get(loc.LOGIN.BTN_LOGIN).click()
      cy.get(loc.MESSAGE).should('contain', 'Bem vindo')
      
    })
  })
 
    it('Should create a new account', ()=>{

        cy.get(loc.MENU.SETTINGS).click()
        cy.get(loc.MENU.ACCOUNTS).click()
        cy.get(loc.ACCOUNTS_PAGE.NAME).type('conta Graciela')
        cy.get(loc.ACCOUNTS_PAGE.BTN_SAVE).click()
        cy.get(loc.MESSAGE).should('contain', 'inserida com sucesso')
    
    })  

    it('Should change an account', ()=>{
        
        cy.get(loc.MENU.SETTINGS).click()
        cy.get(loc.MENU.ACCOUNTS).click()
        cy.contains('td', 'conta Graciela').parent('tr').find('i.fa-edit').click()
        cy.get(loc.ACCOUNTS_PAGE.NAME).clear().type('conta Graciela Alterada')
        cy.get(loc.ACCOUNTS_PAGE.BTN_SAVE).click()
        cy.get(loc.MESSAGE).should('contain', 'sucesso')

    })
    
})


         
