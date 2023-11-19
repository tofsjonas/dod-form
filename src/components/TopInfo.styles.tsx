import { css } from '@emotion/react'

export const info = css`
  input {
    /* background-color: rgba(0, 255, 255, 0.3); */
    font-size: 0.9em;
    width: 16.5em !important;
    margin-bottom: 0.2em;
    /* height: 1.3em; */

    &.info-kin {
      display: inline-block;
      width: 9.8em !important;
      margin-right: 0.3em;
    }
    &.info-age {
      display: inline-block;
      width: 6.4em !important;
    }
    &.info-profession {
      /* margin-bottom: 0em; */
    }
  }
  .info-weakness {
    margin-top: 0.16em;
    line-height: 1.6em;
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
    line-height: 1.65em;
    height: 7.9em;
    width: 16.2em;
  }
`
