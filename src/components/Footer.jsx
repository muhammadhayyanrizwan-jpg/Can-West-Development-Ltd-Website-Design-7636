import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiPhone, FiMail, FiMapPin } = FiIcons;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  // Enhanced navigation handler for footer links
  const handleFooterNavigation = (href) => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });

    navigate(href);

    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 50);
  };

  return (
    <footer className="bg-dark-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <div className="flex justify-center md:justify-start mb-4">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-white p-2">
                <img
                  src="https://i.ibb.co/6cSy9pQV/Can-West-Development-Ltd-logo.png"
                  alt="Can-West Development Ltd"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">Can-West Development Ltd</h3>
            <p className="text-gray-300">
              Premier construction and development services in Vancouver
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-start">
                <SafeIcon icon={FiPhone} className="mr-3" />
                <span>+1 (604) 866-8374</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <SafeIcon icon={FiMapPin} className="mr-3" />
                <span>Vancouver, BC</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center md:text-left"
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <div>
                <button
                  onClick={() => handleFooterNavigation('/')}
                  className="hover:text-blue-300 transition-colors text-left"
                >
                  Home
                </button>
              </div>
              <div>
                <button
                  onClick={() => handleFooterNavigation('/services')}
                  className="hover:text-blue-300 transition-colors text-left"
                >
                  Services
                </button>
              </div>
              <div>
                <button
                  onClick={() => handleFooterNavigation('/about')}
                  className="hover:text-blue-300 transition-colors text-left"
                >
                  About Us
                </button>
              </div>
              <div>
                <button
                  onClick={() => handleFooterNavigation('/contact')}
                  className="hover:text-blue-300 transition-colors text-left"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-blue-700 mt-8 pt-8 text-center">
          <p className="text-gray-300 mb-2">
            © {currentYear} Can-West Development Ltd. All rights reserved.
          </p>
          <p className="text-sm text-gray-400">
            Domain + Hosting + Design = 
            <a
              href="https://www.account4web.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-white transition-colors"
            >
              Account4Web Inc
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;