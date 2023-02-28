import { render, screen } from '@testing-library/react'

import Popup from '.'

describe('<Popup/>', () => {
  it('should render the heading', () => {
    const { container } = render(<Popup />)

    expect(screen.getByRole('heading', { name: /Popup/i })).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
