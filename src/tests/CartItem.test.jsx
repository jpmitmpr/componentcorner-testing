import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CartItem from '../CartItem'

describe('CartItem', () => {
  const mockRemove = vi.fn()

  test('renders item info', () => {
    render(<CartItem name="Test Item" quantity={3} remove={mockRemove} />)

    expect(screen.getByText(/test item/i)).toBeInTheDocument()
    expect(screen.getByText(/3/i)).toBeInTheDocument()
  })

  test('calls remove when button clicked', async () => {
    const user = userEvent.setup()

    render(<CartItem name="Test Item" quantity={3} remove={mockRemove} />)

    // ❗ CHANGE if your button text is different
    const button = screen.getByRole('button', { name: /remove/i })
    await user.click(button)

    expect(mockRemove).toHaveBeenCalledTimes(1)
  })
})
