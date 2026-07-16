import React from 'react';
import projectsData from '../data/projects.json';
import { useLang } from '../context/LanguageContext';
import { t } from '../translations';

/* ── Pick the right language from a bilingual field ── */
const L = (field, lang) => (typeof field === 'object' ? field[lang] ?? field.tr : field);

const getLinkHref = (linkler) =>
  linkler?.appstore || linkler?.playstore || linkler?.website || linkler?.web || linkler?.github || null;

/* ── Project Detail Popup (mobile) ── */
const ProjectPopup = ({ proje, index, tx, lang, onClose }) => {
  const href = getLinkHref(proje.linkler);

  // Close on backdrop click
  const handleBackdrop = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  // Prevent body scroll while popup is open
  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <div
      onClick={handleBackdrop}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        backgroundColor: 'rgba(0,0,0,0.45)',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          width: '100%',
          maxHeight: '85vh',
          backgroundColor: 'var(--color-paper)',
          overflowY: 'auto',
          padding: '28px 26px 40px',
          boxSizing: 'border-box',
          borderTop: '2px solid var(--color-pure-black)',
        }}
      >
        {/* Handle + close */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <span style={{ color: 'var(--color-concrete)', fontSize: '11px', letterSpacing: '0.08em' }}>
            {String(index + 1).padStart(2, '0')}
          </span>
          <button
            onClick={onClose}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontSize: '13px', letterSpacing: '0.08em', textTransform: 'uppercase',
              color: 'var(--color-concrete)', padding: 0,
            }}
          >
            Close ✕
          </button>
        </div>

        {/* Image */}
        {proje.resim && (
          <div style={{ width: '100%', height: '140px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
            <img
              src={proje.resim}
              alt={L(proje.ad, lang)}
              style={{ maxWidth: '100%', maxHeight: '140px', objectFit: 'contain', display: 'block' }}
            />
          </div>
        )}

        {/* Tech tag */}
        <span
          className="uppercase block"
          style={{ color: 'var(--color-concrete)', fontSize: '11px', letterSpacing: '0.08em', marginBottom: '10px' }}
        >
          {proje.teknolojiler[0]}
        </span>

        {/* Name */}
        <h3
          className="font-[400] text-[var(--color-pure-black)]"
          style={{ fontSize: '22px', lineHeight: 1.25, letterSpacing: '-0.03em', marginBottom: '16px' }}
        >
          {L(proje.ad, lang)}
        </h3>

        {/* Description */}
        <p style={{ color: 'var(--color-concrete)', fontSize: '14px', lineHeight: 1.65, letterSpacing: '-0.01em', marginBottom: '28px' }}>
          {L(proje.aciklama, lang)}
        </p>

        {/* Links */}
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          {proje.linkler?.appstore && (
            <a href={proje.linkler.appstore} target="_blank" rel="noopener noreferrer"
              style={{ color: 'var(--color-pure-black)', fontSize: '13px', paddingBottom: '3px', borderBottom: '1px solid var(--color-concrete)', textDecoration: 'none' }}>
              App Store ↗
            </a>
          )}
          {proje.linkler?.playstore && (
            <a href={proje.linkler.playstore} target="_blank" rel="noopener noreferrer"
              style={{ color: 'var(--color-pure-black)', fontSize: '13px', paddingBottom: '3px', borderBottom: '1px solid var(--color-concrete)', textDecoration: 'none' }}>
              Play Store ↗
            </a>
          )}
          {(proje.linkler?.website || proje.linkler?.web) && (
            <a href={proje.linkler.website || proje.linkler.web} target="_blank" rel="noopener noreferrer"
              style={{ color: 'var(--color-pure-black)', fontSize: '13px', paddingBottom: '3px', borderBottom: '1px solid var(--color-concrete)', textDecoration: 'none' }}>
              {tx.projects.viewProject} ↗
            </a>
          )}
          {!proje.linkler?.appstore && !proje.linkler?.playstore && !proje.linkler?.website && !proje.linkler?.web && proje.linkler?.github && (
            <a href={proje.linkler.github} target="_blank" rel="noopener noreferrer"
              style={{ color: 'var(--color-pure-black)', fontSize: '13px', paddingBottom: '3px', borderBottom: '1px solid var(--color-concrete)', textDecoration: 'none' }}>
              GitHub ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

/* ── Desktop card (carousel) ── */
const ProjectCard = ({ proje, index, tx, lang }) => {
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
        <span style={{ color: 'var(--color-concrete)', fontSize: '11px', letterSpacing: '0.08em', display: 'block', marginBottom: '20px' }}>
          {String(index + 1).padStart(2, '0')}
        </span>

        {/* Image */}
        <div
          style={{ width: '100%', height: '110px', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          onMouseEnter={() => setImgHovered(true)}
          onMouseLeave={() => setImgHovered(false)}
        >
          {proje.resim ? (
            <img
              src={proje.resim}
              alt={L(proje.ad, lang)}
              style={{
                maxWidth: '100%', maxHeight: '110px', objectFit: 'contain', display: 'block',
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
        <span className="uppercase block" style={{ color: 'var(--color-concrete)', fontSize: '11px', letterSpacing: '0.08em', marginBottom: '12px' }}>
          {proje.teknolojiler[0]}
        </span>

        {/* Name */}
        <h3 className="font-[400] text-[var(--color-pure-black)]"
          style={{ fontSize: 'clamp(15px, 1.6vw, 21px)', lineHeight: 1.3, letterSpacing: '-0.02em', marginBottom: '14px' }}>
          {L(proje.ad, lang)}
        </h3>

        {/* Description */}
        <p style={{ color: 'var(--color-concrete)', fontSize: '13px', lineHeight: 1.6, letterSpacing: '-0.01em' }}>
          {L(proje.aciklama, lang)}
        </p>
      </div>

      {/* Bottom: links */}
      <div style={{ marginTop: '26px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        {proje.linkler?.appstore && (
          <a href={proje.linkler.appstore} target="_blank" rel="noopener noreferrer"
            className="hover:opacity-50 transition-opacity inline-block"
            style={{ color: 'var(--color-pure-black)', fontSize: '13px', paddingBottom: '3px', borderBottom: '1px solid var(--color-concrete)', textDecoration: 'none' }}>
            App Store ↗
          </a>
        )}
        {proje.linkler?.playstore && (
          <a href={proje.linkler.playstore} target="_blank" rel="noopener noreferrer"
            className="hover:opacity-50 transition-opacity inline-block"
            style={{ color: 'var(--color-pure-black)', fontSize: '13px', paddingBottom: '3px', borderBottom: '1px solid var(--color-concrete)', textDecoration: 'none' }}>
            Play Store ↗
          </a>
        )}
        {(proje.linkler?.website || proje.linkler?.web) && (
          <a href={proje.linkler.website || proje.linkler.web} target="_blank" rel="noopener noreferrer"
            className="hover:opacity-50 transition-opacity inline-block"
            style={{ color: 'var(--color-pure-black)', fontSize: '13px', paddingBottom: '3px', borderBottom: '1px solid var(--color-concrete)', textDecoration: 'none' }}>
            {tx.projects.viewProject} ↗
          </a>
        )}
        {!proje.linkler?.appstore && !proje.linkler?.playstore && !proje.linkler?.website && !proje.linkler?.web && proje.linkler?.github && (
          <a href={proje.linkler.github} target="_blank" rel="noopener noreferrer"
            className="hover:opacity-50 transition-opacity inline-block"
            style={{ color: 'var(--color-pure-black)', fontSize: '13px', paddingBottom: '3px', borderBottom: '1px solid var(--color-concrete)', textDecoration: 'none' }}>
            GitHub ↗
          </a>
        )}
      </div>
    </div>
  );
};

/* ── Mobile list row ── */
const MobileProjectRow = ({ proje, index, tx, lang, onOpen }) => {
  const [pressed, setPressed] = React.useState(false);

  return (
    <button
      onClick={() => onOpen(index)}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onTouchStart={() => setPressed(true)}
      onTouchEnd={() => setPressed(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        padding: '18px 26px',
        background: 'none',
        border: 'none',
        borderBottom: '1px solid var(--color-pure-black)',
        cursor: 'pointer',
        textAlign: 'left',
        opacity: pressed ? 0.45 : 1,
        transition: 'opacity 0.15s',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px' }}>
        <span style={{ color: 'var(--color-concrete)', fontSize: '11px', letterSpacing: '0.08em', flexShrink: 0 }}>
          {String(index + 1).padStart(2, '0')}
        </span>
        <span style={{ fontSize: '16px', letterSpacing: '-0.02em', color: 'var(--color-pure-black)', fontWeight: 400 }}>
          {L(proje.ad, lang)}
        </span>
      </div>
      <span style={{ color: 'var(--color-concrete)', fontSize: '18px', flexShrink: 0, marginLeft: '12px' }}>↗</span>
    </button>
  );
};

const Projects = () => {
  const { lang } = useLang();
  const tx = t[lang];
  const [paused, setPaused] = React.useState(false);
  const [popupIndex, setPopupIndex] = React.useState(null);

  const allProjects = projectsData.projeler || [];
  // Duplicate for seamless infinite loop (translateX -50% = one full set)
  const loopProjects = [...allProjects, ...allProjects];

  return (
    <>
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

        {/* ── Mobile: vertical list ── */}
        <div
          className="block md:hidden"
          style={{ borderTop: '1px solid var(--color-pure-black)' }}
        >
          {allProjects.map((proje, index) => (
            <MobileProjectRow
              key={index}
              proje={proje}
              index={index}
              tx={tx}
              lang={lang}
              onOpen={setPopupIndex}
            />
          ))}
        </div>

        {/* ── Desktop: carousel ── */}
        <div
          className="hidden md:block"
          style={{
            borderTop: '1px solid var(--color-pure-black)',
            borderLeft: '1px solid var(--color-pure-black)',
            overflow: 'hidden',
            paddingBottom: '80px',
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
                lang={lang}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Popup (mobile) ── */}
      {popupIndex !== null && (
        <ProjectPopup
          proje={allProjects[popupIndex]}
          index={popupIndex}
          tx={tx}
          lang={lang}
          onClose={() => setPopupIndex(null)}
        />
      )}
    </>
  );
};

export default Projects;