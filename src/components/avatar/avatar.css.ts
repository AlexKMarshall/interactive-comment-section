import { createVar, style } from '@vanilla-extract/css'

import { fontSizeTokens } from 'src/styles/font.css'
import { radiusTokens } from 'src/styles/radius.css'
import { sizeTokens } from 'src/styles/size.css'

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
