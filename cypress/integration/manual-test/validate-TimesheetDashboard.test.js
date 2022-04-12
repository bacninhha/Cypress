describe('Check timesheet dashboard', () => {

    it('check user information', () => {
        let userID = '6576'
        let userPasss = 'qa@123'

        //check user information data return from API

        cy.intercept('/api/user/login').as('getUserInfor')
        cy.intercept('/api/timesheet*').as('getTimesheet')
        cy.login(userID, userPasss)
        /*cy.wait(['@getUserInfor', '@getTimesheet']).spread(
            (getUserInfor, getTimesheet) => {
                cy.get('@getUserInfor').should('have',`${userID}`)
                cy.get('@getTimesheet').should('have',`${userID}`)

            })  */    
            cy.wait('@getUserInfor').then((data) => {
                cy.log(JSON.stringify(data.response.body))
                // javascript handle data
                let badgeNumber = data.response.body["data"].["badgeNumber"]
                let name = data.response.body["data"].["name"]
                let totalRemain = data.response.body["data"].["totalRemain"]
                cy.log(badgeNumber, name, totalRemain)
                let totalDays = Math.floor(totalRemain/8)
                let totalHrs = totalRemain%8
                if (totalHrs > 0){
                    cy.contains(`${totalDays} days ${totalHrs} hours`)
                } else {
                    cy.contains(`${totalDays} days`)
                }
                cy.expect(userID).equal(badgeNumber)
                cy.contains(name)
                //cy.stickyVariable('quote', quote);
                //cy.stickyVariable('author', author);
                //cy.get('[data-test="quote"]').should('have.text', quote);
                //cy.get('[data-test="quote-author"]').should('have.text', author);
              })

            
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