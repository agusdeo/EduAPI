/// <reference types="cypress" />

describe('Testing API Headers', () => {
	it('Succesfully Validate body using name parameter ', () => {
		cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
		cy.get('@pokemon').its('body').its('name').should('include', 'ditto')
	})
})
