import { render, screen } from '@testing-library/react'

import TextInput from '.'

describe('<TextInput/>', () => {
  it('should render the heading', () => {
    const { container } = render(<TextInput />)

    expect(screen.getByRole('heading', { name: /TextInput/i })).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
