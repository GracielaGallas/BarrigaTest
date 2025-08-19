/// <reference types="cypress"/>

describe("Work with basic elements", ()=> {
    beforeEach(()=> {
        cy.visit("https://www.wcaquino.me/cypress/componentes.html")
    })

    it("Text", ()=>{
        
       // cy.get("span").should("contain", "Cuidado" )
        cy.get('.facilAchar').should("contain", "Cuidado" )
        cy.get('.facilAchar').should("have.text", "Cuidado onde clica, muitas armadilhas..." )
    }
)
    it("link", ()=>{
        
        cy.get('[href="#"]').click()
        cy.get('#resultado').should('have.text', "Voltou!")
        cy.reload()
        cy.get('#resultado').should('have.not.text', "Voltou!")
        cy.contains('Voltar').click()
        cy.get('#resultado').should('have.text', "Voltou!")
    })

    it("textFields", ()=> {
        cy
            .get('#formNome')
            .type("Graciela")
            .should('have.value', "Graciela")

        //cy.get('#formNome').should('have.value', "Graciela")

        cy
            .get('[data-cy="dataSobrenome"]')
            .type("Gallas")
            .should('have.value', "Gallas")   

        cy
            .get('#elementosForm\\:sugestoes')
            .type("nao tenho")
            .should('have.value', "nao tenho")

         cy
            .get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input')
            .clear()
            .type("nao tenho")
            .should('have.value', "nao tenho")

        cy
            .get('#elementosForm\\:sugestoes')
            .clear()
            .type("nao tenho{selectall}acerto", {delay:100})
            .should('have.value', "acerto")

    })

    it('radioButton', ()=>{
        cy
            .get('#formSexoFem')
            .check()
            .should('be.checked')
         
        cy
            .get('#formSexoMasc')
            .should('not.be.checked')   

        cy.get("[name=formSexo]").should('have.length', 2) 
    })

    it('CheckBox', ()=>{
        cy
            .get('#formComidaCarne')
            .click()
            .should('be.checked')
        cy
            .get('[name=formComidaFavorita]')
            .click({multiple : true})   
        cy
            .get('#formComidaCarne')
            .should('not.be.checked')
        cy
            .get('#formComidaVegetariana')
            .should('be.checked')    
    })

    it('ComboBox', ()=> {
        cy
            .get('[data-test="dataEscolaridade"]')
            .select('especializacao')
            .should('have.value', 'especializacao')
        //TODO validar as opcoes do combo    
    })

    it('Multiple ComboBox',()=>{
        cy
            .get('[data-testid="dataEsportes"]')
            .select(['natacao', 'Corrida'])
        //TODO validar as opcoes selecionadas
    })
})