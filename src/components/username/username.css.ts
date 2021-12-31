import { letterSpacingTokens } from 'src/styles/font.css'
import { sizeTokens } from 'src/styles/size.css'
import { style } from '@vanilla-extract/css'

export const usernameWrapper = style({
  display: 'flex',
  alignItems: 'center',
})

export const username = style({
  letterSpacing: letterSpacingTokens[1],
  paddingLeft: sizeTokens[3],
  paddingRight: sizeTokens[2],
})
