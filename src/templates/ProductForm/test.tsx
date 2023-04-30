import { render, screen } from '@testing-library/react'

import ProductForm from '.'

describe('<ProductForm/>', () => {
  it('should render the heading', () => {
    const { container } = render(<ProductForm />)

    expect(
      screen.getByRole('heading', { name: /ProductForm/i })
    ).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
