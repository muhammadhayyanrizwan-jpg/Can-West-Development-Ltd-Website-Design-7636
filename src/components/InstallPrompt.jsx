import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiDownload, FiX, FiSmartphone } = FiIcons;

const InstallPrompt = ({ onClose }) => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      setDeferredPrompt(null);
      setIsVisible(false);
      onClose();
    } else {
      // Fallback for browsers that don't support PWA installation
      alert('To install this app:\n\n1. Open browser menu\n2. Select "Add to Home Screen" or "Install App"\n3. Follow the prompts');
      setIsVisible(false);
      onClose();
    }
  };

  const handleClose = () => {
    setIsVisible(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white rounded-lg p-6 max-w-sm w-full shadow-xl"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center">
                <SafeIcon icon={FiSmartphone} className="text-dark-blue text-2xl mr-3" />
                <h3 className="text-lg font-bold text-dark-blue">Install App</h3>
              </div>
              <button
                onClick={handleClose}
                className="text-gray-400 hover:text-gray-600"
              >
                <SafeIcon icon={FiX} className="text-xl" />
              </button>
            </div>

            <div className="mb-6">
              <img
                src="https://i.ibb.co/6cSy9pQV/Can-West-Development-Ltd-logo.png"
                alt="Can-West Development Ltd"
                className="w-16 h-16 mx-auto mb-3"
              />
              <p className="text-gray-600 text-center">
                Install Can-West Development Ltd app for quick access to our services and easy contact.
              </p>
            </div>

            <div className="flex space-x-3">
              <button
                onClick={handleInstall}
                className="btn-primary flex-1 flex items-center justify-center"
              >
                <SafeIcon icon={FiDownload} className="mr-2" />
                Install
              </button>
              <button
                onClick={handleClose}
                className="btn-secondary flex-1"
              >
                Later
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InstallPrompt;