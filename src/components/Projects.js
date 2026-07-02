import React from 'react';
import projectsData from '../data/projects.json';

/* ── Monochrome SVG logos inline ── */
const FlutterLogo = () => (
  <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 28L28 13H48L33 28L48 43H28L13 28Z" fill="currentColor" opacity="0.4"/>
    <path d="M13 28L28 43H48L33 28H13Z" fill="currentColor"/>
    <path d="M0 19L8 11L28 31L20 39L0 19Z" fill="currentColor" opacity="0.6"/>
  </svg>
);

const AiLogo = () => (
  <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="10" stroke="currentColor" strokeWidth="2.5" fill="none"/>
    <circle cx="24" cy="24" r="3" fill="currentColor"/>
    <line x1="24" y1="4" x2="24" y2="14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="24" y1="34" x2="24" y2="44" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="4" y1="24" x2="14" y2="24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="34" y1="24" x2="44" y2="24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="10.1" y1="10.1" x2="17.2" y2="17.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="30.8" y1="30.8" x2="37.9" y2="37.9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="37.9" y1="10.1" x2="30.8" y2="17.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="17.2" y1="30.8" x2="10.1" y2="37.9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

/* ── Selected projects (order: TFR Drivers, Yapay Zeka, Umut Defter) ── */
const selectedProjects = [
  {
    ...projectsData.profesyonel[0], // The Food Runner Drivers
    techLabel: 'Flutter',
    logo: <FlutterLogo />,
  },
  {
    ...projectsData.akademik[0], // Yapay Zeka Destekli Müşteri Kaybı Analizi
    techLabel: 'Yapay Zeka',
    logo: <AiLogo />,
  },
  {
    ...projectsData.profesyonel[1], // Umut Defter
    techLabel: 'Flutter',
    logo: <FlutterLogo />,
  },
];

const getLinkHref = (linkler) =>
  linkler?.appstore || linkler?.playstore || linkler?.web || linkler?.github || null;

const getLinkLabel = (linkler) => {
  if (linkler?.appstore) return 'App Store';
  if (linkler?.playstore) return 'Play Store';
  if (linkler?.web) return 'View Project';
  if (linkler?.github) return 'GitHub';
  return 'View';
};

const Projects = () => (
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
        02 Selected Work
      </span>
      <h2
        className="font-[400] text-[var(--color-pure-black)]"
        style={{ fontSize: 'clamp(28px, 4vw, 52px)', lineHeight: 1.2, letterSpacing: '-0.03em' }}
      >
        Projeler
      </h2>
    </div>

    {/* Projects Grid */}
    <div
      className="w-full px-[26px] pb-[80px]"
      style={{ borderTop: '1px solid var(--color-pure-black)' }}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-3"
        style={{ borderLeft: '1px solid var(--color-pure-black)' }}
      >
        {selectedProjects.map((proje, index) => {
          const href = getLinkHref(proje.linkler);
          const label = getLinkLabel(proje.linkler);

          return (
            <div
              key={index}
              className="flex flex-col justify-between group"
              style={{
                borderRight: '1px solid var(--color-pure-black)',
                borderBottom: '1px solid var(--color-pure-black)',
                padding: '26px',
                minHeight: '400px',
              }}
            >
              {/* Top */}
              <div>
                {/* Number + logo row */}
                <div className="flex items-start justify-between" style={{ marginBottom: '26px' }}>
                  <span
                    style={{ color: 'var(--color-concrete)', fontSize: '11px', letterSpacing: '0.08em' }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {/* Monochrome logo */}
                  <span style={{ color: 'var(--color-concrete)' }}>
                    {proje.logo}
                  </span>
                </div>

                {/* Tech tag */}
                <span
                  className="uppercase block"
                  style={{ color: 'var(--color-concrete)', fontSize: '11px', letterSpacing: '0.08em', marginBottom: '12px' }}
                >
                  {proje.techLabel}
                </span>

                {/* Project name */}
                <h3
                  className="font-[400] text-[var(--color-pure-black)]"
                  style={{ fontSize: 'clamp(17px, 2vw, 22px)', lineHeight: 1.3, letterSpacing: '-0.02em', marginBottom: '14px' }}
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

              {/* Bottom: link */}
              <div style={{ marginTop: '26px' }}>
                {href ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-50 transition-opacity inline-block"
                    style={{
                      color: 'var(--color-pure-black)',
                      fontSize: '13px',
                      paddingBottom: '3px',
                      borderBottom: '1px solid var(--color-concrete)',
                    }}
                  >
                    {label} ↗
                  </a>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Projects;