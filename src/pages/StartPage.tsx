import { createId } from '@paralleldrive/cuid2'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

const StartPage = () => {
  const navigate = useNavigate()
  const [lang, setLang] = useState('sv')

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

          console.log('🚀 COMMANDER ~ file: App.tsx ~ line ~ 14 ~ ', 'aaaaaaaaaaa', createId())
        }}
      >
        create new form
      </button>
    </>
  )
}
export default StartPage
