/** @jsxImportSource @emotion/react */
import Checkbox from '../elements/Checkbox'
// import CSS from 'csstype'

import { ComponentProps } from './components'
// import './midsection.scss'
import Input from '../elements/Input'
import * as styles from './MidSection.styles'
import Textarea from '../elements/Textarea'

const MidSection = ({ data, setValue }: ComponentProps) => {
  const coins = []
  const right_areas = []

  const attributes = ['gold', 'silver', 'copper']
  const areas = ['pack', 'memo', 'tiny_stuff']

  // attribute-checks = atc
  // for (let i = 0; i < 6; i++) {
  //   attribute_checks.push(<Checkbox key={'atc-' + i} name={'atc-' + i} value={data['atc-' + i]} setValue={setValue} />)
  // }

  for (let i = 0; i < 3; i++) {
    const key = attributes[i]
    coins.push(<Input key={key} name={key} value={data[key]} setValue={setValue} />)
  }

  for (let i = 0; i < 3; i++) {
    const key = areas[i]

    right_areas.push(<Textarea className={key} key={key} name={key} value={data[key]} setValue={setValue} />)
  }

  // // ability-value: abv
  // for (let i = 0; i < 6; i++) {
  //   const key = attributes[i]
  //   attribute_values.push(<Input className="val" key={key} name={key} value={data[key]} setValue={setValue} />)
  // }

  // const styles: CSS.Properties = {
  //   backgroundColor: 'rgba(123,112,123,0.4)',
  //   color: 'red',
  //   border: '3px solid green',
  //   position: 'absolute',
  // }

  return (
    <>
      <div css={styles.spells_and_coins}>
        <Textarea name="spells" value={data['spells']} setValue={setValue} />
        <div css={styles.coins}>{coins}</div>
      </div>
      <div css={styles.css_right}>
        <Input className="nbr" name={'cpty'} value={data['cpty']} setValue={setValue} />
        {right_areas}
      </div>
      <div css={styles.css_top}></div>
    </>
  )
}
export default MidSection
