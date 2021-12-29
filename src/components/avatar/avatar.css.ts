import { createVar, style } from '@vanilla-extract/css'

import { fontSizeTokens } from 'src/styles/theme.font.css'
import { radiusTokens } from 'src/styles/theme.radius.css'
import { sizeTokens } from 'src/styles/theme.size.css'

export const backgroundColor = createVar()

export const avatar = style({
  width: sizeTokens[9],
  aspectRatio: '1',
  backgroundColor,
  display: 'grid',
  placeItems: 'center',
  borderRadius: radiusTokens.round,
  fontSize: fontSizeTokens[4],
})
