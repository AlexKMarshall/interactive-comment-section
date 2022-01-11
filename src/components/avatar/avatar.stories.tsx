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

export const Default = {
  args: {
    username: 'belinda',
    src: '/avatar.jpg',
  },
}

export const NoImage = {
  args: {
    username: 'klausbloch',
  },
}

export const BrokenImage = {
  ...Default,
  args: {
    ...Default.args,
    src: '/missing-image-file.jpg',
  },
}
