import React from 'react';
import { Star, ArrowUpRight, Heart } from 'lucide-react';

export default function Foundation({ data }) {
  const foundation = data?.foundation || {
    kicker: "Yayasan",
    title: "Toni Kroos Stiftung",
    lead: "Membantu anak-anak yang sakit parah dan keluarga mereka di seluruh Jerman.",
    body: "Didirikan pada tahun 2015, Toni Kroos Stiftung membiayai perawatan medis khusus, kursi roda canggih, dan akomodasi darurat bagi anak-anak dengan penyakit berat. Bagi Toni, kepuasan sejati bukan hanya tentang medali emas, melainkan memberikan harapan hidup bagi anak-anak yang membutuhkan.",
    btnDonate: "Kunjungi Yayasan",
    url: "https://www.tonikroos-stiftung.de/"
  };

  return (
    <section id="foundation" className="section--foundation">
      {/* Background Wireframe Globe */}
      <div className="foundation__bg-globe" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 4336 2160" strokeWidth="1.2" stroke="rgba(255,255,255,0.08)" fill="none">
          <path d="M2168 2156.39C3363.32 2156.39 4332.31 1674.49 4332.31 1080.04C4332.31 485.586 3363.32 3.68848 2168 3.68848C972.684 3.68848 3.68848 485.586 3.68848 1080.04C3.68848 1674.49 972.684 2156.39 2168 2156.39Z" />
          <path d="M2168 2156.39C2993.69 2156.39 3663.04 1674.49 3663.04 1080.04C3663.04 485.586 2993.69 3.68848 2168 3.68848C1342.31 3.68848 672.96 485.586 672.96 1080.04C672.96 1674.49 1342.31 2156.39 2168 2156.39Z" />
          <path d="M2168 3.68848V2156.39" />
          <path d="M133.538 712.021H4202.54" />
          <path d="M117.806 1420.28H4221.96" />
        </svg>
      </div>

      <div className="container">
        {/* Eliud Icon Heading */}
        <div className="icon-heading">
          <Star size={20} className="icon-heading__star" />
          <span className="icon-heading__label">{foundation.kicker || "Yayasan"}</span>
        </div>

        <div className="foundation-editorial__wrapper">
          <div className="foundation-editorial__header">
            <h2 className="foundation-editorial__title">{foundation.title}</h2>
            <p className="foundation-editorial__lead">{foundation.lead}</p>
          </div>

          <div className="foundation-editorial__content">
            <p className="foundation-editorial__body">{foundation.body}</p>

            <div className="foundation-editorial__actions">
              <a 
                href={foundation.url || "https://www.tonikroos-stiftung.de/"} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-eliud-solid"
              >
                <span>{foundation.btnDonate || "Kunjungi Yayasan"}</span>
                <ArrowUpRight size={18} />
              </a>

              <div className="foundation-editorial__tagline">
                <Heart size={16} className="text-gold" />
                <span>Didirikan di Köln (2015) • Lebih dari 1.000+ anak terbantu</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
