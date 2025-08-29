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
        [
            {
                "conta": "Conta para movimentacoes",
                "id": 2371090,
                "descricao": "Movimentacao para exclusao",
                "envolvido": "AAA",
                "observacao": null,
                "tipo": "DESP",
                "data_transacao": "2025-08-29T03:00:00.000Z",
                "data_pagamento": "2025-08-29T03:00:00.000Z",
                "valor": "-1500.00",
                "status": true,
                "conta_id": 2526926,
                "usuario_id": 62575,
                "transferencia_id": null,
                "parcelamento_id": null
            },
            {
                "conta": "Conta com movimentacao",
                "id": 2371091,
                "descricao": "Movimentacao de conta",
                "envolvido": "BBB",
                "observacao": null,
                "tipo": "DESP",
                "data_transacao": "2025-08-29T03:00:00.000Z",
                "data_pagamento": "2025-08-29T03:00:00.000Z",
                "valor": "-1500.00",
                "status": true,
                "conta_id": 2526927,
                "usuario_id": 62575,
                "transferencia_id": null,
                "parcelamento_id": null
            },
            {
                "conta": "Conta para saldo",
                "id": 2371092,
                "descricao": "Movimentacao 1, calculo saldo",
                "envolvido": "CCC",
                "observacao": null,
                "tipo": "REC",
                "data_transacao": "2025-08-29T03:00:00.000Z",
                "data_pagamento": "2025-08-29T03:00:00.000Z",
                "valor": "3500.00",
                "status": false,
                "conta_id": 2526928,
                "usuario_id": 62575,
                "transferencia_id": null,
                "parcelamento_id": null
            },
            {
                "conta": "Conta para saldo",
                "id": 2371093,
                "descricao": "Movimentacao 2, calculo saldo",
                "envolvido": "DDD",
                "observacao": null,
                "tipo": "DESP",
                "data_transacao": "2025-08-29T03:00:00.000Z",
                "data_pagamento": "2025-08-29T03:00:00.000Z",
                "valor": "-1000.00",
                "status": true,
                "conta_id": 2526928,
                "usuario_id": 62575,
                "transferencia_id": null,
                "parcelamento_id": null
            },
            {
                "conta": "Conta para saldo",
                "id": 2371094,
                "descricao": "Movimentacao 3, calculo saldo",
                "envolvido": "EEE",
                "observacao": null,
                "tipo": "REC",
                "data_transacao": "2025-08-29T03:00:00.000Z",
                "data_pagamento": "2025-08-29T03:00:00.000Z",
                "valor": "1534.00",
                "status": true,
                "conta_id": 2526928,
                "usuario_id": 62575,
                "transferencia_id": null,
                "parcelamento_id": null
            },
            {
                "conta": "Conta para extrato",
                "id": 2371095,
                "descricao": "Salary",
                "envolvido": "FFF",
                "observacao": null,
                "tipo": "DESP",
                "data_transacao": "2025-08-29T03:00:00.000Z",
                "data_pagamento": "2025-08-29T03:00:00.000Z",
                "valor": "-220.00",
                "status": true,
                "conta_id": 2526929,
                "usuario_id": 62575,
                "transferencia_id": null,
                "parcelamento_id": null
            }
        ]).as('viewBalance')
}



export default buildEnv