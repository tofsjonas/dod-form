import './App.css'

import { Route, Routes } from 'react-router-dom'
import { HashRouter as Router } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { useState } from 'react'
import { app } from './firebase/firebaseApp'
import StartPage from './pages/StartPage'
import FormPage from './pages/FormPage'
// const StartPage = lazy(() => import('./pages/StartPage'))
// const FormPage = lazy(() => import('./pages/FormPage'))
import { getAuth, onAuthStateChanged, signInAnonymously } from 'firebase/auth'

function App() {
  const [error, setError] = useState('')
  const [is_logged_in, setIsLoggedIn] = useState(false)
  const auth = getAuth(app)

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsLoggedIn(true)
      // ...
    } else {
      setIsLoggedIn(false)
      // User is signed out
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

  return (
    <HelmetProvider>
      {error && <div>{error}</div>}
      {is_logged_in && (
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
