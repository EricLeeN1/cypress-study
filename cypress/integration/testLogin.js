// <reference type="cypress" />;

describe("登录", () => {
  // 此用户名和密码为本地服务器默认

  const username = "jane.lane";
  const password = "password123";

  context("HTML 表单登录测试", () => {
    it("登录成功，跳转到dashboard页面", () => {
      cy.visit("http://localhost:7077/login");
      cy.get("input[name=username]").type(username);
      cy.get("input[name=password]").type(password);
      cy.get("form").submit();

      // 断言，验证登录成功则跳转到dashboard页面
      // 断言，验证用户名存在

      cy.url().should("include", "/dashboard");
      cy.get("h1").should("contain", "jane.lane");
    });
  });
});
