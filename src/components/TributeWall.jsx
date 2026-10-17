import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Heart, Send, MessageCircle, MapPin, Sparkles, Check } from 'lucide-react';

export default function TributeWall({ data, lang }) {
  const wallData = data?.tributeWall;
  const storageKey = 'kroos_fan_tributes_v1';

  // Load saved tributes from localStorage or use preloaded
  const [messages, setMessages] = useState(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.warn('localStorage read error:', e);
    }
    return wallData?.preloaded || [];
  });

  const [formData, setFormData] = useState({
    name: '',
    location: '',
    memory: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [likedIds, setLikedIds] = useState({});

  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(messages));
    } catch (e) {
      console.warn('localStorage write error:', e);
    }
  }, [messages]);

  if (!wallData) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.message.trim()) return;

    const newTribute = {
      id: Date.now(),
      name: formData.name.trim(),
      location: formData.location.trim() || (lang === 'id' ? 'Penggemar Sepak Bola' : 'Football Fan'),
      flag: '⭐',
      memory: formData.memory.trim() || (lang === 'id' ? 'Karier Abadi Kroos' : 'Immortal Legacy'),
      message: formData.message.trim(),
      likes: 1,
      date: lang === 'id' ? 'Baru saja' : 'Just now'
    };

    setMessages([newTribute, ...messages]);
    setFormData({ name: '', location: '', memory: '', message: '' });
    setSubmitted(true);

    confetti({
      particleCount: 65,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#d8b15a', '#ffffff', '#22c55e']
    });

    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleLike = (id) => {
    if (likedIds[id]) return;
    setLikedIds(prev => ({ ...prev, [id]: true }));
    setMessages(prev => prev.map(m => m.id === id ? { ...m, likes: m.likes + 1 } : m));
  };

  return (
    <section id="tribute" className="editorial-section tribute-wall-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-head text-center">
          <div className="icon-heading">
            <span className="icon-heading__star">✦</span>
            <span className="icon-heading__label">{wallData.kicker}</span>
            <span className="icon-heading__star">✦</span>
          </div>
          <h2 className="editorial-title">{wallData.title}</h2>
          <p className="editorial-subtitle max-w-2xl mx-auto">{wallData.subtitle}</p>
        </div>

        <div className="tribute-layout">
          {/* Left: Input Form */}
          <div className="tribute-form-card">
            <div className="form-card-header">
              <div className="flex items-center gap-2">
                <MessageCircle size={18} className="text-gold" />
                <h3 className="form-title">{wallData.formTitle}</h3>
              </div>
              <span className="form-badge-pill">{wallData.badge}</span>
            </div>

            {submitted && (
              <div className="form-success-banner">
                <Check size={16} />
                <span>{wallData.successMsg}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="tribute-form">
              <div className="form-field">
                <label>{wallData.inputName} *</label>
                <input
                  type="text"
                  required
                  placeholder={lang === 'id' ? 'Contoh: Ahmad Fadilah' : 'e.g. John Doe'}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="tribute-input"
                />
              </div>

              <div className="form-grid-2">
                <div className="form-field">
                  <label>{wallData.inputLocation}</label>
                  <input
                    type="text"
                    placeholder={lang === 'id' ? 'Kota / Negara' : 'City / Country'}
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="tribute-input"
                  />
                </div>

                <div className="form-field">
                  <label>{wallData.inputMemory}</label>
                  <input
                    type="text"
                    placeholder={lang === 'id' ? 'Momen favorit...' : 'Favorite moment...'}
                    value={formData.memory}
                    onChange={(e) => setFormData({ ...formData, memory: e.target.value })}
                    className="tribute-input"
                  />
                </div>
              </div>

              <div className="form-field">
                <label>{wallData.inputMessage} *</label>
                <textarea
                  required
                  rows={4}
                  placeholder={lang === 'id' ? 'Tuliskan pesan apresiasi Anda...' : 'Write your tribute message...'}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="tribute-textarea"
                />
              </div>

              <button type="submit" className="tribute-submit-btn">
                <Send size={16} />
                <span>{wallData.btnSubmit}</span>
              </button>
            </form>
          </div>

          {/* Right: Message Feed */}
          <div className="tribute-feed-card">
            <div className="feed-header">
              <span className="feed-count">
                {messages.length} {lang === 'id' ? 'Pesan Masuk' : 'Tributes Posted'}
              </span>
              <span className="feed-indicator flex items-center gap-1.5">
                <span className="live-dot"></span>
                <span>Live Archive</span>
              </span>
            </div>

            <div className="tribute-cards-scroll">
              {messages.map((item) => (
                <div key={item.id} className="fan-tribute-card">
                  <div className="fan-card-top">
                    <div className="fan-author-wrap">
                      <span className="fan-flag">{item.flag || '⭐'}</span>
                      <div>
                        <div className="fan-name">{item.name}</div>
                        <div className="fan-loc flex items-center gap-1">
                          <MapPin size={11} className="text-muted" />
                          <span>{item.location}</span>
                        </div>
                      </div>
                    </div>
                    <span className="fan-date">{item.date}</span>
                  </div>

                  {item.memory && (
                    <div className="fan-memory-pill">
                      <Sparkles size={11} className="text-gold" />
                      <span>{item.memory}</span>
                    </div>
                  )}

                  <p className="fan-message-body">"{item.message}"</p>

                  <div className="fan-card-bottom">
                    <button
                      onClick={() => handleLike(item.id)}
                      className={`fan-like-btn ${likedIds[item.id] ? 'liked' : ''}`}
                    >
                      <Heart 
                        size={14} 
                        className={likedIds[item.id] ? 'fill-red-500 text-red-500' : ''} 
                      />
                      <span>{item.likes}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
