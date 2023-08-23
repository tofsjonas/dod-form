import { useEffect, useRef, useState } from 'react'
import { doc, onSnapshot, setDoc } from 'firebase/firestore'

import { useParams } from 'react-router-dom'
import { db } from '../firebase/firebaseApp'
import { FormData } from './form'
import Attributes from '../components/Attributes'
import TopInfo from '../components/TopInfo'
import MidSection from '../components/MidSection'
import * as styles from './FormPage.styles'
import BottomRight from '../components/BottomRight'
import Skills from '../components/Skills'
import bg_en from '../assets/form-en.jpg'
import bg_sv from '../assets/form-sv.jpg'

const FormPage = () => {
  const { lang, id } = useParams()
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
    <div
      css={styles.formpage}
      style={{
        background: `url(${lang === 'sv' ? bg_sv : bg_en}) no-repeat`,
      }}
    >
      <div css={styles.topinfo}>
        <TopInfo data={data} setValue={setValue} />
      </div>
      <div css={styles.abilities}>
        <Skills lang={lang === 'sv' ? 'sv' : 'en'} data={data} setValue={setValue} />
      </div>
      <div css={styles.attributes}>
        <Attributes data={data} setValue={setValue} />
      </div>
      <div css={styles.midsection}>
        <MidSection data={data} setValue={setValue} />
      </div>
      <div css={styles.bottom_right}>
        <BottomRight data={data} setValue={setValue} />
      </div>
    </div>
  )
}
export default FormPage
