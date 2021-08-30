describe('App e2e', () => {
  it('should open app on localhost:3000', () => {
    cy.visit('http://localhost:3000');
  });

  it('should have a header', () => {
    cy.get('header').contains('Movieroulette');
  });

  it('should have a form', () => {
    const form = cy.get('form');
    form.get('input').should('have.value', '');
    form.get('input').type('matrix').should('have.value', 'matrix');
    form.get('button').contains('search');
  });

  it('should have filter', () => {
    cy.contains('Sort by');
  });

  it('should have a movies section', () => {
    cy.get('section').find('div > div').should('have.length', 7);
  });

  it('should have a footer', () => {
    cy.get('footer').contains('Movieroulette');
  });

  it('should have a buttons', () => {
    cy.get('button').should('have.length', 6).click({multiple: true});
  })
})