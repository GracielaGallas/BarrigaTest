/// <reference types="cypress"/>

describe("Cypress basics", ()=>{
    it("Should visit a page and assert title", ()=> {
        cy.visit("https://www.wcaquino.me/cypress/componentes.html")

        cy.pause()    

        cy.title()
        .should("equal","Campo de Treinamento")
        .and("contain","Campo")

        //TODO imprimir o log no console
        //TODO escrever o titulo no campo de texto
        
    })

    it("Should find an interact with an element", ()=> {
        cy.visit("https://www.wcaquino.me/cypress/componentes.html")
        cy.get('#buttonSimple')
        .click()
        .should('have.value', "Obrigado!")
        
    })
})