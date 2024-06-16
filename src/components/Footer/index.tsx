import logo from '../../assets/logo.png';

const Footer = () => {

  return (
    <nav className="bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <a href="#about" className="flex items-center py-4 px-2">
                <img src={logo} alt="Logo" className="h-8 w-8 mr-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Footer;
