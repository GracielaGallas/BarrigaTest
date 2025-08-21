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

    it('Alert with Mock', ()=> {
        const stub = cy.stub().as('alerta')
        cy.get('#alert').click()
        cy.on('window:alert', stub)
        cy.get('#alert').click().then(()=>{
            expect(stub.getCall(0)).to.be.calledWith('Alert Simples')
            })
        
        })
     
    it('Confirm', ()=> {
        cy.get('#confirm').click()
        cy.on('window:confirm', msg =>{
            expect(msg).equal('Confirm Simples')
        })
          cy.on('window:alert', msg =>{
            expect(msg).equal('Confirmado')
         })
        })

    it('Deny', ()=> {
        cy.get('#confirm').click()
        cy.on('window:confirm', msg =>{
            expect(msg).equal('Confirm Simples')
            return false
        })
          cy.on('window:alert', msg =>{
            expect(msg).equal('Negado')
         })
        })   
        
        
    it('Prompt', ()=> {
        cy.window().then(win=>{
            cy.stub(win, 'prompt').returns('42')
        })
        
        cy.on('window:confirm', msg =>{
            expect(msg).to.be.equal('Era 42?')
        })
        cy.on('window:alert', msg =>{
            expect(msg).equal(':D')
        })

         cy.get('#prompt').click()
        })


    })    
   