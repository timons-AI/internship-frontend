import React from 'react'
import {useEffect, useState} from 'react'
import Addinfo from "./pages/Addinfo";
import About from "./pages/About";
import Home from "./pages/Home";
import LoginPage from './pages/LoginPage';
import { Routes, Route } from 'react-router-dom';
import {motion} from "framer-motion";

import './App.css'
import AddInfo from './pages/Addinfo';

function App() {
  const pageVariants = {
    initial: {
      opacity: 0,
      
    },
    in: {
      opacity: 1,
      x: 0
    },
    out: {
      opacity: 0,
      
    }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
  };

  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/About">About</a>
          </li>
          {/* <li>
            <a href="/Addinfo">DashBoard</a>
          </li> */}
          <li>
            <a href="/Login">Login</a>
          </li>

        </ul>
      </nav>
      <main>
      <motion.div
          className="route-wrapper"
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
        >
      <Routes>
        <Route path="/" element={<Home/> }/>
        <Route path="/About" element={<About/> }/>
        <Route path="/Addinfo" element={<Addinfo/> }/>
        <Route path="/Login" element={<LoginPage/> }/>
        <Route path="*" element={<h1>404: Not Found</h1>} />
      </Routes>
      </motion.div>
      </main>
      <footer>
        <p>© Some guys in Cocis 2023</p>
      </footer>
      
    </div>
  );
}


export default App;
