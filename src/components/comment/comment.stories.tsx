import * as usernameStories from 'src/components/username/username.stories'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Comment } from 'src/components'
import { ComponentProps } from 'react'
import { colorTokens } from 'src/styles/color.css'

const meta: ComponentMeta<typeof Comment> = {
  title: 'Components/Comment',
  component: Comment,
  includeStories: /^[A-Z]/,
  parameters: {
    backgrounds: {
      default: 'Very Light Grey',
      values: [{ name: 'Very Light Grey', value: colorTokens.veryLightGray }],
    },
  },
}

export default meta

const Template: ComponentStory<typeof Comment> = (args) => <Comment {...args} />

export const defaultArgs: ComponentProps<typeof Comment> = {
  user: usernameStories.defaultArgs,
  isCurrentUser: false,
  content:
    'Ice cream sugar plum sweet sweet lollipop. Topping tart brownie muffin halvah cheesecake ice cream cake gummi bears. Tart chocolate bar gummi bears cake halvah dragée cake gummi bears jelly beans. Powder fruitcake toffee caramels marzipan marzipan.',
  createdOn: new Date(Date.now() - 1000 * 60 * 60 * 48),
  votes: 0,
}
export const Default = Template.bind({})
Default.args = defaultArgs

export const CurrentUser = Template.bind({})
CurrentUser.args = {
  ...Default.args,
  isCurrentUser: true,
}

export const ReplyTo = Template.bind({})
ReplyTo.args = {
  ...Default.args,
  replyTo: 'klausBloch',
}

export const MobileViewport = Template.bind({})
MobileViewport.args = {
  ...Default.args,
}
MobileViewport.parameters = {
  viewport: {
    defaultViewport: 'mobile1',
  },
}
