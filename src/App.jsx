import Navbar from './components/layout/Navbar';
import ArrivalChapter from './components/chapters/ArrivalChapter';
import AboutChapter from './components/chapters/AboutChapter';
import SkillsChapter from './components/chapters/SkillsChapter';
import ExperienceChapter from './components/chapters/ExperienceChapter';
import EducationChapter from './components/chapters/EducationChapter';
import ProjectsChapter from './components/chapters/ProjectsChapter';
import ArchitectureChapter from './components/chapters/ArchitectureChapter';
import ContactChapter from './components/chapters/ContactChapter';
import AmbientSmoke from './components/layout/AmbientSmoke';


function App() {
  return (
    <div className="min-h-screen bg-bg-deep text-foreground font-sans grain-overlay relative">
      <AmbientSmoke />
      <Navbar />

      <main>
        {/* Chapter 0 — The Arrival (Coffee Ceremony) */}
        <ArrivalChapter />

        {/* Chapter 1 — The Person */}
        <AboutChapter />

        {/* Chapter 2 — The System */}
        <SkillsChapter />

        {/* Chapter 3 — The Journey */}
        <ExperienceChapter />

        {/* Chapter 4 — The Academy */}
        <EducationChapter />

        {/* Chapter 5 — The Work */}
        <ProjectsChapter />

        {/* Chapter 6 — The Method */}
        <ArchitectureChapter />

        {/* Chapter 7 — The Conversation */}
        <ContactChapter />
      </main>
    </div>
  );
}

export default App;
