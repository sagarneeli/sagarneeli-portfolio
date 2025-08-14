import { render, screen, fireEvent } from '@testing-library/react'
import { HeroSection } from '../sections/hero-section'

// Mock window.open
const mockOpen = jest.fn()
Object.defineProperty(window, 'open', {
  writable: true,
  value: mockOpen,
})

// Mock scrollIntoView
const mockScrollIntoView = jest.fn()
Element.prototype.scrollIntoView = mockScrollIntoView

describe('HeroSection', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders the hero section with all main elements', () => {
    render(<HeroSection />)
    
    // Check for main heading
    expect(screen.getByText('Sagar Neeli')).toBeInTheDocument()
    
    // Check for availability badge
    expect(screen.getByText('Available for opportunities')).toBeInTheDocument()
    
    // Check for description
    expect(screen.getByText(/Building scalable, intelligent systems/)).toBeInTheDocument()
    
    // Check for CTA buttons
    expect(screen.getByText('Download Resume')).toBeInTheDocument()
    expect(screen.getByText('Get In Touch')).toBeInTheDocument()
    
    // Check for social links
    expect(screen.getByRole('link', { name: /linkedin/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /github/i })).toBeInTheDocument()
  })

  it('displays animated text rotation', async () => {
    render(<HeroSection />)
    
    // Check that one of the animated texts is visible
    const animatedTexts = [
      'Senior Backend Engineer',
      'AI/ML Specialist', 
      'Cloud Architect',
      'Distributed Systems Expert'
    ]
    
    // At least one should be visible initially
    const visibleText = animatedTexts.find(text => 
      screen.queryByText(text)
    )
    expect(visibleText).toBeTruthy()
  })

  it('handles download resume button click', () => {
    render(<HeroSection />)
    
    const downloadButton = screen.getByText('Download Resume')
    fireEvent.click(downloadButton)
    
    expect(mockOpen).toHaveBeenCalledWith('/resume.pdf', '_blank')
  })

  it('handles get in touch button click', () => {
    render(<HeroSection />)
    
    const contactButton = screen.getByText('Get In Touch')
    fireEvent.click(contactButton)
    
    expect(mockScrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' })
  })

  it('renders social links with correct hrefs', () => {
    render(<HeroSection />)
    
    const linkedinLink = screen.getByRole('link', { name: /linkedin/i })
    const githubLink = screen.getByRole('link', { name: /github/i })
    
    expect(linkedinLink).toHaveAttribute('href', 'https://linkedin.com/in/sagarneeli')
    expect(linkedinLink).toHaveAttribute('target', '_blank')
    expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer')
    
    expect(githubLink).toHaveAttribute('href', 'https://github.com/sagarneeli')
    expect(githubLink).toHaveAttribute('target', '_blank')
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('applies correct CSS classes for styling', () => {
    render(<HeroSection />)
    
    // Check for main section classes
    const section = screen.getByText('Sagar Neeli').closest('section')
    expect(section).toHaveClass('relative', 'min-h-screen', 'flex', 'items-center', 'justify-center')
    
    // Check for gradient text on name
    const nameElement = screen.getByText('Sagar Neeli')
    expect(nameElement).toHaveClass('bg-gradient-to-r', 'bg-clip-text', 'text-transparent')
  })

  it('renders with proper accessibility attributes', () => {
    render(<HeroSection />)
    
    // Check for proper heading structure
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('Sagar Neeli')
    
    // Check for proper button roles
    expect(screen.getByRole('button', { name: /download resume/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /get in touch/i })).toBeInTheDocument()
  })

  it('displays scroll indicator', () => {
    render(<HeroSection />)
    
    // The scroll indicator should be present (ArrowDown icon)
    const scrollIndicator = document.querySelector('[data-testid="scroll-indicator"]') || 
                           document.querySelector('svg[class*="w-6 h-6"]')
    expect(scrollIndicator).toBeInTheDocument()
  })
})
