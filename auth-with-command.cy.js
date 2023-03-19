/// <reference types="cypress" />

describe('Auth API Testing', () => {
	it('Login with Auth Commands features', () => {
		cy.visit('loginViaAPI', {
			failOnStatusCode: false,
		})
		cy.get('h1').should('include.text', '404')
	})
})
