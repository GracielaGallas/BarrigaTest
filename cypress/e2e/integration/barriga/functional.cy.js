/// <reference types="cypress"/>

import loc from '../../../support/locators'
import '../../../support/commandsAccount'

describe("all functional tests", () => {
    beforeEach(() => {
        const email = Cypress.env('email')
        const psw = Cypress.env('psw')
        cy.login(email, psw)
    })

    it('Should create a new account', () => {
        cy.fixture('barrigaData').then((dados) => {
            cy.accountsAccess()
            cy.insertAccount(dados.new_account)
            cy.get(loc.MESSAGE).should('contain', dados.msg_sucessful)

        })
    })

    it('Should change an account', () => {
        cy.fixture('barrigaData').then((dados) => {
            cy.accountsAccess()
            cy.contains('td', dados.new_account).parent('tr').find('i.fa-edit').click()
            cy.get(loc.ACCOUNTS_PAGE.NAME).clear().type(dados.transaction_account)
            cy.get(loc.ACCOUNTS_PAGE.BTN_SAVE).click()
            cy.get(loc.MESSAGE).should('contain', dados.msg_sucessful)

        })
    })

    it('Should try to add account with the same name', () => {
        cy.fixture('barrigaData').then((dados) => {
            cy.accountsAccess()
            cy.insertAccount(dados.transaction_account)
            cy.get(loc.MESSAGE).should('contain', dados.msg_error)
        })

    })

    it('Should add a transaction', () => {
        cy.fixture('barrigaData').then((dados) => {
            cy.get(loc.MENU.TRANSACTION).click()
            cy.get(loc.TRANSACTION_PAGE.T_DESCRIPTION).type(dados.transaction_description)
            cy.get(loc.TRANSACTION_PAGE.T_VALUE).type(dados.transaction_value)
            cy.get(loc.TRANSACTION_PAGE.T_INTERESTED).type(dados.transaction_interested)
            cy.get(loc.TRANSACTION_PAGE.T_ACCOUNT).select(dados.transaction_account)
            cy.get(loc.TRANSACTION_PAGE.T_STATUS).click()
            cy.get(loc.TRANSACTION_PAGE.T_BTN_SAVE).click()
            cy.get(loc.MESSAGE).should('contain', dados.msg_sucessful)
            cy.get(loc.TRANSACTION_PAGE.T_TABLE).contains(dados.transaction_description)
                .parents('[data-test="mov-row"]')
                .should('contain', dados.transaction_description)
        })
    })

    it('Should get balance', () => {
        cy.fixture('barrigaData').then((dados) => {
            cy.get(loc.MENU.HOME).click()
            cy.contains('td', dados.transaction_account)
                .next()
                .invoke('text').then(t => t.replace(/\u00a0/g, ' ').trim())
                .should('contain', 'R$ 5.000,00')
        })
    })

    it('Should delete a transaction', () => {
        cy.fixture('barrigaData').then((dados) => {
            cy.get(loc.MENU.BALANCE).click()
            cy.contains('[data-test="mov-row"]', dados.transaction_description)
                .find('i.fa-trash-alt')
                .click()
            cy.get(loc.MESSAGE).should('contain', dados.msg_sucessful)
        })

    })

    it('should reset database', () => {
        cy.resetApp()
    })


})



