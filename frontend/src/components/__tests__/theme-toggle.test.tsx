import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeToggle } from '../ui/theme-toggle'

// Mock next-themes
const mockSetTheme = jest.fn()
jest.mock('next-themes', () => ({
  useTheme: () => ({
    theme: 'dark',
    setTheme: mockSetTheme,
    themes: ['light', 'dark', 'system'],
  }),
}))

describe('ThemeToggle', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders the theme toggle button', () => {
    render(<ThemeToggle />)
    
    const button = screen.getByRole('button', { name: /toggle theme/i })
    expect(button).toBeInTheDocument()
  })

  it('calls setTheme when clicked', () => {
    render(<ThemeToggle />)
    
    const button = screen.getByRole('button', { name: /toggle theme/i })
    fireEvent.click(button)
    
    expect(mockSetTheme).toHaveBeenCalledWith('light')
  })

  it('has proper accessibility attributes', () => {
    render(<ThemeToggle />)
    
    const button = screen.getByRole('button', { name: /toggle theme/i })
    expect(button).toHaveAttribute('aria-label', 'Toggle theme')
  })

  it('applies correct styling classes', () => {
    render(<ThemeToggle />)
    
    const button = screen.getByRole('button', { name: /toggle theme/i })
    expect(button).toHaveClass(
      'rounded-md',
      'p-2',
      'hover:bg-slate-100',
      'dark:hover:bg-slate-800',
      'transition-colors'
    )
  })
})
