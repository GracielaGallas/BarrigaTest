/// <reference types="cypress"/>

describe('helpers...', ()=> {
    it('wrap', ()=>{
        const obj = {nome: 'User', idade: '20'}
        expect(obj).to.have.property('nome')
        cy.wrap(obj).should('have.property', 'nome')

         cy.visit("https://www.wcaquino.me/cypress/componentes.html")
        // //cy.get('#formNome').type('funciona?')
        // cy.get('#formNome').then($el=>{
        //     //$el.val('funciona via Jquery')
        //     cy.wrap($el).type('funciona via cypress')

        // })

        const promise = new Promise((resolve, reject)=> {
            setTimeout(()=> {
                resolve(10)
            }, 500)
        })
        cy.get('#buttonSimple').then(()=> console.log('encontrei o primeiro botao') )
        //promise.then(num => console.log(num))
        cy.wrap(promise).then(ret => console.log(ret))
        cy.get('#buttonList').then(()=> console.log('encontrei o segundo botao') )
        cy.wrap(1).then(num => {
            return 2
        }).should('be.equal', 2)

    })

    it('Its...', ()=> {
        const obj1 = {nome: 'User', idade: '20'}
        cy.wrap(obj1).its('nome').should('be.equal', 'User')

        const obj2 = {nome: 'User', idade: '20', endereco: {rua: 'dos bobos'}}
        cy.wrap(obj2).its('endereco').should('have.property', 'rua')
        cy.wrap(obj2).its('endereco').its('rua').should('contain', 'bobos')
        cy.wrap(obj2).its('endereco.rua').should('contain', 'bobos')

        cy.visit("https://www.wcaquino.me/cypress/componentes.html")
        cy.title().its('length').should('be.equal', 20)
    })


    it.only('Invoke...', ()=>{
        const getValue = () => 1 
        const soma = (a,b) => a + b


        cy.wrap({fn: getValue}).invoke('fn').should('be.equal', 1)
        cy.wrap({fn: soma}).invoke('fn', 2, 5).should('be.equal', 7)

        cy.visit("https://www.wcaquino.me/cypress/componentes.html")
        cy.get('#formNome').invoke('val', 'texto via invoke')
        cy.window().invoke('alert', 'da pra ver?')

        cy.get('#resultado').invoke('html', '<input type="button" value="hacked!"/>')


    })
})