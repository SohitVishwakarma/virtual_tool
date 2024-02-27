"use client"
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-blue-300 to-purple-500 text-white">
      <div className="container mx-auto flex items-center justify-between p-3.5">
      <div className="flex items-center space-x-4">
  <img className='brandlogo' src="https://webtendtheme.net/html/2024/akpager/assets/images/logos/logo2.png"   alt="Logo" />
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
        <nav
          id="navMenu"
          className={`lg:flex lg:text-xl lg:items-center lg:space-x-4 ${isMenuOpen ? 'block' : 'hidden'}`}
        >
          <a href="/" className="hover:text-black">
            Home
          </a>
          <a href="/" className="hover:text-black">
            Page
          </a>
          <a href="/" className="hover:text-black">
            Service
          </a>
          <a href="/" className="hover:text-black">
            Shop
          </a>
          <a href="/" className="hover:text-black">
            Project
          </a>
          <a href="/" className="hover:text-black">
            Blog
          </a>
        </nav>

        <div className="flex items-center">
          <div className="mr-4">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search"
              className="px-3 py-1 text-black font-mono  border-none   rounded-lg"
            />
          </div>
          <h1 className="font-bold text-lg cursor-pointer select-none m-2">Support</h1>

          <a href="#_" className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-300 rounded-full shadow-md group">
<span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-yellow-600 group-hover:translate-x-0 ease">
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span className="absolute flex items-center justify-center w-full h-full text-purple-200 transition-all duration-300 transform group-hover:translate-x-full ease">Register</span>
<span className="relative invisible">Register</span>
</a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
