import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMenu, FiX } = FiIcons;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
  ];

  // Enhanced navigation handler
  const handleNavigation = (href) => {
    // Close mobile menu
    setIsMenuOpen(false);

    // Immediate scroll to top
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });

    // Navigate to new page
    navigate(href);

    // Additional scroll to top after navigation
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 50);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-40 relative">
      <div className="dark-blue-hexagon absolute inset-0"></div>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <Link
              to="/"
              className="flex items-center"
              onClick={() => handleNavigation('/')}
            >
              <img
                src="https://i.ibb.co/4ZTrh3zz/Can-West-Development-Ltd-logo.jpg"
                alt="Can-West Development Ltd"
                className="h-12 w-auto"
              />
              <span className="ml-3 text-xl font-bold text-dark-blue hidden sm:block">
                Can-West Development Ltd
              </span>
            </Link>
          </motion.div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <button
                    onClick={() => handleNavigation(item.href)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                      location.pathname === item.href
                        ? 'bg-dark-blue text-white'
                        : 'text-dark-blue hover:bg-dark-blue hover:text-white'
                    }`}
                  >
                    {item.name}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-dark-blue hover:text-blue-600 p-2"
            >
              <SafeIcon icon={isMenuOpen ? FiX : FiMenu} className="h-6 w-6" />
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.href)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                    location.pathname === item.href
                      ? 'bg-dark-blue text-white'
                      : 'text-dark-blue hover:bg-dark-blue hover:text-white'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Header;