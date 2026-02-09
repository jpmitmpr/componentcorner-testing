import { render, screen } from '@testing-library/react'
import CartItem from '../components/CartItem'
import { BrowserRouter } from 'react-router-dom'

test('CartItem renders item name', () => {

  const mockItem = {
    id: 1,
    name: "Test Item",
    quantity: 2
  }

  const mockRemove = jest.fn()

  render(
    <BrowserRouter>
      <CartItem item={mockItem} removeFromCart={mockRemove} />
    </BrowserRouter>
  )

  expect(screen.getByText("Test Item")).toBeInTheDocument()

})
