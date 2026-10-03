/**
 * App — THE SYSTEM
 * 
 * The portfolio as a living software architecture.
 * SIGNAL → INTERFACE → ENGINE → DATA → INTELLIGENCE → SECURITY → INFRASTRUCTURE → WORK → ENGINEER → CONTACT
 */
import Navbar from './components/layout/Navbar';
import ChapterIndicator from './components/layout/ChapterIndicator';
import SystemPath from './components/system/SystemPath';
import SignalChapter from './components/chapters/SignalChapter';
import CoreArchitectureSection from './components/system/CoreArchitectureSection';
import IntelligenceSecuritySection from './components/system/IntelligenceSecuritySection';
import AdditionalProjectsSection from './components/chapters/AdditionalProjectsSection';
import EngineerChapter from './components/chapters/EngineerChapter';
import SystemCompleteChapter from './components/chapters/SystemCompleteChapter';
import AskMikiale from './components/system/AskMikiale';

function App() {
  return (
    <div className="min-h-screen bg-bg-deep text-foreground font-sans grain-overlay relative overflow-x-hidden">
      {/* System-level persistent UI */}
      <Navbar />
      <ChapterIndicator />
      <SystemPath />
      
      {/* Ask Mikiale AI Assistant */}
      <AskMikiale />

      <main>
        {/* SIGNAL — The Hero */}
        <SignalChapter />

        {/* 01-03 / CORE ARCHITECTURE + HMS PRODUCTION PROOF */}
        <CoreArchitectureSection />

        {/* 04-06 / INTELLIGENCE & SECURITY + ANDROID SECURITY & DOC FORGE PROOFS */}
        <IntelligenceSecuritySection />

        {/* 07 / ADDITIONAL SYSTEMS */}
        <AdditionalProjectsSection />

        {/* 08 / THE ENGINEER */}
        <EngineerChapter />

        {/* 09 / SYSTEM COMPLETE + CONTACT */}
        <SystemCompleteChapter />
      </main>
    </div>
  );
}

export default App;
