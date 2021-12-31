import { colorThemeTokens } from 'src/styles/color.css'
import { style } from '@vanilla-extract/css'

export const badge = style({
  paddingInline: '0.625em',
  paddingBlock: '0.25em',
  paddingBlockStart: '0.0625em',
  backgroundColor: colorThemeTokens.tone.info.base,
  color: 'white',
})
