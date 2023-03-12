import { render, screen } from '@testing-library/react'

import ChatConversationPage from '.'

describe('<ChatConversationPage/>', () => {
  it('should render the heading', () => {
    const { container } = render(<ChatConversationPage />)

    expect(
      screen.getByRole('heading', { name: /ChatConversationPage/i })
    ).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
