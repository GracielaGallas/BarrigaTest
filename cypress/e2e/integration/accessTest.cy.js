/// <reference types="cypress"/>

describe("Basic Test", ()=>{
     it("Should visit a page", ()=> {
        cy.visit("http://192.168.178.7:8080/page.html")
     })
})