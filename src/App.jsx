import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import LoadingScreen from './components/LoadingScreen';
import InstallPrompt from './components/InstallPrompt';
import './App.css';

// Enhanced ScrollToTop component
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    // Multiple methods to ensure scroll to top
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // Additional timeout to handle delayed content
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 10);
  }, [pathname]);
  
  return null;
}

// Page wrapper component
function PageWrapper({ children }) {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onAnimationStart={() => {
        window.scrollTo(0, 0);
      }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    
    const installTimer = setTimeout(() => {
      setShowInstallPrompt(true);
    }, 13000);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(installTimer);
    };
  }, []);
  
  if (isLoading) {
    return <LoadingScreen />;
  }
  
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white relative overflow-hidden">
        {/* Enhanced Background Decorative Elements with Black Accents */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="decorative-circle w-96 h-96 top-10 -right-48"></div>
          <div className="decorative-circle-black w-64 h-64 bottom-20 -left-32"></div>
          <div className="decorative-square w-32 h-32 top-1/4 right-20"></div>
          <div className="decorative-square-black w-20 h-20 bottom-1/3 left-10"></div>
          <div className="decorative-triangle top-1/2 right-1/4"></div>
          <div className="decorative-triangle-black bottom-1/4 left-1/3"></div>
        </div>
        
        <div className="relative z-10">
          <Header />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
              <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
              <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
              <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
            </Routes>
          </AnimatePresence>
          <Footer />
          
          {showInstallPrompt && (
            <InstallPrompt onClose={() => setShowInstallPrompt(false)} />
          )}
        </div>
      </div>
    </Router>
  );
}

export default App;