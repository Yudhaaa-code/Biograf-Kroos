import React, { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Story({ data }) {
  const sectionRef = useRef(null);
  const mainColRef = useRef(null);
  const asideRef = useRef(null);

  const story = data?.story || {
    kicker: "The Story",
    heading: "Toni Kroos World Legacy",
    lead: "Selama 17 tahun di panggung termegah sepak bola dunia, Toni Kroos memenangkan 34 gelar mayor dan 6 trofi Liga Champions.",
    body: "Mimpi terbesar Toni selalu sederhana: memainkan sepak bola dengan presisi murni, tanpa kepanikan, dan mengendalikan jalannya laga dari kepalanya sebelum kakinya menyentuh bola."
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Reveal main content column elements
      if (mainColRef.current) {
        gsap.from(mainColRef.current.children, {
          scrollTrigger: {
            trigger: mainColRef.current,
            start: "top 82%",
            toggleActions: "play none none none"
          },
          y: 40,
          opacity: 0,
          duration: 0.9,
          stagger: 0.16,
          ease: "power3.out",
          clearProps: "all"
        });
      }

      // 2. Reveal sticky aside card with subtle slide
      if (asideRef.current) {
        gsap.from(asideRef.current, {
          scrollTrigger: {
            trigger: asideRef.current,
            start: "top 80%",
            toggleActions: "play none none none"
          },
          x: 40,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          clearProps: "all"
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [data]);

  return (
    <section ref={sectionRef} id="story" className="section--story">
      <div className="container">
        {/* Eliud Signature Icon Heading */}
        <div className="icon-heading">
          <Star size={20} className="icon-heading__star" />
          <span className="icon-heading__label">{story.kicker}</span>
        </div>

        {/* Section Title */}
        <h2 className="story-editorial__heading">{story.heading}</h2>

        <div className="story-editorial__layout">
          {/* Main Longform Column */}
          <div ref={mainColRef} className="story-editorial__main">
            <p className="story-editorial__lead">
              {story.lead}
            </p>

            <blockquote className="story-editorial__quote">
              "Sepak bola bagi saya adalah tentang kendali. Jika Anda menguasai tempo dan ruang, lawan tidak memiliki apa pun."
              <span className="story-editorial__byline">— Toni Kroos</span>
            </blockquote>

            <p className="story-editorial__body">
              {story.body}
            </p>
          </div>

          {/* Sticky Sidebar with Full Uncropped User Photo */}
          <aside ref={asideRef} className="story-editorial__aside">
            <div className="story-editorial__card">
              <div className="story-editorial__img-container">
                <img 
                  src="/assets/kroos_trophies.jpg" 
                  alt="Toni Kroos Mengangkat Trofi Liga Champions" 
                  className="story-editorial__img"
                  loading="lazy" 
                />
              </div>
              <div className="story-editorial__card-body">
                <h3 className="story-editorial__card-title">Warisan 6 Trofi Eropa</h3>
                <p className="story-editorial__card-text">
                  Kroos mengangkat trofi Liga Champions ke-6 dalam kariernya di Stadion Wembley (2024), menyamai rekor Paco Gento sepanjang masa.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
