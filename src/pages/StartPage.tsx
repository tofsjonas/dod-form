import { createId } from '@paralleldrive/cuid2'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import * as styles from './StartPage.styles'

const StartPage = () => {
  const [url, setUrl] = useState('')

  return (
    <div css={styles.startpage}>
      <h1>New character sheet</h1>
      <br />
      <br />
      <br />
      <button
        onClick={() => {
          const id = createId()
          setUrl('en/' + id)
        }}
      >
        Dragonbane
      </button>
      &nbsp; &nbsp; &nbsp;
      <button
        onClick={() => {
          const id = createId()
          setUrl('sv/' + id)
        }}
      >
        Drakar och Demoner
      </button>
      {url && (
        <div>
          <p>Here is the link to your character sheet.</p>

          <p>Anyone with the link has full access. If you loose it, it's lost. 😔️</p>

          <p>Keep it secret. Keep it safe. 🧙‍♂️️</p>
          <p>
            <Link target="_blank" to={url}>
              {window.location.href}#{url}
            </Link>
          </p>
        </div>
      )}
    </div>
  )
}
export default StartPage
