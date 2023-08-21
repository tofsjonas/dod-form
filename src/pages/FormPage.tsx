import { useEffect, useRef, useState } from 'react'
import { doc, onSnapshot, setDoc } from 'firebase/firestore'

import { useParams } from 'react-router-dom'
import { db } from '../firebase/firebaseApp'
import { FormData } from './form'
import Abilities from '../components/Abilities'
import Attributes from '../components/Attributes'
import TopInfo from '../components/TopInfo'
import MidSection from '../components/MidSection'
import * as styles from './FormPage.styles'

const FormPage = () => {
  const { id } = useParams()
  const [data, setData] = useState<FormData>({})
  const timer = useRef<ReturnType<typeof setTimeout>>()
  const current_data = useRef<FormData>({})

  useEffect(() => {
    const unsub = onSnapshot(doc(db, 'forms', `${id}`), (doc) => {
      if (doc.metadata.hasPendingWrites) return
      const temp = doc.exists() ? doc.data() : {}
      setData(temp)
    })

    return () => {
      clearTimeout(timer.current)
      unsub()
    }
  }, [id])

  const save = async () => {
    const save_data = {
      ...current_data.current,
    }
    current_data.current = {}
    await setDoc(doc(db, 'forms', `${id}`), save_data, { merge: true })
  }

  const setValue = (name: string, value: string) => {
    clearTimeout(timer.current)
    setData({
      ...data,
      [name]: value,
    })

    current_data.current = {
      ...current_data.current,
      [name]: value,
    }
    timer.current = setTimeout(() => {
      save()
    }, 2000)
  }

  return (
    <div css={styles.css_formpage}>
      <div css={styles.css_topinfo}>
        <TopInfo data={data} setValue={setValue} />
      </div>
      <div css={styles.css_abilities}>
        <Abilities data={data} setValue={setValue} />
      </div>
      <div css={styles.css_attributes}>
        <Attributes data={data} setValue={setValue} />
      </div>
      <div css={styles.css_midsection}>
        <MidSection data={data} setValue={setValue} />
      </div>
    </div>
  )
}
export default FormPage
