import { css } from '@emotion/react'

export const armor_and_stuff = css`
  position: absolute;
  left: 0em;
  top: 0em;
  width: 32em;
  /* height: 10em;
  background-color: rgba(0, 255, 255, 0.3); */
  .checkbox {
    position: absolute;
  }

  .bane-sneaking {
    left: 4.2em;
    top: 3.4em;
  }
  .bane-evade {
    left: 9em;
    top: 3.4em;
    &.lang-sv {
      left: 7.9em;
    }
  }
  .bane-acrobatics {
    left: 4.2em;
    top: 4.2em;
  }
  .bane-awareness {
    left: 19.7em;
    top: 3.4em;
  }
  .bane-ranged_attacks {
    left: 19.7em;
    top: 4.2em;
  }
`

export const armor = css`
  font-size: 1.1em;
  height: 1em;
  position: absolute;
  text-align: center;
  left: 4em;
  top: 1.2em;
  width: 9em;
`
export const helmet = css`
  ${armor}
  left: 18em;
  width: 9.5em;
`

export const armor_rating = css`
  font-size: 1.5em;
  height: 1em;
  position: absolute;
  text-align: center;
  left: 1em;
  top: 1em;
  width: 1em;
`

export const helmet_rating = css`
  ${armor_rating}
  left: 11.3em;
  top: 0.4em;
`

export const weapons = css`
  position: absolute;
  left: 0em;
  top: 8.7em;
  width: 32em;
`
export const weapon_row = css`
  margin-bottom: 0.1em;
  input {
    font-size: 0.9em;
    height: 1.2em;
    display: inline-block;
    margin-right: 0.23em;
    margin-bottom: 0.2em;
  }
  .weapon-name {
    width: 9.6em;
  }
  .weapon-grip {
    text-align: center;
    width: 2.7em;
  }
  .weapon-range {
    text-align: center;
    width: 4.1em;
  }
  .weapon-damage {
    text-align: center;
    width: 4.1em;
  }
  .weapon-durability {
    text-align: center;
    width: 2.7em;
  }
  .weapon-features {
    width: 9.8em;
  }
`
