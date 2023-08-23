import './App.css'
import StartPage from './pages/StartPage'
import FormPage from './pages/FormPage'
import { Route, Routes } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/:lang/:id" element={<FormPage />} />
        <Route path="*" element={<StartPage />} />
      </Routes>
    </Router>
  )
}

export default App
