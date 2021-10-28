describe('language-selection', () => {
  beforeEach(() => cy.visit('/'));
  it ('Navbar language selector should select translated page', () => {
    cy.url().should('eq', Cypress.config().baseUrl)
    cy.get('[data-cy=languageSelect]').click();
    cy.get('[data-cy=selectFr]').click();
    cy.url().should('eq', Cypress.config().baseUrl+'fr')
  });
});
