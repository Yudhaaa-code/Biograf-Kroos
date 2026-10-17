import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, MessageSquareQuote } from 'lucide-react';

export default function QuotesLegends({ data }) {
  const [activeIdx, setActiveIdx] = useState(0);

  const quotesData = data?.quotesLegends;
  if (!quotesData) return null;

  const prevQuote = () => {
    setActiveIdx((prev) => (prev === 0 ? quotesData.quotes.length - 1 : prev - 1));
  };

  const nextQuote = () => {
    setActiveIdx((prev) => (prev === quotesData.quotes.length - 1 ? 0 : prev + 1));
  };

  const activeQuote = quotesData.quotes[activeIdx];

  return (
    <section id="quotes" className="editorial-section quotes-legends-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-head text-center">
          <div className="icon-heading">
            <span className="icon-heading__star">✦</span>
            <span className="icon-heading__label">{quotesData.kicker}</span>
            <span className="icon-heading__star">✦</span>
          </div>
          <h2 className="editorial-title">{quotesData.title}</h2>
          <p className="editorial-subtitle max-w-2xl mx-auto">{quotesData.subtitle}</p>
        </div>

        {/* Featured Pull-Quote Stage */}
        <div className="quote-stage">
          <div className="quote-watermark">
            <Quote size={120} />
          </div>

          <div className="quote-content-wrap">
            <div className="quote-tag-pill">{activeQuote.tag}</div>
            <blockquote className="quote-main-text">
              "{activeQuote.text}"
            </blockquote>

            <div className="quote-author-block">
              <div className="quote-author-name">{activeQuote.name}</div>
              <div className="quote-author-role">{activeQuote.role}</div>
            </div>
          </div>

          {/* Carousel Arrows */}
          <div className="quote-nav-controls">
            <button 
              onClick={prevQuote} 
              className="quote-nav-btn prev"
              aria-label="Previous Quote"
            >
              <ChevronLeft size={22} />
            </button>
            <span className="quote-pagination">
              {activeIdx + 1} / {quotesData.quotes.length}
            </span>
            <button 
              onClick={nextQuote} 
              className="quote-nav-btn next"
              aria-label="Next Quote"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        {/* Legend Thumbnails / Selectors */}
        <div className="quote-selector-grid">
          {quotesData.quotes.map((q, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              className={`quote-thumb-card ${activeIdx === idx ? 'active' : ''}`}
            >
              <div className="thumb-header">
                <span className="thumb-tag">{q.tag}</span>
                <MessageSquareQuote size={14} className="thumb-icon" />
              </div>
              <div className="thumb-name">{q.name}</div>
              <div className="thumb-role">{q.role}</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
