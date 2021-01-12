/// <reference types="Cypress" />

describe("Login Page", () => {
  beforeEach(() => {
    cy.visit("/login");
  });

  it("After click Forgot Password, Redirect to forgot-password page", () => {
    cy.contains("Forgot Password").click();
    cy.url().should("include", "forgot-password");
  });

  it("After click Don't have an account, Redirect to signup page", () => {
    cy.contains("Don't have an account").click();
    cy.url().should("include", "signup");
  });

  it("Invalid login credentials", () => {
    // act
    cy.get("input[name=email]").type("business.dev@peppercontent.in");
    cy.get("input[name=password]").type("Abc07@xyz");
    cy.get("[type=submit]").click();

    // assert
    cy.contains("Login error");
  });

  it("Valid login credentials", () => {
    // arrange
    // cy.intercept("POST", "https://api.portal.peppercontent.dev/login", {
    //   statusCode: 500,
    //   body: {
    //     description: "Could not authenticate, please try again",
    //     error: "Login error",
    //     status: "failure",
    //   },
    // });
    cy.login("business.dev@peppercontent.in", "Pepper@123");
  });
});
