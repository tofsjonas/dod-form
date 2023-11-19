import Checkbox from '../elements/Checkbox'
import { ComponentProps } from './components'
import Input from '../elements/Input'
import * as styles from './BottomRight.styles'

type Props = ComponentProps & {
  lang: 'en' | 'sv'
}

const BottomRight = ({ data, setValue, lang }: Props) => {
  const willpower_point_checks = []
  const hit_point_checks = []
  const death_roll_successes = []
  const death_roll_failures = []

  for (let i = 1; i < 21; i++) {
    let key = 'wp-check-' + i
    willpower_point_checks.push(<Checkbox key={key} name={key} value={data[key]} setValue={setValue} />)
    key = 'hp-check-' + i
    hit_point_checks.push(<Checkbox key={key} name={key} value={data[key]} setValue={setValue} />)
  }

  for (let i = 1; i < 4; i++) {
    let key = 'death-roll-success-' + i
    death_roll_successes.push(
      <Checkbox className={`lang-${lang}`} key={key} name={key} value={data[key]} setValue={setValue} />,
    )
    key = 'death-roll-failure-' + i
    death_roll_failures.push(
      <Checkbox className={`lang-${lang}`} key={key} name={key} value={data[key]} setValue={setValue} />,
    )
  }

  return (
    <>
      <div css={styles.rest}>
        <Checkbox
          style={{
            margin: `${lang === 'sv' ? '0 4em 0 2.75em' : '0 4.2em 0 2em'}`,
          }}
          name={'round-rest'}
          value={data['round-rest']}
          setValue={setValue}
        />
        <Checkbox name={'stretch-rest'} value={data['stretch-rest']} setValue={setValue} />
      </div>

      <div css={styles.willpower_point_checks}>{willpower_point_checks}</div>
      <div css={styles.hit_point_checks}>{hit_point_checks}</div>
      <div css={styles.death_rolls}>
        {death_roll_successes}
        {death_roll_failures}
      </div>
      <Input
        css={styles.willpower_points}
        className="val"
        name={'wp-points'}
        value={data['wp-points']}
        setValue={setValue}
      />
      <Input
        css={styles.hit_points}
        className="val"
        name={'hit-points'}
        value={data['hit-points']}
        setValue={setValue}
      />
    </>
  )
}
export default BottomRight
