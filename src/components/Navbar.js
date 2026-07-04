import React, { useState, useEffect, useRef } from 'react';

const Navbar = ({ onNavClick, hidden }) => {
  const [time, setTime] = useState(new Date());
  const [menuOpen, setMenuOpen] = useState(false);

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
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id) => {
    setMenuOpen(false);
    if (onNavClick) onNavClick(id);
  };

  const textColor = menuOpen ? '#f5f3ee' : 'var(--color-pure-black)';

  return (
    <>
      {/* ── Navbar strip ── always z-50, text color flips with menu state */}
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
            gap: '40px',
            fontWeight: 400,
            textTransform: 'uppercase',
            fontSize: '20px',
            letterSpacing: '0.06em',
            color: textColor,
            transition: 'color 0.25s',
            pointerEvents: 'auto',
          }}
        >
          <span>{formatTime(time, 'Europe/Istanbul')} IST</span>
          <span>{formatTime(time, 'America/Los_Angeles')} LA</span>
        </div>

        {/* Menu / Close button */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            fontSize: '20px',
            fontWeight: 400,
            letterSpacing: '0.01em',
            color: textColor,
            transition: 'color 0.25s, opacity 0.2s',
            pointerEvents: 'auto',
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = '0.5'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>
      </nav>

      {/* ── Full-screen overlay menu (z-40, below nav) ── */}
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
          {navItems.map((item, i) => (
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
            NCF STUDIO
          </span>
          <span style={{ color: 'var(--color-concrete)', fontSize: '11px', letterSpacing: '0.08em' }}>
            © 2026 NFC Studio
          </span>
        </div>
      </div>
    </>
  );
};

export default Navbar;