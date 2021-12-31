import { media, resolveMQ } from 'src/styles/media'

import { colorThemeTokens } from 'src/styles/color.css'
import { fontWeightTokens } from 'src/styles/font.css'
import { sizeTokens } from 'src/styles/size.css'
import { style } from '@vanilla-extract/css'

export const comment = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, auto)',
  gridTemplateRows: 'repeat(3, auto)',
  gridTemplateAreas: `'meta meta'
                      'content content'
                      'votes actions'`,
  gap: sizeTokens[4],
  alignContent: 'baseline',

  '@media': {
    [resolveMQ['md-n-above']['@media']]: {
      gridTemplateColumns: 'auto 1fr auto',
      gridTemplateRows: 'auto 1fr',
      gridTemplateAreas: `'votes meta actions'
                          'votes content content'`,
    },
  },
})

export const meta = style({
  gridArea: 'meta',
})

export const content = style({
  gridArea: 'content',
})

export const actions = style({
  gridArea: 'actions',
  justifySelf: 'end',
})

export const votes = style({
  gridArea: 'votes',
})

export const replyTo = style({
  color: colorThemeTokens.text.accent,
  fontWeight: fontWeightTokens.semiBold,

  ':before': {
    content: '@',
  },
})
