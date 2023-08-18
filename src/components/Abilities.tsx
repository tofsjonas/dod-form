import Checkbox from '../elements/Checkbox'
import { ComponentProps } from './components'
import './abilities.scss'

const Abilities = ({ data, setValue }: ComponentProps) => {
  const ability_checks = []
  const weapon_checks = []
  const secondary_checks = []

  for (let index = 0; index < 20; index++) {
    ability_checks.push(
      <Checkbox key={'acl-' + index} name={'acl-' + index} value={data['acl-' + index]} setValue={setValue} />,
    )
  }

  for (let index = 0; index < 10; index++) {
    weapon_checks.push(
      <Checkbox key={'wcl-' + index} name={'wcl-' + index} value={data['wcl-' + index]} setValue={setValue} />,
    )
  }
  for (let index = 0; index < 7; index++) {
    secondary_checks.push(
      <Checkbox key={'scl-' + index} name={'scl-' + index} value={data['scl-' + index]} setValue={setValue} />,
    )
  }

  return (
    <>
      <div className="ability-checks">{ability_checks}</div>
      <div className="weapon-checks">{weapon_checks}</div>
      <div className="secondary-checks">{secondary_checks}</div>
    </>
  )
}
export default Abilities
