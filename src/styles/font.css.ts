import { createGlobalTheme } from '@vanilla-extract/css'

export const fontSizeTokens = createGlobalTheme(':root', {
  '00': '0.5rem',
  0: '0.75rem',
  1: '1rem',
  2: '1.1rem',
  3: '1.25rem',
  4: '1.5rem',
  5: '2rem',
  6: '2.5rem',
  7: '3rem',
  8: '3.5rem',
})

export const fontWeightTokens = createGlobalTheme(':root', {
  regular: '400',
  semiBold: '500',
  bold: '700',
})

export const lineHeightTokens = createGlobalTheme(':root', {
  '00': '0.95',
  0: '1.1',
  1: '1.25',
  2: '1.375',
  3: '1.5',
  4: '1.75',
})

export const letterSpacingTokens = createGlobalTheme(':root', {
  1: '0.025em',
})
