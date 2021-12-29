import {
  ConditionalValue,
  createMapValueFn,
  createSprinkles,
  defineProperties,
} from '@vanilla-extract/sprinkles'

import { resolveMQ } from './media'

const responsiveProperties = defineProperties({
  conditions: {
    all: {},
    'md-n-above': resolveMQ['md-n-above'],
  },
  defaultCondition: 'all',
  properties: {
    flexDirection: ['row', 'column'],
  },
})

export const sprinkles = createSprinkles(responsiveProperties)

export type Sprinkles = Parameters<typeof sprinkles>[0]

export const mapResponsiveValue = createMapValueFn(responsiveProperties)
export type ResponsiveValue<Value extends string | number> = ConditionalValue<
  typeof responsiveProperties,
  Value
>
