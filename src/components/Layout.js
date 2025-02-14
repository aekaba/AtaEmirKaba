import React from 'react';
import { motion } from 'framer-motion';

const Layout = ({ title, children }) => {
  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 py-3 sm:py-4">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        {title && (
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 text-center"
          >
            {title}
          </motion.h2>
        )}
        {children}
      </div>
    </section>
  );
};

export default Layout; 