import { useTheme } from '@/hooks/useTheme';
import { useCursorGlow } from '@/hooks/useCursorGlow';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { USP } from '@/components/USP';
import { Education } from '@/components/Education';
import { Skills } from '@/components/Skills';
import { Experience } from '@/components/Experience';
import { Certificates } from '@/components/Certificates';
import { ServicesGallery } from '@/components/ServicesGallery';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

function App() {
  const { theme, toggleTheme } = useTheme();
  const glowRef = useCursorGlow();

  return (
    <div className="min-h-screen bg-base text-body">
      <div ref={glowRef} className="cursor-glow" />
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <USP />
        <Education />
        <Skills />
        <Experience />
        <Certificates />
        <ServicesGallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
