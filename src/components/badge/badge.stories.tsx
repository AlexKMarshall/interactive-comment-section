import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Badge } from 'src/components'
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

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'you',
}
