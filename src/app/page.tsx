import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Certifications from '../components/Certifications';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import React from 'react';
import StarryProjectGrid from '../components/StarryProjectGrid';

export default function Home() {
  // Tailwind scroll-mt- values assume ~7-8rem header on mobile/desktop.
  // Tweak to scroll-mt-24/28/32 depending on your actual header height.
  const sectionOffset = 'scroll-mt-28 md:scroll-mt-32';

  return (
    <div className="relative z-10 flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">

        {/* home */}
        <section id="home" className={sectionOffset}>
          <Hero />
        </section>

        {/* About */}
        <section id="about" className={sectionOffset}>
          <About />
        </section>

        {/* * Starry wrapper area */}
        <StarryProjectGrid
          id="highlights"
          title="Highlights"
          withGradient={false}
          withStarfield={false}
          containerClassName="container mx-auto px-0 mb-12 space-y-12"
        >
          {/* Education is not linked in the navbar, but we can still give it an id if you ever add it */}
          <section id="education" className={sectionOffset}>
            <Education />
          </section>

          {/* Skills */}
          <section id="skills" className={sectionOffset}>
            <Skills />
          </section>

          {/* Experience */}
          <section id="experience" className={sectionOffset}>
            <Experience />
          </section>

          {/* Certifications */}
          <section id="certifications" className={sectionOffset}>
            <Certifications />
          </section>
        </StarryProjectGrid>

        {/* Projects */}
        <section id="projects" className={sectionOffset}>
          <Projects />
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
