import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/PRWarna.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full fixed top-0 left-0 bg-white shadow-md z-50">
      <div className="container mx-auto">
        <nav className="flex items-center justify-between px-6 py-3">
          <Link to="/ppobringkas">
            <img src={Logo} className="w-24 md:w-30" alt="Logo" />
          </Link>
          
          {/* Burger Menu Button - Only visible on mobile */}
          <button 
            className="md:hidden text-gray-600 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-1 px-12">
            <ul className="flex space-x-8 items-center">
              <li><Link to="/ppobringkas" className="text-gray-600 hover:text-blue-500 transition">Beranda</Link></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-500 transition">Produk</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-500 transition">Blog</a></li>
              <li><Link to="/about" className="text-gray-600 hover:text-blue-500 transition">Tentang</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-blue-500 transition">Kontak</Link></li>
            </ul>
          </div>
          
          <a href="#" className="hidden md:block bg-blue-700 text-white px-3 py-2 rounded-md hover:bg-blue-800 transition">
            Masuk
          </a>
        </nav>

        {/* Mobile Menu - Toggled by burger button */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t py-4">
            <ul className="flex flex-col space-y-4 px-6">
              <li><Link to="/ppobringkas" className="block text-gray-600 hover:text-blue-500 transition">Beranda</Link></li>
              <li><a href="#" className="block text-gray-600 hover:text-blue-500 transition">Produk</a></li>
              <li><a href="#" className="block text-gray-600 hover:text-blue-500 transition">Blog</a></li>
              <li><Link to="/about" className="block text-gray-600 hover:text-blue-500 transition">Tentang</Link></li>
              <li><Link to="/contact" className="block text-gray-600 hover:text-blue-500 transition">Kontak</Link></li>
              <li>
                <a href="#" className="inline-block bg-blue-700 text-white px-3 py-2 rounded-md hover:bg-blue-800 transition">
                  Masuk
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;