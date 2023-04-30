import { render, screen } from '@testing-library/react'

import Chat from '.'

describe('<Chat/>', () => {
  it('should render the heading', () => {
    const { container } = render(<Chat />)

    expect(screen.getByRole('heading', { name: /Chat/i })).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
