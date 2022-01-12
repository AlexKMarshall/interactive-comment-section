import '@testing-library/jest-dom/extend-expect'
import '@vanilla-extract/css/disableRuntimeStyles'

import * as globalStorybookConfig from './.storybook/preview'
import * as matchers from 'jest-extended'

import { setGlobalConfig } from '@storybook/testing-react'
import { toHaveNoViolations } from 'jest-axe'

setGlobalConfig(globalStorybookConfig)

expect.extend(matchers)
expect.extend(toHaveNoViolations)

beforeEach(() => {
  jest.doMock('next/image', () => ({
    __esModule: true,
    default: ({ src, alt, ...props }) => {
      // eslint-disable-next-line @next/next/no-img-element
      return <img src={src} alt={alt} {...props} />
    },
  }))
})
