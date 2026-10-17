import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Trophy, 
  Globe, 
  ShieldAlert, 
  Award, 
  Sparkles, 
  Shield, 
  Medal, 
  Crown, 
  Flame, 
  X, 
  CheckCircle2 
} from 'lucide-react';

const iconMap = {
  Trophy,
  Globe,
  ShieldAlert,
  Award,
  Sparkles,
  Shield,
  Medal,
  Crown,
  Flame
};

export default function TrophyCabinet({ data, lang = 'id' }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedTrophy, setSelectedTrophy] = useState(null);

  const cabinetData = data?.trophyCabinet;
  if (!cabinetData) return null;

  const filterTabs = [
    { id: 'all', label: cabinetData.allFilter },
    { id: 'continental', label: cabinetData.filterContinental },
    { id: 'league', label: cabinetData.filterLeague },
    { id: 'cup', label: cabinetData.filterCup }
  ];

  const filteredTrophies = activeCategory === 'all'
    ? cabinetData.trophies
    : cabinetData.trophies.filter(t => t.category === activeCategory);

  const handleCardClick = (trophy, e) => {
    setSelectedTrophy(trophy);

    // Confetti celebration
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 50,
      spread: 60,
      origin: { x, y },
      colors: ['#d8b15a', '#ffffff', '#60a5fa']
    });
  };

  return (
    <section id="trophies" className="editorial-section trophy-cabinet-section">
      <div className="container">
        {/* Header */}
        <div className="section-head text-center">
          <div className="icon-heading">
            <span className="icon-heading__star">✦</span>
            <span className="icon-heading__label">{cabinetData.kicker}</span>
            <span className="icon-heading__star">✦</span>
          </div>
          <h2 className="editorial-title">{cabinetData.title}</h2>
          <p className="editorial-subtitle max-w-2xl mx-auto">{cabinetData.subtitle}</p>
          <span className="celebrate-hint-pill">{cabinetData.celebrateHint}</span>
        </div>

        {/* Filter Bar */}
        <div className="trophy-filter-bar">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`trophy-tab-btn ${activeCategory === tab.id ? 'active' : ''}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Trophy Cards Grid */}
        <div className="trophy-grid">
          {filteredTrophies.map((trophy) => {
            const IconComponent = iconMap[trophy.icon] || Trophy;
            return (
              <div
                key={trophy.id}
                onClick={(e) => handleCardClick(trophy, e)}
                className="trophy-card"
                role="button"
                tabIndex={0}
                aria-label={`View details for ${trophy.name}`}
              >
                <div className="trophy-card-header">
                  <div className="trophy-icon-box">
                    <IconComponent size={24} className="trophy-icon" />
                  </div>
                  <div className="trophy-counter">
                    <span className="trophy-count-number">{trophy.count}</span>
                    <span className="trophy-count-x">✕</span>
                  </div>
                </div>

                <div className="trophy-card-body">
                  <h3 className="trophy-card-title">{trophy.name}</h3>
                  <div className="trophy-club-meta">{trophy.club}</div>
                  <div className="trophy-badge-pill">{trophy.badge}</div>
                  <div className="trophy-years-list">{trophy.years}</div>
                </div>

                <div className="trophy-card-action">
                  <span>{lang === 'id' ? 'Buka Detail Laga Final' : 'View Final Match Ledger'} →</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detail Modal */}
        {selectedTrophy && (
          <div 
            className="trophy-modal-backdrop"
            onClick={() => setSelectedTrophy(null)}
          >
            <div 
              className="trophy-modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedTrophy(null)} 
                className="modal-close-btn"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <div className="modal-header">
                <div className="flex items-center gap-3">
                  <span className="modal-count-pill">{selectedTrophy.count}✕ JUARA</span>
                  <span className="modal-club-text">{selectedTrophy.club}</span>
                </div>
                <h3 className="modal-title">{selectedTrophy.name}</h3>
                <p className="modal-badge-line">{selectedTrophy.badge}</p>
                <div className="modal-years-tag">Tahun Juara: {selectedTrophy.years}</div>
              </div>

              <div className="modal-finals-list">
                <h4 className="modal-list-heading">
                  {lang === 'id' ? 'Kronologi Laga Final & Momen Emas' : 'Final Match Chronology & Key Milestones'}
                </h4>
                {selectedTrophy.finals.map((f, idx) => (
                  <div key={idx} className="modal-final-item">
                    <div className="modal-final-year">{f.year}</div>
                    <div className="modal-final-details">
                      <div className="modal-final-opponent">{f.opponent}</div>
                      <div className="modal-final-venue">{f.venue}</div>
                      <div className="modal-final-stat flex items-center gap-1.5">
                        <CheckCircle2 size={14} className="text-gold shrink-0" />
                        <span>{f.stat}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="modal-footer">
                <button 
                  onClick={() => setSelectedTrophy(null)} 
                  className="modal-dismiss-btn"
                >
                  {lang === 'id' ? 'Tutup Rincian' : 'Close Details'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
