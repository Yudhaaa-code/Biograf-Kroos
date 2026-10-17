import React, { useState } from 'react';
import { Sliders, Copy, Check, RotateCcw, Move, X, Eye, EyeOff, Minimize2, Maximize2 } from 'lucide-react';

export default function LiveImageEditor({ pos, setPos, defaultPos, onClose, mode = 'desktop' }) {
  const [copied, setCopied] = useState(false);
  const [stepSize, setStepSize] = useState(5);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isTransparent, setIsTransparent] = useState(false);
  const [activeTab, setActiveTab] = useState('sliders'); // 'sliders' | 'nudge'

  const handleCopy = () => {
    const textToCopy = mode === 'mobile'
      ? `/* Koordinat Gambar Toni Kroos Hero (MODE MOBILE) */\nright: ${pos.right}px; /* offset horizontal */\nbottom: ${pos.bottom}px;\nheight: ${pos.height}px;\nscale: ${pos.scale};`
      : `/* Koordinat Gambar Toni Kroos Hero (MODE DESKTOP) */\nright: ${pos.right}px;\nbottom: ${pos.bottom}px;\nheight: ${pos.height}px;\nscale: ${pos.scale};`;

    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }).catch(err => {
      console.warn("Clipboard copy failed, fallback:", err);
      window.prompt("Salin koordinat berikut:", textToCopy);
    });
  };

  const handleReset = () => {
    setPos(defaultPos);
  };

  const nudge = (prop, amount) => {
    setPos(prev => ({
      ...prev,
      [prop]: Math.round((prev[prop] + amount) * 100) / 100
    }));
  };

  // Minimized pill state
  if (isMinimized) {
    return (
      <div 
        className="live-editor-minimized-pill" 
        onClick={() => setIsMinimized(false)}
        role="button"
        tabIndex={0}
        title="Klik untuk membuka Position Editor"
      >
        <Sliders size={14} className="text-gold" />
        <span>Editor ({mode === 'mobile' ? 'Mobile' : 'Desktop'})</span>
        <Maximize2 size={13} />
      </div>
    );
  }

  return (
    <aside className="live-editor-widget" aria-label="Live Image Position Editor">
      <div className={`live-editor-panel ${isTransparent ? 'is-ghost' : ''}`}>
        {/* Header */}
        <div className="live-editor-header">
          <div className="live-editor-title">
            <Sliders size={15} className="text-gold" />
            <span>Position</span>
            <span 
              className="live-editor-mode-badge" 
              style={{
                background: mode === 'mobile' ? 'rgba(59, 130, 246, 0.2)' : 'rgba(216, 177, 90, 0.2)',
                color: mode === 'mobile' ? '#60a5fa' : '#d8b15a',
                border: `1px solid ${mode === 'mobile' ? 'rgba(59, 130, 246, 0.4)' : 'rgba(216, 177, 90, 0.4)'}`,
                padding: '0.12rem 0.4rem',
                borderRadius: '4px',
                fontSize: '0.68rem',
                fontWeight: 'bold',
                marginLeft: '0.2rem'
              }}
            >
              {mode === 'mobile' ? '📱 Mobile' : '🖥️ Desktop'}
            </span>
          </div>

          <div className="live-editor-header-actions">
            {/* Ghost / Transparency toggle */}
            <button 
              onClick={() => setIsTransparent(prev => !prev)} 
              className={`live-editor-icon-btn ${isTransparent ? 'active-ghost' : ''}`}
              title={isTransparent ? "Matikan Mode Transparan" : "Mode Tembus Pandang (Transparan agar foto terlihat jelas)"}
            >
              {isTransparent ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>

            {/* Minimize button */}
            <button 
              onClick={() => setIsMinimized(true)} 
              className="live-editor-icon-btn"
              title="Kecilkan Panel (Minimize)"
            >
              <Minimize2 size={16} />
            </button>

            {/* Close button */}
            <button 
              onClick={onClose} 
              className="live-editor-icon-btn"
              title="Tutup Panel (Ctrl + 0)"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Tab Switcher on Mobile/Compact */}
        <div className="live-editor-tabs-bar">
          <button 
            type="button"
            className={`live-editor-tab-btn ${activeTab === 'sliders' ? 'active' : ''}`}
            onClick={() => setActiveTab('sliders')}
          >
            🎚️ Sliders
          </button>
          <button 
            type="button"
            className={`live-editor-tab-btn ${activeTab === 'nudge' ? 'active' : ''}`}
            onClick={() => setActiveTab('nudge')}
          >
            🎯 Tombol Panah (Nudge)
          </button>
        </div>

        {/* Content based on tab */}
        <div className="live-editor-body">
          {activeTab === 'sliders' ? (
            <div className="live-editor-controls">
              {/* Horizontal */}
              <div className="control-group">
                <div className="control-label-row">
                  <label>{mode === 'mobile' ? 'Geser Kiri/Kanan:' : 'Posisi Right:'}</label>
                  <span className="control-val-badge">{pos.right}px</span>
                </div>
                <div className="control-input-row">
                  <input 
                    type="range" 
                    min="-250" 
                    max="600" 
                    value={pos.right} 
                    onChange={e => setPos(prev => ({ ...prev, right: Number(e.target.value) }))}
                    className="live-slider"
                  />
                  <input 
                    type="number" 
                    value={pos.right} 
                    onChange={e => setPos(prev => ({ ...prev, right: Number(e.target.value) }))}
                    className="live-num-input"
                  />
                </div>
              </div>

              {/* Vertical (Bottom) */}
              <div className="control-group">
                <div className="control-label-row">
                  <label>Posisi Vertikal (Bottom):</label>
                  <span className="control-val-badge">{pos.bottom}px</span>
                </div>
                <div className="control-input-row">
                  <input 
                    type="range" 
                    min="-300" 
                    max="400" 
                    value={pos.bottom} 
                    onChange={e => setPos(prev => ({ ...prev, bottom: Number(e.target.value) }))}
                    className="live-slider"
                  />
                  <input 
                    type="number" 
                    value={pos.bottom} 
                    onChange={e => setPos(prev => ({ ...prev, bottom: Number(e.target.value) }))}
                    className="live-num-input"
                  />
                </div>
              </div>

              {/* Height (Size) */}
              <div className="control-group">
                <div className="control-label-row">
                  <label>Tinggi (Height):</label>
                  <span className="control-val-badge">{pos.height}px</span>
                </div>
                <div className="control-input-row">
                  <input 
                    type="range" 
                    min="350" 
                    max="1400" 
                    value={pos.height} 
                    onChange={e => setPos(prev => ({ ...prev, height: Number(e.target.value) }))}
                    className="live-slider"
                  />
                  <input 
                    type="number" 
                    value={pos.height} 
                    onChange={e => setPos(prev => ({ ...prev, height: Number(e.target.value) }))}
                    className="live-num-input"
                  />
                </div>
              </div>

              {/* Scale */}
              <div className="control-group">
                <div className="control-label-row">
                  <label>Skala (Scale):</label>
                  <span className="control-val-badge">{pos.scale}x</span>
                </div>
                <div className="control-input-row">
                  <input 
                    type="range" 
                    min="0.5" 
                    max="2.5" 
                    step="0.01" 
                    value={pos.scale} 
                    onChange={e => setPos(prev => ({ ...prev, scale: Number(e.target.value) }))}
                    className="live-slider"
                  />
                  <input 
                    type="number" 
                    step="0.01"
                    value={pos.scale} 
                    onChange={e => setPos(prev => ({ ...prev, scale: Number(e.target.value) }))}
                    className="live-num-input"
                  />
                </div>
              </div>
            </div>
          ) : (
            /* Quick D-Pad Nudge Buttons */
            <div className="dpad-section">
              <div className="dpad-header">
                <span>Pilih Jarak Pergeseran:</span>
                <div className="step-picker">
                  {[1, 5, 10, 25].map(s => (
                    <button 
                      key={s} 
                      type="button"
                      onClick={() => setStepSize(s)} 
                      className={`step-btn ${stepSize === s ? 'active' : ''}`}
                    >
                      {s}px
                    </button>
                  ))}
                </div>
              </div>

              <div className="dpad-grid">
                <button type="button" onClick={() => nudge('bottom', stepSize)} className="dpad-btn" title="Geser Ke Atas">↑</button>
                <div className="dpad-row-mid">
                  <button type="button" onClick={() => nudge('right', stepSize)} className="dpad-btn" title="Geser Ke Kiri">←</button>
                  <div className="dpad-center">
                    <Move size={14} />
                  </div>
                  <button type="button" onClick={() => nudge('right', -stepSize)} className="dpad-btn" title="Geser Ke Kanan">→</button>
                </div>
                <button type="button" onClick={() => nudge('bottom', -stepSize)} className="dpad-btn" title="Geser Ke Bawah">↓</button>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Actions */}
        <div className="live-editor-footer">
          <button 
            type="button"
            onClick={handleCopy} 
            className={`btn-copy-coords ${copied ? 'copied' : ''}`}
          >
            {copied ? <Check size={15} /> : <Copy size={15} />}
            <span>{copied ? 'Tersalin!' : 'Copy Koordinat'}</span>
          </button>

          <button 
            type="button"
            onClick={handleReset} 
            className="btn-reset-coords"
            title="Reset ke Posisi Awal"
          >
            <RotateCcw size={14} />
            <span>Reset</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
