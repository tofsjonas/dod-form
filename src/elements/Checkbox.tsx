import { ElementProps } from './elements'
import * as styles from './Checkbox.styles'

const Checkbox = ({ name, value, className, setValue, style }: ElementProps) => {
  return (
    <label
      style={style}
      css={styles.checkbox}
      // title={name}
      className={className + ' checkbox ' + name + ' checkbox ' + (value === '1' ? 'checked' : '')}
    >
      <input
        name={name}
        type="checkbox"
        className={className}
        checked={value === '1'}
        onChange={(e) => {
          setValue(name, e.target.checked ? '1' : '0')
        }}
      />
      <div className="checkmark"></div>
    </label>
  )
}
export default Checkbox
