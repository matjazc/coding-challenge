it('check if the main page has the correct content', () => {
  cy.visit('/')

  cy.contains('Classes')
  cy.contains('Lessons')
  cy.contains('Libraries')
  cy.contains('teacher@school.org')

  cy.get('[data-cy=navBar]')
  .should('be.visible')
});

it('should change items in navBar if switch user', () => {
  cy.visit('/')

  cy.get('[data-cy=dropdown]')
  .should('be.visible')
  .contains('teacher@school.org')
  .click()

  cy.get('[data-cy=dropdown-item]')
  .should('be.visible')
  .contains('student@school.org')
  .click()

  cy.get('[data-cy=navBar]')
  .should('contain', 'Assigments')
  .should('not.contain', 'Lessons')
  .should('not.contain', 'Libraries')

  cy.get('[data-cy=dropdown]')
  .should('be.visible')
  .contains('student@school.org')
  .click()

  cy.get('[data-cy=dropdown-item]')
  .should('be.visible')
  .contains('teacher@school.org')
  .click()

  cy.get('[data-cy=navBar]')
  .should('contain', 'Lessons')
  .should('contain', 'Libraries')
  .should('not.contain', 'Assigments')
});