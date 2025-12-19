import AboutSection from "./components/sections/About";
import ContactSection from "./components/sections/ContactSection";
import Experiences from "./components/sections/Experiences";
import Home from "./components/sections/Home";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Achievements from "./components/sections/Achievements";
import Education from "./components/sections/Education";

export default function app() {
  return (
    <main className="flex flex-col ">
      <Home/>
      <Skills/>
      <Projects/>
      <Experiences/>
      <Achievements/>
      <Education/>
      <AboutSection/>
      <ContactSection/>
      <footer className="bg-white text-black text-center p-2">
        <p>&copy; {new Date().getFullYear()} Pravakar Das. All rights reserved.</p>
      </footer>
     
    </main>
  );
}
