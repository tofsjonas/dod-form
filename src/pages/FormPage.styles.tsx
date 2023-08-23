import { css } from '@emotion/react'
import bg from '../assets/form-en.jpg'

const width = 53.1
const height = width * 1.291764706
export const formpage = css`
  margin: 0 auto;
  width: ${width}rem;
  height: ${height}rem;
  /* background: url(${bg}) no-repeat; */
  position: relative;
`

export const topinfo = css`
  width: 47.5em;
  height: 9em;
  position: absolute;
  top: 2.4em;
  left: 3em;
`
export const attributes = css`
  width: 27.7em;
  height: 6em;
  position: absolute;
  top: 11.5em;
  left: 12.7em;
`
export const abilities = css`
  width: 21em;
  height: 25em;
  position: absolute;
  top: 24.43em;
  left: 16.1em;
  input {
    font-size: 0.8em;
  }
`
export const midsection = css`
  position: absolute;
  width: 48em;
  left: 2.7em;
  top: 19em;
`

export const bottom_right = css`
  /* background-color: rgba(0, 255, 255, 0.3);
  height: 20em;
  width: 18em; */

  position: absolute;
  left: 35em;
  top: 51em;
`
