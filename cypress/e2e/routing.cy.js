describe('checking routing', () => {
    it('Displays correct page', () => {
        cy.visit('http://localhost:3000');

        cy.contains('About');
        cy.contains('Login');
        cy.contains('My Learning');
        cy.contains('Subjects');
        cy.contains('Home');

        cy.visit('http://localhost:3000/about');
        cy.contains('About Page');

        cy.visit('http://localhost:3000/login');
        cy.contains('Login Page');

        cy.visit('http://localhost:3000/myLearning');
        cy.contains('My Learning Page');

        cy.visit('http://localhost:3000/search');
        cy.contains('Search Page');

        cy.visit('http://localhost:3000/subjects');
        cy.contains('Subjects Page');
    })
})