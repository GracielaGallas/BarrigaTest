/// <reference types="cypress"/>

describe("Dynamic tests", ()=> {
    beforeEach(()=> {
        cy.visit("https://www.wcaquino.me/cypress/componentes.html")
    })

    const foods = ['carne','frango', 'pizza', 'vegetariano']
    foods.forEach(food =>{
        it(`Cadastro com comida ${food}`, ()=>{

        cy.get('#formNome').type('usuario')
        cy.get('[data-cy="dataSobrenome"]').type('qualquer')
        cy.get(`[name=formSexo][value=F]`).click()
        cy.get(`[name="formComidaFavorita"][value="${food}"]`).check() // ou .click()
        cy.get('#formEscolaridade').select('Especializacao')
        cy.get('#formEsportes').select('Corrida')
        cy.get('#formCadastrar').click()
        cy.get('#resultado > :nth-child(1)').should('contain', 'Cadastrado!') 
        })  
    })  
})    