import { createGlobalTheme } from '@vanilla-extract/css'

export const radiusTokens = createGlobalTheme(':root', {
  1: '2px',
  2: '5px',
  3: '1rem',
  4: '2rem',
  5: '4rem',
  6: '8rem',
  round: '1e5px',
})
