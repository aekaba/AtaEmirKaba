import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import aboutData from '../data/about.json';

const About = () => {
  const [currentSection, setCurrentSection] = useState('education');

  const sections = [
    { id: 'education', title: 'Eğitim' },
    { id: 'experience', title: 'Deneyim' },
    { id: 'volunteer', title: 'Gönüllü' },
    { id: 'certificates', title: 'Sertifikalar' },
    { id: 'skills', title: 'Yetenekler' },
  ];

  const fade = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.22, ease: 'easeOut' } },
    exit: { opacity: 0, y: -6, transition: { duration: 0.14 } },
  };

  /* ── Row: left-aligned two-column layout ── */
  const Row = ({ href, left, right }) => {
    const base =
      'flex flex-row items-start justify-between gap-[16px] py-[18px] border-b border-[var(--color-pure-black)] last:border-b-0 transition-opacity ' +
      (href ? 'cursor-pointer hover:opacity-50' : '');
    const inner = (
      <>
        <div className="flex-1 min-w-0">{left}</div>
        {right && (
          <span
            className="shrink-0 text-right"
            style={{ color: 'var(--color-concrete)', fontSize: '11px', letterSpacing: '0.04em', whiteSpace: 'nowrap', paddingTop: '2px' }}
          >
            {right}
          </span>
        )}
      </>
    );
    return href ? (
      <a href={href} target="_blank" rel="noopener noreferrer" className={base}>
        {inner}
      </a>
    ) : (
      <div className={base}>{inner}</div>
    );
  };

  /* ── Experience — custom sort: Food Runners first, Huawei second, New Software third ── */
  const sortedExperience = (() => {
    const order = ['The Food Runners', 'Huawei', 'New Software Solutions'];
    return [...aboutData.is_deneyimi].sort((a, b) => {
      const ia = order.indexOf(a.sirket);
      const ib = order.indexOf(b.sirket);
      if (ia === -1 && ib === -1) return 0;
      if (ia === -1) return 1;
      if (ib === -1) return -1;
      return ia - ib;
    });
  })();

  const renderContent = () => {
    switch (currentSection) {
      case 'education':
        return (
          <motion.div key="education" variants={fade} initial="hidden" animate="show" exit="exit">
            {[...aboutData.egitim]
              .sort((a, b) => b.yillar.localeCompare(a.yillar))
              .map((edu, i) => (
                <Row
                  key={i}
                  href={edu.link}
                  left={
                    <>
                      <p style={{ fontSize: '15px', color: 'var(--color-pure-black)', fontWeight: 400 }}>{edu.bolum}</p>
                      <p style={{ fontSize: '11px', color: 'var(--color-concrete)', letterSpacing: '0.04em', marginTop: '3px' }}>{edu.kurum}</p>
                    </>
                  }
                  right={edu.yillar}
                />
              ))}
          </motion.div>
        );

      case 'experience':
        return (
          <motion.div key="experience" variants={fade} initial="hidden" animate="show" exit="exit">
            {sortedExperience.map((exp, i) => (
              <Row
                key={i}
                left={
                  <>
                    <p style={{ fontSize: '15px', color: 'var(--color-pure-black)', fontWeight: 400 }}>{exp.pozisyon}</p>
                    <p style={{ fontSize: '11px', color: 'var(--color-concrete)', letterSpacing: '0.04em', marginTop: '3px' }}>{exp.sirket}</p>
                    <p style={{ fontSize: '13px', color: 'var(--color-concrete)', lineHeight: 1.5, marginTop: '8px' }}>{exp.aciklama}</p>
                  </>
                }
                right={exp.yillar}
              />
            ))}
          </motion.div>
        );

      case 'volunteer':
        return (
          <motion.div key="volunteer" variants={fade} initial="hidden" animate="show" exit="exit">
            {aboutData.gonullu_deneyim.map((exp, i) => (
              <Row
                key={i}
                left={
                  <>
                    <p style={{ fontSize: '15px', color: 'var(--color-pure-black)', fontWeight: 400 }}>{exp.pozisyon}</p>
                    <p style={{ fontSize: '11px', color: 'var(--color-concrete)', letterSpacing: '0.04em', marginTop: '3px' }}>{exp.kurum}</p>
                    <p style={{ fontSize: '13px', color: 'var(--color-concrete)', lineHeight: 1.5, marginTop: '8px' }}>{exp.aciklama}</p>
                  </>
                }
                right={exp.yillar}
              />
            ))}
          </motion.div>
        );

      case 'certificates':
        return (
          <motion.div key="certificates" variants={fade} initial="hidden" animate="show" exit="exit">
            {[...aboutData.sertifikalar]
              .sort((a, b) => b.yil - a.yil)
              .map((cert, i) => (
                <Row
                  key={i}
                  href={cert.link || undefined}
                  left={
                    <>
                      {/* Sertifika adı önce, kurum sonra */}
                      <p style={{ fontSize: '15px', color: 'var(--color-pure-black)', fontWeight: 400 }}>{cert.ad}</p>
                      <p style={{ fontSize: '11px', color: 'var(--color-concrete)', letterSpacing: '0.04em', marginTop: '3px' }}>{cert.kurum}</p>
                    </>
                  }
                  right={String(cert.yil)}
                />
              ))}
          </motion.div>
        );

      case 'skills':
        return (
          <motion.div key="skills" variants={fade} initial="hidden" animate="show" exit="exit">
            {Object.entries(aboutData.yetenekler).map(([category, skills]) => (
              <Row
                key={category}
                left={
                  <div className="flex flex-col sm:flex-row sm:items-start gap-[16px]">
                    <span
                      className="uppercase shrink-0"
                      style={{ color: 'var(--color-concrete)', fontSize: '11px', letterSpacing: '0.08em', width: '140px', paddingTop: '2px' }}
                    >
                      {category.replace(/_/g, ' ')}
                    </span>
                    <div className="flex flex-wrap gap-x-[16px] gap-y-[4px]">
                      {skills.map((skill, idx) => (
                        <span key={idx} style={{ fontSize: '15px', color: 'var(--color-pure-black)' }}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                }
              />
            ))}
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="snap-start w-full bg-[var(--color-paper)] relative" style={{ minHeight: '100vh' }}>
      <div className="w-full px-[26px]" style={{ paddingTop: '100px' }}>

        {/* Header */}
        <div style={{ marginBottom: '40px' }}>
          <span
            className="uppercase block"
            style={{ color: 'var(--color-concrete)', fontSize: '11px', letterSpacing: '0.08em', marginBottom: '12px' }}
          >
            03 About
          </span>
          <h2
            className="text-[var(--color-pure-black)] font-[400]"
            style={{ fontSize: 'clamp(28px, 4vw, 52px)', lineHeight: 1.2, letterSpacing: '-0.03em', textAlign: 'left' }}
          >
            Hakkımda
          </h2>
        </div>

        {/* Tab Strip */}
        <div
          className="flex gap-0"
          style={{ borderBottom: '1px solid var(--color-pure-black)', marginBottom: 0 }}
        >
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setCurrentSection(section.id)}
              className="uppercase relative"
              style={{
                fontSize: '11px',
                letterSpacing: '0.08em',
                fontWeight: 400,
                paddingBottom: '12px',
                paddingRight: '24px',
                color: currentSection === section.id ? 'var(--color-pure-black)' : 'var(--color-concrete)',
                transition: 'color 0.2s',
              }}
            >
              {section.title}
              {currentSection === section.id && (
                <span
                  style={{
                    position: 'absolute',
                    bottom: '-1px',
                    left: 0,
                    width: '100%',
                    height: '1px',
                    background: 'var(--color-pure-black)',
                  }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Content */}
        <div style={{ paddingBottom: '80px' }}>
          <AnimatePresence mode="wait">{renderContent()}</AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default About;