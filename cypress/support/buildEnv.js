import transfer from '../fixtures/savedTransfer.json'


const buildEnv = () => {
    cy.intercept({
        method: 'POST',
        url: '/signin'
    },
        {
            id: 2000,
            nome: 'fake user',
            token: 'something that is not a real token'
        }).as('signin')
    cy.intercept(
        {
            method: 'GET',
            url: '/saldo'
        },
        [
            {
                conta_id: 123456,
                conta: "Conta fake",
                saldo: "123456"
            },
            {
                conta_id: 789101,
                conta: "Conta fake 2",
                saldo: "654321"
            }
        ]
    ).as('saldo')

    cy.intercept(
        { method: 'GET', url: '/contas', times: 1 },
        [{ id: 12345, nome: 'old account', visivel: true, usuario_id: 12345 }]
    ).as('firstView');

    cy.intercept({
        method: 'GET',
        url: '/extrato/**'
    },
       transfer).as('viewBalance')
}



export default buildEnv