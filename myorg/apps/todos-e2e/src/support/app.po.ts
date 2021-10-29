export const getGreeting = () => cy.get('h1');
export const getTodos = () => cy.get('li.todo');
export const getAddTodoButton = () => cy.get('button#add-todo');
export const checkA11y = () => cy.checkA11y(null, undefined, (violations) => cy.task('a11yLog', violations));

