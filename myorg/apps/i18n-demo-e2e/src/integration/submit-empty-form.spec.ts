describe('submit-empty-form', () => {
  beforeEach(() => cy.visit('/'));
  it ('Error messages appear for empty form fields', () => {
    cy.get('[data-cy=submitFeedback]').click();
    cy.get('[data-cy=feedbackForm').contains('Enter a name')
    cy.get('[data-cy=feedbackForm').contains('Select a gender')
    cy.get('[data-cy=feedbackForm').contains('Comment is required')
    cy.get('[data-cy=feedbackForm').contains('Rating is required')
  });
});
