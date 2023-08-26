import Checkbox from '../elements/Checkbox'
import { ComponentProps } from './components'
// import './attributes.scss'
import Input from '../elements/Input'
import * as styles from './Attributes.styles'

const Attributes = ({ data, setValue }: ComponentProps) => {
  const attribute_values = []
  const attribute_checks = []
  const attributes = ['str', 'con', 'agl', 'int', 'wil', 'cha']
  const conditions = ['exhausted', 'sickly', 'dazed', 'angry', 'scared', 'disheartened']

  for (let i = 0; i < 6; i++) {
    const key = 'condition-' + conditions[i]
    attribute_checks.push(<Checkbox key={key} name={key} value={data[key]} setValue={setValue} />)
  }

  for (let i = 0; i < 6; i++) {
    const key = 'attribute-' + attributes[i]
    attribute_values.push(<Input className="val" key={key} name={key} value={data[key]} setValue={setValue} />)
  }

  return (
    <>
      <div css={styles.attribute_values}>{attribute_values}</div>
      <div css={styles.attribute_checks}>{attribute_checks}</div>
    </>
  )
}
export default Attributes
