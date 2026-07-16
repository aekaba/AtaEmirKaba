import React from 'react';
import { Link } from 'react-router-dom';
import contactData from '../data/contact.json';
import { useLang } from '../context/LanguageContext';
import { t } from '../translations';

/* ── Social icon SVGs (inline, no external deps) ── */
const icons = {
  GitHub: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  ),
  LinkedIn: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  X: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.743l7.73-8.835L1.254 2.25H8.08l4.259 5.629L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  ),
  Instagram: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  ),
};

const SocialLink = ({ platform }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <a
      href={platform.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={platform.platform}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        color: hovered ? 'var(--color-pure-black)' : 'var(--color-concrete)',
        textDecoration: 'none',
        fontSize: '13px',
        letterSpacing: '0.04em',
        transition: 'color 0.2s ease',
      }}
    >
      {icons[platform.platform] || null}
      <span>{platform.platform}</span>
    </a>
  );
};

const Contact = () => {
  const { lang } = useLang();
  const tx = t[lang];
  const [emailHovered, setEmailHovered] = React.useState(false);

  return (
    <section
      className="snap-start w-full bg-[var(--color-paper)] flex flex-col"
      style={{ minHeight: '100vh' }}
    >
      {/* ── Section label ── */}
      <div style={{ padding: 'clamp(70px, 15vw, 100px) 26px 0' }}>
        <span
          className="uppercase block"
          style={{
            color: 'var(--color-concrete)',
            fontSize: '11px',
            letterSpacing: '0.08em',
          }}
        >
          {tx.contact.label}
        </span>
      </div>

      {/* ── LET'S TALK — grows to fill space ── */}
      <div className="flex-1 flex flex-col justify-end">
        <div
          className="w-full overflow-hidden leading-none"
          style={{ borderTop: '1px solid var(--color-pure-black)' }}
        >
          <h1
            className="text-[var(--color-pure-black)] uppercase select-none"
            style={{
              fontSize: 'clamp(14px, 14vw, 260px)',
              lineHeight: 0.9,
              letterSpacing: '-0.04em',
              marginLeft: '-0.02em',
              wordBreak: 'break-word',
              whiteSpace: 'normal',
            }}
          >
            LET'S TALK
          </h1>
        </div>
      </div>

      {/* ── Email CTA ── */}
      <div
        style={{
          padding: '40px 26px 0',
          borderTop: '1px solid var(--color-pure-black)',
        }}
      >
        <a
          href={`mailto:${contactData.email}`}
          onMouseEnter={() => setEmailHovered(true)}
          onMouseLeave={() => setEmailHovered(false)}
          style={{
            display: 'inline-block',
            color: emailHovered ? 'var(--color-concrete)' : 'var(--color-pure-black)',
            textDecoration: 'none',
            fontSize: 'clamp(16px, 2.2vw, 32px)',
            letterSpacing: '-0.03em',
            fontWeight: 400,
            lineHeight: 1,
            borderBottom: `1px solid ${emailHovered ? 'var(--color-concrete)' : 'var(--color-pure-black)'}`,
            paddingBottom: '4px',
            transition: 'color 0.25s ease, border-color 0.25s ease',
          }}
        >
          {contactData.email}
        </a>
      </div>

      {/* ── Social media links ── */}
      <div
        style={{
          padding: '28px 26px 0',
          display: 'flex',
          gap: '28px',
          flexWrap: 'wrap',
        }}
      >
        {contactData.sosyal_medya.map((platform) => (
          <SocialLink key={platform.platform} platform={platform} />
        ))}
      </div>

      {/* ── Footer strip ── */}
      <footer
        style={{
          borderTop: '1px solid #d0d0d0',
          padding: '20px 26px 28px',
          marginTop: '40px',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: '16px',
          }}
        >
          {/* NFC Studio wordmark */}
          <span
            className="font-[400] uppercase text-[var(--color-pure-black)]"
            style={{ fontSize: 'clamp(13px, 1.5vw, 18px)', letterSpacing: '-0.04em', lineHeight: 1, flexShrink: 0 }}
          >
            {tx.contact.studio}
          </span>

          {/* Privacy + copyright */}
          <div
            className="flex flex-col items-end gap-[4px]"
            style={{ color: 'var(--color-concrete)', fontSize: '11px', letterSpacing: '0.04em', lineHeight: 1.7, textAlign: 'right' }}
          >
            <Link
              to="/privacy"
              className="hover:text-[var(--color-pure-black)] transition-colors"
              style={{ color: 'var(--color-concrete)' }}
            >
              {tx.contact.privacy}
            </Link>
            <span>{tx.contact.copyright}</span>
          </div>
        </div>
      </footer>

    </section>
  );
};

export default Contact;