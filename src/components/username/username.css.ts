import { fontWeightTokens, letterSpacingTokens } from 'src/styles/font.css'

import { colorThemeTokens } from 'src/styles/color.css'
import { sizeTokens } from 'src/styles/size.css'
import { style } from '@vanilla-extract/css'

export const usernameWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: sizeTokens[2],
})

export const username = style({
  letterSpacing: letterSpacingTokens[1],
  color: colorThemeTokens.text.strong,
  fontWeight: fontWeightTokens.semiBold,
})
