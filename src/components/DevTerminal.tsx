import { useState } from "react";

export default function DevTerminal() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState<string[]>([]);

  const commands: any = {
    help: "Commands: help, about, skills, projects, contact",

    about: "I am Altaan Qureshi, Full Stack Developer & AI Tools Expert.",

    skills: "HTML, CSS, JavaScript, React, Node.js, MongoDB, AI Tools",

    projects: "Portfolio Website, AI Tools Automation, Web Applications",

    contact: "Email: altaanqureshi756@gmail.com",
  };

  const handleCommand = (e: any) => {
    if (e.key === "Enter") {
      const command = input.toLowerCase();

      const result = commands[command] || "Command not found";

      setOutput([...output, `> ${command}`, result]);
      setInput("");
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-black text-green-400 p-6 rounded-lg font-mono">

      {output.map((line, i) => (
        <div key={i}>{line}</div>
      ))}

      <div className="flex">
        <span className="mr-2">{">"}</span>

        <input
          className="bg-black outline-none w-full"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleCommand}
          placeholder="type command..."
        />
      </div>

    </div>
  );
}