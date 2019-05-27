describe('The Home Page', function () {
    it('successfully loads', function () {
        cy.visit('/')
    })
})

describe('test_name', function () {

    it('what_it_does', function () {

        cy.viewport(1680, 719)

        cy.visit('http://localhost:3000/')

        // cy.get('body > .container-fluid > #selectGameSize').select()

        cy.get('body > .container-fluid > #selectGameSize').select('4')
        cy.get('body > .container-fluid > #selectGameSize').select('6')

    })

})

describe('test_name', function () {

    it('what_it_does', function () {

        cy.viewport(1680, 719)

        cy.visit('http://localhost:3000/')

        cy.get('#game-board > .flipContainer > #0 > .front > .glyphicon').click()

        cy.get('#game-board > .flipContainer > #5 > .front > .glyphicon').click()

    })

})

describe('test_name', function () {

    it('what_it_does', function () {

        cy.viewport(1680, 719)

        cy.visit('http://localhost:3000/')

        // cy.get('body > .container-fluid > #selectGameSize').click()

        cy.get('body > .container-fluid > #selectGameSize').select('0')

    })

})
