
const locators = {

    LOGIN: {
        USER:'',
        PASSWORD: '',
        BTN_LOGIN: ''
    },
    COOKIES: {
        MODAL: 'dialog.onp-cookie__modal[open][aria-modal="true"]',
        BUTTON_ACCEPT_ALL: '[data-selenium*="accept-all"] button, button[aria-label*="Alle Cookies akzeptieren"]',
        BUTTON_ACCEPT_NECESSARY: '[data-selenium*="accept-only"] button, button[aria-label*="Nur notwendige Cookies akzeptieren"]'
    },
    HOME_PAGE:{
        PRAEMIE_BTN: 'button[aria-label*="Prämie"]',
        CARD_CONTAINER: '[id^="onp-card-"], .onp-card',
        FIRST_ACCORDEON_BTN: '[data-selenium="-item-btn-0"]',
        FIRST_ACCORDEON_CONTENT:'[data-selenium="-item-content-0"]',
        SECOND_ACCORDEON_BTN: '[data-selenium="-item-btn-1"]',
        SECOND_ACCORDEON_CONTENT:'[data-selenium="-item-content-1"]',
        THIRD_ACCORDEON_BTN: '[data-selenium="-item-btn-2"]',
        THIRD_ACCORDEON_CONTENT:'[data-selenium="-item-content-2"]',
        FOURTH_ACCORDEON_BTN: '[data-selenium="-item-btn-3"]',
        FOURTH_ACCORDEON_CONTENT:'[data-selenium="-item-content-3"]',
        FIFTH_ACCORDEON_BTN: '[data-selenium="-item-btn-4"]',
        FIFTH_ACCORDEON_CONTENT:'[data-selenium="-item-content-4"]',
        ALL_QUESTIONS_BTN:  '[data-selenium="-show-all"]'
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