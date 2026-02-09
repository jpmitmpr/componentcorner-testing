import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ProductCard from '../ProductCard'

describe('ProductCard', () => {
  const mockProduct = {
    name: 'Test Product',
    price: 19.99,
  }

  const mockAddToCart = vi.fn()

  test('renders without crashing', () => {
    render(
      <ProductCard
        name={mockProduct.name}
        price={mockProduct.price}
        addToCart={mockAddToCart}
      />
    )
  })

  test('displays product name and price', () => {
    render(
      <ProductCard
        name={mockProduct.name}
        price={mockProduct.price}
        addToCart={mockAddToCart}
      />
    )

    expect(screen.getByText(/test product/i)).toBeInTheDocument()
    expect(screen.getByText(/19\.99/i)).toBeInTheDocument()
  })

  test('has an Add to Cart button', () => {
    render(
      <ProductCard
        name={mockProduct.name}
        price={mockProduct.price}
        addToCart={mockAddToCart}
      />
    )

    expect(screen.getByRole('button', { name: /add to cart/i })).toBeInTheDocument()
  })

  test('calls addToCart when clicked', async () => {
    const user = userEvent.setup()

    render(
      <ProductCard
        name={mockProduct.name}
        price={mockProduct.price}
        addToCart={mockAddToCart}
      />
    )

    const button = screen.getByRole('button', { name: /add to cart/i })
    await user.click(button)

    expect(mockAddToCart).toHaveBeenCalledTimes(1)
  })
})
