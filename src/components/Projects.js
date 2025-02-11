import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaAppStore, FaGooglePlay, FaGlobe, FaGithub, FaCode, FaTimes } from 'react-icons/fa';
import projectsData from '../data/projects.json';
import Layout from './Layout';

const Projects = ({ setIsModalOpen }) => {
  const [currentSection, setCurrentSection] = useState('profesyonel');
  const [selectedProject, setSelectedProject] = useState(null);
  const projectsContainerRef = useRef(null);

  // Modal açıldığında scroll'u engelle
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      setIsModalOpen(true);
    } else {
      document.body.style.overflow = 'unset';
      setIsModalOpen(false);
    }

    return () => {
      document.body.style.overflow = 'unset';
      setIsModalOpen(false);
    };
  }, [selectedProject, setIsModalOpen]);

  // Sekme değişiminde scroll'u kontrol et
  const handleSectionChange = (sectionId) => {
    if (projectsContainerRef.current) {
      projectsContainerRef.current.scrollTop = 0;
    }
    setCurrentSection(sectionId);
  };

  const sections = [
    { id: 'profesyonel', title: 'Profesyonel' },
    { id: 'akademik', title: 'Akademik' },
    { id: 'kisisel', title: 'Kişisel' }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  const renderProjectCard = (proje) => (
    <motion.div
      variants={item}
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md flex flex-col h-full cursor-pointer"
      onClick={() => setSelectedProject(proje)}
    >
      {/* Proje Resmi veya Placeholder */}
      <div className="relative h-40 bg-gray-100 dark:bg-gray-700">
        {proje.resim ? (
          <img
            src={proje.resim}
            alt={proje.ad}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <FaCode className="text-gray-400 dark:text-gray-500" size={32} />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <h3 className="text-lg font-semibold text-white">{proje.ad}</h3>
        </div>
      </div>

      {/* Proje Detayları */}
      <div className="p-3 flex-1 flex flex-col">
        {/* Açıklama - maksimum 3 satır */}
        <div className="flex-1">
          <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
            {proje.aciklama}
          </p>
        </div>

        {/* Teknolojiler */}
        <div className="flex flex-wrap gap-1.5 my-3">
          {proje.teknolojiler.map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Alt Kısım - Platform ve Linkler */}
        <div className="pt-2 mt-auto border-t border-gray-200 dark:border-gray-700">
          {/* Platformlar */}
          {proje.platformlar && proje.platformlar.length > 0 && (
            <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 mb-2">
              <span>Platformlar:</span>
              {proje.platformlar.map((platform, idx) => (
                <span key={idx} className="font-medium">
                  {platform}
                  {idx < proje.platformlar.length - 1 ? ', ' : ''}
                </span>
              ))}
            </div>
          )}

          {/* Platform Linkleri */}
          <div className="flex items-center gap-3">
            {proje.linkler.appstore && (
              <a
                href={proje.linkler.appstore}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <FaAppStore size={20} />
              </a>
            )}
            {proje.linkler.playstore && (
              <a
                href={proje.linkler.playstore}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <FaGooglePlay size={20} />
              </a>
            )}
            {proje.linkler.web && (
              <a
                href={proje.linkler.web}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <FaGlobe size={20} />
              </a>
            )}
            {proje.linkler.github && (
              <a
                href={proje.linkler.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <FaGithub size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );

  // Modal Bileşeni
  const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className="relative">
            {project.resim ? (
              <div className="w-full aspect-video">
                <img
                  src={project.resim}
                  alt={project.ad}
                  className="w-full h-full object-contain bg-gray-100 dark:bg-gray-700"
                />
              </div>
            ) : (
              <div className="w-full aspect-video bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                <FaCode className="text-gray-400 dark:text-gray-500" size={64} />
              </div>
            )}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors"
            >
              <FaTimes size={20} />
            </button>
          </div>

          {/* Modal Content */}
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {project.ad}
            </h2>

            <div className="space-y-6">
              {/* Açıklama */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Proje Açıklaması
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {project.aciklama}
                </p>
              </div>

              {/* Teknolojiler */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Kullanılan Teknolojiler
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.teknolojiler.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Platformlar */}
              {project.platformlar && project.platformlar.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Platformlar
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.platformlar.map((platform, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Linkler */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Bağlantılar
                </h3>
                <div className="flex gap-4">
                  {project.linkler.appstore && (
                    <a
                      href={project.linkler.appstore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                    >
                      <FaAppStore size={24} />
                      <span>App Store</span>
                    </a>
                  )}
                  {project.linkler.playstore && (
                    <a
                      href={project.linkler.playstore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                    >
                      <FaGooglePlay size={24} />
                      <span>Play Store</span>
                    </a>
                  )}
                  {project.linkler.web && (
                    <a
                      href={project.linkler.web}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                    >
                      <FaGlobe size={24} />
                      <span>Web Sitesi</span>
                    </a>
                  )}
                  {project.linkler.github && (
                    <a
                      href={project.linkler.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                    >
                      <FaGithub size={24} />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <Layout title="Projelerim">
      {/* Alt Navigasyon */}
      <div className="flex justify-center mb-3">
        <div className="flex space-x-3 bg-white dark:bg-gray-800 rounded-full p-1 shadow-md">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => handleSectionChange(section.id)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors
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

      {/* Projeler Grid */}
      <div 
        ref={projectsContainerRef}
        className="overflow-y-auto pb-4" 
        style={{ maxHeight: 'calc(100vh - 160px)' }}
        onClick={(e) => e.stopPropagation()}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSection}
            variants={container}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {projectsData[currentSection].map((proje, index) => (
              renderProjectCard(proje)
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Projects; 