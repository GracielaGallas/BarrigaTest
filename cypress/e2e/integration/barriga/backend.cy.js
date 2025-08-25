/// <reference types="cypress"/>

describe("all backend tests", () => {
    let token
    let accountId
    let transactionId

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
            console.log('account id: '+accountId)
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
            expect(res.body).to.have.property('id')

            transactionId = res.body.id
            cy.log('transaction id is: '+transactionId)
            console.log('transaction id is: '+transactionId)
        })
    })

    it('Should get balance', () => {
        cy.request({
            url: '/saldo',
            method: 'GET',
            headers: { Authorization: `JWT ${token}` },
        }).then(res => {
            let balanceAccount = null
            res.body.forEach(a => {
                if (a.conta === 'Conta Graciela alterada via Rest')
                    balanceAccount = a.saldo
            })
            expect(balanceAccount).to.be.equal('5500.00')
            cy.log('balance account is: ' +balanceAccount)
            console.log('balance account is: ' +balanceAccount)
        })
    })

    it('Should delete a transaction', () => {

    })

    // it('should reset database', () => {
    //     cy.resetRest()
    // })


})



