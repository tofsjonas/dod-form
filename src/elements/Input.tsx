import { ElementProps } from './elements'
import './input.scss'

// type Props = ElementProps & {
//   type?: '20' | 'text'
// }

const Input = ({ name, value = '', className = '', setValue }: ElementProps) => {
  let input_type = 'text'
  let max = 10000
  let min = -10000
  let maxLength = 10000

  if (className === 'val') {
    input_type = 'number'
    max = 20
    min = 1
    maxLength = 2
  }

  return (
    <input
      value={value}
      type={input_type}
      max={max}
      min={min}
      maxLength={maxLength}
      className={'input ' + className}
      onChange={(e) => {
        setValue(name, e.target.value)
      }}
    />
  )
}
export default Input
