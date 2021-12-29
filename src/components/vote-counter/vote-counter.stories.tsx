import { ComponentMeta, ComponentStory } from '@storybook/react'

import { VoteCounter } from '.'

const meta: ComponentMeta<typeof VoteCounter> = {
  title: 'Components/VoteCounter',
  component: VoteCounter,
  parameters: {
    actions: {
      argTypesRegex: '^on.*',
    },
  },
}

export default meta

const Template: ComponentStory<typeof VoteCounter> = (args) => (
  <VoteCounter {...args} />
)

export const Default = Template.bind({})
Default.args = {
  value: 5,
}
