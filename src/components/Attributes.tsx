import Checkbox from '../elements/Checkbox'
import { ComponentProps } from './components'
import './attributes.scss'
import Input from '../elements/Input'

const Attributes = ({ data, setValue }: ComponentProps) => {
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

  return (
    <>
      <div className="attribute-values">{attribute_values}</div>
      <div className="attribute-checks">{attribute_checks}</div>
    </>
  )
}
export default Attributes
