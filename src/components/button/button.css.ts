import { assignVars, createThemeContract, style } from '@vanilla-extract/css'

import { colorThemeTokens } from 'src/styles/color.css'
import { fontWeightTokens } from 'src/styles/font.css'
import { recipe } from '@vanilla-extract/recipes'

const buttonTokens = createThemeContract({
  textColor: null,
  textHoverColor: null,
})

export const buttonBase = style({
  display: 'inline-flex',
  alignItems: 'stretch',
  gap: '0.25em',
  background: 'none',
  border: 'none',
  fontWeight: fontWeightTokens.semiBold,
  color: buttonTokens.textColor,
  selectors: {
    '&:hover, &:focus-visible': {
      color: buttonTokens.textHoverColor,
    },
  },
})

export const button = recipe({
  base: buttonBase,

  variants: {
    color: {
      info: {
        vars: assignVars(buttonTokens, {
          textColor: colorThemeTokens.tone.info.base,
          textHoverColor: colorThemeTokens.tone.info.variant,
        }),
      },
      critical: {
        vars: assignVars(buttonTokens, {
          textColor: colorThemeTokens.tone.critical.base,
          textHoverColor: colorThemeTokens.tone.critical.variant,
        }),
      },
    },
  },
})
