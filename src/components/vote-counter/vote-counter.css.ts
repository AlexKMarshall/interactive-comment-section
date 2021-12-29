import { fontWeightTokens, lineHeightTokens } from 'src/styles/theme.font.css'
import { globalStyle, style } from '@vanilla-extract/css'

import { colorThemeTokens } from 'src/styles/theme.color.css'
import { radiusTokens } from 'src/styles/theme.radius.css'
import { sizeTokens } from 'src/styles/theme.size.css'

export const wrapper = style({
  display: 'inline-flex',
  alignItems: 'center',
  backgroundColor: colorThemeTokens.buttonBg,
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
