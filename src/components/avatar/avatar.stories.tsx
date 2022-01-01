import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Avatar } from 'src/components'
import { ComponentProps } from 'react'

const meta: ComponentMeta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    src: {
      options: ['/avatar.jpg', '/missing-image-file.jpg'],
      control: 'select',
      labels: ['Valid Image', 'Broken Link'],
    },
  },
  includeStories: /^[A-Z]/,
}

export default meta

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />

export const defaultArgs: ComponentProps<typeof Avatar> = {
  username: 'belinda',
  src: '/avatar.jpg',
}

export const Default = Template.bind({})
Default.args = defaultArgs

export const NoImage = Template.bind({})
NoImage.args = {
  username: 'klausbloch',
}

export const BrokenImage = Template.bind({})
BrokenImage.args = {
  ...Default.args,
  src: '/missing-image-file.jpg',
}
