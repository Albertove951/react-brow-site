describe('visit website', () => {
    it('visits the website', () => {
        cy.visit('https://polar-bastion-62065.herokuapp.com/')
        cy.get('.header-row > :nth-child(2)').click()
    })
})