import { ComponentProps } from './components'
import Input from '../elements/Input'
import Textarea from '../elements/Textarea'
import * as styles from './TopInfo.styles'

const TopInfo = ({ data, setValue }: ComponentProps) => {
  const info = []
  const names = ['player', 'kin', 'age', 'profession']

  // topinfo-info = til
  for (let i = 0; i < 4; i++) {
    const key = names[i]
    info.push(<Input className="name" key={key} name={key} value={data[key]} setValue={setValue} />)
  }

  return (
    <>
      <div css={styles.info}>
        {info}
        <Textarea name="weakness" value={data['weakness']} setValue={setValue} />
      </div>
      <div css={styles.name}>
        <Input className="name" name="name" value={data['name']} setValue={setValue} />
      </div>
      <div css={styles.appearance}>
        <Textarea name="appearance" value={data['appearance']} setValue={setValue} />
      </div>
    </>
  )
}
export default TopInfo
