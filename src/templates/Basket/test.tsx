import { render, screen } from '@testing-library/react'

import Basket from '.'

describe('<Basket/>', () => {
  it('should render the heading', () => {
    const { container } = render(<Basket />)

    expect(screen.getByRole('heading', { name: /Basket/i })).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
