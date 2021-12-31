import * as usernameStories from 'src/components/username/username.stories'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Comment } from '.'
import { ComponentProps } from 'react'

const meta: ComponentMeta<typeof Comment> = {
  title: 'Components/Comment',
  component: Comment,
  includeStories: /^[A-Z]/,
}

export default meta

const Template: ComponentStory<typeof Comment> = (args) => <Comment {...args} />

export const defaultArgs: ComponentProps<typeof Comment> = {
  user: usernameStories.defaultArgs,
  isCurrentUser: false,
  content: 'This is a comment',
  createdOn: new Date(Date.now()),
  votes: 0,
}
export const Default = Template.bind({})
Default.args = defaultArgs
