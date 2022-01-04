import * as usernameStories from 'src/components/username/username.stories'

import { Comment } from 'src/components'
import { ComponentMeta } from '@storybook/react'
import { ComponentProps } from 'react'
import { colorTokens } from 'src/styles/color.css'

const meta: ComponentMeta<typeof Comment> = {
  title: 'Components/Comment',
  component: Comment,
  includeStories: /^[A-Z]/,
  parameters: {
    backgrounds: {
      default: 'Very Light Grey',
      values: [
        {
          name: 'Very Light Grey',
          value: colorTokens.veryLightGray,
        },
      ],
    },
  },
}
export default meta

export const Default = {
  args: {
    user: usernameStories.Default.args,
    isCurrentUser: false,
    content:
      'Ice cream sugar plum sweet sweet lollipop. Topping tart brownie muffin halvah cheesecake ice cream cake gummi bears. Tart chocolate bar gummi bears cake halvah dragée cake gummi bears jelly beans. Powder fruitcake toffee caramels marzipan marzipan.',
    createdOn: new Date(Date.now() - 1000 * 60 * 60 * 48),
    votes: 0,
  },
}
export const CurrentUser = {
  args: { ...Default.args, isCurrentUser: true },
}
export const ReplyTo = {
  args: { ...Default.args, replyTo: 'klausBloch' },
}
