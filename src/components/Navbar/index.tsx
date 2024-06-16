import logo from '../../assets/logo.png';
import resume from '../../assets/resume.pdf';

const Navbar = () => {

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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
