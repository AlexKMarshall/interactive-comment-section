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
