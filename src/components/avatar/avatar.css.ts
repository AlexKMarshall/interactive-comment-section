import { createVar, style } from '@vanilla-extract/css'

import { colorThemeTokens } from 'src/styles/color.css'
import { fontSizeTokens } from 'src/styles/font.css'
import { radiusTokens } from 'src/styles/radius.css'
import { recipe } from '@vanilla-extract/recipes'
import { sizeTokens } from 'src/styles/size.css'

export const backgroundColor = createVar()

const avatarBase = style({
  position: 'relative',
  display: 'grid',
  placeItems: 'center',
  aspectRatio: '1',
  borderRadius: radiusTokens.round,
  overflow: 'hidden',
  backgroundColor,
  color: colorThemeTokens.text.strong,
  fontSize: fontSizeTokens[3],
})

export const avatar = recipe({
  base: avatarBase,

  variants: {
    size: {
      sm: {
        width: sizeTokens[8],
      },
      md: {
        width: sizeTokens[9],
      },
    },
  },
})
