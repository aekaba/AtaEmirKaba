import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AiOutlineHome, AiOutlineUser, AiOutlineProject, AiOutlineMail } from 'react-icons/ai';

const Navbar = ({ onNavClick }) => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (isMobile) {
        if (currentScrollY > lastScrollY) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(currentScrollY);
      } else {
        setIsVisible(true);
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [lastScrollY, isMobile]);

  const navItems = [
    { title: 'Ana Sayfa', href: 'home', icon: <AiOutlineHome size={20} /> },
    { title: 'Hakkımda', href: 'about', icon: <AiOutlineUser size={20} /> },
    { title: 'Projelerim', href: 'projects', icon: <AiOutlineProject size={20} /> },
    { title: 'İletişim', href: 'contact', icon: <AiOutlineMail size={20} /> }
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.3 }}
          className="fixed left-0 top-1/3 -translate-y-1/2 z-50 bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-r-lg"
        >
          <ul className="space-y-4 sm:space-y-6 p-3 sm:p-4">
            {navItems.map((item) => (
              <motion.li
                key={item.href}
                onHoverStart={() => setHoveredItem(item.href)}
                onHoverEnd={() => setHoveredItem(null)}
                className="relative flex items-center"
              >
                <motion.button
                  onClick={() => onNavClick(item.href)}
                  className="flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors p-2"
                  whileHover={{ x: 10 }}
                >
                  <span className="text-xl sm:text-2xl">{item.icon}</span>
                  <motion.span
                    initial={{ opacity: 0, width: 0 }}
                    animate={{
                      opacity: hoveredItem === item.href ? 1 : 0,
                      width: hoveredItem === item.href ? 'auto' : 0
                    }}
                    className="ml-2 text-sm sm:text-base overflow-hidden whitespace-nowrap font-medium"
                  >
                    {item.title}
                  </motion.span>
                </motion.button>
              </motion.li>
            ))}
          </ul>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Navbar; 