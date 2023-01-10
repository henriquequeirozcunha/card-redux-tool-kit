import { Story, Meta } from '@storybook/react'
import Base from '.'

export default {
  title: 'Base',
  component: Base
} as Meta

export const Basic: Story = (args) => <Base {...args} />
