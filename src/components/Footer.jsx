import React from 'react';

export default function Footer({ data, lang }) {
  const contact = data.contact || {};

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="editorial-footer">
      <div className="container">
        <div className="footer-main-grid">
          {/* Colophon */}
          <div className="footer-colophon">
            <div className="masthead-brand" style={{ marginBottom: '1.25rem' }}>
              <div className="brand-monogram">8</div>
              <div className="brand-text-block">
                <span className="brand-name">Toni Kroos</span>
                <span className="brand-meta">World Legacy Archive</span>
              </div>
            </div>
            <p>
              {lang === 'id' 
                ? 'Monograf digital penghormatan atas 17 musim tak tertandingi sang maestro nomor 8 di puncak tertinggi sepak bola dunia.'
                : 'A definitive digital retrospective commemorating 17 peerless seasons of the number 8 maestro at the summit of world football.'
              }
            </p>
          </div>

          {/* Page Index */}
          <div className="footer-nav-col">
            <h5>{lang === 'id' ? 'Navigasi Arsip' : 'Archive Index'}</h5>
            <ul className="footer-nav-list">
              <li><a href="#hero">{lang === 'id' ? 'Sampul Depan' : 'Cover'}</a></li>
              <li><a href="#story">{lang === 'id' ? 'Dokumenter Kisah' : 'The Story'}</a></li>
              <li><a href="#tour">{lang === 'id' ? 'Tur Kejayaan' : 'Glory Tour'}</a></li>
              <li><a href="#about">{lang === 'id' ? 'Tentang Toni' : 'About Toni'}</a></li>
              <li><a href="#boots">{lang === 'id' ? 'Sepatu 11pro' : '11pro Boots'}</a></li>
              <li><a href="#masterclass">{lang === 'id' ? 'Masterclass Umpan' : 'Masterclass'}</a></li>
              <li><a href="#foundation">{lang === 'id' ? 'Yayasan' : 'Foundation'}</a></li>
            </ul>
          </div>

          {/* External Archives */}
          <div className="footer-nav-col">
            <h5>{lang === 'id' ? 'Tautan Resmi' : 'Official Links'}</h5>
            <ul className="footer-nav-list">
              <li><a href="https://www.realmadrid.com" target="_blank" rel="noreferrer">Real Madrid C.F. ↗</a></li>
              <li><a href="https://fcbayern.com" target="_blank" rel="noreferrer">FC Bayern München ↗</a></li>
              <li><a href="https://www.dfb.de" target="_blank" rel="noreferrer">DFB Nationalmannschaft ↗</a></li>
              <li><a href="https://www.tonikroos-stiftung.de" target="_blank" rel="noreferrer">Toni Kroos Stiftung ↗</a></li>
            </ul>
          </div>

          {/* Closing Philosophy */}
          <div>
            <blockquote className="footer-quote-box">
              "{lang === 'id' 
                ? 'Mimpi saya selalu untuk pensiun saat masih di puncak, ketika orang-orang bertanya mengapa saya berhenti, bukan kapan saya akan berhenti.' 
                : 'My dream was always to bow out at the very peak, when people wonder why I am stopping, not when I will finally stop.'
              }"
              <span style={{ display: 'block', marginTop: '0.5rem', color: 'var(--color-gold)', fontSize: '0.8125rem' }}>
                — Toni Kroos, Wembley 2024
              </span>
            </blockquote>
          </div>
        </div>

        {/* Bottom Colophon Row */}
        <div className="footer-bottom-row">
          <div>{contact.copyright || "© Toni Kroos Tribute Archive 2026. Inspired by Eliud's Running World."}</div>
          <button 
            onClick={scrollToTop} 
            className="audio-btn"
            title={lang === 'id' ? 'Kembali ke atas' : 'Back to top'}
            aria-label="Back to top"
          >
            ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
