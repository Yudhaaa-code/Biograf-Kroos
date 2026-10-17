import React, { useState } from 'react';
import { Headphones, Radio, ExternalLink, MessageSquare, Clock } from 'lucide-react';

export default function PodcastVault({ data, lang }) {
  const podcastData = data?.podcastVault;
  const [activeEp, setActiveEp] = useState(podcastData?.episodes?.[0] || null);

  if (!podcastData || !activeEp) return null;

  const spotifyShowUrl = "https://open.spotify.com/show/4Lf8kixpdqaU0SfYC2jSVC";
  const spotifyEmbedUrl = "https://open.spotify.com/embed/show/4Lf8kixpdqaU0SfYC2jSVC?utm_source=generator&theme=0";

  return (
    <section id="podcast" className="editorial-section podcast-vault-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-head text-center">
          <div className="icon-heading">
            <span className="icon-heading__star">✦</span>
            <span className="icon-heading__label">{podcastData.kicker}</span>
            <span className="icon-heading__star">✦</span>
          </div>
          <h2 className="editorial-title">{podcastData.title}</h2>
          <p className="editorial-subtitle max-w-2xl mx-auto">{podcastData.subtitle}</p>
          
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="podcast-badge-pill">
              <Radio size={14} className="text-gold" />
              <span>{podcastData.badge}</span>
            </div>
            <a 
              href={spotifyShowUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="spotify-link-pill"
              title="Dengarkan langsung di Spotify"
            >
              <span className="spotify-dot"></span>
              <span>Spotify Official</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </div>

        {/* Podcast Dual Showcase */}
        <div className="podcast-player-card">
          {/* Left: Curated Episode Insight & Translated Quote */}
          <div className="player-left">
            <div className="player-meta-bar">
              <span className="player-tag">{activeEp.tag}</span>
              <span className="player-season">{activeEp.season}</span>
              <span className="player-timestamp-badge flex items-center gap-1">
                <Clock size={12} className="text-gold" />
                <span>{lang === 'id' ? `Menit ${activeEp.timestamp}` : `At ${activeEp.timestamp}`}</span>
              </span>
            </div>

            <h3 className="player-title">{activeEp.title}</h3>

            <div className="player-quote-box">
              <p className="player-quote-text">"{activeEp.quote}"</p>
              <div className="player-speaker">
                <span className="speaker-avatar">TK</span>
                <div>
                  <div className="speaker-name">Toni Kroos</div>
                  <div className="speaker-sub">Co-Host bersama Felix Kroos • Studio Bummens</div>
                </div>
              </div>
            </div>

            {/* Timestamp Guidance Box */}
            <div className="timestamp-guide-pill">
              <Clock size={15} className="text-gold shrink-0" />
              <span>
                {lang === 'id' 
                  ? `Petunjuk: Geser pemutar Spotify di sebelah kanan ke menit ${activeEp.timestamp} untuk mendengarkan langsung obrolan kutipan ini.`
                  : `Guide: Scrub the Spotify player on the right to minute ${activeEp.timestamp} to listen directly to this discussion.`}
              </span>
            </div>

            {/* Episode Topic Selector Tabs */}
            <div className="podcast-topic-selector">
              <div className="selector-label">
                <MessageSquare size={14} className="text-gold" />
                <span>{lang === 'id' ? 'Pilih Topik Obrolan & Penanda Menit:' : 'Select Topic & Timestamp Marker:'}</span>
              </div>
              <div className="topic-pill-list">
                {podcastData.episodes.map((ep) => {
                  const isSelected = activeEp.id === ep.id;
                  return (
                    <button
                      key={ep.id}
                      onClick={() => setActiveEp(ep)}
                      className={`topic-tab-btn ${isSelected ? 'active' : ''}`}
                    >
                      <div className="flex items-center justify-between w-full gap-2">
                        <span>{ep.title}</span>
                        <span className={`topic-time-badge flex items-center gap-1 ${isSelected ? 'active' : ''}`}>
                          <Clock size={11} className={isSelected ? "text-gold" : "text-muted"} />
                          <span>{ep.timestamp}</span>
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: Real Official Spotify Podcast Embed */}
          <div className="player-spotify-wrapper">
            <div className="spotify-embed-header">
              <div className="flex items-center gap-2">
                <Headphones size={16} className="text-gold" />
                <span className="spotify-header-title">
                  {lang === 'id' ? 'Pemutar Suara Asli (Spotify Official)' : 'Official Spotify Player (Original Audio)'}
                </span>
              </div>
              <span className="voice-badge">
                {lang === 'id' ? 'Suara Asli Toni Kroos' : 'Original Voice of Toni Kroos'}
              </span>
            </div>

            {/* Official Spotify Iframe Embed */}
            <div className="spotify-iframe-box">
              <iframe
                title="Einfach mal Luppen - Toni Kroos Official Podcast on Spotify"
                src={spotifyEmbedUrl}
                width="100%"
                height="352"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="spotify-embed-frame"
              ></iframe>
            </div>

            <p className="spotify-note">
              {lang === 'id' 
                ? `Tekan Play di pemutar Spotify di atas, lalu geser durasi ke menit ${activeEp.timestamp} untuk mendengarkan langsung obrolan topik "${activeEp.title}".`
                : `Press Play on Spotify above and scrub to minute ${activeEp.timestamp} to stream the authentic conversation on "${activeEp.title}".`}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
