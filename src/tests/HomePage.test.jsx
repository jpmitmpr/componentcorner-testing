import { render, screen } from '@testing-library/react'
import HomePage from '../HomePage'

describe('HomePage', () => {
  test('renders without crashing', () => {
    render(<HomePage />)
  })

  test('displays main content', () => {
    render(<HomePage />)

    // ❗ CHANGE THIS TEXT to something that actually appears on your HomePage
    const mainText = screen.getByText(/welcome/i)

    expect(mainText).toBeInTheDocument()
  })
})
