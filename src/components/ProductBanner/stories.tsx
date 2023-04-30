import { Story, Meta } from '@storybook/react'
import ProductBanner from '.'

export default {
  title: 'ProductBanner',
  component: ProductBanner
} as Meta

export const Basic: Story = (args) => <ProductBanner {...args} />
