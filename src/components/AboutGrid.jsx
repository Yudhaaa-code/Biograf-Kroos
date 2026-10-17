import React, { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutGrid({ data }) {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);

  const about = data?.about || {
    kicker: "Tentang Toni",
    lead: "Toni Kroos diakui luas sebagai salah satu gelandang terbaik dalam sejarah.",
    grid: []
  };

  const grid = about.grid || [];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Reveal Section Header with smooth fade up
      if (headerRef.current) {
        gsap.from(headerRef.current.children, {
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none none"
          },
          y: 40,
          opacity: 0,
          duration: 0.9,
          stagger: 0.15,
          ease: "power3.out",
          clearProps: "all"
        });
      }

      // 2. Reveal 5 Grid Items with staggered cards animation
      const items = gridRef.current?.querySelectorAll('.about__grid-item');
      if (items && items.length > 0) {
        gsap.from(items, {
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
            toggleActions: "play none none none"
          },
          y: 60,
          opacity: 0,
          scale: 0.96,
          duration: 1,
          stagger: 0.16,
          ease: "power3.out",
          clearProps: "all"
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [data]);

  return (
    <section ref={sectionRef} id="about" className="section--about">
      <div className="container">
        {/* Section Header */}
        <div ref={headerRef}>
          <div className="icon-heading">
            <Star size={20} className="icon-heading__star" />
            <span className="icon-heading__label">{about.kicker}</span>
          </div>

          {/* Lead Statement */}
          <div className="about__header">
            <h2 className="about__lead-title">
              The Philosophy of Pure Control
            </h2>
            <p className="about__lead-desc">
              {about.lead}
            </p>
          </div>
        </div>

        {/* Staggered 5-Item Editorial Grid (Eliud Kipchoge Signature) */}
        <div ref={gridRef} className="about__img-grid">
          {grid.map((item, idx) => (
            <article 
              key={item.id || idx} 
              className={`about__grid-item item-${idx + 1}`}
            >
              <div className="about__grid-media">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="about__grid-img"
                  loading="lazy" 
                />
                <span className="about__grid-badge">0{idx + 1}</span>
              </div>
              <div className="about__grid-info">
                <h3 className="about__grid-title">{item.title}</h3>
                <p className="about__grid-desc">{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
