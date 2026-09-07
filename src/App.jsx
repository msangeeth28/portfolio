import { ThemeProvider } from "./components/ThemeToggle";
import { LoadingScreen } from "./components/LoadingScreen";
import { AmbientBackground } from "./components/AmbientBackground";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";
import { Certifications } from "./components/Certifications";
import { Extras } from "./components/Extras";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <ThemeProvider>
      <LoadingScreen />
      <AmbientBackground />
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Extras />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
