import { render, screen } from '@testing-library/react'

import ProductBanner from '.'

describe('<ProductBanner/>', () => {
  it('should render the heading', () => {
    const { container } = render(<ProductBanner />)

    expect(screen.getByRole('heading', { name: /ProductBanner/i })).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
