import { render, screen } from '@testing-library/react'
import HomePage from '../pages/HomePage'
import { BrowserRouter } from 'react-router-dom'

test('HomePage renders welcome text', () => {

  render(
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  )

  expect(screen.getByText(/welcome to our store/i)).toBeInTheDocument()

})
