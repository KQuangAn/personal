import React from 'react'
import Eyes from './Eyes'

describe('<Eyes />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Eyes />)
  })
})