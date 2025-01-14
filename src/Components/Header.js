import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Menu, X, ChevronDown, Lightbulb, Users, Trophy, Phone, Atom, LucideGalleryHorizontal } from 'lucide-react';
import logo from './images/logo.png';
import mainLogo from './images/mainlogoips.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  let timeoutId;

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setDropdownOpen(false);
    }, 100);
  };

  useEffect(() => {
    const sectionId = location.hash.replace('#', '');

    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const navLinks = [
    { name: "About", path: "/#about", icon: <Lightbulb className="w-4 h-4" /> },
    { name: "Themes", path: "/#themes", icon: <Users className="w-4 h-4" /> },
    { name: "Prize", path: "/prize", icon: <Trophy className="w-4 h-4" /> },
    { name: "Gallery", path: "/gallery", icon: <LucideGalleryHorizontal className="w-4 h-4" /> },
    { name: "Contact", path: "/#contact", icon: <Phone className="w-4 h-4" /> }
  ];

  const peopleLinks = [
    { name: "Principal & HOD", path: "/leadership" },
    { name: "Faculty Co-Ordinator", path: "/faculty" },
    { name: "Committee Members", path: "/committee" },
    { name: "Student Co-ordinator", path: "/student-Co-ordinator" }
  ];

  return (
    <nav className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-white shadow-xl">
      <div className="container mx-auto max-w-8xl px-4 py-1 md:px-8 md:py-3">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 group transition-all duration-500 hover:scale-[1.02]"
          >
            <div className="flex gap-2 items-center">
              <img
                src={mainLogo}
                alt="Main Logo"
                className="h-10 w-auto md:h-20 hover:rotate-6 transition-transform duration-300"
              />
              <img
                src={logo}
                alt="Logo"
                className="h-10 w-auto md:h-20 hover:-rotate-6 transition-transform duration-300"
              />
            </div>
            
            <div className="flex flex-col relative">
              <div className="flex items-center gap-1">
                <span className="text-lg md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-white to-blue-200 animate-gradient">
                  Science Exhibition
                </span>
                <Atom className="w-6 h-6 text-blue-200 animate-spin-slow" />
              </div>
              
              <div className="text-sm md:text-base font-bold text-yellow-400 opacity-90">
                Inter College
              </div>
              
              <div className="relative">
                <span className="text-sm md:text-lg font-bold tracking-widest text-blue-100 group-hover:animate-pulse">
                  2K25
                </span>
                <div className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-200 to-transparent group-hover:animate-pulse"></div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-1 -right-2 w-1.5 h-1.5 bg-blue-200 rounded-full animate-ping"></div>
              <div className="absolute -bottom-1 -left-2 w-1.5 h-1.5 bg-blue-200 rounded-full animate-ping delay-300"></div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-white hover:text-blue-100 relative group flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 hover:bg-blue-500/30 ${
                  location.pathname === link.path ? 'bg-blue-500/40' : ''
                }`}
              >
                {link.icon}
                <span>{link.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}

            {/* People Dropdown */}
            <div
              className="relative group z-50"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="flex items-center space-x-1 px-3 py-2 text-white hover:text-blue-100 rounded-lg transition-all duration-500 hover:bg-blue-500/30"
              >
                <span>People</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    dropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg transform transition-all duration-500 z-50 ${
                  dropdownOpen
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 -translate-y-2 pointer-events-none'
                }`}
              >
                {peopleLinks.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 first:rounded-t-xl last:rounded-b-xl"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Register Button */}
            <Link
              to="/register"
              className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium transition-all bg-white text-blue-600 rounded-xl group hover:scale-105 duration-300 hover:shadow-lg"
            >
              <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-blue-100 rounded group-hover:-mr-4 group-hover:-mt-4">
                <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
              </span>
              <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-blue-100 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
              <span className="relative w-full transition-colors duration-300 ease-in-out group-hover:text-blue-700 flex items-center justify-center gap-2 font-semibold">
                Register Now
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-10 h-10 focus:outline-none rounded-lg hover:bg-blue-500/30 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white" />
              ) : (
                <Menu className="w-6 h-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 h-full w-72 bg-white shadow-lg transform transition-transform duration-300 ease-in-out rounded-l-2xl">
            <div className="p-6 space-y-4">
              <Link
                to="/register"
                className="block w-full px-4 py-3 text-center text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-all duration-300 hover:scale-[0.98] shadow-lg font-semibold"
                onClick={() => setIsOpen(false)}
              >
                Register Now
              </Link>

              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {link.icon}
                  <span>{link.name}</span>
                </Link>
              ))}
              
              <div className="space-y-2 px-4 py-3 bg-blue-50 rounded-xl">
                <p className="text-blue-600 font-semibold mb-2">People</p>
                {peopleLinks.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="block py-2 px-3 text-gray-700 hover:bg-blue-100 hover:text-blue-600 rounded-lg transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              

            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;