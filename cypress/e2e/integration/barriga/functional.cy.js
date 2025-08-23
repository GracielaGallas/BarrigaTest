/// <reference types="cypress"/>

describe("all functional tests", () => {
  beforeEach(() => {
    cy.visit("https://barrigareact.wcaquino.me/")
    cy.fixture('barrigaData').then((dados) => {
      cy.get('[data-test="email"]').type(dados.email)
      cy.get('[data-test="passwd"]').type(dados.psw)
      cy.get('.btn').click()
      
    })
  })
    it('Check login', ()=>{

        cy.get('.toast-message').should('contain', 'Bem vindo')

      })


    it('Should create a new account', ()=>{

        cy.get('[data-test="menu-settings"]').click()
        cy.get('[href="/contas"]').click()
        cy.get('[data-test="nome"]').type('rent')
        cy.get('.btn').click()
        cy.get('.toast-message').should('contain', 'inserida com sucesso')
    
    })  
    
})


         
