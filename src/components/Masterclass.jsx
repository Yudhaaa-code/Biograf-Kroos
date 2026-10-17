import React, { useState, useRef, useEffect } from 'react';

export default function Masterclass({ data, lang }) {
  const masterclass = data?.masterclass || {};
  const canvasRef = useRef(null);

  const tacticalPrinciples = masterclass.tacticalPrinciples || [
    {
      num: "01",
      heading: lang === 'id' ? "Orientasi Tubuh Sebelum Menerima Bola" : "Pre-Orientation Body Shape",
      body: lang === 'id' 
        ? "Kroos selalu memindai lapangan 3 kali dalam 5 detik sebelum bola tiba, mengetahui opsi umpan sebelum sentuhan pertama."
        : "Scanning three times in five seconds before reception, deciding the release before his boot touches leather."
    },
    {
      num: "02",
      heading: lang === 'id' ? "Pergeseran Poros ke Half-Space Kiri" : "Left Half-Space Overload",
      body: lang === 'id'
        ? "Menjatuhkan diri di antara bek tengah kiri dan bek sayap untuk menarik garis pressing pertama dan membuka koridor diagonal."
        : "Dropping between the left center-back and full-back to bypass the initial pressing line and unlock diagonal switches."
    },
    {
      num: "03",
      heading: lang === 'id' ? "Bobot & Putaran Umpan Sempurna" : "Immaculate Weight & Trajectory",
      body: lang === 'id'
        ? "Setiap umpan selalu mendarat lembut tepat di kaki terkuat rekan setim dalam kecepatan lari tanpa harus memperlambat langkah."
        : "Pacing the ball precisely into the receiver's front foot, preserving forward momentum without braking stride."
    }
  ];

  const readoutsLabels = masterclass.readouts || {
    dist: lang === 'id' ? 'Jarak Terukur' : 'Pass Distance',
    velocity: lang === 'id' ? 'Kecepatan Bola' : 'Ball Velocity',
    spin: lang === 'id' ? 'Sudut Putaran' : 'Spin Curve',
    target: lang === 'id' ? 'Koridor Sasaran' : 'Target Channel'
  };

  const [telemetry, setTelemetry] = useState({
    distance: '48.2 m',
    velocity: '84.5 km/h',
    spin: '+14.2°',
    zone: lang === 'id' ? 'Sayap Kanan' : 'Right Flank'
  });

  const drawTacticalPitch = (ctx, w, h) => {
    ctx.fillStyle = '#06160e';
    ctx.fillRect(0, 0, w, h);

    ctx.strokeStyle = 'rgba(74, 222, 128, 0.15)';
    ctx.lineWidth = 1;

    for (let x = 40; x < w; x += 60) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
    }
    for (let y = 30; y < h; y += 45) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }

    ctx.strokeStyle = 'rgba(74, 222, 128, 0.4)';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(15, 15, w - 30, h - 30);

    ctx.beginPath();
    ctx.moveTo(w / 2, 15);
    ctx.lineTo(w / 2, h - 15);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(w / 2, h / 2, 42, 0, Math.PI * 2);
    ctx.stroke();

    // Penalty box
    ctx.strokeRect(15, (h - 110) / 2, 60, 110);
    ctx.strokeRect(w - 75, (h - 110) / 2, 60, 110);
  };

  const animateTrajectory = (ctx, startX, startY, endX, endY, w, h) => {
    const ctrlX = (startX + endX) / 2 - 25;
    const ctrlY = Math.min(startY, endY) - 55;

    let t = 0;
    const render = () => {
      drawTacticalPitch(ctx, w, h);

      // Kroos origin node
      ctx.fillStyle = '#d8b15a';
      ctx.beginPath();
      ctx.arc(startX, startY, 7, 0, Math.PI * 2);
      ctx.fill();

      // Halo ring
      ctx.strokeStyle = 'rgba(216, 177, 90, 0.4)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(startX, startY, 13, 0, Math.PI * 2);
      ctx.stroke();

      // Number 8 label
      ctx.fillStyle = '#090a0d';
      ctx.font = 'bold 9px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('8', startX, startY);

      // Target pin
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(endX, endY, 5, 0, Math.PI * 2);
      ctx.fill();

      // Laser trajectory line
      ctx.strokeStyle = '#d8b15a';
      ctx.lineWidth = 2.5;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.quadraticCurveTo(ctrlX, ctrlY, endX, endY);
      ctx.stroke();
      ctx.setLineDash([]);

      // Progressing ball
      const curX = (1 - t) * (1 - t) * startX + 2 * (1 - t) * t * ctrlX + t * t * endX;
      const curY = (1 - t) * (1 - t) * startY + 2 * (1 - t) * t * ctrlY + t * t * endY;

      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(curX, curY, 4, 0, Math.PI * 2);
      ctx.fill();

      if (t < 1) {
        t += 0.045;
        requestAnimationFrame(render);
      }
    };

    render();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    
    canvas.width = rect.width * 2;
    canvas.height = rect.height * 2;
    ctx.scale(2, 2);

    drawTacticalPitch(ctx, rect.width, rect.height);
    animateTrajectory(ctx, rect.width * 0.22, rect.height * 0.65, rect.width * 0.78, rect.height * 0.28, rect.width, rect.height);
  }, []);



  const handleTacticalClick = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    const startX = rect.width * 0.22;
    const startY = rect.height * 0.65;

    const pxDist = Math.hypot(clickX - startX, clickY - startY);
    const meters = (pxDist * 0.17).toFixed(1);
    const speed = (68 + pxDist * 0.08).toFixed(1);
    const angle = ((clickY - startY) * 0.14).toFixed(1);

    let zoneLabel = lang === 'id' ? 'Area Sentral' : 'Central Channel';
    if (clickY < rect.height * 0.35) zoneLabel = lang === 'id' ? 'Sayap Kanan' : 'Right Flank';
    if (clickY > rect.height * 0.65) zoneLabel = lang === 'id' ? 'Sayap Kiri' : 'Left Flank';
    if (clickX > rect.width * 0.75) zoneLabel += lang === 'id' ? ' (Kotak Penalti)' : ' (Box)';

    setTelemetry({
      distance: `${meters} m`,
      velocity: `${speed} km/h`,
      spin: `${angle > 0 ? '+' : ''}${angle}°`,
      zone: zoneLabel
    });

    const ctx = canvas.getContext('2d');
    animateTrajectory(ctx, startX, startY, clickX, clickY, rect.width, rect.height);
  };

  return (
    <section id="masterclass" className="tactics-section">
      <div className="container">
        <div className="section-head">
          <span className="kicker">{masterclass.kicker || (lang === 'id' ? "Masterclass Umpan" : "Passing Masterclass")}</span>
          <h2>{masterclass.title || (lang === 'id' ? "Anatomi Presisi & Visi Spasial" : "Spatial Geometry & Metronome Precision")}</h2>
          <p>{masterclass.subtitle || (lang === 'id' ? "Bagaimana Toni Kroos mendikte tempo dan membongkar garis pertahanan terketat di dunia." : "How Toni Kroos manipulated defensive lines and dictated continental tempo.")}</p>
        </div>

        {/* 3 Core Tactical Principles */}
        <div className="tactics-principles-row">
          {tacticalPrinciples.map((tp, idx) => (
            <div key={idx} className="principle-box">
              <div className="principle-num">{tp.num}</div>
              <h3 className="principle-heading">{tp.heading}</h3>
              <p className="principle-body">{tp.body}</p>
            </div>
          ))}
        </div>

        {/* Tactical Whiteboard Frame */}
        <div className="tactical-board-frame">
          <div className="board-top-status">
            <h3 className="board-title">{masterclass.canvasPitchTitle || (lang === 'id' ? "Simulasi Umpan Interaktif" : "Interactive Passing Pitch")}</h3>
            <span className="board-hint">{masterclass.canvasPitchHint || (lang === 'id' ? "Klik di mana saja pada lapangan untuk menguji lintasan umpan Kroos" : "Click anywhere on the pitch to simulate Kroos's laser delivery")}</span>
          </div>

          <div className="tactical-canvas-wrap" onClick={handleTacticalClick}>
            <canvas ref={canvasRef} className="interactive-pitch-canvas" />
          </div>

          {/* Real Telemetry Readout */}
          <div className="tactical-readouts-bar">
            <div className="readout-cell">
              <div className="readout-lbl">{readoutsLabels.dist}</div>
              <div className="readout-val">{telemetry.distance}</div>
            </div>
            <div className="readout-cell">
              <div className="readout-lbl">{readoutsLabels.velocity}</div>
              <div className="readout-val">{telemetry.velocity}</div>
            </div>
            <div className="readout-cell">
              <div className="readout-lbl">{readoutsLabels.spin}</div>
              <div className="readout-val">{telemetry.spin}</div>
            </div>
            <div className="readout-cell">
              <div className="readout-lbl">{readoutsLabels.target}</div>
              <div className="readout-val" style={{ color: 'var(--gold-accent)' }}>{telemetry.zone}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
