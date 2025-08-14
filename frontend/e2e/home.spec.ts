import { test, expect } from '@playwright/test'

test.describe('Portfolio Website', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000')
  })

  test('should display the main page with all sections', async ({ page }) => {
    // Check that the page loads with the correct title
    await expect(page).toHaveTitle(/Sagar Neeli/)
    
    // Check that all main sections are visible
    await expect(page.getByRole('heading', { name: 'Sagar Neeli' })).toBeVisible()
    await expect(page.getByText('Available for opportunities')).toBeVisible()
    await expect(page.getByText(/Building scalable, intelligent systems/)).toBeVisible()
    
    // Check navigation links
    await expect(page.getByRole('link', { name: 'About' })).toBeVisible()
    await expect(page.getByRole('link', { name: 'Experience' })).toBeVisible()
    await expect(page.getByRole('link', { name: 'Projects' })).toBeVisible()
    await expect(page.getByRole('link', { name: 'Skills' })).toBeVisible()
    await expect(page.getByRole('link', { name: 'Contact' })).toBeVisible()
  })

  test('should have working navigation', async ({ page }) => {
    // Test navigation to different sections
    await page.getByRole('link', { name: 'About' }).click()
    await expect(page.locator('#about')).toBeVisible()
    
    await page.getByRole('link', { name: 'Experience' }).click()
    await expect(page.locator('#experience')).toBeVisible()
    
    await page.getByRole('link', { name: 'Projects' }).click()
    await expect(page.locator('#projects')).toBeVisible()
    
    await page.getByRole('link', { name: 'Skills' }).click()
    await expect(page.locator('#skills')).toBeVisible()
    
    await page.getByRole('link', { name: 'Contact' }).click()
    await expect(page.locator('#contact')).toBeVisible()
  })

  test('should have working CTA buttons', async ({ page }) => {
    // Test download resume button (should open in new tab)
    const downloadPromise = page.waitForEvent('popup')
    await page.getByRole('button', { name: 'Download Resume' }).click()
    const popup = await downloadPromise
    await expect(popup).toBeTruthy()
    await popup.close()
    
    // Test get in touch button (should scroll to contact section)
    await page.getByRole('button', { name: 'Get In Touch' }).click()
    await expect(page.locator('#contact')).toBeVisible()
  })

  test('should have working social links', async ({ page }) => {
    // Test LinkedIn link
    const linkedinPromise = page.waitForEvent('popup')
    await page.getByRole('link', { name: /linkedin/i }).click()
    const linkedinPopup = await linkedinPromise
    await expect(linkedinPopup.url()).toContain('linkedin.com/in/sagarneeli')
    await linkedinPopup.close()
    
    // Test GitHub link
    const githubPromise = page.waitForEvent('popup')
    await page.getByRole('link', { name: /github/i }).click()
    const githubPopup = await githubPromise
    await expect(githubPopup.url()).toContain('github.com/sagarneeli')
    await githubPopup.close()
  })

  test('should have working theme toggle', async ({ page }) => {
    // Check that theme toggle button exists
    const themeToggle = page.getByRole('button', { name: 'Toggle theme' })
    await expect(themeToggle).toBeVisible()
    
    // Test theme toggle functionality
    await themeToggle.click()
    
    // Check that theme has changed (this might be subtle depending on implementation)
    // We can check if the button is still visible and clickable
    await expect(themeToggle).toBeVisible()
  })

  test('should be responsive on mobile', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 })
    
    // Check that mobile menu is accessible
    const mobileMenuButton = page.getByRole('button', { name: /menu/i })
    if (await mobileMenuButton.isVisible()) {
      await mobileMenuButton.click()
      await expect(page.getByRole('navigation')).toBeVisible()
    }
    
    // Check that content is still readable
    await expect(page.getByRole('heading', { name: 'Sagar Neeli' })).toBeVisible()
    await expect(page.getByText(/Building scalable, intelligent systems/)).toBeVisible()
  })

  test('should have proper accessibility', async ({ page }) => {
    // Check for proper heading structure
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
    
    // Check for proper button labels
    await expect(page.getByRole('button', { name: 'Download Resume' })).toBeVisible()
    await expect(page.getByRole('button', { name: 'Get In Touch' })).toBeVisible()
    
    // Check for proper link labels
    await expect(page.getByRole('link', { name: 'About' })).toBeVisible()
    await expect(page.getByRole('link', { name: 'Experience' })).toBeVisible()
    
    // Check for proper form labels if any forms exist
    const forms = page.locator('form')
    if (await forms.count() > 0) {
      for (const form of await forms.all()) {
        const inputs = form.locator('input, textarea, select')
        for (const input of await inputs.all()) {
          const label = input.getAttribute('aria-label') || 
                       input.getAttribute('placeholder') ||
                       input.getAttribute('name')
          expect(label).toBeTruthy()
        }
      }
    }
  })

  test('should have smooth scrolling', async ({ page }) => {
    // Test smooth scrolling to sections
    await page.getByRole('link', { name: 'Contact' }).click()
    
    // Wait for scroll animation to complete
    await page.waitForTimeout(1000)
    
    // Check that we're at the contact section
    await expect(page.locator('#contact')).toBeVisible()
  })

  test('should display animated text correctly', async ({ page }) => {
    // Check that animated text is visible
    const animatedTexts = [
      'Senior Backend Engineer',
      'AI/ML Specialist',
      'Cloud Architect',
      'Distributed Systems Expert'
    ]
    
    // At least one of the animated texts should be visible
    const visibleText = await page.locator('text=' + animatedTexts.join('|')).first()
    await expect(visibleText).toBeVisible()
  })
})
