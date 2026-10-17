import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Star } from 'lucide-react';
import gsap from 'gsap';

export default function TourSlider({ data, lang }) {
  const tour = data?.tour || {
    kicker: lang === 'id' ? "Tur Kejayaan" : "Glory Tour",
    titleMain1: "Glory",
    titleMain2: "World",
    slides: []
  };
  
  const slides = tour.slides && tour.slides.length > 0 ? tour.slides : [
    {
      id: "munich",
      name: "München",
      location: "Allianz Arena",
      country: "Jerman",
      date: "2007 - 2014",
      color: "#2b4c7e",
      summary: "Treble Winners bersejarah 2013, 3x Bundesliga, dan lahirnya metronom muda Jerman."
    },
    {
      id: "leverkusen",
      name: "Leverkusen",
      location: "BayArena",
      country: "Jerman",
      date: "2009 - 2010",
      color: "#6b705c",
      summary: "Kawah candradimuka di bawah Jupp Heynckes: 10 gol, 12 assist, dan rekor 24 laga tanpa kekalahan."
    },
    {
      id: "rio",
      name: "Maracanã",
      location: "Rio de Janeiro",
      country: "Brasil",
      date: "13 Juli 2014",
      color: "#2d6a4f",
      summary: "Juara Dunia FIFA 2014 di stadion legendaris Maracanã setelah membantai Brasil 7-1."
    },
    {
      id: "madrid",
      name: "Bernabéu",
      location: "Madrid",
      country: "Spanyol",
      date: "2014 - 2024",
      color: "#b0892e",
      summary: "Satu dekade dinasti emas Los Blancos: 5 gelar Liga Champions dan trinitas legendaris KCM."
    },
    {
      id: "wembley",
      name: "Wembley",
      location: "London",
      country: "Inggris",
      date: "1 Juni 2024",
      color: "#3a6b7e",
      summary: "Final ke-6 Liga Champions: assist penentu untuk Carvajal menit ke-74 dan perpisahan abadi."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(3); // Default to Bernabéu
  const metaRef = useRef(null);
  const trackRef = useRef(null);

  const activeSlide = slides[activeIndex] || slides[0];

  // GSAP transition when slide changes
  useEffect(() => {
    if (!metaRef.current) return;
    
    gsap.fromTo(
      metaRef.current,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' }
    );
  }, [activeIndex]);

  const handleSlideSelect = (idx) => {
    setActiveIndex(idx);
  };

  return (
    <section id="tour" className="section--tour">
      <span id="ledger" style={{ position: 'absolute', top: 0 }} aria-hidden="true" />
      {/* Background Wireframe Globe (Eliud Signature) */}
      <div className="tour__bg-globe" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 4336 2160" strokeWidth="1.5" stroke="rgba(255,255,255,0.12)" fill="none">
          <path d="M2168 2156.39C3363.32 2156.39 4332.31 1674.49 4332.31 1080.04C4332.31 485.586 3363.32 3.68848 2168 3.68848C972.684 3.68848 3.68848 485.586 3.68848 1080.04C3.68848 1674.49 972.684 2156.39 2168 2156.39Z" />
          <path d="M2168 2156.39C2993.69 2156.39 3663.04 1674.49 3663.04 1080.04C3663.04 485.586 2993.69 3.68848 2168 3.68848C1342.31 3.68848 672.96 485.586 672.96 1080.04C672.96 1674.49 1342.31 2156.39 2168 2156.39Z" />
          <path d="M2168 2156.39C2599.53 2156.39 2949.36 1674.49 2949.36 1080.04C2949.36 485.586 2599.53 3.68848 2168 3.68848C1736.47 3.68848 1386.64 485.586 1386.64 1080.04C1386.64 1674.49 1736.47 2156.39 2168 2156.39Z" />
          <path d="M2168 3.68848V2156.39" />
          <path d="M133.538 712.021H4202.54" />
          <path d="M117.806 1420.28H4221.96" />
        </svg>
      </div>

      <div className="container">
        {/* Section Header */}
        <div className="icon-heading">
          <Star size={20} className="icon-heading__star" />
          <span className="icon-heading__label">{tour.kicker}</span>
        </div>

        {/* Tour Slider Container */}
        <div className="tour__slider">
          <div className="tour__slider__titles">
            <span className="tour__slider__title tour__slider__title--glory">{tour.titleMain1 || "Glory"}</span>
            <span className="tour__slider__title tour__slider__title--world">{tour.titleMain2 || "World"}</span>
          </div>

          {/* Interactive Slide Track */}
          <div className="tour__slider__track" ref={trackRef}>
            {slides.map((s, idx) => (
              <button
                key={s.id || idx}
                onClick={() => handleSlideSelect(idx)}
                className={`tour__track__item ${idx === activeIndex ? 'active' : ''}`}
                style={{
                  color: idx === activeIndex ? s.color : 'rgba(255,255,255,0.45)'
                }}
              >
                {s.name}
              </button>
            ))}
          </div>

          {/* Metadata Display & Rotating Stamp */}
          <div className="tour__slider__meta-row">
            <div className="tour__slider__meta" ref={metaRef}>
              <div className="tour__meta__item">
                <span className="tour__meta__heading">{lang === 'id' ? 'Stadion & Kota' : 'Venue & City'}</span>
                <div className="tour__meta__value bold">{activeSlide.location}</div>
                <div className="tour__meta__value">{activeSlide.country}</div>
              </div>

              <div className="tour__meta__item">
                <span className="tour__meta__heading">{lang === 'id' ? 'Musim / Tanggal' : 'Season / Date'}</span>
                <div className="tour__meta__value bold" style={{ color: activeSlide.color }}>
                  {activeSlide.date}
                </div>
              </div>

              <div className="tour__meta__item summary-item">
                <span className="tour__meta__heading">{lang === 'id' ? 'Pencapaian Penting' : 'Key Achievement'}</span>
                <p className="tour__meta__summary">{activeSlide.summary}</p>
              </div>
            </div>

            {/* Rotating Stamp (Eliud Signature Component) */}
            <div className="comp-stamp" aria-hidden="true">
              <div className="comp-stamp__inner">
                <ArrowUpRight size={22} className="comp-stamp__icon" />
              </div>
              <svg 
                viewBox="0 0 400 400" 
                className="rotating-stamp-svg-eliud"
              >
                <path 
                  id="stampArcPath" 
                  fill="none" 
                  d="M 200, 60.8 A 139.2,139.2 0 1 1 200, 339.2 A 139.2,139.2 0 1 1 200, 60.8" 
                />
                <text fontSize="26" fill="currentColor" letterSpacing="4">
                  <textPath href="#stampArcPath" startOffset="0%" method="stretch">
                    Completed ✦ Completed ✦
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
