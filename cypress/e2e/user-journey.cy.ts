describe('subscribe', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
    })
  
    it('e2e jouney test and complete the courses', () => {
        cy.getByData("course-0").find("a").contains("Get started").click()
        cy.location("pathname")
        .should("equal", "/testing-your-first-application")
        cy.getByData("next-lesson-button").click()
        cy.location("pathname")
        .should("equal", "/testing-your-first-application/app-install-and-overview")
        cy.getByData("challenge-answer-0").click()
        cy.getByData("next-lesson-button").click()
        cy.location("pathname")
        .should("equal", "/testing-your-first-application/installing-cypress-and-writing-our-first-test")
        cy.getByData("challenge-answer-0").click()
        cy.getByData("next-lesson-button").click()
        cy.location("pathname")
        .should("equal", "/testing-your-first-application/setting-up-data-before-each-test")
        cy.getByData("challenge-answer-0").click()
        cy.getByData("next-lesson-button").contains("Complete Course").click()
        cy.location("pathname")
        .should("equal", "/")
    })
})
  