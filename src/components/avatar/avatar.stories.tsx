import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Avatar } from '.'

const meta: ComponentMeta<typeof Avatar> = {
  title: 'Avatar',
  component: Avatar,
}

export default meta

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />

export const Default = Template.bind({})
Default.args = {
  username: 'belinda',
}

export const NoImage = Template.bind({})
NoImage.args = {
  username: 'klausbloch',
}
