import { Story, Meta } from '@storybook/react'
import SideMenu from '.'

export default {
  title: 'SideMenu',
  component: SideMenu
} as Meta

export const Basic: Story = (args) => <SideMenu {...args} />
