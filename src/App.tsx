import './App.css'

import { Route, Routes } from 'react-router-dom'
import { HashRouter as Router } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { useEffect, useState } from 'react'
import { app } from './firebase/firebaseApp'
import StartPage from './pages/StartPage'
import FormPage from './pages/FormPage'
// const StartPage = lazy(() => import('./pages/StartPage'))
// const FormPage = lazy(() => import('./pages/FormPage'))
import { type User, getAuth, onAuthStateChanged, signInAnonymously } from 'firebase/auth'

function App() {
  const [error, setError] = useState('')
  const [user, setUser] = useState<User | null | undefined>()
  const auth = getAuth(app)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        setUser(null)
        signInAnonymously(auth)
          .then(() => {
            // Signed in..
          })
          .catch((error) => {
            setError(error.message)
            console.log(error)
          })
      }
    })
    return unsubscribe
  }, [])

  return (
    <HelmetProvider>
      {error && <div>{error}</div>}
      {user === undefined && <div>Loading...</div>}
      {user && (
        <Router>
          <Routes>
            <Route path="/:lang/:id" element={<FormPage />} />
            <Route path="*" element={<StartPage />} />
          </Routes>
          {/* <Suspense fallback={<div>Loading...</div>}>
          </Suspense> */}
        </Router>
      )}
    </HelmetProvider>
  )
}

export default App
