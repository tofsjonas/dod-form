import { css } from '@emotion/react'

export const info = css`
  input {
    /* background-color: rgba(0, 255, 255, 0.3); */
    font-size: 0.9em;
    width: 16.5em !important;
    height: 1.3em;

    &.kin {
      display: inline-block;
      width: 9.8em !important;
      margin-right: 0.3em;
    }
    &.age {
      display: inline-block;
      width: 6.4em !important;
    }
    &.profession {
      margin-bottom: 0em;
    }
  }
  .weakness {
    margin-top: 0;
    height: 3.3em;
    width: 16.2em;
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
export const appearance = css`
  position: absolute;
  left: 32.6em;
  top: -0.15em;
  width: 15em;
  textarea {
    height: 7.9em;
    width: 16.2em;
  }
`