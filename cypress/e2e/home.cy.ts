describe('homepage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  context('header', () => {
    it('verify header text', () => {
      cy.getByData("hero-heading").contains("Testing Next.js Applications with Cypress")
    })

    it('verify bullet feature', () => {
      cy.get("dt").eq(0).contains(/4 courses/i)
      cy.get("dt").eq(1).contains("25+ Lessons")
      cy.get("dt").eq(2).contains("Free and Open Source")
    })
  })

  context('section Testing your first application', () => {
    it('verify Testing your first application path', () => {
      cy.getByData("course-0").find("a").contains("Get started").click()
      cy.location("pathname").should("equal", "/testing-your-first-application")
    })
  })

  context('section Testing foundation', () => {
    it('verify Testing foundation path', () => {
      cy.getByData("course-1").find("a").contains("Get started").click()
      cy.location("pathname").should("equal", "/testing-foundations")
    })
  })

  context('section Cypress Fundamentals', () => {
    it('verify Cypress Fundamentals path', () => {
      cy.getByData("course-2").find("a").contains("Get started").click()
      cy.location("pathname").should("equal", "/cypress-fundamentals")
    })
  })
})
