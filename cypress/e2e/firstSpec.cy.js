describe('My First test', ()=>{
    it('test1', ()=>{
        cy.visit('https://opensource-demo.orangehrmLive.com/')
        cy.title().should('contain','Orange')
    })
})