/** @jsxImportSource @emotion/react */
import Checkbox from '../elements/Checkbox'
// import CSS from 'csstype'

import { ComponentProps } from './components'
// import './midsection.scss'
import Input from '../elements/Input'
import * as styles from './MidSection.styles'

const MidSection = ({ data, setValue }: ComponentProps) => {
  const attribute_values = []
  const attribute_checks = []
  const attributes = ['sty', 'fys', 'smi', 'int', 'psy', 'kar']

  // attribute-checks = atc
  for (let i = 0; i < 6; i++) {
    attribute_checks.push(<Checkbox key={'atc-' + i} name={'atc-' + i} value={data['atc-' + i]} setValue={setValue} />)
  }

  // ability-value: abv
  for (let i = 0; i < 6; i++) {
    const key = attributes[i]
    attribute_values.push(<Input className="val" key={key} name={key} value={data[key]} setValue={setValue} />)
  }

  // const styles: CSS.Properties = {
  //   backgroundColor: 'rgba(123,112,123,0.4)',
  //   color: 'red',
  //   border: '3px solid green',
  //   position: 'absolute',
  // }

  return (
    <>
      <div css={styles.css_left}></div>
      <div css={styles.css_right}></div>
      <div css={styles.css_top}></div>
    </>
  )
}
export default MidSection
