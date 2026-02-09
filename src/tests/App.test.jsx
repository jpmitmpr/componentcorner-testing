import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../App'

describe('App cart state and localStorage', () => {
  beforeEach(() => {
    let store = {}

    global.localStorage = {
      getItem: vi.fn((key) => store[key] || null),
      setItem: vi.fn((key, value) => (store[key] = value)),
      removeItem: vi.fn((key) => delete store[key]),
      clear: vi.fn(() => (store = {})),
    }
  })

  test('renders App', () => {
    render(<App />)
  })

  test('loads cart from localStorage', () => {
    const savedCart = JSON.stringify([{ id: 1, name: 'Saved Item', quantity: 2 }])
    global.localStorage.getItem.mockReturnValueOnce(savedCart)

    render(<App />)

    // ❗ CHANGE THIS to match how your App displays cart items
    expect(screen.getByText(/saved item/i)).toBeInTheDocument()
  })

  test('saves cart to localStorage when updated', async () => {
    const user = userEvent.setup()

    render(<App />)

    // ❗ CHANGE THIS if your Add to Cart button text is different
    const addButtons = screen.getAllByRole('button', { name: /add to cart/i })
    await user.click(addButtons[0])

    expect(global.localStorage.setItem).toHaveBeenCalled()
  })
})
