Cypress.Commands.add('findByTestId', (testId) => {
  return cy.get(`[data-testid=${testId}]`);
});
