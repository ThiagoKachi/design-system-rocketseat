import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@thiagokachi-ignite-ui/react'

export default {
  title: 'Surface/Box',
  component: Box,

  args: {
    children: (
      <>
        <Text>Testando elemento em tela</Text>
      </>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
