import { Story, Meta } from '@storybook/react'
import CardForm from '.'

export default {
  title: 'CardForm',
  component: CardForm
} as Meta

export const Basic: Story = (args) => <CardForm {...args} />
