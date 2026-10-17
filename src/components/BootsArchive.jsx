import React, { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function BootsArchive({ data }) {
  const sectionRef = useRef(null);
  const visualRef = useRef(null);
  const detailsRef = useRef(null);
  const specsRef = useRef(null);

  const boots = data.boots || data.bootsArchive || {};

  const specs = boots.specs || [
    {
      label: "Bahan Bagian Atas",
      value: boots.upper || "Kulit Kanguru Taurus Asli",
      desc: "Menyesuaikan bentuk kaki dengan fleksibilitas sentuhan sentimeter."
    },
    {
      label: "Sol & Pul Kustom",
      value: boots.sole || "Custom Sol Adizero F50 (2010)",
      desc: "Konfigurasi traksi khusus yang dipertahankan selama 11 musim."
    },
    {
      label: "Ritual Pembersihan",
      value: "Dibersihkan Sendiri Setiap Laga",
      desc: "Kroos mencuci dan menyikat sendiri sepatunya di wastafel kamar ganti."
    },
    {
      label: "Masa Pengabdian",
      value: boots.years || "11 Musim Beruntun (2013-2024)",
      desc: "Dipakai di semua 6 final Liga Champions dan final Piala Dunia 2014."
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Boot showcase frame animation
      if (visualRef.current) {
        gsap.from(visualRef.current, {
          scrollTrigger: {
            trigger: visualRef.current,
            start: "top 80%",
            toggleActions: "play none none none"
          },
          scale: 0.92,
          y: 40,
          opacity: 0,
          duration: 1.1,
          ease: "power3.out",
          clearProps: "all"
        });
      }

      // 2. Quote & details animation
      if (detailsRef.current) {
        gsap.from(detailsRef.current.querySelector('.boots-editorial__quote'), {
          scrollTrigger: {
            trigger: detailsRef.current,
            start: "top 80%",
            toggleActions: "play none none none"
          },
          y: 30,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          clearProps: "all"
        });
      }

      // 3. Staggered specs items
      const specItems = specsRef.current?.querySelectorAll('.boots-spec__item');
      if (specItems && specItems.length > 0) {
        gsap.from(specItems, {
          scrollTrigger: {
            trigger: specsRef.current,
            start: "top 85%",
            toggleActions: "play none none none"
          },
          y: 35,
          opacity: 0,
          stagger: 0.12,
          duration: 0.8,
          ease: "power3.out",
          clearProps: "all"
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [data]);

  return (
    <section ref={sectionRef} id="boots" className="section--boots">
      <div className="container">
        {/* Eliud Icon Heading */}
        <div className="icon-heading">
          <Star size={20} className="icon-heading__star" />
          <span className="icon-heading__label">{boots.kicker || "Artefak Koleksi"}</span>
        </div>

        <h2 className="boots-editorial__heading">{boots.title || "Sepatu Putih Adidas Adipure 11pro"}</h2>

        <div className="boots-editorial__grid">
          {/* Transparent Boot Showcase Frame */}
          <div ref={visualRef} className="boots-editorial__visual">
            <div className="boots-editorial__frame">
              <span className="boots-editorial__tag">IKONIK • 2013-2024</span>
              <img 
                src="/assets/adipure_11pro_official.png" 
                alt="Adidas Adipure 11pro Milik Toni Kroos" 
                className="boots-editorial__img"
                loading="lazy" 
              />
            </div>
          </div>

          {/* Details & Quote Column */}
          <div ref={detailsRef} className="boots-editorial__details">
            <blockquote className="boots-editorial__quote">
              "{boots.quote || "Staf kitman bahkan tidak diizinkan menyentuhnya. Saya selalu mencuci, menyikat, dan merawatnya sendiri di wastafel kamar ganti. Jika sepatu saya tidak bersih sempurna, pikiran saya tidak bisa tenang bermain bola."}"
            </blockquote>

            <div ref={specsRef} className="boots-specs__list">
              {specs.map((s, idx) => (
                <div key={idx} className="boots-spec__item">
                  <div className="boots-spec__label">{s.label}</div>
                  <div className="boots-spec__value">{s.value}</div>
                  <div className="boots-spec__desc">{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
