import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@ds-demo/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://images.universohq.com/2017/05/Pateta.jpg',
    alt: 'Pateta',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
