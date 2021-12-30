import { colorThemeTokens } from 'src/styles/color.css'
import { fontWeightTokens } from 'src/styles/font.css'
import { style } from '@vanilla-extract/css'

export const button = style({
  background: 'none',
  color: colorThemeTokens.button.primary,
  border: 'none',
  fontWeight: fontWeightTokens.semiBold,
})
