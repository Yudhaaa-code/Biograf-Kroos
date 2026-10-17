import React, { useState } from 'react';
import { Calendar, Star } from 'lucide-react';

export default function CareerTimeline({ data }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const timelineData = data?.careerTimeline;
  if (!timelineData) return null;

  const filteredEvents = activeFilter === 'all'
    ? timelineData.events
    : timelineData.events.filter(e => e.category === activeFilter);

  return (
    <section id="timeline" className="editorial-section timeline-section">
      <div className="container">
        {/* Header */}
        <div className="section-head text-center">
          <div className="icon-heading">
            <span className="icon-heading__star">✦</span>
            <span className="icon-heading__label">{timelineData.kicker}</span>
            <span className="icon-heading__star">✦</span>
          </div>
          <h2 className="editorial-title">{timelineData.title}</h2>
          <p className="editorial-subtitle max-w-2xl mx-auto">{timelineData.subtitle}</p>
        </div>

        {/* Filter Pills */}
        <div className="timeline-filter-bar">
          {timelineData.filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`timeline-filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Timeline Stream */}
        <div className="timeline-stream">
          <div className="timeline-spine"></div>

          {filteredEvents.map((event, idx) => (
            <div 
              key={idx} 
              className={`timeline-node ${idx % 2 === 0 ? 'node-left' : 'node-right'}`}
            >
              {/* Spine Node Marker */}
              <div className="timeline-dot">
                <span className="dot-inner"></span>
              </div>

              {/* Event Card */}
              <div className="timeline-card">
                <div className="timeline-card-header">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} className="text-gold" />
                    <span className="timeline-year">{event.year}</span>
                  </div>
                  <span className="timeline-club-badge">{event.club}</span>
                </div>

                <h3 className="timeline-event-title">{event.title}</h3>
                <p className="timeline-event-desc">{event.desc}</p>

                <div className="timeline-card-footer">
                  <div className="timeline-highlight">
                    <Star size={13} className="text-gold" />
                    <span>{event.highlight}</span>
                  </div>
                  <div className="timeline-stat-tag">
                    {event.stats}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
