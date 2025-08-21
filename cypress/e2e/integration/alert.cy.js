/// <reference types="cypress"/>

describe("Work with alerts", ()=> {
    beforeEach(()=> {
        cy.visit("https://www.wcaquino.me/cypress/componentes.html")
    })

    it('Alert', ()=> {
        cy.get('#alert').click()
        cy.on('window:alert', msg =>{
            console.log(msg)
            expect(msg).equal('Alert Simples')
        })
    })

 })   