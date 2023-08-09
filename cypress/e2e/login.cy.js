describe('abc.com Tests', () => {
    let website_url = "http://localhost:3000/" // Update the URL accordingly
    it('should be able to login', () => {
        cy.visit(website_url)
        cy.get('.nav-links a').contains("user").click()
        cy.get('input[placeholder="Email"]').type('nbn@gmail.com')
        cy.get('input[placeholder="password"]').type('password')
        cy.get('.login_btn').click()
    })

    it('add product to cart', () => {
        cy.visit(website_url)
        cy.get('.d-grid button').first().click({ force: true })
        cy.wait(1000)
        cy.get('.nav-links .float-end').click()
    })
})
