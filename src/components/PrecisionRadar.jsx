import React, { useState } from 'react';
import { Compass, Activity } from 'lucide-react';

export default function PrecisionRadar({ data, lang }) {
  const [activeCorridor, setActiveCorridor] = useState('halfspace');

  const radarData = data?.precisionRadar;
  if (!radarData) return null;

  // Compute SVG Radar Chart points (6 axes)
  const size = 320;
  const center = size / 2;
  const radius = 110;
  const angleStep = (Math.PI * 2) / radarData.metrics.length;

  const kroosPoints = radarData.metrics.map((m, i) => {
    const angle = i * angleStep - Math.PI / 2;
    const r = (m.value / 100) * radius;
    const x = center + r * Math.cos(angle);
    const y = center + r * Math.sin(angle);
    return `${x},${y}`;
  }).join(' ');

  const benchmarkPoints = radarData.metrics.map((m, i) => {
    const angle = i * angleStep - Math.PI / 2;
    const r = (m.benchmark / 100) * radius;
    const x = center + r * Math.cos(angle);
    const y = center + r * Math.sin(angle);
    return `${x},${y}`;
  }).join(' ');

  return (
    <section id="precision" className="editorial-section precision-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-head text-center">
          <div className="icon-heading">
            <span className="icon-heading__star">✦</span>
            <span className="icon-heading__label">{radarData.kicker}</span>
            <span className="icon-heading__star">✦</span>
          </div>
          <h2 className="editorial-title">{radarData.title}</h2>
          <p className="editorial-subtitle max-w-2xl mx-auto">{radarData.subtitle}</p>
        </div>

        <div className="precision-grid">
          {/* Left: SVG Radar Analytics Visualizer */}
          <div className="precision-card radar-card">
            <div className="card-top-bar">
              <div className="flex items-center gap-2">
                <Activity size={18} className="text-gold" />
                <span className="card-label">{radarData.radarTitle}</span>
              </div>
              <span className="accuracy-badge">{radarData.accuracyBadge}</span>
            </div>

            <div className="radar-visual-wrap">
              <svg 
                viewBox={`0 0 ${size} ${size}`} 
                className="radar-svg"
                aria-label="Radar Chart of Toni Kroos Attributes"
              >
                {/* Background Concentric Webs */}
                {[0.25, 0.5, 0.75, 1.0].map((level, idx) => {
                  const points = radarData.metrics.map((_, i) => {
                    const angle = i * angleStep - Math.PI / 2;
                    const r = level * radius;
                    return `${center + r * Math.cos(angle)},${center + r * Math.sin(angle)}`;
                  }).join(' ');
                  return (
                    <polygon 
                      key={idx} 
                      points={points} 
                      className="radar-web" 
                      fill="none" 
                      stroke="rgba(255, 255, 255, 0.08)" 
                      strokeWidth="1"
                    />
                  );
                })}

                {/* Radar Spokes */}
                {radarData.metrics.map((_, i) => {
                  const angle = i * angleStep - Math.PI / 2;
                  const x = center + radius * Math.cos(angle);
                  const y = center + radius * Math.sin(angle);
                  return (
                    <line 
                      key={i} 
                      x1={center} 
                      y1={center} 
                      x2={x} 
                      y2={y} 
                      stroke="rgba(255, 255, 255, 0.1)" 
                      strokeWidth="1"
                    />
                  );
                })}

                {/* European Elite Average Polygon */}
                <polygon 
                  points={benchmarkPoints} 
                  fill="rgba(142, 149, 165, 0.15)" 
                  stroke="#6b7280" 
                  strokeWidth="1.5" 
                  strokeDasharray="3 3"
                />

                {/* Toni Kroos Master Polygon */}
                <polygon 
                  points={kroosPoints} 
                  fill="rgba(216, 177, 90, 0.28)" 
                  stroke="#d8b15a" 
                  strokeWidth="2.5"
                />

                {/* Points on Kroos vertices */}
                {radarData.metrics.map((m, i) => {
                  const angle = i * angleStep - Math.PI / 2;
                  const r = (m.value / 100) * radius;
                  const x = center + r * Math.cos(angle);
                  const y = center + r * Math.sin(angle);
                  return (
                    <circle 
                      key={i} 
                      cx={x} 
                      cy={y} 
                      r="4" 
                      fill="#d8b15a" 
                      stroke="#090a0d" 
                      strokeWidth="2" 
                    />
                  );
                })}
              </svg>

              {/* Radar Legend */}
              <div className="radar-legend">
                <div className="legend-item">
                  <span className="legend-color kroos"></span>
                  <span>Toni Kroos</span>
                </div>
                <div className="legend-item">
                  <span className="legend-color benchmark"></span>
                  <span>{lang === 'id' ? 'Rata-rata Gelandang Elite Eropa' : 'European Elite Midfield Avg'}</span>
                </div>
              </div>
            </div>

            {/* Metric Bars */}
            <div className="radar-metric-list">
              {radarData.metrics.map((metric, idx) => (
                <div key={idx} className="metric-row">
                  <div className="metric-header">
                    <span className="metric-title">{metric.label}</span>
                    <div className="metric-values">
                      <span className="metric-kroos">{metric.value}%</span>
                      <span className="metric-bench">/ {metric.benchmark}%</span>
                    </div>
                  </div>
                  <div className="metric-track">
                    <div 
                      className="metric-fill" 
                      style={{ width: `${metric.value}%` }}
                    />
                  </div>
                  <p className="metric-caption">{metric.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Signature Pitch Geometric Corridors */}
          <div className="precision-card corridors-card">
            <div className="card-top-bar">
              <div className="flex items-center gap-2">
                <Compass size={18} className="text-gold" />
                <span className="card-label">{radarData.corridorsTitle}</span>
              </div>
            </div>

            <p className="corridor-intro">{radarData.corridorsHint}</p>

            {/* Tactical Pitch Illustration */}
            <div className="tactical-pitch-box">
              <div className="pitch-canvas">
                {/* Field Markings */}
                <div className="pitch-center-circle"></div>
                <div className="pitch-half-line"></div>
                <div className="pitch-penalty-left"></div>
                <div className="pitch-penalty-right"></div>

                {/* Highlighted Corridors */}
                {activeCorridor === 'halfspace' && (
                  <div className="corridor-highlight zone-halfspace animate-pulse">
                    <span className="zone-tag">Left Half-Space (Zone 14)</span>
                    <div className="pass-line-diagonal"></div>
                  </div>
                )}
                {activeCorridor === 'diagonal' && (
                  <div className="corridor-highlight zone-diagonal">
                    <span className="zone-tag">Diagonal Crossfield Switch</span>
                    <div className="pass-vector-long"></div>
                  </div>
                )}
                {activeCorridor === 'setpiece' && (
                  <div className="corridor-highlight zone-corner">
                    <span className="zone-tag">Near-Post Inswinging Corner</span>
                    <div className="corner-arc"></div>
                  </div>
                )}

                {/* Kroos Node Marker */}
                <div className="kroos-pitch-marker" title="Toni Kroos Operating Hub">
                  <span>8</span>
                </div>
              </div>
            </div>

            {/* Corridor Tabs / Selectors */}
            <div className="corridor-selector-list">
              {radarData.corridors.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setActiveCorridor(c.id)}
                  className={`corridor-btn ${activeCorridor === c.id ? 'active' : ''}`}
                >
                  <div className="corridor-btn-head">
                    <span className="corridor-name">{c.name}</span>
                    <span className="corridor-stat-pill">{c.metric}</span>
                  </div>
                  <p className="corridor-desc">{c.desc}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
