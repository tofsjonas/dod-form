import { css } from '@emotion/react'

export const checkbox = css`
  --color: black;
  --hover: gray;
  // background-color: pink;
  position: relative;
  height: 1.3em;
  width: 1.3em;
  display: inline-block;
  cursor: pointer;

  .checkmark {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    height: 0.6em;
    width: 0.4em;
    border-bottom: 0.2em solid transparent;
    border-right: 0.2em solid transparent;
    // border-bottom: 0.2em solid green;
    // border-right: 0.2em solid green;
  }
  &:hover {
    // background-color: orange;
    .checkmark {
      border-color: var(--hover);
    }
  }

  &.checked {
    .checkmark {
      border-color: var(--color);
    }
  }

  input {
    display: none;
  }
`
