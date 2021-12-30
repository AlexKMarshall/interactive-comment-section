import { colorThemeTokens } from 'src/styles/color.css'
import { fontWeightTokens } from 'src/styles/font.css'
import { recipe } from '@vanilla-extract/recipes'
import { style } from '@vanilla-extract/css'

export const buttonBase = style({
  display: 'inline-flex',
  alignItems: 'stretch',
  gap: '0.25em',
  background: 'none',
  border: 'none',
  color: colorThemeTokens.button.primary,
  fontWeight: fontWeightTokens.semiBold,
})

export const button = recipe({
  base: buttonBase,

  variants: {
    color: {
      info: {
        color: colorThemeTokens.tone.info.base,
      },
      critical: {
        color: colorThemeTokens.tone.critical.base,
      },
    },
  },
})
