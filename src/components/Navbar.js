import React, { useState, useEffect } from 'react';
import { useLang } from '../context/LanguageContext';
import { t } from '../translations';

const Navbar = ({ onNavClick, hidden, isDark }) => {
  const [time, setTime] = useState(new Date());
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, toggleLang } = useLang();
  const tx = t[lang];

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date, timeZone) =>
    date.toLocaleTimeString('en-US', {
      timeZone,
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });

  const navItems = [
    { id: 'home', label: tx.nav.home },
    { id: 'about', label: tx.nav.about },
    { id: 'projects', label: tx.nav.projects },
    { id: 'blog', label: tx.nav.blog },
    { id: 'contact', label: tx.nav.contact },
  ];

  const handleNavClick = (id) => {
    setMenuOpen(false);
    if (onNavClick) onNavClick(id);
  };

  // When menu is open → paper; when dark section visible → paper; else black
  const textColor = menuOpen
    ? 'var(--color-paper)'
    : isDark
    ? 'var(--color-paper)'
    : 'var(--color-pure-black)';

  return (
    <>
      {/* ── Navbar strip ── */}
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          padding: '22px 26px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          transform: hidden && !menuOpen ? 'translateY(-100%)' : 'translateY(0)',
          transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1)',
          pointerEvents: 'none',
        }}
      >
        {/* Dual-City Clock */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2px',
            fontWeight: 400,
            textTransform: 'uppercase',
            fontSize: 'clamp(10px, 2.2vw, 14px)',
            letterSpacing: '0.04em',
            color: textColor,
            transition: 'color 0.25s',
            pointerEvents: 'auto',
            lineHeight: 1.3,
          }}
        >
          <span>{formatTime(time, 'Europe/Istanbul')} IST</span>
          <span>{formatTime(time, 'America/Los_Angeles')} LA</span>
        </div>

        {/* Right side: Lang toggle + Menu */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(12px, 3vw, 24px)', pointerEvents: 'auto' }}>
          {/* Language Toggle */}
          <button
            onClick={toggleLang}
            aria-label="Toggle language"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              fontSize: 'clamp(11px, 2.5vw, 13px)',
              fontWeight: 400,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: textColor,
              transition: 'color 0.25s, opacity 0.2s',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.5'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            <span style={{ opacity: lang === 'en' ? 1 : 0.4 }}>EN</span>
            <span style={{ opacity: 0.3 }}>/</span>
            <span style={{ opacity: lang === 'tr' ? 1 : 0.4 }}>TR</span>
          </button>

          {/* Menu / Close button */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              fontSize: 'clamp(13px, 3vw, 20px)',
              fontWeight: 400,
              letterSpacing: '0.01em',
              color: textColor,
              transition: 'color 0.25s, opacity 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.5'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </nav>

      {/* ── Full-screen overlay menu ── */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 40,
          backgroundColor: 'var(--color-onyx)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '0 26px',
          opacity: menuOpen ? 1 : 0,
          visibility: menuOpen ? 'visible' : 'hidden',
          transition: 'opacity 0.3s ease, visibility 0.3s ease',
        }}
      >
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              style={{
                textAlign: 'left',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--color-paper)',
                fontWeight: 400,
                textTransform: 'uppercase',
                fontSize: 'clamp(40px, 9vw, 90px)',
                letterSpacing: '-0.04em',
                lineHeight: 1.0,
                padding: 0,
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.4'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Footer strip inside menu */}
        <div
          style={{
            position: 'absolute',
            bottom: '26px',
            left: '26px',
            right: '26px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}
        >
          <span style={{ color: 'var(--color-concrete)', fontSize: '11px', letterSpacing: '0.08em' }}>
            ATA EMIR KABA
          </span>
          <span style={{ color: 'var(--color-concrete)', fontSize: '11px', letterSpacing: '0.08em' }}>
            © 2026
          </span>
        </div>
      </div>
    </>
  );
};

export default Navbar;