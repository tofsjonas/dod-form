import { css } from '@emotion/react'

export const left = css`
  input {
    font-size: 0.8em;
    width: 18.5em !important;
    margin-bottom: 0.7em;
    padding-left: 4em;

    &.til-1 {
      display: inline-block;
      width: 11em !important;
      margin-right: 0.4em;
    }
    &.til-2 {
      display: inline-block;
      width: 7.1em !important;
      // padding-left: initial;
      // text-align: right;
    }
    &.til-5 {
      padding-left: initial;
    }
  }
`
export const name = css`
  position: absolute;
  left: 17em;
  top: 7em;
  input {
    font-size: 1rem;
    font-weight: bold;
    text-align: center;
    width: 14em !important;
    // color: blue;
  }
`
export const right = css`
  position: absolute;
  left: 32.6em;
  top: -0.15em;
  width: 15em;
  textarea {
    height: 7.9em;
    width: 16.2em;
  }
`
