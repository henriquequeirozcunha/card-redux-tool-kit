import { render, screen } from '@testing-library/react'

import CardForm from '.'

describe('<CardForm/>', () => {
  it('should render the heading', () => {
    const { container } = render(<CardForm />)

    expect(screen.getByRole('heading', { name: /CardForm/i })).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
