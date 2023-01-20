import { render, screen } from '@testing-library/react'

import ProductFilters from '.'

describe('<ProductFilters/>', () => {
  it('should render the heading', () => {
    const { container } = render(<ProductFilters />)

    expect(screen.getByRole('heading', { name: /ProductFilters/i })).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
