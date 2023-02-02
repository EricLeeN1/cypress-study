beforeEach(() => {
  cy.log(`当前环境变量为${JSON.stringify(Cypress.env())}`);
  cy.log(`当前环境变量为${JSON.stringify(Cypress.config())}`);
});
