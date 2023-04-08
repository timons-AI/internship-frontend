import { useState } from 'react'
import RaP from './components/RaP'
import Companies from './components/Companies'
import { useAuth0 } from '@auth0/auth0-react';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Blog from './pages/Blog';
import About from './pages/About';
import './App.css'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillGithub, AiFillLinkedin, AiFillTwitterCircle, AiFillMediumCircle} from 'react-icons/ai'
import {FaEnvelope, FaPhone, FaMapMarker} from 'react-icons/fa'


function App() {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <div className=' text-base md:text-xs'>
      <header className=' bg-slate-100 p-2 fixed w-full'>
        <nav className=' flex justify-between items-center'>
         
            <h1 className=' text-2xl font-bold'>Standard Intern</h1>
            <div className=' flex gap-4'>
              <a href='/'>Home</a>
              
              <a href='/blog'>Blog</a>
              <a href='/about'>About</a>
            </div>
          
        </nav>

      </header>

      <main className=' px-1 py-12'>
        <section className=' min-h-screen'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/about' element={<About />} />
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
            <a href='#'><FaPhone /></a>
            <a href='#'><FaMapMarker /></a>
          </div>
          
          <p className=' text-xs'>© 2023 Standard Intern. All rights reserved.</p>
          {/* <p className=' text-xs'>Made with ❤️ by <a href='#'>Standard Intern</a></p> */}
          </div>
      </footer>

    </div>
  )
}
  
export default App
