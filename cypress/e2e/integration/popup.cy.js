/// <reference types="cypress"/>

describe("Work with Popup", ()=> {

     it('Deve testar popup diretamente', () => {
        cy.visit('https://wcaquino.me/cypress/frame.html')        
        cy.get('#otherButton').click()
        cy.on('window:alert', msg => {
            expect(msg).to.be.equal('Click OK!')
        })
     })

    it.only('Deve verificar se o popup foi invocado', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.window().then(win=>{
            cy.stub(win, 'open').as('winOpen')
        })
        cy.get('#buttonPopUp').click()
        cy.get('@winOpen').should('be.called')
    })

   
    
})    

    

