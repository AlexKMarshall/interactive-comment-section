import { colorThemeTokens } from 'src/styles/color.css'
import { fontWeightTokens } from 'src/styles/font.css'
import { style } from '@vanilla-extract/css'

export const button = style({
  display: 'inline-flex',
  alignItems: 'stretch',
  gap: '0.25em',
  background: 'none',
  border: 'none',
  color: colorThemeTokens.button.primary,
  fontWeight: fontWeightTokens.semiBold,
})
