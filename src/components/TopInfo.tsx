import { ComponentProps } from './components'
import Input from '../elements/Input'
import Textarea from '../elements/Textarea'
import * as styles from './TopInfo.styles'

const TopInfo = ({ data, setValue }: ComponentProps) => {
  const left = []
  const right = []

  // topinfo-left = til
  for (let i = 0; i < 6; i++) {
    const key = 'til-' + i
    left.push(<Input className="name" key={key} name={key} value={data[key]} setValue={setValue} />)
  }
  // topinfo-right = tir
  for (let i = 0; i < 6; i++) {
    const key = 'tir-' + i
    right.push(<Input className="name" key={key} name={key} value={data[key]} setValue={setValue} />)
  }

  return (
    <>
      <div css={styles.left}>{left}</div>
      <div css={styles.name}>
        <Input className="name" name="name" value={data['name']} setValue={setValue} />
      </div>
      <div css={styles.right}>
        <Textarea name="tir" value={data['tir']} setValue={setValue} />
      </div>
    </>
  )
}
export default TopInfo
