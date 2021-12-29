import { createGlobalTheme } from '@vanilla-extract/css'

export const radiusTokens = createGlobalTheme(':root', {
  1: '2px',
  2: '5px',
  3: '10px',
  4: '1rem',
  5: '2rem',
  round: '1e5px',
})
