/// <reference types="cypress" />
import loc from '../../support/locators'

// ===== Selectors =====
const MODAL = loc.COOKIES.MODAL
const ACCEPT_ALL = loc.COOKIES.BUTTON_ACCEPT_ALL
const ACCEPT_NECESSARY = loc.COOKIES.BUTTON_ACCEPT_NECESSARY
// CTA "Jetzt Prämie sichern"
const PRAEMIE_BTN = loc.HOME_PAGE.PRAEMIE_BTN
// card conteiner
const CARD = loc.HOME_PAGE.CARD_CONTAINER

// ===== Helpers =====
function acceptCookies() {
    cy.get(MODAL, { timeout: 10000 })
        .should('be.visible')
        .then(($modal) => {
            const hasAll = $modal.find(ACCEPT_ALL).length > 0
            const sel = hasAll ? ACCEPT_ALL : ACCEPT_NECESSARY

            cy.wrap($modal)
                .find(sel)
                .first()
                .should('be.visible')
                .scrollIntoView()
                .click({ force: true })
        })

    cy.get(MODAL, { timeout: 8000 }).should('not.exist')
}

// ===== Tests =====
describe('Homepage', () => {
    beforeEach(() => {
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.visit('https://thg.dev.aws.onpier.de/')
        acceptCookies()
    })

    it('check the availability of the 3 buttons for prämie', () => {
        //check if the buttons exist
        cy.get(PRAEMIE_BTN).filter(':visible').as('praemie').should('have.length', 3)

        // check if they are visible
        cy.get('@praemie').each(($b) => {
            cy.wrap($b).scrollIntoView().should('be.visible').and('be.enabled')
        })

        // check if each button it's in a card
        cy.get('@praemie').then(($btns) => {
            const btns = Cypress.$.makeArray($btns)
            const cards = btns.map((b) => b.closest(CARD))
            expect(cards.every(Boolean), 'each button in one card').to.be.true
            expect(new Set(cards).size, 'different cards').to.eq(btns.length)
        })
    })

    it('check first item in the accordion', () => {
        cy.get(loc.HOME_PAGE.FIRST_ACCORDEON_BTN).click()
        cy.get(loc.HOME_PAGE.FIRST_ACCORDEON_CONTENT)
            .invoke('text')
            .then(t => expect(t.trim().length).to.be.gt(10))

    })

    it('check second item in the accordion', () => {
        cy.get(loc.HOME_PAGE.SECOND_ACCORDEON_BTN).click()
        cy.get(loc.HOME_PAGE.SECOND_ACCORDEON_CONTENT)
            .invoke('text')
            .then(t => expect(t.trim().length).to.be.gt(10))

    })

    it('check third item in the accordion', () => {
        cy.get(loc.HOME_PAGE.THIRD_ACCORDEON_BTN).click()
        cy.get(loc.HOME_PAGE.THIRD_ACCORDEON_CONTENT)
            .invoke('text')
            .then(t => expect(t.trim().length).to.be.gt(10))

    })

    it('check fourth item in the accordion', () => {
        cy.get(loc.HOME_PAGE.FOURTH_ACCORDEON_BTN).click()
        cy.get(loc.HOME_PAGE.FOURTH_ACCORDEON_CONTENT)
            .invoke('text')
            .then(t => expect(t.trim().length).to.be.gt(10))

    })

    it('check fifth item in the accordion', () => {
        cy.get(loc.HOME_PAGE.FIFTH_ACCORDEON_BTN).click()
        cy.get(loc.HOME_PAGE.FIFTH_ACCORDEON_CONTENT)
            .invoke('text')
            .then(t => expect(t.trim().length).to.be.gt(10))

    })

    it('check the link to all questions', () => {
        cy.get(loc.HOME_PAGE.ALL_QUESTIONS_BTN)
            .first()
            .closest('a[href]')
            .should('have.attr', 'href', '/faq')
            .and('have.attr', 'target', '_blank');
    })

    it('Should check the footer - Impressum', () => {
        cy.get('[_ngcontent-ng-c3528053195=""] > [data-selenium="-item-0"]').click()
        cy.contains(/Impressum/i).should('be.visible')
        cy.get('[data-selenium="closing-icon"]').click()
        cy.get('app-info-modal dialog[open]').should('not.exist')
    })

    it('Should check the footer - Terms of Use', ()=>{
        cy.get('[_nghost-ng-c1611677263=""] > [data-selenium="-item-1"]').click()
        cy.contains(/Nutzungsbedingungen/i).should('be.visible')
        cy.get('[data-selenium="closing-icon"]').click()
        cy.get('app-info-modal dialog[open]').should('not.exist')
    })

    it.only('Should check the footer - Data protection Information', ()=>{
        cy.get('[_nghost-ng-c1611677263=""] > [data-selenium="-item-2"]').click()
        cy.contains(/Datenschutzinformation/i).should('be.visible')
        cy.get('[data-selenium="closing-icon"]').click()
        cy.get('app-info-modal dialog[open]').should('not.exist')
    })

})


