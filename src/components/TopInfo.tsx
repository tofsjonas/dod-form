import { ComponentProps } from './components'
import Input from '../elements/Input'
import Textarea from '../elements/Textarea'
import * as styles from './TopInfo.styles'

const TopInfo = ({ data, setValue }: ComponentProps) => {
  const info = []
  const names = ['player', 'kin', 'age', 'profession']

  for (let i = 0; i < 4; i++) {
    const key = 'info-' + names[i]
    info.push(<Input className="name" key={key} name={key} value={data[key]} setValue={setValue} />)
  }

  return (
    <>
      <div css={styles.info}>
        {info}
        <Textarea name="info-weakness" value={data['info-weakness']} setValue={setValue} />
      </div>
      <div css={styles.name}>
        <Input className="name" name="info-name" value={data['info-name']} setValue={setValue} />
      </div>
      <div css={styles.appearance}>
        <Textarea name="info-appearance" value={data['info-appearance']} setValue={setValue} />
      </div>
    </>
  )
}
export default TopInfo
