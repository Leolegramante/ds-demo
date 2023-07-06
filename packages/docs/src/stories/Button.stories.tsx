import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@ds-demo/react'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'enviar',
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const big: StoryObj<ButtonProps> = {
  args: {
    size: 'big',
  },
}
