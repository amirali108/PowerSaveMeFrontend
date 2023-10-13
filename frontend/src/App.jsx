// import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import FirstPage from './routes/FirstPage'
import NavTop from './components/NavTop'
import NavBottom from './components/NavBottom'
import SelectHome from './components/SelectHome'


function App() {
  return (
    <>
      <NavTop />
      <SelectHome />
      <Router>
        <Routes>
          <Route path="/" element={<FirstPage />} />
        </Routes>
      </Router>
      <NavBottom />
    </>
  )
}

export default App
