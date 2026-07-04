import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';

/* ── Reusable section row (same visual language as About tabs) ── */
const Row = ({ title, children }) => (
  <div
    style={{
      borderBottom: '1px solid var(--color-pure-black)',
      padding: '28px 0',
    }}
  >
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
      }}
    >
      <span
        className="uppercase"
        style={{
          fontSize: '11px',
          letterSpacing: '0.08em',
          color: 'var(--color-concrete)',
        }}
      >
        {title}
      </span>
      <div
        style={{
          fontSize: '14px',
          lineHeight: 1.7,
          color: 'var(--color-pure-black)',
          maxWidth: '680px',
        }}
      >
        {children}
      </div>
    </div>
  </div>
);

const Privacy = () => {
  const { lang } = useLang();
  

  const [navHidden, setNavHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      const delta = current - lastScrollY.current;
      if (current < 80) {
        setNavHidden(false);
      } else if (delta > 0) {
        setNavHidden(true);
      } else if (delta < 0) {
        setNavHidden(false);
      }
      lastScrollY.current = current;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const sections = [
    {
      id: 'intro',
      title: '01 Introduction',
      content: (
        <p>
          This Privacy Policy describes how <strong>Ata Emir Kaba</strong> ("Developer", "we", "us") handles
          information in connection with apps published under the <strong>NCF Studio</strong> label — including
          but not limited to Billable: Freelance Time Tracker and any future apps.
          <br /><br />
          Our fundamental commitment: your data belongs to you. Our apps are built on
          a local-first, no-account architecture. We do not operate backend servers
          that collect or store your personal information.
        </p>
      ),
    },
    {
      id: 'collect',
      title: '02 What We Collect',
      content: (
        <>
          <p style={{ marginBottom: '12px' }}>
            <strong>We do not collect:</strong> name, email, location, device identifiers,
            usage analytics, crash reports, photos, contacts, or any biometric data.
          </p>
          <p style={{ marginBottom: '12px' }}>
            <strong>Stored locally on your device only:</strong> All data you create
            within the app (clients, projects, time logs, invoices, preferences) is
            written exclusively to your device's private app container and is never
            transmitted to us.
          </p>
          <p>
            <strong>Anonymous purchase data (RevenueCat):</strong> If the app includes
            in-app purchases, an anonymous, non-personally-identifiable user ID is shared
            with RevenueCat solely to manage subscription state. No personal data is included.
          </p>
        </>
      ),
    },
    {
      id: 'use',
      title: '03 How We Use Information',
      content: (
        <p>
          Local app data is read from and written to your device solely to power the
          app's features. We do not use any information for advertising, profiling,
          marketing, or machine learning. The only external service communication is
          for subscription verification (RevenueCat) when applicable.
        </p>
      ),
    },
    {
      id: 'storage',
      title: '04 Data Storage & Security',
      content: (
        <>
          <p style={{ marginBottom: '12px' }}>
            All app data resides on your device. iOS app sandboxing ensures no other
            app can access it. Apple's hardware-level encryption protects it when your
            device is locked. We transmit no app data over any network.
          </p>
          <p>
            As all data is local, you are responsible for device security and backups
            (via iCloud or Finder).
          </p>
        </>
      ),
    },
    {
      id: 'thirdparty',
      title: '05 Third-Party Services',
      content: (
        <>
          <p style={{ marginBottom: '12px' }}>
            <strong>RevenueCat</strong> — Used for in-app subscription management where
            applicable. Receives an anonymous App User ID and Apple purchase receipts.
            Does not receive any personal data.{' '}
            <a
              href="https://www.revenuecat.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--color-pure-black)', textDecoration: 'underline' }}
            >
              RevenueCat Privacy Policy ↗
            </a>
          </p>
          <p>
            <strong>Apple App Store</strong> — All payments are processed by Apple.
            We never receive your payment details, billing address, or Apple ID.{' '}
            <a
              href="https://www.apple.com/legal/privacy/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--color-pure-black)', textDecoration: 'underline' }}
            >
              Apple Privacy Policy ↗
            </a>
          </p>
        </>
      ),
    },
    {
      id: 'deletion',
      title: '06 Data Retention & Deletion',
      content: (
        <p>
          Your data is retained on your device for as long as you use the app.
          Delete individual records within the app, or uninstall the app to permanently
          remove all associated data. This action is irreversible. We hold no copy of
          your data on any server.
        </p>
      ),
    },
    {
      id: 'rights',
      title: '07 Your Rights (GDPR & CCPA)',
      content: (
        <p>
          Since we collect no personal data, GDPR and CCPA have minimal applicability —
          but we uphold their spirit. You have full access to your data (it's on your
          device), full right to erasure (uninstall the app), and data portability
          (it's stored locally, not in a proprietary cloud). We perform no automated
          decision-making or user profiling.
        </p>
      ),
    },
    {
      id: 'children',
      title: '08 Children\'s Privacy',
      content: (
        <p>
          Our apps are not directed at children under 13. We collect no personal
          information from any user, making the apps inherently COPPA compliant.
          If you believe a child has somehow provided personal information, contact
          us at{' '}
          <a
            href="mailto:ataemirkaba@gmail.com"
            style={{ color: 'var(--color-pure-black)', textDecoration: 'underline' }}
          >
            ataemirkaba@gmail.com
          </a>.
        </p>
      ),
    },
    {
      id: 'changes',
      title: '09 Changes to This Policy',
      content: (
        <p>
          We may update this Privacy Policy to reflect changes in app functionality
          or legal requirements. The "Last Updated" date will be revised when changes
          are made. Continued use of the app constitutes acceptance of the updated policy.
        </p>
      ),
    },
    {
      id: 'contact',
      title: '10 Contact',
      content: (
        <p>
          Questions, concerns, or requests related to this Privacy Policy:{' '}
          <a
            href="mailto:ataemirkaba@gmail.com"
            style={{ color: 'var(--color-pure-black)', textDecoration: 'underline' }}
          >
            ataemirkaba@gmail.com
          </a>
          <br />
          Developer: Ata Emir Kaba / NCF Studio — IST, LA
          <br /><br />
          We aim to respond to all privacy-related inquiries within 5 business days.
        </p>
      ),
    },
  ];

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--color-paper)',
        fontFamily: 'inherit',
      }}
    >
      {/* ── Top nav strip ── */}
      <div
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
          backgroundColor: 'var(--color-paper)',
          borderBottom: '1px solid transparent',
          transform: navHidden ? 'translateY(-100%)' : 'translateY(0)',
          transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        <Link
          to="/"
          style={{
            color: 'var(--color-concrete)',
            fontSize: '11px',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.color = 'var(--color-pure-black)'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--color-concrete)'}
        >
          ← {lang === 'tr' ? 'Portföye Dön' : 'Back to Portfolio'}
        </Link>
        <span
          style={{
            color: 'var(--color-concrete)',
            fontSize: '11px',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}
        >
          NCF Studio
        </span>
      </div>

      {/* ── Main content ── */}
      <main style={{ paddingTop: '120px', paddingBottom: '100px' }}>

        {/* Page title block */}
        <div
          style={{
            padding: '0 26px',
            marginBottom: '60px',
          }}
        >
          <span
            style={{
              display: 'block',
              fontSize: '11px',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--color-concrete)',
              marginBottom: '12px',
            }}
          >
            Legal
          </span>
          <h1
            style={{
              fontSize: 'clamp(36px, 6vw, 80px)',
              fontWeight: 400,
              letterSpacing: '-0.04em',
              lineHeight: 0.9,
              color: 'var(--color-pure-black)',
              textTransform: 'uppercase',
              marginBottom: '32px',
            }}
          >
            Privacy<br />Policy
          </h1>
          <p
            style={{
              fontSize: '11px',
              letterSpacing: '0.04em',
              color: 'var(--color-concrete)',
            }}
          >
            Last updated: July 4, 2026 &nbsp;·&nbsp; Effective for all NCF Studio apps
          </p>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid var(--color-pure-black)', margin: '0 26px' }} />

        {/* Sections */}
        <div style={{ padding: '0 26px' }}>
          {sections.map((section) => (
            <Row key={section.id} title={section.title}>
              {section.content}
            </Row>
          ))}
        </div>

        {/* Bottom note */}
        <div
          style={{
            padding: '48px 26px 0',
            borderTop: '1px solid #d0d0d0',
            marginTop: '48px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <span
            style={{
              fontSize: 'clamp(20px, 2.5vw, 32px)',
              fontWeight: 400,
              letterSpacing: '-0.04em',
              textTransform: 'uppercase',
              color: 'var(--color-pure-black)',
            }}
          >
            NCF Studio
          </span>
          <span
            style={{
              fontSize: '11px',
              letterSpacing: '0.04em',
              color: 'var(--color-concrete)',
            }}
          >
            © 2026 All rights reserved.
          </span>
        </div>
      </main>
    </div>
  );
};

export default Privacy;
