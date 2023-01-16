import { render, screen } from '@testing-library/react'

import ProductDetail from '.'

describe('<ProductDetail/>', () => {
  it('should render the heading', () => {
    const { container } = render(<ProductDetail />)

    expect(screen.getByRole('heading', { name: /ProductDetail/i })).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
