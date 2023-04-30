import { Story, Meta } from '@storybook/react'
import Categories from '.'

export default {
  title: 'Categories',
  component: Categories
} as Meta

export const Basic: Story = (args) => <Categories {...args} />
