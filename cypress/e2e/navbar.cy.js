describe('checking navbar', () => {
    it('Displays the navbar', () => {
        cy.visit('http://localhost:3000');

        cy.contains('About');
        cy.contains('Login');
        cy.contains('My Learning');
        cy.contains('Subjects');
        cy.contains('Home');


    })
})