import * as stories from './comment.stories'

import { render, waitFor } from '@testing-library/react'

import { axe } from 'jest-axe'
import { composeStories } from '@storybook/testing-react'

const AllStories = composeStories(stories)

it('should have no accessibility violations', async () => {
  // console.log(AllStories)
  // render(<AllStories.Default />)
  for (let Story of Object.values(AllStories)) {
    const { container } = render(<Story />)
    // we have to waitFor axe to run otherwise we get act warnings
    await waitFor(async () => {
      const result = await axe(container)
      expect(result).toHaveNoViolations()
    })
  }
})
