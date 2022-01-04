import { Badge } from 'src/components'
import { ComponentMeta } from '@storybook/react'
import { fontSizeTokens } from 'src/styles/font.css'

const meta: ComponentMeta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    size: {
      options: Object.keys(fontSizeTokens),
    },
  },
}

export default meta

export const Default = { args: { children: 'you' } }
