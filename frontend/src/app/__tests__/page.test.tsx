import { render, screen } from '@testing-library/react'
import Page from '../page'

// Mock all section components
jest.mock('@/components/sections/hero-section', () => ({
  HeroSection: () => <div data-testid="hero-section">Hero Section</div>,
}))

jest.mock('@/components/sections/about-section', () => ({
  AboutSection: () => <div data-testid="about-section">About Section</div>,
}))

jest.mock('@/components/sections/experience-section', () => ({
  ExperienceSection: () => <div data-testid="experience-section">Experience Section</div>,
}))

jest.mock('@/components/sections/projects-section', () => ({
  ProjectsSection: () => <div data-testid="projects-section">Projects Section</div>,
}))

jest.mock('@/components/sections/skills-section', () => ({
  SkillsSection: () => <div data-testid="skills-section">Skills Section</div>,
}))

jest.mock('@/components/sections/contact-section', () => ({
  ContactSection: () => <div data-testid="contact-section">Contact Section</div>,
}))

jest.mock('@/components/layout/header', () => ({
  Header: () => <div data-testid="header">Header</div>,
}))

jest.mock('@/components/layout/footer', () => ({
  Footer: () => <div data-testid="footer">Footer</div>,
}))

describe('Page', () => {
  it('renders all main sections', () => {
    render(<Page />)
    
    // Check that all sections are rendered
    expect(screen.getByTestId('header')).toBeInTheDocument()
    expect(screen.getByTestId('hero-section')).toBeInTheDocument()
    expect(screen.getByTestId('about-section')).toBeInTheDocument()
    expect(screen.getByTestId('experience-section')).toBeInTheDocument()
    expect(screen.getByTestId('projects-section')).toBeInTheDocument()
    expect(screen.getByTestId('skills-section')).toBeInTheDocument()
    expect(screen.getByTestId('contact-section')).toBeInTheDocument()
    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })

  it('renders sections in correct order', () => {
    render(<Page />)
    
    const sections = [
      'header',
      'hero-section',
      'about-section', 
      'experience-section',
      'projects-section',
      'skills-section',
      'contact-section',
      'footer'
    ]
    
    const renderedSections = sections.map(id => screen.getByTestId(id))
    
    // Check that sections are in the correct order in the DOM
    for (let i = 0; i < renderedSections.length - 1; i++) {
      const currentSection = renderedSections[i]
      const nextSection = renderedSections[i + 1]
      
      expect(currentSection.compareDocumentPosition(nextSection) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
    }
  })

  it('has proper main element structure', () => {
    render(<Page />)
    
    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()
    
    // Check that main contains all the sections
    expect(main).toContainElement(screen.getByTestId('hero-section'))
    expect(main).toContainElement(screen.getByTestId('about-section'))
    expect(main).toContainElement(screen.getByTestId('experience-section'))
    expect(main).toContainElement(screen.getByTestId('projects-section'))
    expect(main).toContainElement(screen.getByTestId('skills-section'))
    expect(main).toContainElement(screen.getByTestId('contact-section'))
  })
})
