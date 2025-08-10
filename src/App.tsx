import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { LoadingOverlay } from './components/LoadingOverlay';
import { AnimatedBackground } from './components/AnimatedBackground';
import { useScrollAnimations } from './hooks/useScrollAnimations';
import { useCursor } from './hooks/useCursor';

function App() {
  useScrollAnimations();
  useCursor();

  return (
    <div className="min-h-screen">
      <CustomCursor />
      <LoadingOverlay />
      <AnimatedBackground />
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;