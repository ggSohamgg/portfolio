import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-background text-secondary selection:bg-white/20 selection:text-white overflow-x-hidden font-sans">
      <Navbar />
      <main className="relative z-10 flex flex-col gap-0">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
      </main>
      <Contact />
    </div>
  );
}

export default App;