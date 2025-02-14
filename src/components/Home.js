import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

const Home = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ata Emir Kaba",
    "alternateName": ["AEK", "AE_Kaba", "AEKaba"],
    "jobTitle": ["Yazılım Mühendisi", "Mobil Uygulama Geliştirici"],
    "url": "https://www.ataemirkaba.com",
    "image": "https://ataemirkaba-portfolio.s3.eu-north-1.amazonaws.com/images/jpg/aek.JPG",
    "description": "Beykent Üniversitesi Yazılım Mühendisliği öğrencisi. Flutter, Swift ve React ile mobil uygulama geliştirme uzmanı.",
    "knowsAbout": ["Flutter", "Swift", "React", "Mobile App Development", "iOS Development"],
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Beykent Üniversitesi"
    }
  };

  // Performans için animasyon değerlerini sabitleyelim
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const fadeInRightVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
        <link rel="preload" as="image" href="https://ataemirkaba-portfolio.s3.eu-north-1.amazonaws.com/images/jpg/aek.JPG" />
      </Helmet>
      
      <section 
        id="home" 
        className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-3 sm:px-6 lg:px-8 py-6 sm:py-12"
        role="main"
        aria-label="Ana Sayfa"
      >
        <div className="max-w-6xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12">
            {/* Sol taraf - Metin içeriği */}
            <motion.div
              variants={fadeInUpVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8 }}
              className="flex-1 text-left w-full lg:w-3/5 px-0 sm:px-4"
            >
              <h1 
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-gray-900 dark:text-white"
                tabIndex="0"
              >
                Merhaba, ben Ata Emir!
              </h1>
              <div className="prose prose-sm sm:prose dark:prose-invert max-w-none">
                <p 
                  className="text-sm sm:text-base md:text-lg leading-relaxed sm:leading-relaxed text-gray-800 dark:text-gray-100 mb-4 sm:mb-6"
                  tabIndex="0"
                >
                  Beykent Üniversitesi'nde 4. sınıf Yazılım Mühendisliği öğrencisiyim. Okul dışında freelance projelerle 
                  mobil uygulama geliştirme konusunda kendimi geliştirdim. Şu anda Flutter ile cross-platform uygulamalar 
                  geliştiriyorum. Ayrıca Swift & SwiftUI öğrenerek native iOS geliştirme konusunda da kendimi ileriye taşıyorum.
                </p>
                <p 
                  className="text-sm sm:text-base md:text-lg leading-relaxed sm:leading-relaxed text-gray-800 dark:text-gray-100 mb-4 sm:mb-6"
                  tabIndex="0"
                >
                  Okulumda C++, Java ve Python gibi diller üzerine çalışarak yazılım bilgimi genişletmeye devam ediyorum.
                </p>
                <p 
                  className="text-sm sm:text-base md:text-lg leading-relaxed sm:leading-relaxed text-gray-800 dark:text-gray-100"
                  tabIndex="0"
                >
                  Bu portfolio sitesinde CV'mi, projelerimi ve ileride yazacağım blog yazılarımı bulabilirsiniz.
                </p>
              </div>
            </motion.div>

            {/* Sağ taraf - Profil resmi */}
            <motion.div
              variants={fadeInRightVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:w-2/5 max-w-[180px] sm:max-w-[220px] md:max-w-[260px] lg:max-w-[300px] mx-auto lg:mx-0 mt-4 lg:mt-0"
              role="img"
              aria-label="Ata Emir Kaba'nın profil fotoğrafı"
            >
              <div className="relative aspect-square">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl sm:rounded-2xl transform rotate-6 scale-105 opacity-20"></div>
                <img
                  src="https://ataemirkaba-portfolio.s3.eu-north-1.amazonaws.com/images/jpg/aek.JPG"
                  alt="Ata Emir Kaba"
                  className="relative rounded-xl sm:rounded-2xl shadow-xl w-full h-full object-cover"
                  loading="lazy"
                  width="300"
                  height="300"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

// Performans için bileşeni memoize edelim
export default React.memo(Home); 