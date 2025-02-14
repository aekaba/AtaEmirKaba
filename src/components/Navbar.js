import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AiOutlineHome, AiOutlineUser, AiOutlineProject, AiOutlineMail, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = ({ onNavClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = [
    { title: 'Ana Sayfa', href: 'home', icon: <AiOutlineHome size={20} /> },
    { title: 'Hakkımda', href: 'about', icon: <AiOutlineUser size={20} /> },
    { title: 'Projelerim', href: 'projects', icon: <AiOutlineProject size={20} /> },
    { title: 'İletişim', href: 'contact', icon: <AiOutlineMail size={20} /> }
  ];

  const handleNavClick = (href) => {
    onNavClick(href);
    setIsMenuOpen(false);
  };

  // Mobil menü animasyonu
  const menuVariants = {
    closed: {
      opacity: 0,
      x: "-100%",
      transition: {
        duration: 0.2
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <>
      {/* Hamburger Menü Butonu - Mobil */}
      {isMobile && (
        <motion.button
          initial={false}
          animate={{ opacity: 1 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border border-gray-200 dark:border-gray-700"
        >
          {isMenuOpen ? (
            <AiOutlineClose size={24} className="text-gray-600 dark:text-gray-300" />
          ) : (
            <AiOutlineMenu size={24} className="text-gray-600 dark:text-gray-300" />
          )}
        </motion.button>
      )}

      {/* Mobil Menü */}
      <AnimatePresence>
        {isMobile && isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-y-0 left-0 w-64 z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-xl"
          >
            <div className="pt-16 px-4">
              <ul className="space-y-4">
                {navItems.map((item) => (
                  <motion.li
                    key={item.href}
                    whileHover={{ x: 10 }}
                    className="relative"
                  >
                    <button
                      onClick={() => handleNavClick(item.href)}
                      className="flex items-center space-x-3 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors w-full p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      <span className="text-xl">{item.icon}</span>
                      <span className="text-base font-medium">{item.title}</span>
                    </button>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Menü */}
      {!isMobile && (
        <motion.nav 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.3 }}
          className="fixed left-0 top-1/3 -translate-y-1/2 z-50 bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-r-lg"
        >
          <ul className="space-y-6 p-4">
            {navItems.map((item) => (
              <motion.li
                key={item.href}
                whileHover={{ x: 10 }}
                className="relative"
              >
                <button
                  onClick={() => handleNavClick(item.href)}
                  className="flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors p-2"
                >
                  <span className="text-2xl">{item.icon}</span>
                </button>
              </motion.li>
            ))}
          </ul>
        </motion.nav>
      )}

      {/* Overlay - Mobil menü açıkken arka planı karartma */}
      <AnimatePresence>
        {isMobile && isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMenuOpen(false)}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30"
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar; 