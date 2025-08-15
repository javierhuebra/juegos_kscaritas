import React from 'react'
import './App.css'


import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom'


import Juego from './components/juego/Juego'
import Inicio from './components/Inicio'



function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  )
}

function App() {
  const location = useLocation()
  const hideNavBarRoutes = ['/servicios-anuales', '/signos', '/juego']
  const shouldShowNavBar = !hideNavBarRoutes.includes(location.pathname)

  const hideFooterRoutes = ['/juego']
  const shouldShowFooter = !hideFooterRoutes.includes(location.pathname)

  return (
    <div className='bg-black overflow-hidden relative'>
      

        <Routes>
          <Route path='*' element={<Inicio />} />
          <Route path='/churrero' element={<Juego />} />
        </Routes>

     
    </div>
  )
}

export default AppWrapper
