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
      <div className="max-w-4xl mx-auto">
        {/* Başlık */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {contactData.baslik}
          </p>
        </motion.div>

        {/* İletişim Kartları */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Email Kartı */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                <FaEnvelope className="text-blue-600 dark:text-blue-300" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Email</h3>
              <button
                onClick={handleEmailClick}
                className="text-blue-600 dark:text-blue-400 hover:underline"
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
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-3 bg-green-100 dark:bg-green-900 rounded-full">
                <FaFileDownload className="text-green-600 dark:text-green-300" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">CV</h3>
              <button
                onClick={handleCVDownload}
                className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-full transition-colors"
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
          className="mt-8 text-center"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Sosyal Medya
          </h3>
          <div className="flex justify-center space-x-6">
            {contactData.sosyal_medya.map((platform, index) => {
              const Icon = socialIcons[platform.icon];
              return (
                <motion.a
                  key={platform.platform}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                >
                  <Icon size={28} />
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