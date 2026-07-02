import React, { useState, useEffect, useRef } from 'react';

const Navbar = ({ onNavClick, hidden }) => {
  const [time, setTime] = useState(new Date());
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

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

  return (
    <>
      <nav
        className="fixed top-0 w-full z-50 pointer-events-none mix-blend-difference"
        style={{
          padding: '22px 26px',
          transform: hidden && !menuOpen ? 'translateY(-100%)' : 'translateY(0)',
          transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        <div className="flex justify-between items-center text-[var(--color-paper)]">

          {/* Dual-City Clock */}
          <div
            className="flex gap-[40px] font-[400] uppercase pointer-events-auto"
            style={{
              fontFamily: 'var(--font-twk-everett-mono)',
              fontSize: '13px',        /* ↑ 11px → 13px */
              letterSpacing: '0.06em',
            }}
          >
            <span>{formatTime(time, 'Europe/Istanbul')} IST</span>
            <span>{formatTime(time, 'America/Los_Angeles')} LA</span>
          </div>

          {/* Menu Trigger */}
          <button
            className="font-[400] pointer-events-auto hover:opacity-50 transition-opacity"
            style={{ fontSize: '17px', letterSpacing: '0.01em' }}  /* ↑ 15px → 17px */
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </nav>

      {/* Full-screen overlay menu */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="fixed inset-0 z-40 bg-[var(--color-onyx)] flex flex-col justify-center px-[26px]"
        >
          <nav className="flex flex-col gap-[16px]">
            {navItems.map((item, i) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-left text-[var(--color-paper)] font-[400] uppercase hover:text-[var(--color-concrete)] transition-colors"
                style={{
                  fontSize: 'clamp(40px, 9vw, 90px)',
                  letterSpacing: '-0.04em',
                  lineHeight: 1.0,
                  animationDelay: `${i * 60}ms`,
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="absolute bottom-[26px] left-[26px] right-[26px] flex justify-between items-end">
            <span style={{ color: 'var(--color-concrete)', fontSize: '11px', letterSpacing: '0.08em', fontFamily: 'var(--font-twk-everett-mono)' }}>
              NCF STUDIO
            </span>
            <span style={{ color: 'var(--color-concrete)', fontSize: '11px', letterSpacing: '0.08em', fontFamily: 'var(--font-twk-everett-mono)' }}>
              © 2026
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;