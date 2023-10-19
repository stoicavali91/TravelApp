"use client"

import {useState} from 'react'
interface HamburgerMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}
const HamburgerMenu = ({ isOpen, toggleMenu }) => {

  
  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="text-white hover:text-gray-300 focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>
    </div>
  );
}

export default HamburgerMenu