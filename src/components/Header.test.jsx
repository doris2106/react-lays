import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from './Header'

test('renders college header', () => {
  render(<Header />)
  expect(screen.getByText(/Fr. Conceicao Rodrigues College of Engineering/i)).toBeInTheDocument()
})
