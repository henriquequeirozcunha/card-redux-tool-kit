import { Story, Meta } from '@storybook/react'
import CompanyForm from '.'

export default {
  title: 'CompanyForm',
  component: CompanyForm
} as Meta

export const Basic: Story = (args) => <CompanyForm {...args} />
