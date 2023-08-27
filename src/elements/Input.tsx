import { ElementProps } from './elements'
import * as styles from './Input.styles'

const Input = ({ name, value = '', className = '', setValue }: ElementProps) => {
  let input_type = 'text'
  let max = 10000
  let min = -10000
  let maxLength = 10000

  if (/\bval\b/.test(className)) {
    input_type = 'number'
    max = 20
    min = 1
    maxLength = 2
  }
  if (/\bnbr\b/.test(className)) {
    input_type = 'number'
  }

  return (
    <input
      value={value}
      type={input_type}
      // title={name}
      name={name}
      max={max}
      min={min}
      maxLength={maxLength}
      className={`${className + ' ' + name}`.trim()}
      onChange={(e) => {
        setValue(name, e.target.value)
      }}
      css={styles.css_input}
    />
  )
}
export default Input
