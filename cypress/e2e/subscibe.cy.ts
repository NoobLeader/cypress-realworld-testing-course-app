describe('subscribe', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
    })
  
    it('validate subscribe success test', () => {
      cy.getByData("email-input").type("test@email.com")
      cy.getByData("submit-button").click()
      cy.getByData("success-message").should("exist")
        .contains("test@email.com")
    })

    it('validate subscribe fail test', () => {
        cy.getByData("email-input").type("test")
        cy.getByData("submit-button").click()
        cy.getByData("success-message").should("not.exist")
    })

    it('validate existed email', () => {
        cy.getByData("email-input").type("john@example.com")
        cy.getByData("submit-button").click()
        cy.getByData("server-error-message").should("exist")
            .contains("already exists. Please use a different email address.")
    })
  })
  