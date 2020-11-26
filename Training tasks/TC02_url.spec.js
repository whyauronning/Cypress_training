describe('Create and mark-unmark as favorite', () => {
    it('Sign In', () => {
        cy.visit("http://react-redux.realworld.io/#/login");
        cy.title().should('eq', 'Conduit');
        cy.location('protocol').should('eq', 'http:');
        cy.get('input[type="email"]').type('eyvovan@rambler.ru');
        cy.get('input[type="password"]').type('13129494');
        cy.get('.btn').contains('Sign in').should('be.visible').click();
        cy.contains('Your Feed', {
            timeout: 10000
        }).should('be.visible');
    });

    it('Create a post', () => {
        cy.contains('New Post').click();
        cy.hash().should('include', '#/editor');
        cy.get('input[placeholder="Article Title"]').type('chiki');
        cy.get('input[placeholder="What\'s this article about?"]').type('briki');
        cy.get('textarea[placeholder="Write your article (in markdown)"]').type('palchik');
        cy.get('input[placeholder="Enter tags"]').type('#VIKIN`!!!!!');
        cy.get('.btn').contains('Publish Article').should('be.visible').click();
        cy.url().should('include', 'article');
    })

    it('Mark and unmark the Post', () => {
        cy.get('.nav-link').contains('TwentySex').click();
        cy.contains('My Articles').should('be.visible');
        cy.get('.ion-heart').click({
            multiple: true
        });
        cy.url().should('include', '@');
        cy.contains('Favorited Articles').click();
        cy.hash().should('include', 'favorites');
        cy.get('.ion-heart').click({
            multiple: true
        });
        cy.reload();
        cy.contains('No articles are here... yet.').should('be.visible');
        cy.go('back');
        //cy.go(-1) its the same
    })
});