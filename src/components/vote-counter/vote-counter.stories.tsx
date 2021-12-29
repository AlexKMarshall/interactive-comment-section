import { ComponentMeta, ComponentStory } from '@storybook/react'

import { VoteCounter } from '.'

const meta: ComponentMeta<typeof VoteCounter> = {
  title: 'Components/VoteCounter',
  component: VoteCounter,
  argTypes: {
    orientation: {
      options: ['horizontal', 'vertical'],
    },
  },
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
Default.args = {}

export const Vertical = Template.bind({})
Vertical.args = {
  ...Default.args,
  orientation: 'vertical',
}

export const Responsive = Template.bind({})
Responsive.args = {
  ...Default.args,
  orientation: { all: 'horizontal', 'md-n-above': 'vertical' },
}
