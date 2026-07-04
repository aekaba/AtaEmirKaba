import React from 'react';
import projectsData from '../data/projects.json';
import { useLang } from '../context/LanguageContext';
import { t } from '../translations';

const getLinkHref = (linkler) =>
  linkler?.appstore || linkler?.playstore || linkler?.web || linkler?.github || null;

const Projects = () => {
  const { lang } = useLang();
  const tx = t[lang];

  /* ── Selected projects ── */
  const selectedProjects = [
    {
      ...projectsData.profesyonel[0], // The Food Runner Drivers
      techLabel: tx.projects.techLabels.flutter,
      image: '/images/thefoodrunnerdrivers.png',
      nameOverride: tx.projects.items.tfr.name,
      descOverride: tx.projects.items.tfr.description,
    },
    {
      ...projectsData.akademik[0], // Yapay Zeka Destekli Müşteri Kaybı Analizi
      techLabel: tx.projects.techLabels.ai,
      image: '/images/tubitak.png',
      nameOverride: tx.projects.items.ai.name,
      descOverride: tx.projects.items.ai.description,
    },
    {
      ...projectsData.profesyonel[1], // Umut Defter
      techLabel: tx.projects.techLabels.flutter,
      image: '/images/umutdefter.jpg',
      nameOverride: tx.projects.items.umut.name,
      descOverride: tx.projects.items.umut.description,
    },
  ];

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

            return (
              <div
                key={index}
                className="flex flex-col justify-between group"
                style={{
                  borderRight: '1px solid var(--color-pure-black)',
                  borderBottom: '1px solid var(--color-pure-black)',
                  padding: '26px',
                  minHeight: '420px',
                }}
              >
                {/* Top */}
                <div>
                  {/* Index number */}
                  <span
                    style={{ color: 'var(--color-concrete)', fontSize: '11px', letterSpacing: '0.08em', display: 'block', marginBottom: '20px' }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  {/* Project image — fixed height, object-contain */}
                  <div
                    style={{
                      width: '100%',
                      height: '120px',
                      marginBottom: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      overflow: 'hidden',
                    }}
                  >
                    <img
                      src={proje.image}
                      alt={proje.nameOverride || proje.ad}
                      style={{
                        maxWidth: '100%',
                        maxHeight: '120px',
                        objectFit: 'contain',
                        display: 'block',
                        filter: 'grayscale(100%)',
                        opacity: 0.75,
                      }}
                    />
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
                    {proje.nameOverride || proje.ad}
                  </h3>

                  {/* Description */}
                  <p
                    style={{ color: 'var(--color-concrete)', fontSize: '13px', lineHeight: 1.6, letterSpacing: '-0.01em' }}
                  >
                    {proje.descOverride || proje.aciklama}
                  </p>
                </div>

                {/* Bottom: links */}
                <div style={{ marginTop: '26px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                  {proje.linkler?.appstore && (
                    <a
                      href={proje.linkler.appstore}
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
                      App Store ↗
                    </a>
                  )}
                  {proje.linkler?.playstore && (
                    <a
                      href={proje.linkler.playstore}
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
                      Play Store ↗
                    </a>
                  )}
                  {!proje.linkler?.appstore && !proje.linkler?.playstore && href && (
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
                      {proje.linkler?.web ? tx.projects.viewProject : 'GitHub'} ↗
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;