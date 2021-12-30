import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Avatar } from '.'

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
}

export default meta

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />

export const Default = Template.bind({})
Default.args = {
  username: 'belinda',
  src: '/avatar.jpg',
}

export const NoImage = Template.bind({})
NoImage.args = {
  username: 'klausbloch',
}

export const BrokenImage = Template.bind({})
BrokenImage.args = {
  ...Default.args,
  src: '/missing-image-file.jpg',
}
