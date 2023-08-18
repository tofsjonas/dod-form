import { useEffect, useRef, useState } from 'react'
import { doc, onSnapshot, setDoc } from 'firebase/firestore'
import Checkbox from '../elements/Checkbox'

import './form.scss'
import { useParams } from 'react-router-dom'
import { db } from '../firebase/firebaseApp'
import { FormData } from './form'
import Abilities from '../components/Abilities'
import Attributes from '../components/Attributes'

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
      unsub()
      clearTimeout(timer.current)
    }
  }, [id])

  const save = async () => {
    await setDoc(doc(db, 'forms', `${id}`), current_data.current)
  }

  const setValue = (name: string, value: string) => {
    const temp = {
      ...data,
      [name]: value,
    }
    setData(temp)
    current_data.current = temp
    clearTimeout(timer.current)
    timer.current = setTimeout(() => {
      save()
    }, 500)
  }

  //acl = ability-checks

  return (
    <div className="form-page">
      {/* <pre className="preview">{JSON.stringify(data, null, 2)}</pre> */}

      <div className="abilities">
        <Abilities data={data} setValue={setValue} />
      </div>
      <div className="attributes">
        <Attributes data={data} setValue={setValue} />
      </div>
    </div>
  )
}
export default FormPage
