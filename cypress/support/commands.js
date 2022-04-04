import '@testing-library/cypress/add-commands';

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', (email, password) => {
    cy.visit('/signin')
    //cy.findAllByText('Face Verify')
    //cy.findAllByText('Continue to Timesheet')
    cy.get('#outlined-input').type(`${email}`).should('have.value', `${email}`)
    cy.contains('Face Verify').click();

    //cy.findAllByText('Password Verify')
    cy.contains('Password Verify').click();
    //cy.contains('Enter your password')
    //cy.contains('Welcome')
    //cy.contains(`${email}`)
    cy.get('[type="password"]').type(`${password}`)
    cy.contains('Sign In').click();


})
//
//
// -- This is a child command --
//Cypress.Commands.add('submit', { prevSubject: 'element' }, (subject, options) => { /* cypress code to login app */ })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
