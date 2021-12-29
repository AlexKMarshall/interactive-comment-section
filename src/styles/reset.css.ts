import { globalStyle } from '@vanilla-extract/css'
import { lineHeightTokens } from './theme.font.css'

const motionOk = `prefers-reduced-motion: no-preference`
const motionNotOk = `prefers-reduced-motion: reduce`

globalStyle('*, *:after, *:before', {
  boxSizing: 'border-box',
})

globalStyle('body, h1, h2, h3, h4, p, figure, blockquote, dl, dd', {
  margin: 0,
})

globalStyle(`ul[role='list'], ol[role='list']`, { listStyle: 'none' })

globalStyle('html', {
  minHeight: '100%',

  '@media': {
    [motionOk]: {
      scrollBehavior: 'smooth',
    },
  },
})

globalStyle('body', {
  minHeight: '100%',
  textRendering: 'optimizeSpeed',
  lineHeight: lineHeightTokens[3],
  fontFamily: `'Rubik', sans-serif`,
})

globalStyle('a:not([class])', {
  textDecorationSkipInk: 'auto',
})

globalStyle('input, button, textarea, select', {
  font: 'inherit',
  lineHeight: 'inherit',
})

globalStyle('img, svg', {
  display: 'block',
})

globalStyle('html:focus-within', {
  '@media': {
    [motionNotOk]: {
      scrollBehavior: 'auto',
    },
  },
})

globalStyle('*, *::before, *::after', {
  '@media': {
    [motionNotOk]: {
      animationDuration: '0.01ms !important',
      animationIterationCount: '1 !important',
      transitionDuration: '0.01ms !important',
      scrollBehavior: 'auto',
    },
  },
})
