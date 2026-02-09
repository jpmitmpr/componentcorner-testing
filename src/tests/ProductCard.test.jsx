import { render, screen, fireEvent } from '@testing-library/react'
import ProductCard from '../components/ProductCard'
import { BrowserRouter } from 'react-router-dom'

test('ProductCard renders and button works', () => {

  const mockProduct = {
    id: 1,
    name: "Test Product",
    price: 99.99
  }

  const mockAddToCart = jest.fn()

  render(
    <BrowserRouter>
      <ProductCard product={mockProduct} addToCart={mockAddToCart} />
    </BrowserRouter>
  )

  expect(screen.getByText("Test Product")).toBeInTheDocument()

  fireEvent.click(screen.getByText(/add to cart/i))

  expect(mockAddToCart).toHaveBeenCalled()

})
