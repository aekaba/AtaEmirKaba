import React from 'react';
import projectsData from '../data/projects.json';
import { useLang } from '../context/LanguageContext';
import { t } from '../translations';

const getLinkHref = (linkler) =>
  linkler?.appstore || linkler?.playstore || linkler?.website || linkler?.web || linkler?.github || null;

/* ── Single project card ── */
const ProjectCard = ({ proje, index, tx }) => {
  const href = getLinkHref(proje.linkler);
  const [imgHovered, setImgHovered] = React.useState(false);

  return (
    <div
      style={{
        flex: '0 0 calc(33.333vw - 18px)',
        borderRight: '1px solid var(--color-pure-black)',
        borderBottom: '1px solid var(--color-pure-black)',
        padding: '26px',
        minHeight: '420px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxSizing: 'border-box',
      }}
    >
      {/* Top */}
      <div>
        {/* Index */}
        <span
          style={{ color: 'var(--color-concrete)', fontSize: '11px', letterSpacing: '0.08em', display: 'block', marginBottom: '20px' }}
        >
          {String(index + 1).padStart(2, '0')}
        </span>

        {/* Image */}
        <div
          style={{
            width: '100%',
            height: '110px',
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onMouseEnter={() => setImgHovered(true)}
          onMouseLeave={() => setImgHovered(false)}
        >
          {proje.resim ? (
            <img
              src={proje.resim}
              alt={proje.ad}
              style={{
                maxWidth: '100%',
                maxHeight: '110px',
                objectFit: 'contain',
                display: 'block',
                filter: imgHovered ? 'grayscale(0%)' : 'grayscale(100%)',
                opacity: imgHovered ? 1 : 0.7,
                transition: 'filter 0.4s ease, opacity 0.4s ease',
              }}
            />
          ) : (
            <div style={{ width: '100%', height: '110px' }} />
          )}
        </div>

        {/* Tech tag */}
        <span
          className="uppercase block"
          style={{ color: 'var(--color-concrete)', fontSize: '11px', letterSpacing: '0.08em', marginBottom: '12px' }}
        >
          {proje.teknolojiler[0]}
        </span>

        {/* Name */}
        <h3
          className="font-[400] text-[var(--color-pure-black)]"
          style={{ fontSize: 'clamp(15px, 1.6vw, 21px)', lineHeight: 1.3, letterSpacing: '-0.02em', marginBottom: '14px' }}
        >
          {proje.ad}
        </h3>

        {/* Description */}
        <p
          style={{ color: 'var(--color-concrete)', fontSize: '13px', lineHeight: 1.6, letterSpacing: '-0.01em' }}
        >
          {proje.aciklama}
        </p>
      </div>

      {/* Bottom: links */}
      <div style={{ marginTop: '26px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        {proje.linkler?.appstore && (
          <a href={proje.linkler.appstore} target="_blank" rel="noopener noreferrer"
            className="hover:opacity-50 transition-opacity inline-block"
            style={{ color: 'var(--color-pure-black)', fontSize: '13px', paddingBottom: '3px', borderBottom: '1px solid var(--color-concrete)' }}>
            App Store ↗
          </a>
        )}
        {proje.linkler?.playstore && (
          <a href={proje.linkler.playstore} target="_blank" rel="noopener noreferrer"
            className="hover:opacity-50 transition-opacity inline-block"
            style={{ color: 'var(--color-pure-black)', fontSize: '13px', paddingBottom: '3px', borderBottom: '1px solid var(--color-concrete)' }}>
            Play Store ↗
          </a>
        )}
        {!proje.linkler?.appstore && !proje.linkler?.playstore && href && (
          <a href={href} target="_blank" rel="noopener noreferrer"
            className="hover:opacity-50 transition-opacity inline-block"
            style={{ color: 'var(--color-pure-black)', fontSize: '13px', paddingBottom: '3px', borderBottom: '1px solid var(--color-concrete)' }}>
            {proje.linkler?.web || proje.linkler?.website ? tx.projects.viewProject : 'GitHub'} ↗
          </a>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  const { lang } = useLang();
  const tx = t[lang];
  const [paused, setPaused] = React.useState(false);

  const allProjects = projectsData.projeler || [];

  // Duplicate for seamless infinite loop (translateX -50% = one full set)
  const loopProjects = [...allProjects, ...allProjects];

  return (
    <section
      className="snap-start w-full bg-[var(--color-paper)] relative overflow-hidden"
      style={{ minHeight: '100vh', textAlign: 'left' }}
    >
      {/* Section Header */}
      <div className="w-full px-[26px]" style={{ paddingTop: '100px', paddingBottom: '40px' }}>
        <span
          className="uppercase block"
          style={{ color: 'var(--color-concrete)', fontSize: '11px', letterSpacing: '0.08em', marginBottom: '12px' }}
        >
          {tx.projects.label}
        </span>
        <h2
          className="font-[400] text-[var(--color-pure-black)]"
          style={{ fontSize: 'clamp(28px, 4vw, 52px)', lineHeight: 1.2, letterSpacing: '-0.03em' }}
        >
          {tx.projects.heading}
        </h2>
      </div>

      {/* ── Carousel ── */}
      <div
        style={{
          borderTop: '1px solid var(--color-pure-black)',
          borderLeft: '1px solid var(--color-pure-black)',
          overflow: 'hidden',
          paddingBottom: '80px',
          cursor: paused ? 'default' : 'default',
        }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className="carousel-track"
          style={{ animationPlayState: paused ? 'paused' : 'running' }}
        >
          {loopProjects.map((proje, index) => (
            <ProjectCard
              key={index}
              proje={proje}
              index={index % allProjects.length}
              tx={tx}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;