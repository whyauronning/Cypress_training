/// <reference types="Cypress"/>

describe('Login', () => {
    it('Sign In', () => {
        cy.visit("http://react-redux.realworld.io/#/login");
        cy.get('input[type="email"]').type('eyvovan@rambler.ru');
        cy.get('input[type="password"]').type('13129494');
        cy.get('.btn').contains('Sign in').should('be.visible').click();
    })
});