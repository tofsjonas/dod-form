import { css } from '@emotion/react'

export const attribute_values = css`
  margin-top: 1.7em;
  display: flex;
  justify-content: space-between;

  input {
    text-align: center !important;
    height: 1.5em;
    font-size: 1.1em;
    line-height: 1.2em;
    font-weight: bold;
    display: inline-block;
  }
`
export const attribute_checks = css`
  display: flex;
  justify-content: space-between;
  margin: 0.4em 0.2em 0 0.4em;

  .checkbox {
    --color: rgb(202, 0, 0);
    font-size: 1.4em;
  }
`
