/// <reference types="cypress" />

describe("Create New Users", () => {
  it("Sucessfully create new users", () => {
    var user = {
      name: "agus",
      job: "open to work",
    };
    // Assert using status code
    cy.request("POST", "https://reqres.in/api/users", { user }).then(
      (response) => {
        expect(response.status).equal(201);
      }
    );

    // assert using name property
    cy.request("POST", "https://reqres.in/api/users", {
      nama: "agus",
    }).then((response) => {
      expect(response.body).to.have.property("nama", "agus");
    });

    // // Assert using job property
    cy.request("POST", "https://reqres.in/api/users", {
      job: "open to work",
    }).then((response) => {
      expect(response.body).to.have.property("job", "open to work");
    });
  });
});
