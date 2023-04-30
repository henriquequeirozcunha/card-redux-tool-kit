import { render, screen } from '@testing-library/react'

import ErrorWrapper from '.'

describe('<ErrorWrapper/>', () => {
  it('should render the heading', () => {
    const { container } = render(<ErrorWrapper />)

    expect(
      screen.getByRole('heading', { name: /ErrorWrapper/i })
    ).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
