import { useState } from 'react'

import { useAuth0 } from '@auth0/auth0-react';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Blog from './pages/Blog';
import About from './pages/About';
import Contact from './pages/Contact';
import Testemonial from './pages/Testemonial';
import './App.css'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillGithub, AiFillLinkedin, AiFillTwitterCircle, AiFillMediumCircle} from 'react-icons/ai'
import {FaEnvelope, FaPhone, FaMapMarker} from 'react-icons/fa'
import preloader from './images/364.gif'
import AppBar from './components/AppBar';
function App() {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  const [isLoading , setIsLoading] = useState(true)
  // Simulate loading for 2 seconds
  setTimeout(() => setIsLoading(false), 3000)


  return (
    <div className=' text-base md:text-xs'>
      {isLoading ? <LoadingScreen /> : null}
      <header className='fixed w-full'>
        <AppBar />
      </header>

      <main className=' px-1 py-12'>
        <section className=' min-h-screen'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/testemonial' element={<Testemonial />} />
          </Routes>
        </section>

      </main>
      {/* copyright and stuff */}
      <footer className=' bg-slate-50 p-2'>
        <div className=' flex flex-col justify-center items-center'>
          <div className=' flex gap-4'>
            <a href='#'><AiFillGithub /></a>
            <a href='#'><AiFillLinkedin /></a>
            <a href='#'><AiFillTwitterCircle /></a>
            <a href='#'><AiFillMediumCircle /></a> 
              <a href='#'><FaEnvelope /></a>
            <a href='tel:+256708163155'><FaPhone /></a>
            <a href='#'><FaMapMarker /></a>
          </div>
          
          <p className=' text-xs'>© 2023 Standard Intern. All rights reserved.</p>
          {/* <p className=' text-xs'>Made with ❤️ by <a href='#'>Standard Intern</a></p> */}
          </div>
      </footer>

    </div>
  )
}

function LoadingScreen() {
  return (
    <div className=' flex flex-col justify-center items-center h-screen bg-white fill-slate-50 w-full fixed z-30 top-0 bottom-0 left-0 right-0'>
      <img src={preloader} alt='loading' />
      <p className=' text-2xl font-bold'>Loading...</p>
    </div>
  )
}


export default App
