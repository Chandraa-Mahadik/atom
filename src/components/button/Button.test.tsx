// src/components/button/Button.test.tsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Button } from './Button'

describe('Button', () => {
  it('renders children', () => {
    render(<Button>Press me</Button>)
    expect(screen.getByText('Press me')).toBeInTheDocument()
  })

  it('applies variant class', () => {
    render(<Button variant="ghost">Ghost</Button>)
    const btn = screen.getByText('Ghost')
    expect(btn.className).toContain('bg-[var(--atom-button-ghost-bg)]')
  })

  it('supports className override', () => {
    render(<Button className="rounded-xl">Override</Button>)
    const btn = screen.getByText('Override')
    expect(btn.className).toContain('rounded-xl')
  })
})
