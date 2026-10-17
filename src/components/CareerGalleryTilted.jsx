import React from 'react';
import { Star } from 'lucide-react';
import { TiltedGridHero } from '@/components/ui/tilted-grid-hero';

export default function CareerGalleryTilted({ data: _data, lang }) {
  const KROOS_GALLERY_IMAGES = [
    {
      src: '/assets/gallery/kroos_ucl_team_celebration.jpg',
      alt: 'Toni Kroos selebrasi trofi Liga Champions bersama skuad Real Madrid',
    },
    {
      src: '/assets/gallery/kroos_wembley_shoulders.jpg',
      alt: 'Toni Kroos diangkat di pundak rekan setim di Wembley 2024',
    },
    {
      src: '/assets/gallery/kroos_corner_kick_master.jpg',
      alt: 'Eksekusi sepak pojok legendaris Toni Kroos #8',
    },
    {
      src: '/assets/gallery/kroos_fans_photographers.jpg',
      alt: 'Toni Kroos memegang trofi di hadapan para fotografer dan Madridista',
    },
    {
      src: '/assets/gallery/kroos_tossed_in_air.jpg',
      alt: 'Toni Kroos dilempar ke udara oleh rekan-rekan setim',
    },
    {
      src: '/assets/gallery/kroos_monochrome_triumph.jpg',
      alt: 'Momen emosional kemenangan Toni Kroos di Wembley (Monokrom)',
    },
    {
      src: '/assets/gallery/kroos_farewell_wave.jpg',
      alt: 'Lambaian tangan Toni Kroos nomor punggung 8 ke tribun stadion',
    },
    {
      src: '/assets/gallery/kroos_bernabeu_all_trophies.jpg',
      alt: 'Podium perpisahan megah Toni Kroos bersama seluruh trofi di Santiago Bernabéu',
    },
  ];

  return (
    <section id="gallery" className="section--gallery-tilted">
      <div className="container" style={{ marginBottom: '2.5rem' }}>
        {/* Section Header */}
        <div className="icon-heading">
          <Star size={20} className="icon-heading__star" />
          <span className="icon-heading__label">
            {lang === 'id' ? 'Galeri Visual Melengkung' : 'Curved Cylindrical Gallery'}
          </span>
        </div>

        <div className="about__header" style={{ marginBottom: '1.5rem' }}>
          <h2 className="about__lead-title">
            {lang === 'id' 
              ? 'Arsip Waktu: Setiap Detik Kejayaan' 
              : 'Time Capsule: Every Frame of Glory'}
          </h2>
          <p className="about__lead-desc">
            {lang === 'id'
              ? 'Foto-foto bersejarah Toni Kroos meluncur melintasi silinder 3D melengkung, merata di tengah, dan memudar halus di kedua ujung cakrawala.'
              : 'Historical moments of Toni Kroos curving along an inner 3D cylinder, flattening at the center and fading smoothly into the edges.'}
          </p>
        </div>
      </div>

      {/* 3D Tilted Cylindrical Grid Hero */}
      <div className="container">
        <TiltedGridHero
          images={KROOS_GALLERY_IMAGES}
          speed={4}
          tileHeight={30}
          aspectRatio={16 / 9}
          gap={7}
          axis={50}
          curve={75}
          fade={15}
          className="h-[540px] w-full rounded-xl border border-[rgba(255,255,255,0.1)] bg-[#090a0d] shadow-2xl"
        >
          {/* Centered Editorial Overlay: Top heading, empty middle for 3D cylinder, bottom description */}
          <div className="relative z-10 flex h-full flex-col items-center justify-between py-10 px-6 text-center pointer-events-none">
            {/* Top: Pure Geometry. Pure Control. */}
            <div className="max-w-3xl">
              <h3 className="text-3xl font-black uppercase tracking-tight text-white sm:text-5xl drop-shadow-xl font-display">
                Pure Geometry. Pure Control.
              </h3>
            </div>

            {/* Bottom: 17 Musim... */}
            <div className="max-w-lg">
              <p className="text-sm sm:text-base text-[#d1d5db] font-medium drop-shadow-lg">
                17 musim, 34 gelar juara, dan warisan abadi sang metronom sepak bola modern.
              </p>
            </div>
          </div>
        </TiltedGridHero>
      </div>
    </section>
  );
}
