describe('checking that we recieve information from sanity', () => {
    it('Displays information from sanity on page', () => {
        

        cy.visit('http://localhost:3000/subjects');
        
        cy.contains('Addition');
        cy.contains('Subtraction');
        cy.contains('Multiplication');
        cy.contains('Division');

    })
})