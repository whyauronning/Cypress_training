import Login from '../pageObjects/login';
/// <reference types="Cypress"/>

describe('Login', () => {

    const login  = new Login();

    it('Sign In', () => {
        cy.visit("http://react-redux.realworld.io/#/login");
        login.email().type('eyvovan@rambler.ru');
        login.password().type('13129494');
        login.signInBtn().should('be.visible').click();
    })
});