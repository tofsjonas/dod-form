import Checkbox from '../elements/Checkbox'
import { ComponentProps } from './components'
import Input from '../elements/Input'
import * as styles from './BottomLeft.styles'

type Props = ComponentProps & {
  lang: 'en' | 'sv'
}

const BottomLeft = ({ data, setValue, lang }: Props) => {
  const banes = ['sneaking', 'evade', 'acrobatics', 'awareness', 'ranged_attacks']

  return (
    <>
      <div css={styles.armor_and_stuff}>
        <Input css={styles.armor_rating} name={'armor_rating'} value={data['armor_rating']} setValue={setValue} />
        <Input css={styles.helmet_rating} name={'helmet_rating'} value={data['helmet_rating']} setValue={setValue} />

        <Input css={styles.armor} name={'armor'} value={data['armor']} setValue={setValue} />
        <Input css={styles.helmet} name={'helmet'} value={data['helmet']} setValue={setValue} />

        {banes.map((i) => (
          <Checkbox
            className={'lang-' + lang + ' bane-' + i}
            key={'bane-' + i}
            name={'bane-' + i}
            value={data['bane-' + i]}
            setValue={setValue}
          />
        ))}
      </div>

      <div css={styles.weapons}>
        {[1, 2, 3].map((i) => (
          <div css={styles.weapon_row} key={i}>
            {['name', 'grip', 'range', 'damage', 'durability', 'features'].map((k) => (
              <Input
                className={'weapon-' + k}
                key={i + k}
                name={'weapon-' + i + '-' + k}
                value={data['weapon-' + i + '-' + k]}
                setValue={setValue}
              />
            ))}
          </div>
        ))}
      </div>
    </>
  )
}
export default BottomLeft
