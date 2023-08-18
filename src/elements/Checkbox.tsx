import { ElementProps } from './elements'
import './checkbox.scss'

const Checkbox = ({ name, value, className, setValue }: ElementProps) => {
  return (
    <label title={name} className={'checkbox ' + (value === '1' ? 'checked' : '')}>
      <input
        type="checkbox"
        className={className}
        checked={value === '1'}
        onChange={(e) => {
          // console.log('🚀 COMMANDER ~ file: Checkbox.tsx ~ line ~ 15 ~ ', ref.current?.checked)
          setValue(name, e.target.checked ? '1' : '0')
        }}
      />
      <div className="checkmark"></div>
    </label>
  )
}
export default Checkbox
