// import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import FirstPage from './routes/FirstPage'
import NavTop from './components/NavTop'
import NavBottom from './components/NavBottom'
import SelectHome from './components/SelectHome'
import Savings from './components/Savings'

function App() {
  return (
    <>
      <NavTop />
      <SelectHome />
      <Router>
        <Routes>
          <Route path="/" element={<FirstPage />} />
          {/* <Route path="*" element={<ErrorPage errormsg={'Hoppsan'} />} /> */}
        </Routes>
      </Router>
      <Savings />
      <NavBottom />
    </>
  )
}

export default App
