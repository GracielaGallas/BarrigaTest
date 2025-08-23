/// <reference types="cypress"/>

describe("Work with alerts", ()=> {
    beforeEach(()=> {
        cy.visit("https://www.wcaquino.me/cypress/componentes.html")
    })


    it('Going back in time', ()=>{
        // cy.clock()
        // cy.get('#buttonNow').click()
        // cy.get('#resultado > span').should('contain', '01/01/1970')

        const dt = new Date(1977,11,4,19,0,0)
        cy.clock(dt.getTime())
        cy.get('#buttonNow').click()
        cy.get('#resultado > span').should('contain', '04/12/1977')
    })

    it.only('Goes to the future', ()=>{
        // cy.get('#buttonTimePassed').click()
        // //cy.get('#resultado > span').invoke('text').then(Number).should('gt',1755934715181)
        // cy.get('#resultado > span').invoke('text').should('gt','1755934715181')

        cy.clock()
        cy.get('#buttonTimePassed').click()
        cy.get('#resultado > span').invoke('text').then(Number).should('lte',0)
        // cy.wait(1000)
        // cy.get('#buttonTimePassed').click()
        // cy.get('#resultado > span').invoke('text').then(Number).should('lte',1000)

        cy.tick(5000)
        cy.get('#buttonTimePassed').click()
        cy.get('#resultado > span').invoke('text').then(Number).should('gte',5000)

        cy.tick(10000)
        cy.get('#buttonTimePassed').click()
        cy.get('#resultado > span').invoke('text').then(Number).should('gte',15000)

    })
})    