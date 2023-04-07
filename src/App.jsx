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


function App() {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <div>
      <header className=' bg-slate-50 p-2'>
        <nav className=' flex justify-between items-center'>
         
            <h1 className=' text-2xl font-bold'>Standard Intern</h1>
            <div className=' flex gap-4'>
              <a href='/'>Home</a>
              
              <a href='/blog'>Blog</a>
              <a href='/about'>About</a>
            </div>
          
        </nav>

      </header>

      <main className=' bg-white px-2 '>
        <section className=' min-h-screen'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/about' element={<About />} />
          </Routes>


        </section>

      </main>

      <footer className=' bg-slate-50 p-2'>
        <div className=' flex justify-center gap-16 text-gray-600 '>
          <AiFillGithub />
          <AiFillLinkedin />
          <AiFillTwitterCircle />
          <AiFillMediumCircle />
        </div>
        {/* copyright */}
        <div className=' flex justify-center gap-16 text-gray-600 '>
          <p>This is a test</p>
          <p>© Standard Intern International</p>
        </div>

        
      </footer>
     
    </div>
  )
}
  
export default App
