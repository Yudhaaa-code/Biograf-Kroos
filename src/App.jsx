import React, { useState, useRef, Component } from 'react';
import { kroosData } from './data/kroosData';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Story from './components/Story';
import PrecisionRadar from './components/PrecisionRadar';
import TourSlider from './components/TourSlider';
import CareerTimeline from './components/CareerTimeline';
import TrophyCabinet from './components/TrophyCabinet';
import CareerGalleryTilted from './components/CareerGalleryTilted';
import QuotesLegends from './components/QuotesLegends';
import AboutGrid from './components/AboutGrid';
import BootsArchive from './components/BootsArchive';
import Masterclass from './components/Masterclass';
import PodcastVault from './components/PodcastVault';
import Foundation from './components/Foundation';
import TributeWall from './components/TributeWall';
import Footer from './components/Footer';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '4rem 2rem', textAlign: 'center', color: '#f7f7f5', backgroundColor: '#090a0d', minHeight: '100vh' }}>
          <h2 style={{ color: '#d8b15a', marginBottom: '1rem' }}>Toni Kroos World Legacy</h2>
          <p style={{ color: '#8e95a5', marginBottom: '2rem' }}>Memuat ulang konten arsip...</p>
          <button 
            onClick={() => window.location.reload()} 
            style={{ padding: '0.75rem 1.75rem', backgroundColor: '#d8b15a', color: '#090a0d', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}
          >
            Muat Ulang Halaman
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function App() {
  const [lang, setLang] = useState('id');
  const [audioPlaying, setAudioPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const gainNodeRef = useRef(null);
  const intervalRef = useRef(null);

  const currentData = kroosData[lang] || kroosData.id;

  // Warm, organic acoustic harmony tone via Web Audio API
  const toggleAudio = () => {
    if (audioPlaying) {
      if (gainNodeRef.current && audioCtxRef.current) {
        gainNodeRef.current.gain.setTargetAtTime(0, audioCtxRef.current.currentTime, 0.4);
      }
      if (intervalRef.current) clearInterval(intervalRef.current);
      setAudioPlaying(false);
    } else {
      try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        const ctx = audioCtxRef.current || new AudioCtx();
        audioCtxRef.current = ctx;

        if (ctx.state === 'suspended') {
          ctx.resume();
        }

        const masterGain = ctx.createGain();
        masterGain.gain.setValueAtTime(0.06, ctx.currentTime);
        masterGain.connect(ctx.destination);
        gainNodeRef.current = masterGain;

        // Chords inspired by calm German classical harmony (C Maj9, F Maj7, A min, G sus4)
        const chordNotes = [
          [261.63, 329.63, 392.00, 493.88],
          [349.23, 440.00, 523.25, 659.25],
          [220.00, 261.63, 329.63, 392.00],
          [196.00, 261.63, 293.66, 392.00]
        ];

        let chordIdx = 0;

        const playHarmonic = () => {
          const notes = chordNotes[chordIdx];
          chordIdx = (chordIdx + 1) % chordNotes.length;

          notes.forEach((freq) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();

            osc.type = 'triangle'; // warmer than harsh sine/square
            osc.frequency.setValueAtTime(freq, ctx.currentTime);

            gain.gain.setValueAtTime(0.001, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.025, ctx.currentTime + 1.5);
            gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 6.0);

            osc.connect(gain);
            gain.connect(masterGain);

            osc.start(ctx.currentTime);
            osc.stop(ctx.currentTime + 6.5);
          });
        };

        playHarmonic();
        intervalRef.current = setInterval(playHarmonic, 5500);
        setAudioPlaying(true);
      } catch (err) {
        console.warn('Audio synthesis notice:', err);
      }
    }
  };

  return (
    <ErrorBoundary>
      <div className="editorial-app">
        <Navbar 
          lang={lang} 
          setLang={setLang} 
          audioPlaying={audioPlaying} 
          toggleAudio={toggleAudio} 
        />
        <main>
          <Hero data={currentData} />
          <Story data={currentData} />
          <PrecisionRadar data={currentData} lang={lang} />
          <TourSlider data={currentData} lang={lang} />
          <CareerTimeline data={currentData} lang={lang} />
          <TrophyCabinet data={currentData} lang={lang} />
          <CareerGalleryTilted data={currentData} lang={lang} />
          <QuotesLegends data={currentData} lang={lang} />
          <AboutGrid data={currentData} />
          <BootsArchive data={currentData} />
          <Masterclass data={currentData} lang={lang} />
          <PodcastVault data={currentData} lang={lang} />
          <Foundation data={currentData} />
          <TributeWall data={currentData} lang={lang} />
        </main>
        <Footer data={currentData} lang={lang} />
      </div>
    </ErrorBoundary>
  );
}
