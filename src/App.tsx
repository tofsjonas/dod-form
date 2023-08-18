import { useEffect, useState } from 'react'
import './App.css'
import StartPage from './pages/StartPage'
import FormPage from './pages/FormPage'
import { Route, Routes } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { doc, onSnapshot } from 'firebase/firestore'
import { db } from './firebase/firebaseApp'

function App() {
  const [count, setCount] = useState('')

  useEffect(() => {
    // const unsub = onSnapshot(
    //   doc(db, "forms", "zDa8VYx6Yo2J5z9sEy9w"),
    //   (doc) => {
    //     console.log("Current data: ", doc.data());
    //   }
    // );
    // return () => {
    //   unsub();
    // };
  }, [])

  return (
    <Router>
      <Routes>
        <Route path="/:id" element={<FormPage />} />
        <Route path="*" element={<StartPage />} />
      </Routes>
    </Router>
  )
}

export default App
