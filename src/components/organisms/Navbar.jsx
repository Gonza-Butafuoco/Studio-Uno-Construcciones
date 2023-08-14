import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ButtonSection from '../molecules/ButtonSection';
import svgimage from "../Resources/studiouno_logotipo.svg";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='sticky top-0 bg-white z-10'>
      <nav className='flex justify-between items-center border border-black p-4 md:p-6'>
        <div>
          <Link to="/">
            <img src={svgimage} alt="logo" className='h-16 w-16' />
          </Link>
        </div>
        <div className='md:hidden'>
          <button onClick={toggleMenu} className='p-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              className='h-6 w-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className='absolute top-16 right-4 bg-white border border-black p-2'>
              <ul className='space-y-2 text-sm'>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/AboutUs'>About Us</Link>
                </li>
                <li>
                  <Link to='/ModelsPage'>Models</Link>
                </li>
                <li>
                  <Link to='/Contact'>Contact</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className='hidden md:flex'>
          <ButtonSection />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;



