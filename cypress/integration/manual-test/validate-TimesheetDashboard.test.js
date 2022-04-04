describe('Check timesheet dashboard', () => {

    it('check user information', () => {
        let userID = '6576'
        let userPasss = 'qa@123'

        //check data return from API

        cy.intercept('/api/user/login').as('getUserInfor')
        cy.login(userID, userPasss)
        cy.wait('@getUserInfor').then(console.log)//its('response.body').should('include', `${userID}`)  
        cy.get('@getUserInfor').should('have.data', `${userID}`)

        
    })

    /*it('check left menu', () => {

        cy.login(userID, userPasss)
        cy.url().should('include','/timesheet')
        cy.contains('Total leave remain:')
        cy.get('.MuiDrawer-paperAnchorLeft').trigger('mouseover')
        cy.contains('My Timesheet')
        cy.contains('Justification')
        cy.contains('My Leave')
    })*/


})