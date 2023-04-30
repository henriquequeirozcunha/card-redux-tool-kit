import { Story, Meta } from '@storybook/react'
import ProductFilters from '.'

export default {
  title: 'ProductFilters',
  component: ProductFilters
} as Meta

export const Basic: Story = (args) => <ProductFilters {...args} />
