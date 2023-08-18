import { useRef } from 'react'
import { ElementProps } from './elements'
import './checkbox.scss'

const Checkbox = ({ name, value, className, setValue }: ElementProps) => {
  const ref = useRef<HTMLInputElement>(null)

  return (
    <label title={name} className={'checkbox ' + (value === '1' ? 'checked' : '')}>
      <input
        ref={ref}
        type="checkbox"
        className={className}
        checked={value === '1'}
        onChange={() => {
          // console.log('🚀 COMMANDER ~ file: Checkbox.tsx ~ line ~ 15 ~ ', ref.current?.checked)
          setValue(name, ref.current?.checked ? '1' : '0')
        }}
      />
      <div className="checkmark"></div>
    </label>
  )
}
export default Checkbox
