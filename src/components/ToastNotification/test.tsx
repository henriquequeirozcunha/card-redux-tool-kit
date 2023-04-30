import { render, screen } from '@testing-library/react'

import ToastNotification from '.'

describe('<ToastNotification/>', () => {
  it('should render the heading', () => {
    const { container } = render(<ToastNotification />)

    expect(screen.getByRole('heading', { name: /ToastNotification/i })).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
