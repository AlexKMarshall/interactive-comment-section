import '../src/styles/reset.css'
import './next-image'

import { QueryClient, QueryClientProvider } from 'react-query'
import { initialize, mswDecorator } from 'msw-storybook-addon'

initialize()

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  chromatic: { viewports: [375, 1440] },
}

const queryClient = new QueryClient()

export const decorators = [
  (Story) => (
    <QueryClientProvider client={queryClient}>
      <Story />
    </QueryClientProvider>
  ),
  mswDecorator,
]
