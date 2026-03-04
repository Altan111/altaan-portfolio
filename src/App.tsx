import AIAssistant from "./components/AIAssistant";
 import DevTerminal from "./components/DevTerminal";
 import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import CustomCursor from "./components/ui/CustomCursor";
import Background3D from "./components/ui/Background3D";
import TerminalIntro from "./components/TerminalIntro";

export default function App() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 font-sans selection:bg-indigo-500/30 md:cursor-none">
      
      <CustomCursor />
      <Background3D />

      <Navbar />

      <main className="relative z-10">

        <Hero />
        <TerminalIntro />
        <DevTerminal />
        <AIAssistant />

<About />
<Services />
<Skills />
<Projects />
<Contact />

      </main>

    </div>
  );
}