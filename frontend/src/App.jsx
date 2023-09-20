// import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import FirstPage from './routes/FirstPage'
import NavTop from './components/NavTop'
import NavBottom from './components/NavBottom'

function App() {
  return (
    <>
      <NavTop />
      <Router>
        <Routes>
          <Route path="/" element={<FirstPage />} />
          {/* <Route path="*" element={<ErrorPage errormsg={'Hoppsan'} />} /> */}
        </Routes>
      </Router>
      <NavBottom />
    </>
  )
}

export default App
