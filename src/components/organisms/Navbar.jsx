import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ButtonSection from '../molecules/ButtonSection';
import logo from "../Resources/Studio uno logo.png";
import "../pages/animaciones.css"

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenuAndNavigate = (path) => {
    setIsMenuOpen(false);
    navigate(path);
  };

  return (
    <div className='sticky top-0 bg-white shadow-md z-10 tracking-in-expand'>
      <nav className='flex justify-between items-center  border-gray-300 p-4 md:p-6'>
        <div>
          <Link to="/">
            <img src={logo} alt="logo" className='h-16 w-16' />
          </Link>
        </div>
        <div className='md:hidden relative'>
          <div className={`fixed top-[88px] right-0 bg-white shadow-lg opacity-0 transform translate-y-2 ${isMenuOpen ? 'opacity-100 translate-y-0 transition-all duration-300' : 'transition-all duration-300'}`}>
            <ul className='space-y-2 text-sm'>
              <li className='flex justify-center items-center hover:bg-gray-300'>
                <button
                  onClick={() => closeMenuAndNavigate('/')}
                  className='block w-full h-full py-2 px-4 font-space-grotesk text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-blue-900 bg-clip-text transition-colors duration-300'
                >
                  Home
                </button>
              </li>
              <li className='flex justify-center items-center  hover:bg-gray-300'>
                <button
                  onClick={() => closeMenuAndNavigate('/ModelsPage')}
                  className='block w-full h-full py-2 px-4 font-space-grotesk text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-blue-900 bg-clip-text transition-colors duration-300'
                >
                  Modelos
                </button>
              </li>
              <li className='flex justify-center items-center  hover:bg-gray-300'>
                <button
                  onClick={() => closeMenuAndNavigate('/AboutUs')}
                  className='block w-full h-full py-2 px-4 font-space-grotesk text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-blue-900 bg-clip-text transition-colors duration-300'
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>
          <button onClick={toggleMenu} className='p-2 transition-transform duration-300 transform hover:scale-110'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              className={`h-6 w-6 ${isMenuOpen ? 'transform rotate-45' : 'transform rotate-0'} transition-transform duration-300`}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
        <div className='hidden md:flex'>
          <ButtonSection />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
