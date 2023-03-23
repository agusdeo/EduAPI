/// <reference types="cypress" />

describe("Tes Task Validate Content", () => {
	it("Sucesfully validate content", () => {
		var pokemon = {
			ability: {
				name: "limber",
				url: "https://pokeapi.co/api/v2/ability/7/",
			},
		}
		cy.request("GET", "https://pokeapi.co/api/v2/ability", {
			pokemon,
		}).then((response) => {
			expect(response.body.results[6].name).to.equal(pokemon.ability.name)
		})
	})
})
