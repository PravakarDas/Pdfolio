import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Highlights from '../components/Highlights';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Certifications from '../components/Certifications';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Education from '../components/Education';
import React from 'react';

export default function Home() {
  return (
    <div className="relative z-10 flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Highlights />
        <section className="py-16">
          <div className="container mx-auto flex flex-col gap-16 px-6">
            <Skills />
            <Experience />
            <Education />
            <Certifications />
          </div>
        </section>
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
