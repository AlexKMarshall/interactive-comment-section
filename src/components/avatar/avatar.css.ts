import { createVar, style } from '@vanilla-extract/css'

import { fontSizeTokens } from 'src/styles/font.css'
import { radiusTokens } from 'src/styles/radius.css'
import { sizeTokens } from 'src/styles/size.css'

export const backgroundColor = createVar()

export const avatar = style({
  position: 'relative',
  display: 'grid',
  placeItems: 'center',
  width: sizeTokens[9],
  aspectRatio: '1',
  borderRadius: radiusTokens.round,
  overflow: 'hidden',
  backgroundColor,
  fontSize: fontSizeTokens[4],
})
