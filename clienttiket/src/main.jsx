import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Router, Routes } from 'react-router'
import Home from './pages/Home.jsx'
import 'remixicon/fonts/remixicon.css'
import DetailTicket from './pages/DetailTicket.jsx'
import Booking from './pages/Booking.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/1' element={<DetailTicket />} />
      <Route path='/booking/1' element={<Booking />} />
    </Routes>
  </BrowserRouter>
)
