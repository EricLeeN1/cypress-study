// <reference type="cypress" />;

describe("测试 Cypress.config", () => {
  it("测试取值和设置值", () => {
    // 获取pageLoadTimeout,默认是60000
    cy.log(`pageLoadTimeout,默认是${Cypress.config("pageLoadTimeout")}`);
    // 设置pageLoadTimeout为10000
    Cypress.config("pageLoadTimeout", 10000);
    // 再次读取pageLoadTimeout值
    cy.log(`pageLoadTimeout,当前值是${Cypress.config("pageLoadTimeout")}`);
  });
});
