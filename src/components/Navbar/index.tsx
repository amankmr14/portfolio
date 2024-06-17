import { useState } from 'react';
import logo from '../../assets/logo.png';
import resume from '../../assets/resume.pdf';

const Navbar = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);

  const toggleSideNav = () => {
    setSideNavOpen(!sideNavOpen)
  }

  return (
    <nav className="bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <a href="#about" className="flex items-center py-4 px-2">
                <img src={logo} alt="Logo" className="h-8 w-8 mr-2" />
              </a>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <a href="#about" className="py-4 px-2 text-black font-semibold custom-underline relative">About</a>
            <a href="#skills" className="py-4 px-2 text-black font-semibold custom-underline relative">Skills</a>
            <a href="#experience" className="py-4 px-2 text-black font-semibold custom-underline relative">Experience</a>
            <a href="#contactme" className="py-4 px-2 text-black font-semibold custom-underline relative">Contact Me</a>
          </div>
          <div className="hidden md:flex items-center space-x-3">
            <a href={resume} target="_blank" className="py-2 px-2 font-medium bg-black text-white rounded hover:bg-gray-700 transition duration-300 flex items-center">
              Resume
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M16 10l-4-4m0 0l-4 4m4-4v12" />
              </svg>
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleSideNav} className="outline-none mobile-menu-button">
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
        <div className={`fixed inset-0 bg-gray-800 bg-opacity-50 transition-opacity duration-300 ${sideNavOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={toggleSideNav}></div>
        <div className={`fixed top-0 left-0 w-64 bg-white h-full shadow-lg transform transition-transform duration-300 ${sideNavOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex flex-col items-start space-y-1 p-4">
            <button onClick={toggleSideNav} className="self-end mb-2 outline-none">
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <a href="#about" className="py-2 px-4 text-black font-semibold custom-underline relative">About</a>
            <a href="#skills" className="py-2 px-4 text-black font-semibold custom-underline relative">Skills</a>
            <a href="#experience" className="py-2 px-4 text-black font-semibold custom-underline relative">Experience</a>
            <a href="#contactme" className="py-2 px-4 text-black font-semibold custom-underline relative">Contact Me</a>
            <a href={resume} target="_blank" className="py-2 px-4 font-medium bg-black text-white rounded hover:bg-gray-700 transition duration-300 flex items-center">
              Resume
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M16 10l-4-4m0 0l-4 4m4-4v12" />
              </svg>
            </a>
          </div>
        </div>
    </nav>
  );
};

export default Navbar;
