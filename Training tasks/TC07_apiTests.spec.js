describe('API Testing',()=>{

    Cypress.config('baseUrl','http://dummy.restapiexample.com/api/v1')

    it('GET - read',()=>{
        cy.request('GET','/employees').then((response)=>{
            expect(response).to.have.property('status', 200);
            expect(response.body).to.not.be.null
            expect(response.body.data).to.have.length(24);
        })
    })

    it('POST -  create',()=>{
        const testJson = {"name":"test","salary":"123","age":"23"};
        cy.request('POST','/create', testJson).
        its('body').
        its('data').
        should('include', testJson);
    })

    it('PUT - update', ()=>{
        const item = {"name":"test1"};
        cy.request({ method: 'PUT', url:'/update/1',body: item, failOnStatusCode: false});
    })
})