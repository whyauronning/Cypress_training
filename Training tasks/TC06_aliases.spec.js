describe('Create and mark-unmark as favorite', () => {

    //Sign In
    before(() => {
        cy.autorize();
    });

    //Cteating post
    it('Create a post', () => {
        cy.get('.navbar').children().as('menu')
        cy.get('@menu').contains('New Post').click();
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
        cy.get('.ion-heart').first().click();
        cy.url().should('include', '@');
        cy.contains('Favorited Articles').click();
        cy.hash().should('include', 'favorites');
        cy.get('.btn-primary').first().then(($fav)=>{
            return $fav.text();
        }).as('favCount');
        cy.get('@favCount').then(($cnt)=>{
            expect(parseInt($cnt)).to.eq(1)
        });
        cy.get('.btn-primary').first().click();
        cy.reload();
        cy.go('back');
        //cy.go(-1) its the same
    })
})