describe('login form', () => {
  it('works with email and password', () => {
    cy.visit('/login');

    cy.get('[data-cy=email]').click().type('cade@spraoi.ai');

    cy.get('[data-cy=password]').click().type('cade@spraoi.ai');

    cy.get('[data-cy=submit]').click();

    cy.location('pathname').should((pathname) =>
      expect(pathname).to.equal('/')
    );
  });
});
