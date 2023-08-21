import { ElementProps } from './elements'
import * as styles from './Textarea.styles'

const Textarea = ({ name, value = '', className = '', setValue }: ElementProps) => {
  let maxLength = 10000

  return (
    <textarea
      css={styles.textarea}
      value={value}
      title={name}
      maxLength={maxLength}
      className={className + ' ' + name}
      onChange={(e) => {
        setValue(name, e.target.value)
      }}
    />
  )
}
export default Textarea
