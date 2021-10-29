import { getAddTodoButton, getTodos, checkA11y } from '../support/app.po';

describe('TodoApps', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.injectAxe();
  });

  it('should display todos', () => {
    getTodos().should((t) => expect(t.length).equal(2));
    getAddTodoButton().click();
    getTodos().should((t) => expect(t.length).equal(3));
  });

  it('should be accessible', () => {
    checkA11y();
  })

});
