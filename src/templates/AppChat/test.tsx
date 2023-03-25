import { render, screen } from '@testing-library/react'

import AppChat from '.'

describe('<AppChat/>', () => {
  it('should render the heading', () => {
    const { container } = render(<AppChat />)

    expect(screen.getByRole('heading', { name: /AppChat/i })).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
