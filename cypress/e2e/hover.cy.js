describe('Mouse Hover Practice', () => {

  it('should click Top option from hover menu', () => {

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

    cy.get('div.mouse-hover-content').invoke('show')

    cy.contains('Top').click()

    cy.url().should('include', 'top')

  })

})