import Checkbox from '../elements/Checkbox'
import { ComponentProps } from './components'
import Input from '../elements/Input'
import * as styles from './BottomRight.styles'

const BottomRight = ({ data, setValue }: ComponentProps) => {
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
    attribute_values.push(<Input className="nbr" key={key} name={key} value={data[key]} setValue={setValue} />)
  }

  return (
    <>
      <div css={styles.rest}>
        <Checkbox name={'quick-rest'} value={data['quick-rest']} setValue={setValue} />
        <Checkbox name={'short-rest'} value={data['short-rest']} setValue={setValue} />
      </div>
    </>
  )
}
export default BottomRight
