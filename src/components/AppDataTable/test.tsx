import { render, screen } from '@testing-library/react'

import AppDataTable from '.'

describe('<AppDataTable/>', () => {
  it('should render the heading', () => {
    const { container } = render(<AppDataTable />)

    expect(screen.getByRole('heading', { name: /AppDataTable/i })).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
