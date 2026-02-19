import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* "/" yo'lida Login sahifasi chiqadi */}
        <Route path='/' element={<Login />} />
        
        {/* "/home" yo'lida Home sahifasi chiqadi */}
        <Route path='/home' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App