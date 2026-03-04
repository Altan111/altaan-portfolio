import { motion } from "motion/react";
import { Code, Database, Brain, ShieldCheck, Terminal, Layout } from "lucide-react";

const skills = [
  {
    category: "Frontend Development",
    icon: Layout,
    items: ["React.js", "HTML5 & CSS3", "JavaScript (ES6+)", "Responsive UI", "Tailwind CSS"]
  },
  {
    category: "Backend & Database",
    icon: Database,
    items: ["Node.js", "Express", "MongoDB", "SQL", "RESTful APIs"]
  },
  {
    category: "AI & Automation",
    icon: Brain,
    items: ["Prompt Engineering", "ChatGPT Workflows", "LLM Optimization", "AI Integration"]
  },
  {
    category: "Cyber Security",
    icon: ShieldCheck,
    items: ["Secure Coding", "Threat Identification", "Network Security", "Vulnerability Scanning"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Arsenal</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A comprehensive toolkit designed for building scalable, secure, and intelligent applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-800 hover:border-indigo-500/50 transition-colors group"
            >
              <div className="w-12 h-12 bg-slate-900/80 rounded-lg flex items-center justify-center mb-6 group-hover:bg-indigo-500/10 transition-colors">
                <skill.icon className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-4">{skill.category}</h3>
              <ul className="space-y-2">
                {skill.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-slate-400 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-indigo-500 transition-colors"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
