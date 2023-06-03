describe('Navigation', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')

    //check homepage title
    cy.get('[data-cy="introduction"]')
      .contains("Hi my name is")
    
    //verify current page is home 
    cy.url().should('contains','/home')
  })
  
})