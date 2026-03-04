import { useState } from "react";

export default function AIAssistant() {
  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState("");

  const responses: any = {
    "who are you":
      "I am Altaan Qureshi, a Full Stack Developer and AI Tools Expert.",

    skills:
      "My skills include HTML, CSS, JavaScript, React, Node.js, MongoDB and AI tools.",

    contact: "You can contact me at altaanqureshi756@gmail.com",

    projects:
      "I have built portfolio websites, AI automation tools and web applications.",
  };

  const sendMessage = () => {
    if (!input) return;

    const question = input.toLowerCase();
    const reply = responses[question] || "Sorry, I don't understand that yet.";

    setMessages([...messages, { user: input }, { ai: reply }]);
    setInput("");
  };

  return (
    <div className="max-w-3xl mx-auto mt-12 bg-slate-900 p-6 rounded-xl text-white">

      <h2 className="text-xl font-bold mb-4">🤖 AI Assistant</h2>

      <div className="space-y-2 mb-4">
        {messages.map((m, i) => (
          <div key={i}>
            {m.user && <p className="text-cyan-400">You: {m.user}</p>}
            {m.ai && <p className="text-purple-400">AI: {m.ai}</p>}
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          className="flex-1 bg-slate-800 p-2 rounded"
          placeholder="Ask something..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button
          onClick={sendMessage}
          className="bg-indigo-500 px-4 rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
}