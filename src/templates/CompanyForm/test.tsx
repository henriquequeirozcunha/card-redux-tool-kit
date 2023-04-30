import { render, screen } from '@testing-library/react'

import CompanyForm from '.'

describe('<CompanyForm/>', () => {
  it('should render the heading', () => {
    const { container } = render(<CompanyForm />)

    expect(
      screen.getByRole('heading', { name: /CompanyForm/i })
    ).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
