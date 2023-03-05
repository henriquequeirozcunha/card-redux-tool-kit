import { render, screen } from '@testing-library/react'

import Spinner from '.'

describe('<Spinner/>', () => {
  it('should render the heading', () => {
    const { container } = render(<Spinner />)

    expect(screen.getByRole('heading', { name: /Spinner/i })).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
