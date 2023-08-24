import { css } from '@emotion/react'

export const rest = css`
  /* background-color: rgba(0, 255, 255, 0.3); */
  margin-top: 0.5em;
`

export const willpower_point_checks = css`
  /* background-color: rgba(0, 255, 255, 0.3); */
  position: absolute;
  width: 10.3em;
  left: 4.8em;
  top: 3.75em;
  .checkbox {
    --color: darkred;
    width: 0.96em;
    height: 1.1em;
    margin: 0;
    padding: 0;
  }
`
export const hit_point_checks = css`
  /* background-color: rgba(0, 255, 255, 0.3); */
  ${willpower_point_checks}
  top: 9.6em;
  .checkbox {
    --color: darkgreen;
  }
`

export const death_rolls = css`
  /* background-color: rgba(0, 255, 255, 0.3); */
  ${willpower_point_checks}
  top: 13.4em;
  left: 6.5em;
  .checkbox {
    width: 1.25em;
    &.death-roll-failure-1 {
      margin-left: 0.6em;
    }
  }
`
export const attribute_checks = css``
