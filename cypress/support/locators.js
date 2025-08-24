
const locators = {

    LOGIN: {
        USER:'[data-test="email"]',
        PASSWORD: '[data-test="passwd"]',
        BTN_LOGIN: '.btn'
    },
    MENU: {
        SETTINGS: '[data-test="menu-settings"]',
        ACCOUNTS: '[href="/contas"]',
        RESET: '[href="/reset"]',
        TRANSACTION: '[data-test="menu-movimentacao"]',
        HOME: '[data-test="menu-home"]',
        BALANCE: '[data-test="menu-extrato"]'
    },
    ACCOUNTS_PAGE:{
        NAME: '[data-test="nome"]',
        BTN_SAVE: '.btn'
    },
    TRANSACTION_PAGE:{
        T_DESCRIPTION: '[data-test="descricao"]',
        T_VALUE: '[data-test="valor"]',
        T_INTERESTED: '[data-test="envolvido"]',
        T_ACCOUNT: '[data-test="conta"]',
        T_STATUS: '[data-test="status"]',
        T_BTN_SAVE: '.btn-primary',
        T_TABLE: '[data-test="mov-row"]'
    },
    MESSAGE:'.toast-message'
}


export default locators;