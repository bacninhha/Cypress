describe('Validate create new leave request', () => {

    it('check create new justification', () => {
        cy.get('.MuiDrawer-paperAnchorLeft').trigger('mouseover')
        cy.contains('Justification').click();
        cy.url().should('include', '/request')
        cy.contains('Request Date')
        cy.contains('Type')
        cy.contains('Comp Date')
    })

    it('check create leave', () => {
        cy.get('.MuiDrawer-paperAnchorLeft').trigger('mouseover')
        cy.contains('My Leave').click();
        cy.url().should('include', '/leaves')
        cy.contains('Start Date')
        cy.contains('End Date')
        cy.contains('New Leave Request').click();
        // check popup is shown
    })

})