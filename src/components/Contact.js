import React from 'react';
import contactData from '../data/contact.json';

const Contact = () => {
  return (
    <section
      className="snap-start w-full bg-[var(--color-paper)] flex flex-col"
      style={{ minHeight: '100vh' }}
    >
      {/* ── LET'S TALK — fills most of the screen ── */}
      <div className="flex-1 flex flex-col justify-end">
        <div
          className="w-full overflow-hidden leading-none"
          style={{ borderTop: '1px solid var(--color-pure-black)' }}
        >
          <h1
            className="text-[var(--color-pure-black)] uppercase whitespace-nowrap select-none"
            style={{
              fontSize: 'clamp(18px, 14.5vw, 260px)',
              lineHeight: 0.82,
              letterSpacing: '-0.04em',
              marginLeft: '-0.02em',
            }}
          >
            LET'S TALK
          </h1>
        </div>
      </div>

      {/* ── Footer — NCDA style ── */}
      <footer
        style={{
          borderTop: '1px solid #d0d0d0',
          padding: '24px 26px 28px',
        }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-[24px] items-end">

          {/* Col 1: NCF Studio wordmark */}
          <div>
            <span
              className="font-[400] uppercase text-[var(--color-pure-black)]"
              style={{ fontSize: 'clamp(20px, 2.5vw, 32px)', letterSpacing: '-0.04em', lineHeight: 1 }}
            >
              NCF Studio
            </span>
          </div>

          {/* Col 2: Studio info */}
          <div>
            <p
              style={{ color: 'var(--color-concrete)', fontSize: '11px', letterSpacing: '0.04em', lineHeight: 1.7 }}
            >
              NCF Studio<br />
              IST — LA Based App Studio
            </p>
          </div>

          {/* Col 3: Contact */}
          <div>
            <p
              style={{ color: 'var(--color-concrete)', fontSize: '11px', letterSpacing: '0.04em', lineHeight: 1.7 }}
            >
              <a
                href="mailto:hi@ncf.studio"
                className="hover:text-[var(--color-pure-black)] transition-colors"
                style={{ color: 'var(--color-concrete)' }}
              >
                hi@ncf.studio
              </a>
              <br />
              <a
                href={`mailto:${contactData.email}`}
                className="hover:text-[var(--color-pure-black)] transition-colors"
                style={{ color: 'var(--color-concrete)' }}
              >
                {contactData.email}
              </a>
            </p>
          </div>

          {/* Col 4: Social + copyright */}
          <div className="text-right">
            <div
              className="flex flex-col items-end gap-[4px]"
              style={{ color: 'var(--color-concrete)', fontSize: '11px', letterSpacing: '0.04em', lineHeight: 1.7 }}
            >
              {contactData.sosyal_medya.map((platform) => (
                <a
                  key={platform.platform}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--color-pure-black)] transition-colors uppercase"
                  style={{ color: 'var(--color-concrete)', fontSize: '11px', letterSpacing: '0.08em' }}
                >
                  {platform.platform}
                </a>
              ))}
              <span style={{ marginTop: '4px' }}>© 2026 NCF Studio</span>
              <span>All rights reserved.</span>
            </div>
          </div>

        </div>
      </footer>
    </section>
  );
};

export default Contact;