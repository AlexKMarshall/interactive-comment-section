import { colorThemeTokens } from 'src/styles/color.css'
import { radiusTokens } from 'src/styles/radius.css'
import { style } from '@vanilla-extract/css'

export const badge = style({
  paddingInline: '0.625em',
  paddingBlock: '0.25em',
  paddingBlockStart: '0.0625em',
  borderRadius: radiusTokens[1],
  backgroundColor: colorThemeTokens.tone.info.base,
  color: 'white',
})
