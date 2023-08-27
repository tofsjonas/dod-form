import { createId } from '@paralleldrive/cuid2'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import * as styles from './StartPage.styles'

const StartPage = () => {
  const [lang, setLang] = useState('')
  const [url, setUrl] = useState('')

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        const id = createId()
        setUrl(lang + '/' + id)
        // navigate(lang + '/' + id)
      }}
      css={styles.startpage}
    >
      <h1>New Dragonbane/Drakar & Demoner character sheet</h1>
      <br />
      <br />
      <select
        required
        value={lang}
        onChange={(e) => {
          setLang(e.target.value)
        }}
      >
        <option value="">Select language</option>
        <option value="en">English</option>
        <option value="sv">Swedish</option>
      </select>
      <br />
      <br />
      <br />
      <br />
      <button type="submit">create character sheet!</button>
      {url && (
        <div>
          <p>Here is the link to your character sheet.</p>

          <p>Anyone with the link has full access. If you loose it, it's lost. 😔️</p>

          <p>Keep it secret. Keep it safe. 🧙‍♂️️</p>
          <p>
            <Link target="_blank" to={url}>
              {window.location.href}
              {url}
            </Link>
          </p>
        </div>
      )}
    </form>
  )
}
export default StartPage
