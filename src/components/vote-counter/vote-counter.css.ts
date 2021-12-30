import { fontWeightTokens, lineHeightTokens } from 'src/styles/font.css'

import { colorThemeTokens } from 'src/styles/color.css'
import { radiusTokens } from 'src/styles/radius.css'
import { sizeTokens } from 'src/styles/size.css'
import { style } from '@vanilla-extract/css'

export const wrapper = style({
  display: 'inline-flex',
  alignItems: 'center',
  backgroundColor: colorThemeTokens.voteButtonBg,
  color: colorThemeTokens.text.accent,
  borderRadius: radiusTokens[3],
  lineHeight: lineHeightTokens['00'],
  fontWeight: fontWeightTokens.bold,
})

export const button = style({
  padding: sizeTokens[3],
  backgroundColor: 'transparent',
  color: colorThemeTokens.text.accentLowContrast,
  border: 'none',
})
