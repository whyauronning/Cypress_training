// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import 'cypress-file-upload';



Cypress.Commands.add("autorize",()=>{
    cy.visit("/#/login");
    cy.title().should('eq', 'Conduit');
    cy.location('protocol').should('eq', 'http:');
    // cy.get('input[type="email"]').type('eyvovan@rambler.ru');
    // cy.get('input[type="password"]').type('13129494');
    // cy.get('.btn').contains('Sign in').should('be.visible').click();
    cy.get('form').within(($form) => {
        // cy.get() will only search for elements within form, not within the entire document
        cy.get('input[type = "email"]').type('eyvovan@rambler.ru')
        cy.get('input[type = "password"]').type('13129494')
        cy.root().submit();
    });
    cy.contains('Your Feed', {timeout: 10000}).should('be.visible'); 
})
