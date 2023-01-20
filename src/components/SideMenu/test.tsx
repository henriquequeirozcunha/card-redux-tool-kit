import { render, screen } from '@testing-library/react'

import SideMenu from '.'

describe('<SideMenu/>', () => {
  it('should render the heading', () => {
    const { container } = render(<SideMenu />)

    expect(screen.getByRole('heading', { name: /SideMenu/i })).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
