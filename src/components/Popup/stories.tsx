import { Story, Meta } from '@storybook/react'
import Popup from '.'

export default {
  title: 'Popup',
  component: Popup
} as Meta

export const Basic: Story = (args) => <Popup {...args} />
