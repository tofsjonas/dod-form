import { css } from '@emotion/react'

export const left = css`
  position: absolute;
  width: 10.8em;
  height: 28rem;
  left: 0.3em;
  top: 5.4em;
  .abilities-and-spells {
    position: absolute;
    top: 0em;
    height: 21em;
    line-height: 1.39em;
    /* background-color: orange; */
  }
`

export const coins = css`
  position: absolute;
  left: 6.8em;
  top: 19.5em;
  input {
    width: 3em !important;
    margin-bottom: 1.3em;
    text-align: right;
    padding-right: 0.3em;
  }
`

export const css_top = css`
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 34.7em;
  height: 2em;
  left: 10.7em;
  top: 0.7em;
  input {
    width: 2.2em;
    text-align: center;
  }
`
export const css_right = css`
  position: absolute;
  width: 10.8em;
  height: 28em;
  left: 36.7em;
  top: 3.1em;
  input {
    margin: 0.6em 0 0.6em 6.5em;
    text-align: center !important;
  }

  .inventory {
    position: absolute;
    top: 2.6em;

    height: 13.9em;
    margin-left: 0.7em;
    line-height: 1.39em;
    width: 11.3em;
  }
  .memento {
    top: 16.2em;
    position: absolute;
    height: 4em;
    margin: 1.38em 0 2.4em 0;
    line-height: 1.38em;
    /* width: 11.3em; */
  }
  .tiny-items {
    top: 24.2em;
    position: absolute;
    height: 7em;
    margin-left: 0.7em;
    line-height: 1.38em;
    width: 10.7em;
  }
`
