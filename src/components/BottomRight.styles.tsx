import { css } from '@emotion/react'

export const rest = css`
  /* background-color: rgba(0, 255, 255, 0.3); */
  margin-top: 0.5em;
`

export const willpower_points = css`
  position: absolute;
  left: 1.8em;
  top: 4.7em;
  text-align: center !important;
`
export const hit_points = css`
  ${willpower_points}
  top: 10.5em;
`

export const willpower_point_checks = css`
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
  ${willpower_point_checks}
  top: 9.6em;
  .checkbox {
    --color: darkgreen;
  }
`

export const death_rolls = css`
  ${willpower_point_checks}
  top: 13.4em;
  left: 5.5em;
  .checkbox {
    width: 1.25em;
    &.death-roll-success-1 {
      margin-left: 1em;
    }
    &.death-roll-failure-1 {
      margin-left: 0.6em;
    }
    &.lang-sv {
      &.death-roll-success-1 {
        margin-left: 0em;
      }
      &.death-roll-failure-1 {
        margin-left: 1.3em;
      }
    }
  }
`
