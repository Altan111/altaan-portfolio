import { ReactTyped } from "react-typed";

export default function TerminalIntro() {
  return (
    <div className="max-w-5xl mx-auto px-6 mt-6 font-mono text-lg">

      <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 text-transparent bg-clip-text">
        <ReactTyped
          strings={[
            "> initializing portfolio...",
            "> loading developer profile...",
            "> Welcome to Altaan's Portfolio",
            "> Full Stack Developer | AI Tools Expert"
          ]}
          typeSpeed={40}
          backSpeed={20}
          loop
        />
      </span>

    </div>
  );
}