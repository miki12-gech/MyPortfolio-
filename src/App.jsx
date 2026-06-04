import ThreeBackground from './components/ThreeBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App" style={{ position: 'relative', overflowX: 'hidden' }}>
      {/* 3D WebGL Particle System Background */}
      <ThreeBackground />
      
      {/* Main UI Layer */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default App;
