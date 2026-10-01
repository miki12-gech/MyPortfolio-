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
import InterfaceChapter from './components/chapters/InterfaceChapter';
import EngineChapter from './components/chapters/EngineChapter';
import DataChapter from './components/chapters/DataChapter';
import IntelligenceChapter from './components/chapters/IntelligenceChapter';
import SecurityChapter from './components/chapters/SecurityChapter';
import InfrastructureChapter from './components/chapters/InfrastructureChapter';
import WorkChapter from './components/chapters/WorkChapter';
import EngineerChapter from './components/chapters/EngineerChapter';
import SystemCompleteChapter from './components/chapters/SystemCompleteChapter';

function App() {
  return (
    <div className="min-h-screen bg-bg-deep text-foreground font-sans grain-overlay relative overflow-x-hidden">
      {/* System-level persistent UI */}
      <Navbar />
      <ChapterIndicator />
      <SystemPath />

      <main>
        {/* SIGNAL — The Hero */}
        <SignalChapter />

        {/* 01 / INTERFACE */}
        <InterfaceChapter />

        {/* 02 / ENGINE */}
        <EngineChapter />

        {/* 03 / DATA */}
        <DataChapter />

        {/* 04 / INTELLIGENCE */}
        <IntelligenceChapter />

        {/* 05 / SECURITY */}
        <SecurityChapter />

        {/* 06 / INFRASTRUCTURE */}
        <InfrastructureChapter />

        {/* 07 / THE WORK */}
        <WorkChapter />

        {/* 08 / THE ENGINEER */}
        <EngineerChapter />

        {/* 09 / SYSTEM COMPLETE + CONTACT */}
        <SystemCompleteChapter />
      </main>
    </div>
  );
}

export default App;
