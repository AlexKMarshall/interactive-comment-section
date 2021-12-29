import * as stories from './vote-counter.stories'

import { render, screen } from '@testing-library/react'

import { axe } from 'jest-axe'
import { composeStories } from '@storybook/testing-react'
import { useState } from 'react'
import userEvent from '@testing-library/user-event'

const { Default: DefaultVoteCounter } = composeStories(stories)

type ControlledWrapperProps = {
  defaultValue?: number
}
function ControlledWrapper({ defaultValue = 0 }: ControlledWrapperProps) {
  const [value, setValue] = useState(defaultValue)
  const handleVote = (newVote: number) => setValue(newVote)
  return (
    <DefaultVoteCounter
      value={value}
      onUpVote={handleVote}
      onDownVote={handleVote}
    />
  )
}

it('should have no accessibility violations', async () => {
  const { container } = render(<DefaultVoteCounter />)

  const results = await axe(container)
  expect(results).toHaveNoViolations()
})

it('should work as a controlled component', () => {
  render(<ControlledWrapper defaultValue={0} />)

  const voteValue = screen.getByLabelText(/number of votes/i)
  expect(voteValue).toHaveTextContent('0')

  userEvent.click(screen.getByRole('button', { name: /vote up/i }))
  expect(voteValue).toHaveTextContent('1')
  userEvent.click(screen.getByRole('button', { name: /vote down/i }))
  expect(voteValue).toHaveTextContent('0')
})
