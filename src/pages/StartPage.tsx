import { createId } from '@paralleldrive/cuid2'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const StartPage = () => {
  const navigate = useNavigate()
  const [lang, setLang] = useState('en')

  return (
    <>
      <h1>Create new DOD form</h1>

      <select
        value={lang}
        onChange={(e) => {
          setLang(e.target.value)
        }}
      >
        <option value="en">English</option>
        <option value="sv">Swedish</option>
      </select>

      <button
        onClick={() => {
          const id = createId()
          navigate(lang + '/' + id)
        }}
      >
        create new form
      </button>
    </>
  )
}
export default StartPage
