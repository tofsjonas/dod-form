import { css } from '@emotion/react'

export const textarea = css`
  outline: 0;
  background-color: transparent;
  background-color: rgba(255, 165, 0, 0.1);
  // background-color: rgb(255, 0, 0, 0.3);

  &.pink {
    background-color: rgba(255, 0, 0, 0.3) !important;
  }

  margin: 0;
  padding: 0;
  border: 0;
  width: 100%;
  // height: 100%;
  height: 30em;
  /* line-height: 1.92em; */
  overflow: hidden;
`
