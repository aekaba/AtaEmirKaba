import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import aboutData from '../data/about.json';
import Layout from './Layout';

const About = () => {
  const [currentSection, setCurrentSection] = useState('education');

  const sections = [
    { id: 'education', title: 'Eğitim' },
    { id: 'experience', title: 'Deneyim' },
    { id: 'volunteer', title: 'Gönüllü Deneyim' },
    { id: 'certificates', title: 'Sertifikalar' },
    { id: 'skills', title: 'Yetenekler' }
  ];

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const pageTransition = {
    hidden: { opacity: 0, x: -20 },
    show: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    exit: {
      opacity: 0,
      x: 20,
      transition: { duration: 0.2 }
    }
  };

  const sortByDate = (a, b) => {
    const dateA = a.yillar.split(' - ')[0];
    const dateB = b.yillar.split(' - ')[0];
    return dateB.localeCompare(dateA);
  };

  const renderContent = () => {
    switch (currentSection) {
      case 'education':
        return (
          <motion.div 
            variants={pageTransition}
            initial="hidden"
            animate="show"
            exit="exit"
            className="space-y-4"
          >
            <div className="grid grid-cols-1 gap-4 auto-rows-max">
              {aboutData.egitim.sort(sortByDate).map((edu, index) => (
                <motion.a 
                  key={index}
                  href={edu.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={item}
                  className={`bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 ${edu.link ? 'cursor-pointer hover:border-blue-500 dark:hover:border-blue-400 transition-colors' : ''}`}
                >
                  <h3 className="font-medium text-gray-900 dark:text-white">{edu.bolum}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{edu.kurum}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">{edu.yillar}</p>
                </motion.a>
              ))}
            </div>
          </motion.div>
        );

      case 'experience':
        return (
          <motion.div 
            variants={pageTransition}
            initial="hidden"
            animate="show"
            exit="exit"
            className="space-y-4"
          >
            <div className="grid grid-cols-1 gap-4 auto-rows-max">
              {aboutData.is_deneyimi.sort(sortByDate).map((exp, index) => (
                <motion.div 
                  key={index}
                  variants={item}
                  className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700"
                >
                  <h3 className="font-medium text-gray-900 dark:text-white">{exp.pozisyon}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{exp.sirket}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">{exp.yillar}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{exp.aciklama}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );

      case 'volunteer':
        return (
          <motion.div 
            variants={pageTransition}
            initial="hidden"
            animate="show"
            exit="exit"
            className="space-y-4"
          >
            <div className="grid grid-cols-1 gap-4 auto-rows-max">
              {aboutData.gonullu_deneyim.sort(sortByDate).map((exp, index) => (
                <motion.div 
                  key={index}
                  variants={item}
                  className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700"
                >
                  <h3 className="font-medium text-gray-900 dark:text-white">{exp.pozisyon}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{exp.kurum}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">{exp.yillar}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{exp.aciklama}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );

      case 'certificates':
        return (
          <motion.div 
            variants={pageTransition}
            initial="hidden"
            animate="show"
            exit="exit"
            className="space-y-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 auto-rows-max">
              {aboutData.sertifikalar.sort((a, b) => b.yil - a.yil).map((cert, index) => (
                <motion.a
                  key={index}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={item}
                  className={`bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 ${cert.link ? 'cursor-pointer hover:border-blue-500 dark:hover:border-blue-400 transition-colors' : ''}`}
                >
                  <h3 className="font-medium text-gray-900 dark:text-white">{cert.ad}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{cert.kurum}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">{cert.yil}</p>
                </motion.a>
              ))}
            </div>
          </motion.div>
        );

      case 'skills':
        return (
          <motion.div 
            variants={pageTransition}
            initial="hidden"
            animate="show"
            exit="exit"
            className="space-y-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Object.entries(aboutData.yetenekler).map(([category, skills]) => (
                <motion.div key={category} variants={item} className="space-y-3">
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    {category.replace('_', ' ').replace('gelistirme', 'geliştirme')}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-1 text-sm bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <Layout title="Hakkımda">
      {/* Alt Navigasyon */}
      <div className="flex justify-center mb-3">
        <div className="flex space-x-2 sm:space-x-3 bg-white dark:bg-gray-800 rounded-full p-1 shadow-md">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setCurrentSection(section.id)}
              className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium transition-colors
                ${currentSection === section.id
                  ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900'
                  : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
                }`}
            >
              {section.title}
            </button>
          ))}
        </div>
      </div>

      {/* Kaydırılabilir İçerik */}
      <div className="relative h-[calc(100vh-16rem)] overflow-y-auto px-2 sm:px-4 pb-6 custom-scrollbar">
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-gray-50 dark:to-gray-900 opacity-50" />
        <AnimatePresence mode="wait">
          {renderContent()}
        </AnimatePresence>
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(156, 163, 175, 0.5);
          border-radius: 20px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: rgba(156, 163, 175, 0.7);
        }

        @media (max-width: 640px) {
          .custom-scrollbar::-webkit-scrollbar {
            width: 4px;
          }
        }
      `}</style>
    </Layout>
  );
};

export default About; 