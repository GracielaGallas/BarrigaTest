/// <reference types="cypress"/>

describe("all backend tests", () => {
    let token
    let accountId

    before(() => {
        cy.getToken('graciela.carmen@gmail.com', 'curso')
            .then(tkn => {
                token = tkn
            })
    })


    it('Should create a new account', () => {
        cy.request({
            url: '/contas',
            method: 'POST',
            headers: { Authorization: `JWT ${token}` },
            body: {
                nome: 'Conta Graciela via Rest'
            }
        }).then(res => {
            expect(res.status).to.equal(201)
            expect(res.body).to.have.property('id')
            expect(res.body).to.have.property('nome', 'Conta Graciela via Rest')

            accountId = res.body.id
            cy.log('Conta criada com id: ' + accountId)
            console.log(accountId)
        })
    })


    it('Should change an account', () => {
        cy.request({
            url: `/contas/${accountId}`,
            method: 'PUT',
            headers: { Authorization: `JWT ${token}` },
            body: {
                nome: 'Conta Graciela alterada via Rest'
            }
        }).then(res => {
            expect(res.status).to.equal(200)
            expect(res.body).to.have.property('nome', 'Conta Graciela alterada via Rest')
        })

    })

    it('Should try to add account with the same name', () => {
        cy.request({
            url: '/contas',
            method: 'POST',
            headers: { Authorization: `JWT ${token}` },
            body: {
                nome: 'Conta Graciela alterada via Rest'
            },
            failOnStatusCode: false
        }).then(res => {
            expect(res.status).to.equal(400)
        })
    })

    it('Should add a transaction', () => {
        cy.request({
            url: '/transacoes',
            method: 'POST',
            headers: { Authorization: `JWT ${token}` },
            body: {
                conta_id: `${accountId}`,
                data_pagamento: '25/08/2025',
                data_transacao: '25/08/2025',
                descricao: 'Transaction Graci Rest',
                envolvido: 'Graci',
                status: true,
                tipo: 'REC',
                valor: '5500'
            }
        }).then(res => {
            expect(res.status).to.equal(201)
            expect(res.body).to.have.property('descricao', 'Transaction Graci Rest')
        })
    })

    it('Should get balance', () => {
        // cy.fixture('barrigaData').then((dados) => {
        //     cy.get(loc.MENU.HOME).click()
        //     cy.contains('td', dados.transaction_account)
        //         .next()                                     
        //         .invoke('text').then(t => t.replace(/\u00a0/g, ' ').trim())
        //         .should('contain', 'R$ 5.000,00') 
        // })
    })

    it('Should delete a transaction', () => {
        // cy.fixture('barrigaData').then((dados) => {
        //     cy.get(loc.MENU.BALANCE).click()
        //     cy.contains('[data-test="mov-row"]', dados.transaction_description)
        //         .find('i.fa-trash-alt')
        //         .click()
        //     cy.get(loc.MESSAGE).should('contain', dados.msg_sucessful)    
        //     })

    })

    it('should reset database', () => {
        cy.resetRest()
    })


})



