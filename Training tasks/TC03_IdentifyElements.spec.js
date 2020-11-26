describe('Create and mark-unmark as favorite', () => {

    //Sign In
    it('Sign In', () => {
        cy.visit("http://react-redux.realworld.io/#/login");
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
        cy.contains('Your Feed', {
            timeout: 10000
        }).should('be.visible');

    })
    //Cteating post
    it('Create a post', () => {
        cy.get('.navbar').children().contains('New Post').click();
        cy.hash().should('include', '#/editor');
        cy.get('form').within(($form1) => {
            cy.get('input').first().type('chiki');
            cy.get('input').eq(1).type('briki');
            cy.get('textarea').last().type('palchik');
            cy.get('input').eq(2).type('#VIKIN!!!!!!')
            cy.get('.btn').contains('Publish Article').should('be.visible').click();
        })
        cy.url().should('include', 'article')

    })

    //Mark/Unmark
    it('Mark and unmark the Post', () => {
        // cy.get('.nav-link').contains('TwentySex').click();
        cy.get('.navbar').children().contains('TwentySex').click();
        cy.contains('My Articles').should('be.visible');
        cy.get('.ion-heart').first().click({
            multiple: true
        });
        cy.url().should('include', '@');
        cy.contains('Favorited Articles').click();
        cy.hash().should('include', 'favorites');
        cy.get('.ion-heart').first().click({
            multiple: true
        });
        cy.reload();
        cy.go('back');
        //cy.go(-1) its the same
    })
})