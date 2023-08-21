import Checkbox from '../elements/Checkbox'
import { ComponentProps } from './components'
import * as styles from './Abilities.styles'

import Input from '../elements/Input'

const Abilities = ({ data, setValue }: ComponentProps) => {
  const ability_checks = []
  const weapon_checks = []
  const secondary_checks = []
  const ability_values = []
  const weapon_values = []
  const secondary_values = []
  const secondary_names = []

  for (let i = 0; i < 20; i++) {
    ability_checks.push(<Checkbox key={'abc-' + i} name={'abc-' + i} value={data['abc-' + i]} setValue={setValue} />)
  }

  for (let i = 0; i < 10; i++) {
    weapon_checks.push(<Checkbox key={'abwc-' + i} name={'abwc-' + i} value={data['abwc-' + i]} setValue={setValue} />)
  }
  for (let i = 0; i < 7; i++) {
    secondary_checks.push(
      <Checkbox key={'absc-' + i} name={'absc-' + i} value={data['absc-' + i]} setValue={setValue} />,
    )
  }

  // ability-value: abv
  for (let i = 0; i < 20; i++) {
    ability_values.push(
      <Input className="val" key={'abv-' + i} name={'abv-' + i} value={data['abv-' + i]} setValue={setValue} />,
    )
  }

  // ability-weapon-value: abwv
  for (let i = 0; i < 10; i++) {
    weapon_values.push(
      <Input className="val" key={'abwv-' + i} name={'abwv-' + i} value={data['abwv-' + i]} setValue={setValue} />,
    )
  }

  // ability-secondary-value: absv
  for (let i = 0; i < 7; i++) {
    secondary_values.push(
      <Input className="val" key={'absv-' + i} name={'absv-' + i} value={data['absv-' + i]} setValue={setValue} />,
    )
  }

  // ability-secondary-name: absn
  for (let i = 0; i < 7; i++) {
    secondary_names.push(
      <Input className="name" key={'absn-' + i} name={'absn-' + i} value={data['absn-' + i]} setValue={setValue} />,
    )
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
export default Abilities
