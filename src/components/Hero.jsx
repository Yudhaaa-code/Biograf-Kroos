import React, { useState, useEffect, useRef } from 'react';
import { Star } from 'lucide-react';
import gsap from 'gsap';
import LiveImageEditor from './LiveImageEditor';

// Fixed coordinates requested by user for Desktop
const FIXED_DESKTOP_POS = {
  right: 272,
  bottom: -169,
  height: 761,
  scale: 0.92
};

// Calibrated coordinates for Mobile (<= 768px)
const FIXED_MOBILE_POS = {
  right: 4,     // horizontal micro-offset from center
  bottom: 23,   // aligns feet perfectly on mobile
  height: 1083, // calibrated height matching background Kroos
  scale: 1.8    // calibrated scale
};

export default function Hero({ data }) {
  // Only the words (UCL, TIT, LES) animate. The number '6' stays static!
  const textWordsRef = useRef([]);

  const [isMobile, setIsMobile] = useState(() => {
    return typeof window !== 'undefined' ? window.innerWidth <= 768 : false;
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Desktop coordinates state (stored in kroos_hero_pos_desktop_v1 or fallback to kroos_hero_pos_v2)
  const [desktopPos, setDesktopPos] = useState(() => {
    try {
      const saved = localStorage.getItem('kroos_hero_pos_desktop_v1') || localStorage.getItem('kroos_hero_pos_v2');
      return saved ? JSON.parse(saved) : FIXED_DESKTOP_POS;
    } catch {
      return FIXED_DESKTOP_POS;
    }
  });

  // Mobile coordinates state (stored in kroos_hero_pos_mobile_v2 with fallback to FIXED_MOBILE_POS)
  const [mobilePos, setMobilePos] = useState(() => {
    try {
      const saved = localStorage.getItem('kroos_hero_pos_mobile_v2');
      return saved ? JSON.parse(saved) : FIXED_MOBILE_POS;
    } catch {
      return FIXED_MOBILE_POS;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('kroos_hero_pos_desktop_v1', JSON.stringify(desktopPos));
      localStorage.setItem('kroos_hero_pos_v2', JSON.stringify(desktopPos)); // also preserve v2 for desktop
    } catch { }
  }, [desktopPos]);

  useEffect(() => {
    try {
      localStorage.setItem('kroos_hero_pos_mobile_v2', JSON.stringify(mobilePos));
      localStorage.setItem('kroos_hero_pos_mobile_v1', JSON.stringify(mobilePos));
    } catch { }
  }, [mobilePos]);

  const activePos = isMobile ? mobilePos : desktopPos;
  const setActivePos = isMobile ? setMobilePos : setDesktopPos;
  const activeDefault = isMobile ? FIXED_MOBILE_POS : FIXED_DESKTOP_POS;

  // Hidden by default, toggled via keyboard shortcut Ctrl + 0 or tapping ARCHIVE 08 tag
  const [showEditor, setShowEditor] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && (e.key === '0' || e.code === 'Digit0' || e.code === 'Numpad0')) {
        e.preventDefault();
        setShowEditor(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const hero = data?.hero || {
    num: "6",
    syllableFirst: "ucl",
    syllableMid: "tit",
    syllableEnd: "les",
    footerLabel: "Sepanjang 17 musim dan 1.075 pertandingan, Toni Kroos membuktikan bahwa sepak bola adalah permainan pikiran. 34 gelar juara di puncak tertinggi.",
    nextUpHeading: "Puncak Karier",
    nextUpLabel: "Wembley 2024 • Abadi Selamanya"
  };

  const stats = data?.stats || {
    uclCompleted: "6 dari 6",
    uclLabel: "Final Liga Champions Dimenangkan",
    matches: "1.075",
    matchesLabel: "Pertandingan Resmi Karier",
    accuracy: "94.6%",
    accuracyLabel: "Akurasi Umpan Sepanjang Karier",
    trophies: "34",
    trophiesLabel: "Trofi Bergengsi Dimenangkan"
  };

  const loopTlRef = useRef(null);

  useEffect(() => {
    const validWords = textWordsRef.current.filter(Boolean);
    if (!validWords.length) return;

    // ========================================================
    // ⚙️ ATUR DETIK ANIMASI DI SINI (Ubah angka sesuai selera):
    // ========================================================
    const DURASI_MUNCUL = 1.15;  // Berapa detik teks meluncur masuk dari bawah
    const JEDA_ANTAR_KATA = 0.14;  // Jeda muncul antara 'UCL' -> 'TIT' -> 'LES'
    const LAMA_DIAM = 1.0;   // Berapa lama teks DIAM terbaca di layar sebelum keluar
    const DURASI_KELUAR = 0.85;  // Berapa detik teks meluncur keluar ke atas
    const JEDA_MENGULANG = 0.5;   // Jeda istirahat sebelum animasi berulang lagi
    // ========================================================

    // Infinite autoplay timeline for UCL TITLES
    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: JEDA_MENGULANG
    });

    // 1. Enter from bottom clip-mask
    tl.fromTo(
      validWords,
      {
        y: '125%',
        opacity: 0,
        rotateX: -15
      },
      {
        y: '0%',
        opacity: 1,
        rotateX: 0,
        duration: DURASI_MUNCUL,
        ease: 'power4.out',
        stagger: JEDA_ANTAR_KATA
      }
    )
      // 2. Subtle luxury golden glow while resting in view
      .to(validWords, {
        textShadow: '0 0 35px rgba(216, 177, 90, 0.65), 0 0 12px rgba(255, 255, 255, 0.4)',
        duration: 1.3,
        yoyo: true,
        repeat: 1,
        ease: 'sine.inOut'
      }, "+=0.2")
      // 3. Smooth exit upwards through clip-mask
      .to(validWords, {
        y: '-125%',
        opacity: 0,
        rotateX: 12,
        duration: DURASI_KELUAR,
        ease: 'power3.in',
        stagger: 0.08
      }, `+=${LAMA_DIAM}`);

    loopTlRef.current = tl;

    return () => {
      tl.kill();
    };
  }, []);

  const triggerMaskAnimation = () => {
    loopTlRef.current?.restart();
  };

  return (
    <>
      {/* Full-Bleed 100vh Hero Section (Modeled on Eliud's Running World) */}
      <section id="hero" className="hero-home">
        {/* Layer 1: Background Image Layer (Santiago Bernabéu with Trophies) */}
        <div className="hero-home__bg">
          <img
            src="/assets/hero_kroos_bernabéu.jpg"
            alt="Toni Kroos Santiago Bernabéu Farewell Trophies"
            className="hero-home__bg-img"
          />
          <div className="hero-home__overlay" />
        </div>

        {/* Hero Content Layer */}
        <div className="container hero-home__content">
          {/* Top Status Kicker */}
          <div className="hero-home__top-meta">
            <span
              className="hero-home__tag-badge"
              onClick={() => setShowEditor(prev => !prev)}
              style={{ cursor: 'pointer' }}
              title="Buka / Tutup Live Position Editor"
            >
              ARCHIVE 08
            </span>
            <span className="hero-home__tag-divider">•</span>
            <span className="hero-home__tag-text">BERNABÉU FAREWELL & WEMBLEY LEGACY</span>
          </div>

          {/* Monumental Stage with 3D Depth Layering (Text behind Cutout Subject) */}
          <div className="hero-home__stage">
            {/* Monumental Title aligned to the LEFT */}
            <h1
              className="hero-home__title hero-home__title--left hero-home__title--maskable"
              onClick={triggerMaskAnimation}
              title="Klik teks untuk memicu animasi mask"
            >
              {/* Line 1: '6' is stationary static, 'UCL' animates from bottom to top */}
              <div className="hero-title-row hero-title-row--1">
                <span className="hero-title-num-static">{hero.num}</span>
                <span className="hero-mask-box">
                  <span
                    className="hero-mask-inner"
                    ref={el => textWordsRef.current[0] = el}
                  >
                    {hero.syllableFirst.toUpperCase()}
                  </span>
                </span>
              </div>

              {/* Line 2: 'TIT' animates from bottom to top */}
              <div className="hero-title-row hero-title-row--2">
                <span className="hero-mask-box">
                  <span
                    className="hero-mask-inner"
                    ref={el => textWordsRef.current[1] = el}
                  >
                    {hero.syllableMid.toUpperCase()}
                  </span>
                </span>
              </div>

              {/* Line 3: 'LES' animates from bottom to top */}
              <div className="hero-title-row hero-title-row--3">
                <span className="hero-mask-box">
                  <span
                    className="hero-mask-inner"
                    ref={el => textWordsRef.current[2] = el}
                  >
                    {hero.syllableEnd.toUpperCase()}
                  </span>
                </span>
              </div>
            </h1>

            {/* Layer 3: Foreground Cutout of Toni Kroos (Independent Desktop & Mobile Positioning) */}
            <div
              className="hero-home__subject-wrap hero-home__subject-wrap--live"
              style={
                isMobile
                  ? {
                    position: 'absolute',
                    left: '50%',
                    right: 'auto',
                    bottom: `${mobilePos.bottom}px`,
                    height: `${mobilePos.height}px`,
                    transform: `translateX(-50%) translateX(${mobilePos.right}px) scale(${mobilePos.scale})`,
                    transformOrigin: 'bottom center',
                    zIndex: 5
                  }
                  : {
                    position: 'absolute',
                    right: `${desktopPos.right}px`,
                    bottom: `${desktopPos.bottom}px`,
                    height: `${desktopPos.height}px`,
                    transform: `scale(${desktopPos.scale})`,
                    transformOrigin: 'bottom center',
                    zIndex: 5
                  }
              }
              aria-hidden="true"
            >
              <img
                src="/assets/kroos_cutout_hero.png"
                alt="Toni Kroos arms outstretched cutout"
                className="hero-home__subject-img"
              />
            </div>
          </div>

          {/* Bottom Narrative Bar (Eliud Footer Pattern) */}
          <div className="hero-home__footer">
            <p className="hero-home__footer__desc">
              {hero.footerLabel}
            </p>

            <div className="hero-home__next-box">
              <Star size={18} className="hero-home__next-star" />
              <div className="hero-home__next-info">
                <span className="hero-home__next-kicker">{hero.nextUpHeading}</span>
                <span className="hero-home__next-title">{hero.nextUpLabel}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Ticker Ledger Bar */}
      <section className="hero-stats-bar">
        <div className="container hero-stats-bar__grid">
          <div className="hero-stat-card">
            <div className="hero-stat-card__val gold">{stats.uclCompleted}</div>
            <div className="hero-stat-card__lbl">{stats.uclLabel}</div>
            <div className="hero-stat-card__note">100% Win Rate di Final</div>
          </div>
          <div className="hero-stat-card">
            <div className="hero-stat-card__val">{stats.matches}</div>
            <div className="hero-stat-card__lbl">{stats.matchesLabel}</div>
            <div className="hero-stat-card__note">Klub & Tim Nasional</div>
          </div>
          <div className="hero-stat-card">
            <div className="hero-stat-card__val gold">{stats.accuracy}</div>
            <div className="hero-stat-card__lbl">{stats.accuracyLabel}</div>
            <div className="hero-stat-card__note">Tolok Ukur Dunia Sepak Bola</div>
          </div>
          <div className="hero-stat-card">
            <div className="hero-stat-card__val">{stats.trophies}</div>
            <div className="hero-stat-card__lbl">{stats.trophiesLabel}</div>
            <div className="hero-stat-card__note">Gelar Juara Tertinggi</div>
          </div>
        </div>
      </section>

      {/* Floating Live Position Editor Widget (Shown on Ctrl + 0 or tapping ARCHIVE 08) */}
      {showEditor && (
        <LiveImageEditor
          pos={activePos}
          setPos={setActivePos}
          defaultPos={activeDefault}
          mode={isMobile ? 'mobile' : 'desktop'}
          onClose={() => setShowEditor(false)}
        />
      )}
    </>
  );
}
