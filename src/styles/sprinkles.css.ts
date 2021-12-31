import {
  ConditionalValue,
  createMapValueFn,
  createSprinkles,
  defineProperties,
} from '@vanilla-extract/sprinkles'

import { colorThemeTokens } from './color.css'
import { fontSizeTokens } from './font.css'
import { radiusTokens } from './radius.css'
import { resolveMQ } from './media'
import { sizeTokens } from './size.css'

const responsiveProperties = defineProperties({
  conditions: {
    all: {},
    'md-n-above': resolveMQ['md-n-above'],
  },
  defaultCondition: 'all',
  properties: {
    display: ['flex'],
    flexDirection: ['row', 'column'],
    justifyContent: ['flex-start', 'space-between', 'flex-end'],
    alignItems: ['center'],
    padding: sizeTokens,
    gap: sizeTokens,
    fontSize: fontSizeTokens,
    borderRadius: radiusTokens,
    backgroundColor: colorThemeTokens.surface,
  },
})

export const sprinkles = createSprinkles(responsiveProperties)

export type Sprinkles = Parameters<typeof sprinkles>[0]

export const mapResponsiveValue = createMapValueFn(responsiveProperties)
export type ResponsiveValue<Value extends string | number> = ConditionalValue<
  typeof responsiveProperties,
  Value
>
