
describe('Fulfill Testing of Recipe Now! web-app', function() {
  it('.should pass all tests', function () {
    cy.visit('https://family-meal-planner.firebaseapp.com/')
    cy.get('button').click()
    cy.get('h1').eq(0).should('have.text', 'Recipe Now!')
    cy.get('#img').eq(0).click()
    cy.get('#inbetweenIngredients').eq(0).should('have.id', 'inbetweenIngredients')
    cy.get('.generateButton').eq(0).click()
    cy.get('.list').should('contain', " - Your Shopping List - ")
  })
})
