/// <reference types="cypress"/>

describe('Waiting...', ()=>{

    beforeEach(()=> {
        cy.visit("https://www.wcaquino.me/cypress/componentes.html")
    })

    it('Should wait element be available', ()=>{
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo').should('exist')
        cy.get('#novoCampo').type('it works')

    })

    it.only('Should retry', ()=>{
       
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('exist')
        

    })
})

