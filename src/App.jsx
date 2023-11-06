import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import UsersPage from './pages/UsersPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<HomePage></HomePage>} path='/'/>
          <Route element={<UsersPage/>} path='/users'/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
