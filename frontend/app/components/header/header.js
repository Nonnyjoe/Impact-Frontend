'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg fixed z-50 w-screen border-b border-w3b-red">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[70px] md:h-[90px]">
          <div className="flex-shrink-0">
            <Link href="/">
              <div>
                <Image src="/Images/Logo.png" alt="Logo" width={150} height={20} />
              </div>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/">
                <p className="text-w3b-black hover:text-w3b-red px-3 py-2 rounded-md text-base font-poppins font-medium">
                  Home
                </p>
              </Link>
              <Link href="/Stories">
                <p className="text-w3b-black hover:text-w3b-red px-3 py-2 rounded-md text-base font-poppins font-medium">
                  Stories
                </p>
              </Link>
              <Link href="/cohorts">
                <p className="text-w3b-black hover:text-w3b-red px-3 py-2 rounded-md text-base font-poppins font-medium">
                  Cohorts
                </p>
              </Link>
              <Link href="/Hire-us">
                <p className="text-w3b-black hover:text-w3b-red px-3 py-2 rounded-md text-base font-poppins font-medium">
                  Hire Us
                </p>
              </Link>
            </div>
          </div>

          <div className="hidden md:block">
            <p className=" font-poppins text-base text-black">EN</p>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleNavbar}
              type="button"
              className="bg-white p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-w3b-red"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${isOpen ? 'block' : 'hidden'} md:hidden z-50 bg-white border-b border-w3b-red`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/" onClick={toggleNavbar}>
            <p className="text-w3b-black hover:text-w3b-red block px-3 py-2 rounded-md text-base font-medium">
              Home
            </p>
          </Link>
          <Link href="/Stories" onClick={toggleNavbar}>
            <p className="text-w3b-black hover:text-w3b-red block px-3 py-2 rounded-md text-base font-medium">
              Stories
            </p>
          </Link>
          <Link href="/cohorts" onClick={toggleNavbar}>
            <p className="text-w3b-black hover:text-w3b-red block px-3 py-2 rounded-md text-base font-medium">
              Cohorts
            </p>
          </Link>
          <Link href="/Hire-us" onClick={toggleNavbar}>
            <p className="text-w3b-black hover:text-w3b-red block px-3 py-2 rounded-md text-base font-medium">
              Hire Us
            </p>
          </Link>
        </div>
      </div>
    </nav>
  );
}
