import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Helmet } from 'react-helmet';

const Home = () => {
  const [mounted, setMounted] = useState(false);
  const [fontSize, setFontSize] = useState(120);
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  /* Dynamically fit "ATA EMIR KABA" to exactly fill the container width */
  const fitText = useCallback(() => {
    const container = containerRef.current;
    const text = textRef.current;
    if (!container || !text) return;
    const containerWidth = container.offsetWidth;
    let lo = 10, hi = 700;
    while (hi - lo > 0.5) {
      const mid = (lo + hi) / 2;
      text.style.fontSize = mid + 'px';
      if (text.scrollWidth <= containerWidth) lo = mid;
      else hi = mid;
    }
    setFontSize(Math.floor(lo));
  }, []);

  useEffect(() => {
    fitText();
    const ro = new ResizeObserver(fitText);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, [fitText]);

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Ata Emir Kaba',
    jobTitle: 'Yazılım Mühendisi',
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      {/* ── Hero Section ── */}
      <section
        className="snap-start h-screen w-full bg-[var(--color-paper)] relative overflow-hidden flex flex-col"
        style={{ justifyContent: 'space-between' }}
      >
        {/* Description block — upper right, fades in */}
        <div
          className="w-full flex justify-end px-[26px]"
          style={{ paddingTop: '90px' }}
        >
          <div
            className="md:w-5/12"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(14px)',
              transition: 'opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s',
            }}
          >
            <p
              className="text-[var(--color-concrete)]"
              style={{ fontSize: '18px', lineHeight: 1.5, letterSpacing: '-0.02em' }}
            >
              <strong className="text-[var(--color-pure-black)] font-[400]">
                Ata Emir Kaba
              </strong>{' '}
              is a Software Engineer &amp; Mobile App Developer specializing in
              Flutter, Swift, React and HarmonyOS Next.
            </p>
          </div>
        </div>

        {/* Massive full-width fitted wordmark — slides up on load */}
        <div
          ref={containerRef}
          className="w-full overflow-hidden leading-none"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(40px)',
            transition:
              'opacity 0.85s ease 0.05s, transform 0.85s cubic-bezier(0.16,1,0.3,1) 0.05s',
          }}
        >
          <h1
            ref={textRef}
            className="text-[var(--color-pure-black)] uppercase whitespace-nowrap select-none block"
            style={{
              fontSize: `${fontSize}px`,
              lineHeight: 0.82,
              letterSpacing: '-0.04em',
            }}
          >
            ATA EMIR KABA
          </h1>
        </div>
      </section>

      {/* ── Dark Intro Band ── */}
      <section className="snap-start h-screen w-full bg-[var(--color-onyx)] flex items-center relative">
        <div className="w-full px-[26px]">
          <h2
            className="text-[var(--color-paper)] font-[400]"
            style={{
              fontSize: 'clamp(22px, 3.2vw, 48px)',
              lineHeight: 1.35,
              letterSpacing: '-0.02em',
              maxWidth: '820px',
            }}
          >
            Beykent Üniversitesi Yazılım Mühendisliği bölümünden 3.11 GPA ve
            Onur Belgesi ile mezun oldum.
          </h2>
          <div className="mt-[53px]">
            <span
              className="text-[var(--color-concrete)] uppercase"
              style={{ fontSize: '11px', letterSpacing: '0.08em' }}
            >
              01 Background
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default React.memo(Home);