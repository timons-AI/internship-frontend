import { useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
// import './AppBar.css';

function AppBar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  const variants = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: [0.42, 0, 0.58, 1],
      },
    },
    closed: {
      x: '-80%',
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: [0.42, 0, 0.58, 1],
      },
    },
  };

  return (
    <nav className="flex justify-between items-center bg-gray-900 text-white px-4 py-3 md:px-6 md:py-4">
      <div class="flex justify-between items-center w-full">
  <h1 class="text-xl font-bold">Standard Intern</h1>
  <button class="ml-4 px-2 py-1  text-white font-bold rounded-md focus:outline-none md:hidden" onClick={handleDrawerToggle}>
    {isDrawerOpen ? (
      <AiOutlineClose class="text-white text-2xl" />
    ) : (
      <HiMenu class="text-white text-2xl" />
    )}
  </button>
</div>

            
      <ul className="hidden md:flex items-center">
   
        <li className="mx-3">
          <Link to="/" className="hover:text-gray-400">Home</Link>
        </li>
        <li className="mx-3">
          <Link to="/about" className="hover:text-gray-400">About</Link>
        </li>
        <li className="mx-3">
          <Link to="/blog" className="hover:text-gray-400">Blog</Link>
        </li>
      </ul>
      <motion.div
        className="fixed top-0 left-0 w-80 md:w-1/3 h-full bg-gray-900 z-50 md:hidden"
        initial="closed"
        animate={isDrawerOpen ? 'open' : 'closed'}
        variants={variants}
        onClick={handleDrawerClose}
      >
        <div className="flex justify-end items-center py-4 px-6">
          <button onClick={handleDrawerClose}>
            <AiOutlineClose className="text-white text-2xl" />
          </button>
        </div>
        <div className="flex flex-col items-start pt-6 px-6">
          < Link to="/" className='w-full text-white text-3xl font-bold py-3 hover:text-gray-400'
          >Standard Intern</Link>
          <Link to="/" className=" w-full text-white text-xl font-bold py-3 hover:text-gray-400">Home</Link>
          <Link to="/about" className="w-full text-white text-xl font-bold py-3 hover:text-gray-400">About</Link>
          <Link to="/blog" className="w-full text-white text-xl font-bold py-3 hover:text-gray-400">Blog</Link>
        </div>
      </motion.div>
      {isDrawerOpen && (
        <motion.div
          className="fixed top-0 right-0 w-screen h-screen bg-gray-800 opacity-50 z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          onClick={handleDrawerClose}
        />
      )}
    </nav >
  );
}

export default AppBar;