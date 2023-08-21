import { css } from '@emotion/react'
import bg from '../assets/form-bg.jpg'

const width = 53.1
const height = width * 1.291764706
export const css_formpage = css`
  margin: 0 auto;
  width: ${width}rem;
  height: ${height}rem;
  background: url(${bg}) no-repeat;
  position: relative;
`

export const css_topinfo = css`
  width: 47.5em;
  height: 9em;
  position: absolute;
  top: 2.4em;
  left: 3em;
`
export const css_attributes = css`
  width: 27.7em;
  height: 6em;
  position: absolute;
  top: 11.5em;
  left: 12.7em;
`
export const css_abilities = css`
  width: 21em;
  height: 25em;
  position: absolute;
  top: 24.43em;
  left: 16.1em;
`
export const css_midsection = css`
  position: absolute;
  width: 48em;
  left: 2.7em;
  top: 19em;
`
