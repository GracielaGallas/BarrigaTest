/// <reference types="cypress" />

import loc from '../../../support/locators'
import '../../../support/commandsAccount'

describe("all functional tests", () => {
    beforeEach(() => {
        const email = "email"
        const psw = "psw"
        cy.intercept({
            method: 'POST',
            url: '/signin'
        },
            {
                id: 2000,
                nome: 'fake user',
                token: 'something that is not a real token'
            }).as('signin')
        cy.intercept(
            {
                method: 'GET',
                url: '/saldo'
            },
            [
                {
                    conta_id: 123456,
                    conta: "Conta fake",
                    saldo: "123456"
                },
                {
                    conta_id: 789101,
                    conta: "Conta fake 2",
                    saldo: "654321"
                }
            ]
        ).as('saldo')
        cy.login(email, psw)
    })

    it('Should create a new account', () => {
        cy.fixture('barrigaData').then((dados) => {
            cy.intercept('GET', '/contas', [
                { id: 12345, nome: "old account", visivel: true, usuario_id: 12345 }
            ]).as('checkAccount')
            cy.accountsAccess()
            cy.intercept('POST', '/contas', {
                id: 12346,
                nome: dados.new_account,
                visivel: true,
                usuario_id: 12345
            }).as('addAccount')
            cy.intercept('GET', '/contas', [
                { id: 12345, nome: "old account", visivel: true, usuario_id: 12345 },
                { id: 12346, nome: dados.new_account, visivel: true, usuario_id: 12345 }
            ]).as('newAccountVision')

            cy.insertAccount(dados.new_account)
            cy.get(loc.MESSAGE).should('contain', dados.msg_sucessful)
            cy.contains('td', dados.new_account).should('exist')
        })
    })

    it('Should change an account', () => {
        cy.fixture('barrigaData').then((dados) => {
            const account = { id: 12345, nome: dados.new_account, visivel: true, usuario_id: 12345 }

            cy.intercept('GET', '/contas', (req) => {
                req.reply([account])
            }).as('firstView')
            cy.intercept('PUT', '/contas/12345', (req) => {
                account.nome = dados.transaction_account;
                req.reply(account);
            }).as('insertedAccount');

            cy.accountsAccess();
            cy.contains('td', dados.new_account).should('exist');

            cy.contains('td', dados.new_account)
                .parent('tr')
                .find('i.fa-edit')
                .click();

            cy.get(loc.ACCOUNTS_PAGE.NAME).clear().type(dados.transaction_account);
            cy.get(loc.ACCOUNTS_PAGE.BTN_SAVE).click();

            cy.get(loc.MESSAGE).should('contain', dados.msg_sucessful);
            cy.contains('td', dados.transaction_account).should('exist');
        });
    });

    it('Should try to add account with the same name', () => {
        // cy.fixture('barrigaData').then((dados) => {
        //     cy.accountsAccess()
        //     cy.insertAccount(dados.transaction_account)
        //     cy.get(loc.MESSAGE).should('contain', dados.msg_error)
        // })

    })

    it('Should add a transaction', () => {
        // cy.fixture('barrigaData').then((dados) => {
        //     cy.get(loc.MENU.TRANSACTION).click()
        //     cy.get(loc.TRANSACTION_PAGE.T_DESCRIPTION).type(dados.transaction_description)
        //     cy.get(loc.TRANSACTION_PAGE.T_VALUE).type(dados.transaction_value)
        //     cy.get(loc.TRANSACTION_PAGE.T_INTERESTED).type(dados.transaction_interested)
        //     cy.get(loc.TRANSACTION_PAGE.T_ACCOUNT).select(dados.transaction_account)
        //     cy.get(loc.TRANSACTION_PAGE.T_STATUS).click()
        //     cy.get(loc.TRANSACTION_PAGE.T_BTN_SAVE).click()
        //     cy.get(loc.MESSAGE).should('contain', dados.msg_sucessful)
        //     cy.get(loc.TRANSACTION_PAGE.T_TABLE).contains(dados.transaction_description)
        //         .parents('[data-test="mov-row"]')
        //         .should('contain', dados.transaction_description)
        // })
    })

    it('Should get balance', () => {
        // cy.fixture('barrigaData').then((dados) => {
        //     cy.get(loc.MENU.HOME).click()
        //     cy.contains('td', dados.transaction_account)
        //         .next()
        //         .invoke('text').then(t => t.replace(/\u00a0/g, ' ').trim())
        //         .should('contain', 'R$ 5.000,00')
        // })
    })

    it('Should delete a transaction', () => {
        // cy.fixture('barrigaData').then((dados) => {
        //     cy.get(loc.MENU.BALANCE).click()
        //     cy.contains('[data-test="mov-row"]', dados.transaction_description)
        //         .find('i.fa-trash-alt')
        //         .click()
        //     cy.get(loc.MESSAGE).should('contain', dados.msg_sucessful)
        // })

    })

    // it('should reset database', () => {
    //     cy.resetApp()
    // })


})



