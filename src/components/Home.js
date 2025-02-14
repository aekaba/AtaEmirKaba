import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-3 sm:px-6 lg:px-8 py-6 sm:py-12">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12">
          {/* Sol taraf - Metin içeriği */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-left w-full lg:w-3/5 px-0 sm:px-4"
          >
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
              Merhaba, ben Ata Emir!
            </h1>
            <div className="prose prose-sm sm:prose dark:prose-invert max-w-none">
              <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300 mb-2 sm:mb-3">
                Beykent Üniversitesi'nde 4. sınıf Yazılım Mühendisliği öğrencisiyim. Okul dışında freelance projelerle 
                mobil uygulama geliştirme konusunda kendimi geliştirdim. Şu anda Flutter ile cross-platform uygulamalar 
                geliştiriyorum. Ayrıca Swift & SwiftUI öğrenerek native iOS geliştirme konusunda da kendimi ileriye taşıyorum.
              </p>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300 mb-2 sm:mb-3">
                Okulumda C++, Java ve Python gibi diller üzerine çalışarak yazılım bilgimi genişletmeye devam ediyorum.
              </p>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300">
                Bu portfolio sitesinde CV'mi, projelerimi ve ileride yazacağım blog yazılarımı bulabilirsiniz.
              </p>
            </div>
          </motion.div>

          {/* Sağ taraf - Profil resmi */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-2/5 max-w-[180px] sm:max-w-[220px] md:max-w-[260px] lg:max-w-[300px] mx-auto lg:mx-0 mt-4 lg:mt-0"
          >
            <div className="relative aspect-square">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl sm:rounded-2xl transform rotate-6 scale-105 opacity-20"></div>
              <img
                src="https://ataemirkaba-portfolio.s3.eu-north-1.amazonaws.com/images/jpg/aek.JPG"
                alt="Ata Emir Kaba"
                className="relative rounded-xl sm:rounded-2xl shadow-xl w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home; 