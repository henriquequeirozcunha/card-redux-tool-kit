import { Story, Meta } from '@storybook/react'
import Card from '.'

export default {
  title: 'Card',
  component: Card
} as Meta

export const Basic: Story = (args) => <Card {...args} />
