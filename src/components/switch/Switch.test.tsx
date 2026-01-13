import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Switch } from './Switch'

describe('Switch', () => {
  it('renders switch', () => {
    render(<Switch />)
    expect(screen.getByRole('switch')).toBeInTheDocument()
  })

  it('toggles state on click', () => {
    render(<Switch />)
    const sw = screen.getByRole('switch')
    sw.click()
    expect(sw).toHaveAttribute('data-state', 'checked')
  })

  it('supports controlled mode', () => {
    render(<Switch checked />)
    expect(screen.getByRole('switch')).toHaveAttribute('data-state', 'checked')
  })
})
