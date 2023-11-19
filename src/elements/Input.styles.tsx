import { css } from '@emotion/react'

export const css_input = css`
  display: block;
  background-color: transparent;
  background-color: rgba(255, 165, 0, 0.1);
  /* background-color: rgba(255, 165, 0, 0.3); */
  /* background-color: orange; */
  /* background-color: rgba(0, 68, 255, 0.3); */
  font-size: 1em;
  line-height: 0.7em !important;
  height: 1.3em;
  border: 0;
  padding: 0;

  &:active,
  &:focus {
    background-color: rgba(255, 165, 0, 0.3);
  }

  &.val {
    width: 2.2em;
    text-align: right;
  }

  &.nbr {
    width: 2.2em;
    text-align: right;
  }

  &.pink {
    background-color: rgba(255, 0, 0, 0.3) !important;
  }

  &.name {
    /* background-color: green; */
    width: 9em;
  }
`
