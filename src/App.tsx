import './App.css'
// import StartPage from './pages/StartPage'
// import FormPage from './pages/FormPage'

import { Route, Routes } from 'react-router-dom'
import { HashRouter as Router } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Suspense, lazy, useEffect, useState } from 'react'
import { getAuth, signInAnonymously } from 'firebase/auth'
import { app } from './firebase/firebaseApp'
const StartPage = lazy(() => import('./pages/StartPage'))
const FormPage = lazy(() => import('./pages/FormPage'))

function App() {
  const [error, setError] = useState('')

  useEffect(() => {
    const auth = getAuth(app)
    signInAnonymously(auth)
      .then(() => {
        // Signed in..
      })
      .catch((error) => {
        setError(error.message)
        console.log(error)
      })
  }, [])

  return (
    <HelmetProvider>
      {error && <div>{error}</div>}
      {!error && (
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/:lang/:id" element={<FormPage />} />
              <Route path="*" element={<StartPage />} />
            </Routes>
          </Suspense>
        </Router>
      )}
    </HelmetProvider>
  )
}

export default App
