import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import contactData from '../data/contact.json';
import Layout from './Layout';

const Contact = () => {
  const handleEmailClick = () => {
    window.location.href = `mailto:${contactData.email}`;
  };

  const handleCVDownload = () => {
    window.open(contactData.cv, '_blank');
  };

  const socialIcons = {
    FaGithub: FaGithub,
    FaLinkedin: FaLinkedin,
    FaXTwitter: FaXTwitter,
    FaInstagram: FaInstagram
  };

  return (
    <Layout title="İletişim">
      <div className="max-w-4xl mx-auto px-2 sm:px-4">
        {/* Başlık */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6 sm:mb-8"
        >
          <p className="text-sm sm:text-lg text-gray-600 dark:text-gray-300">
            {contactData.baslik}
          </p>
        </motion.div>

        {/* İletişim Kartları */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {/* Email Kartı */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4">
              <div className="p-2 sm:p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                <FaEnvelope className="text-blue-600 dark:text-blue-300 text-xl sm:text-2xl" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">Email</h3>
              <button
                onClick={handleEmailClick}
                className="text-sm sm:text-base text-blue-600 dark:text-blue-400 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 rounded-md px-2 py-1"
              >
                {contactData.email}
              </button>
            </div>
          </motion.div>

          {/* CV İndirme Kartı */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4">
              <div className="p-2 sm:p-3 bg-green-100 dark:bg-green-900 rounded-full">
                <FaFileDownload className="text-green-600 dark:text-green-300 text-xl sm:text-2xl" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">CV</h3>
              <button
                onClick={handleCVDownload}
                className="px-4 sm:px-6 py-1.5 sm:py-2 bg-green-600 hover:bg-green-700 text-white text-sm sm:text-base rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
              >
                CV'mi İndir
              </button>
            </div>
          </motion.div>
        </div>

        {/* Sosyal Medya Linkleri */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-6 sm:mt-8 text-center"
        >
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Sosyal Medya
          </h3>
          <div className="flex justify-center space-x-4 sm:space-x-6">
            {contactData.sosyal_medya.map((platform, index) => {
              const Icon = socialIcons[platform.icon];
              return (
                <motion.a
                  key={platform.platform}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                >
                  <Icon className="text-xl sm:text-2xl" />
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Contact; 