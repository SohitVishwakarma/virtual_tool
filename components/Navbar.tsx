"use client"
import React from 'react'
import { useState } from 'react';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <>
     <header className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center space-x-4">
          <img src="https://webtendtheme.net/html/2024/akpager/assets/images/logos/logo2.png" alt="" />
          {/* <span className="hover:text-2xl text-xl font-semibold">Akpager</span> */}
        </div>

        {/* Button to toggle the menu on small screens */}
        <nav className="text-xl flex items-center space-x-4 lg:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>

        {/* Navigation links */}
        <nav id="navMenu" className={`lg:flex lg:text-xl lg:items-center lg:space-x-4 ${isMenuOpen ? 'block' : 'hidden'}`}>
          <a href="/" className="hover:text-black">Home</a>
          <a href="/" className="hover:text-black">Page</a>
          <a href="/" className="hover:text-black">Service</a>
          <a href="/" className="hover:text-black">Shop</a>
          <a href="/" className="hover:text-black">Project</a>
          <a href="/" className="hover:text-black">Blog</a>
        </nav>

        <div className="flex items-center">
          <div className="mr-4">
            <input
              type="text"
              placeholder="Search"
              className="px-3 py-1 border border-gray-300 rounded"
            />
          </div>
          <h1 className="font-bold text-lg cursor-pointer select-none m-2 ">Support</h1>

          <button
            type="button"
            className="px-4 py-2 bg-gradient-to-r from-blue-400 to-blue-500 text-white rounded-lg hover:text-black shadow-md hover:shadow-lg"
          >
            Register
          </button>
        </div>
      </div>
    </header>
    </>
  )
}

export default Navbar
