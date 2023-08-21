import { css } from '@emotion/react'

export const css_input = css`
  display: block;
  background-color: transparent;
  background-color: rgba(255, 165, 0, 0.1);
  /* background-color: rgba(0, 68, 255, 0.3); */
  border: 0;
  height: 0.91rem;
  font-size: 0.8em;
  margin-bottom: 0.31rem;

  &:active,
  &:focus {
    background-color: rgba(255, 165, 0, 0.3);
  }

  &.val {
    width: 2.2em;
    text-align: right;
  }
  &.name {
    /* background-color: green; */
    width: 9em;
  }
`
