import { css } from '@emotion/react'

export const css_ability_checks = css`
  .checkbox {
    display: block;
    margin-bottom: -0.07em;
  }
`
export const css_weapon_checks = css`
  position: absolute;
  left: 11em;
  top: 1.26em;
  .checkbox {
    display: block;
    margin-bottom: -0.069em;
  }
`
export const css_secondary_checks = css`
  position: absolute;
  left: 10.93em;
  top: 16em;
  .checkbox {
    display: block;
    margin-bottom: -0.07em;
  }
`
export const css_ability_values = css`
  position: absolute;
  left: 1.1em;
  top: 0.1em;
  input {
    font-size: 0.82em;
    margin-bottom: 0.2em;
  }
`
export const css_weapon_values = css`
  ${css_ability_values}
  left: 12.1em;
  top: 1.28em;
`
export const css_secondary_values = css`
  ${css_ability_values}
  left: 12.1em;
  top: 16.2em;
`
export const css_secondary_names = css`
  ${css_ability_values}
  left: 14.1em;
  top: 16.2em;
`
