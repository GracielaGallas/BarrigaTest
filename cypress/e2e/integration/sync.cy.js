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

    it('Should retry', ()=>{
       
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('exist')
        
    })

    it("Find Usage", ()=>{
        
        cy.get('#buttonList').click()
        cy.get('#lista li')
            .find('span')
            .should('contain', 'Item 1')
        
        cy.get('#lista li')
            .find('span')
            .should('contain', 'Item 2')    

    })

    it("Find DOM", ()=>{
        
        cy.get('#buttonListDOM').click()
        cy.get('#lista li')
            .find('span')
            .should('contain', 'Item 1')
        
        cy.get('#lista li')
            .find('span',{timeout:4000})
            .should('contain', 'Item 2')    

    })

    it('Timeout Usage', ()=>{
        cy.get('#buttonDelay').click()
       // cy.wait(5000)
        cy.get('#novoCampo').should('exist')
    })

    it('Timeout check', ()=>{
        cy.get('#buttonListDOM').click()
        cy.get('#lista li')
            .find('span')
            .should('have.length', 2)
    })

    it('Click retry',()=> {

        cy.get('#buttonCount')
        .click()
        .should('have.value', '11')
    })

    it.only('Should Vs Then', ()=>{
        cy.get('#buttonListDOM').then($el => {
                expect($el).to.have.length(1)
                cy.get('#buttonList')
            })

    })
})