// it('Should change an account', () => {
//     cy.fixture('barrigaData').then((dados) => {
//         cy.accountsAccess()
//         cy.contains('td', dados.new_account).parent('tr').find('i.fa-edit').click()
//         cy.get(loc.ACCOUNTS_PAGE.NAME).clear().type(dados.transaction_account)
//         cy.get(loc.ACCOUNTS_PAGE.BTN_SAVE).click()
//         cy.get(loc.MESSAGE).should('contain', dados.msg_sucessful)

//     })
// })

// it('Should try to add account with the same name', () => {
//     cy.fixture('barrigaData').then((dados) => {
//         cy.accountsAccess()
//         cy.insertAccount(dados.transaction_account)
//         cy.get(loc.MESSAGE).should('contain', dados.msg_error)
//     })

// })

// it('Should add a transaction', () => {
//     cy.fixture('barrigaData').then((dados) => {
//         cy.get(loc.MENU.TRANSACTION).click()
//         cy.get(loc.TRANSACTION_PAGE.T_DESCRIPTION).type(dados.transaction_description)
//         cy.get(loc.TRANSACTION_PAGE.T_VALUE).type(dados.transaction_value)
//         cy.get(loc.TRANSACTION_PAGE.T_INTERESTED).type(dados.transaction_interested)
//         cy.get(loc.TRANSACTION_PAGE.T_ACCOUNT).select(dados.transaction_account)
//         cy.get(loc.TRANSACTION_PAGE.T_STATUS).click()
//         cy.get(loc.TRANSACTION_PAGE.T_BTN_SAVE).click()
//         cy.get(loc.MESSAGE).should('contain', dados.msg_sucessful)
//         cy.get(loc.TRANSACTION_PAGE.T_TABLE).contains(dados.transaction_description)
//             .parents('[data-test="mov-row"]')
//             .should('contain', dados.transaction_description)
//     })
// })

// it('Should get balance', () => {
//     cy.fixture('barrigaData').then((dados) => {
//         cy.get(loc.MENU.HOME).click()
//         cy.contains('td', dados.transaction_account)
//             .next()
//             .invoke('text').then(t => t.replace(/\u00a0/g, ' ').trim())
//             .should('contain', 'R$ 5.000,00')
//     })
// })

// it('Should delete a transaction', () => {
//     cy.fixture('barrigaData').then((dados) => {
//         cy.get(loc.MENU.BALANCE).click()
//         cy.contains('[data-test="mov-row"]', dados.transaction_description)
//             .find('i.fa-trash-alt')
//             .click()
//         cy.get(loc.MESSAGE).should('contain', dados.msg_sucessful)
//     })

// })

// it('should reset database', () => {
//     cy.resetApp()
// })






