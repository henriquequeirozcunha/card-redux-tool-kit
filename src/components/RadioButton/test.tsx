import { render, screen } from '@testing-library/react'

import RadioButton from '.'

describe('<RadioButton/>', () => {
  it('should render the heading', () => {
    const { container } = render(<RadioButton />)

    expect(
      screen.getByRole('heading', { name: /RadioButton/i })
    ).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
