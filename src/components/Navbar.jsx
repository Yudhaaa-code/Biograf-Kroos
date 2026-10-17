import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, ChevronRight } from 'lucide-react';

export default function Navbar({ lang, setLang, audioPlaying, toggleAudio }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navItems = lang === 'id' 
    ? [
        { label: 'Kisah', href: '#story' },
        { label: 'Presisi', href: '#precision' },
        { label: 'Kronologi', href: '#timeline' },
        { label: '34 Trofi', href: '#trophies' },
        { label: 'Kutipan', href: '#quotes' },
        { label: 'Sepatu 11pro', href: '#boots' },
        { label: 'Podcast', href: '#podcast' },
        { label: 'Danke Toni', href: '#tribute' },
      ]
    : [
        { label: 'Story', href: '#story' },
        { label: 'Precision', href: '#precision' },
        { label: 'Timeline', href: '#timeline' },
        { label: '34 Trophies', href: '#trophies' },
        { label: 'Quotes', href: '#quotes' },
        { label: '11pro Boots', href: '#boots' },
        { label: 'Podcast', href: '#podcast' },
        { label: 'Danke Toni', href: '#tribute' },
      ];

  return (
    <header className="masthead-nav">
      <div className="container masthead-inner">
        <a href="#hero" className="masthead-brand">
          <div className="brand-monogram">8</div>
          <div className="brand-text-block">
            <span className="brand-name">Toni Kroos</span>
            <span className="brand-meta">World Legacy</span>
          </div>
        </a>

        {/* Editorial Desktop Menu */}
        <nav className="desktop-nav-wrap">
          <ul className="masthead-menu">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="masthead-link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Masthead Controls */}
        <div className="masthead-controls">
          {/* Subtle Ambient Tone Toggle */}
          <button 
            onClick={toggleAudio} 
            className={`audio-btn ${audioPlaying ? 'active' : ''}`}
            title={audioPlaying ? "Heningkan Nada Ambien" : "Dengarkan Harmoni Ambien"}
            aria-label="Toggle Sound"
          >
            {audioPlaying ? <Volume2 size={16} /> : <VolumeX size={16} />}
          </button>

          {/* Clean Segmented Language Selector */}
          <div className="lang-selector">
            <button 
              className={`lang-opt ${lang === 'id' ? 'active' : ''}`}
              onClick={() => setLang('id')}
            >
              ID
            </button>
            <button 
              className={`lang-opt ${lang === 'en' ? 'active' : ''}`}
              onClick={() => setLang('en')}
            >
              EN
            </button>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(prev => !prev)}
            className="mobile-hamburger-btn"
            aria-label={mobileMenuOpen ? "Tutup Menu" : "Buka Menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Luxury Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div 
          className="mobile-drawer-backdrop"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div 
            className="mobile-drawer-sheet"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mobile-drawer-head">
              <div className="masthead-brand">
                <div className="brand-monogram">8</div>
                <div className="brand-text-block">
                  <span className="brand-name">Toni Kroos</span>
                  <span className="brand-meta">Navigation Index</span>
                </div>
              </div>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="mobile-drawer-close"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            <ul className="mobile-drawer-links">
              {navItems.map((item, idx) => (
                <li key={item.href}>
                  <a 
                    href={item.href} 
                    className="mobile-drawer-link"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="mobile-link-idx">0{idx + 1}</span>
                    <span className="mobile-link-label">{item.label}</span>
                    <ChevronRight size={16} className="mobile-link-arrow" />
                  </a>
                </li>
              ))}
            </ul>

            <div className="mobile-drawer-footer">
              <div className="mobile-drawer-audio">
                <button 
                  onClick={toggleAudio} 
                  className={`audio-btn ${audioPlaying ? 'active' : ''}`}
                >
                  {audioPlaying ? <Volume2 size={16} /> : <VolumeX size={16} />}
                  <span>{audioPlaying ? (lang === 'id' ? 'Audio Aktif' : 'Audio On') : (lang === 'id' ? 'Harmoni Hening' : 'Muted')}</span>
                </button>
              </div>
              <div className="mobile-drawer-copy">
                <span>© 2026 Toni Kroos World Legacy</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
