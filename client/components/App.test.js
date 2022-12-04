import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'

import App from './App'

test('On initial App component render, Wait component should be displayed', () => {
  render(<App />)
  expect(screen.getByText('This is Silent Spring')).toBeInTheDocument()
})

test('When the user presses enter, List component should be displayed', () => {
  render(<App />)
  fireEvent.keyDown(screen, { key: 'Enter', code: 'Enter' })
  expect(screen.getByText('This is Silent Spring')).not.toBeInTheDocument()
})
