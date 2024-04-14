import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import Visit from './pages/Visit/Visit'
import About from './pages/About/About'
import Art from './pages/Art/Art'
import Ticket from './pages/Ticket/Ticket'
import NotFound from './pages/notFound/NotFound'
import Navbar from './components/Navbar'
import Contact from './pages/Contact/Contact'



const App = () => {
  return (
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route index element={<Visit/>}/>
          <Route path='ticket' element={<Ticket/>}/>
          <Route path='art' element={<Art/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App