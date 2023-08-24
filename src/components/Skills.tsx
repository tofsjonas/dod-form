import Checkbox from '../elements/Checkbox'
import { ComponentProps } from './components'
import * as styles from './Skills.styles'

import Input from '../elements/Input'

type Props = ComponentProps & {
  lang: 'en' | 'sv'
}

const Skills = ({ data, setValue, lang }: Props) => {
  const skills = {
    en: [
      'acrobatics', // Hoppa och klättra
      'awareness', // Upptäcka fara
      'bartering', // Köpslå
      'beast_lore', // Bestiologi
      'bluffing', // Bluffa
      'bushcraft', // Vildmarksvana
      'crafting', // Hantverk
      'evade', // Undvika
      'healing', // Läkekonst
      'hunting_and_fishing', // Jakt och fiske
      'languages', // Främmande Språk
      'myths_and_legends', // Myter och legender
      'performance', // Uppträda
      'persuasion', // Övertala
      'riding', // Rida
      'seamanship', // Sjökunnighet
      'sleight_of_hand', // Fingerfärdighet
      'sneaking', // Smyga
      'spot_hidden', // Finna dolda ting
      'swimming', // Simma
      // weapons
      'axes', // Yxa
      'bows', // Pilbåge
      'brawling', // Slagsmål
      'crossbows', // Armborst
      'hammers', // Hammare
      'knives', // Kniv
      'slings', // Slunga
      'spears', // Spjut
      'staves', // Stav
      'swords', //Svärd
    ],
    sv: [
      'beast_lore', // Bestiologi
      'bluffing', // Bluffa
      'sleight_of_hand', // Fingerfärdighet
      'spot_hidden', // Finna dolda ting
      'languages', // Främmande Språk
      'crafting', // Hantverk
      'acrobatics', // Hoppa och klättra
      'hunting_and_fishing', // Jakt och fiske
      'bartering', // Köpslå
      'healing', // Läkekonst
      'myths_and_legends', // Myter och legender
      'riding', // Rida
      'swimming', // Simma
      'seamanship', // Sjökunnighet
      'sneaking', // Smyga
      'evade', // Undvika
      'performance', // Uppträda
      'awareness', // Upptäcka fara
      'bushcraft', // Vildmarksvana
      'persuasion', // Övertala
      // weapons
      'crossbows', // Armborst
      'hammers', // Hammare
      'knives', // Kniv
      'bows', // Pilbåge
      'brawling', // Slagsmål
      'slings', // Slunga
      'spears', // Spjut
      'staves', // Stav
      'swords', //Svärd
      'axes', // Yxa
    ],
  }

  const ability_checks = []
  const weapon_checks = []
  const secondary_checks = []
  const ability_values = []
  const weapon_values = []
  const secondary_values = []
  const secondary_names = []

  for (let i = 0; i < 20; i++) {
    let key = 'check-' + skills[lang][i]
    ability_checks.push(<Checkbox key={key} name={key} value={data[key]} setValue={setValue} />)
    key = 'skill-' + skills[lang][i]
    ability_values.push(<Input className="val" key={key} name={key} value={data[key]} setValue={setValue} />)
  }

  for (let i = 20; i < 30; i++) {
    let key = 'check-' + skills[lang][i]
    weapon_checks.push(<Checkbox key={key} name={key} value={data[key]} setValue={setValue} />)
    key = 'skill-' + skills[lang][i]
    weapon_values.push(<Input className="val" key={key} name={key} value={data[key]} setValue={setValue} />)
  }

  for (let i = 0; i < 7; i++) {
    let key = 'secondary-skill-value-' + i
    secondary_values.push(<Input className="val" key={key} name={key} value={data[key]} setValue={setValue} />)
    key = 'secondary-skill-check-' + i
    secondary_checks.push(<Checkbox key={key} name={key} value={data[key]} setValue={setValue} />)
    key = 'secondary-skill-name-' + i
    secondary_names.push(<Input className="name" key={key} name={key} value={data[key]} setValue={setValue} />)
  }

  return (
    <>
      <div css={styles.css_ability_checks}>{ability_checks}</div>
      <div css={styles.css_weapon_checks}>{weapon_checks}</div>
      <div css={styles.css_secondary_checks}>{secondary_checks}</div>
      <div css={styles.css_ability_values}>{ability_values}</div>
      <div css={styles.css_weapon_values}>{weapon_values}</div>
      <div css={styles.css_secondary_values}>{secondary_values}</div>
      <div css={styles.css_secondary_names}>{secondary_names}</div>
    </>
  )
}
export default Skills
