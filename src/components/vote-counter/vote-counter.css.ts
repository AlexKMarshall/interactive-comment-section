import { style } from '@vanilla-extract/css'

export const wrapper = style({
  display: 'inline-flex',
  alignItems: 'center',
  border: `1px solid black`,
})

export const button = style({
  backgroundColor: 'transparent',
  border: 'none',
})
