import React, { useState, useEffect } from 'react';
import { useLang } from '../context/LanguageContext';
import { t } from '../translations';

const MEDIUM_USERNAME = 'aekaba';
const RSS_URL = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${MEDIUM_USERNAME}`;

/* ── Strip HTML tags and truncate ── */
const stripHtml = (html = '') => {
  const tmp = document.createElement('div');
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || '';
};

const truncate = (str, n) => (str.length > n ? str.slice(0, n).trimEnd() + '…' : str);

const formatDate = (dateStr) => {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-GB', { year: 'numeric', month: 'short', day: 'numeric' });
};

/* ── Single article card ── */
const ArticleCard = ({ article, readMore, index }) => {
  const [hovered, setHovered] = useState(false);

  const summary = truncate(stripHtml(article.description), 180);

  return (
    <a
      href={article.link}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '26px',
        borderRight: '1px solid var(--color-pure-black)',
        borderBottom: '1px solid var(--color-pure-black)',
        minHeight: '280px',
        textDecoration: 'none',
        backgroundColor: hovered ? 'var(--color-pure-black)' : 'transparent',
        transition: 'background-color 0.3s ease',
        cursor: 'pointer',
      }}
    >
      {/* Top */}
      <div>
        {/* Index */}
        <span
          style={{
            color: hovered ? 'rgba(255,255,255,0.35)' : 'var(--color-concrete)',
            fontSize: '11px',
            letterSpacing: '0.08em',
            display: 'block',
            marginBottom: '20px',
            transition: 'color 0.3s ease',
          }}
        >
          {String(index + 1).padStart(2, '0')}
        </span>

        {/* Title */}
        <h3
          style={{
            color: hovered ? 'var(--color-paper)' : 'var(--color-pure-black)',
            fontSize: 'clamp(15px, 1.6vw, 21px)',
            lineHeight: 1.3,
            letterSpacing: '-0.02em',
            fontWeight: 400,
            marginBottom: '14px',
            transition: 'color 0.3s ease',
          }}
        >
          {article.title}
        </h3>

        {/* Summary */}
        <p
          style={{
            color: hovered ? 'rgba(255,255,255,0.5)' : 'var(--color-concrete)',
            fontSize: '13px',
            lineHeight: 1.6,
            letterSpacing: '-0.01em',
            transition: 'color 0.3s ease',
          }}
        >
          {summary}
        </p>
      </div>

      {/* Bottom */}
      <div
        style={{
          marginTop: '26px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        }}
      >
        {/* Date */}
        <span
          style={{
            color: hovered ? 'rgba(255,255,255,0.35)' : 'var(--color-concrete)',
            fontSize: '11px',
            letterSpacing: '0.04em',
            transition: 'color 0.3s ease',
          }}
        >
          {formatDate(article.pubDate)}
        </span>

        {/* Read More link */}
        <span
          style={{
            color: hovered ? 'var(--color-paper)' : 'var(--color-pure-black)',
            fontSize: '13px',
            paddingBottom: '3px',
            borderBottom: `1px solid ${hovered ? 'rgba(255,255,255,0.4)' : 'var(--color-concrete)'}`,
            transition: 'color 0.3s ease, border-color 0.3s ease',
            whiteSpace: 'nowrap',
          }}
        >
          {readMore}
        </span>
      </div>
    </a>
  );
};

const Blog = () => {
  const { lang } = useLang();
  const tx = t[lang];
  const [articles, setArticles] = useState([]);
  const [status, setStatus] = useState('loading'); // 'loading' | 'ok' | 'error' | 'empty'

  useEffect(() => {
    setStatus('loading');
    fetch(RSS_URL)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 'ok' && data.items?.length > 0) {
          setArticles(data.items.slice(0, 6));
          setStatus('ok');
        } else {
          setStatus('empty');
        }
      })
      .catch(() => setStatus('error'));
  }, []);

  return (
    <section
      className="snap-start w-full bg-[var(--color-paper)] relative"
      style={{ minHeight: '100vh', textAlign: 'left' }}
    >
      {/* Section Header */}
      <div className="w-full px-[26px]" style={{ paddingTop: '100px', paddingBottom: '40px' }}>
        <span
          className="uppercase block"
          style={{
            color: 'var(--color-concrete)',
            fontSize: '11px',
            letterSpacing: '0.08em',
            marginBottom: '12px',
          }}
        >
          {tx.blog.label}
        </span>
        <h2
          className="font-[400] text-[var(--color-pure-black)]"
          style={{ fontSize: 'clamp(28px, 4vw, 52px)', lineHeight: 1.2, letterSpacing: '-0.03em' }}
        >
          {tx.blog.heading}
        </h2>
      </div>

      {/* Content */}
      <div style={{ borderTop: '1px solid var(--color-pure-black)', borderLeft: '1px solid var(--color-pure-black)' }}>
        {status === 'loading' && (
          <div
            style={{
              padding: '80px 26px',
              color: 'var(--color-concrete)',
              fontSize: '13px',
              letterSpacing: '0.04em',
            }}
          >
            {tx.blog.loading}
          </div>
        )}

        {status === 'error' && (
          <div
            style={{
              padding: '80px 26px',
              color: 'var(--color-concrete)',
              fontSize: '13px',
              letterSpacing: '0.04em',
            }}
          >
            {tx.blog.error}
          </div>
        )}

        {status === 'empty' && (
          <div
            style={{
              padding: '80px 26px',
              color: 'var(--color-concrete)',
              fontSize: '13px',
              letterSpacing: '0.04em',
            }}
          >
            {tx.blog.noArticles}
          </div>
        )}

        {status === 'ok' && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            }}
          >
            {articles.map((article, i) => (
              <ArticleCard
                key={article.guid || article.link}
                article={article}
                readMore={tx.blog.readMore}
                index={i}
              />
            ))}
          </div>
        )}
      </div>

      {/* Bottom padding */}
      <div style={{ height: '80px' }} />
    </section>
  );
};

export default Blog;
