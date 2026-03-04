import { motion } from "motion/react";
import { Code2, Bot, Terminal, ShieldCheck } from "lucide-react";

const services = [
  {
    title: "Full Stack Web Development",
    description: "Building scalable, high-performance web applications using modern stacks (MERN, Next.js). From responsive frontends to robust backends.",
    icon: Code2
  },
  {
    title: "AI Workflow Automation",
    description: "Integrating intelligent automation into business processes. Custom ChatGPT workflows and LLM optimization to drive efficiency.",
    icon: Bot
  },
  {
    title: "Prompt Engineering Consulting",
    description: "Expert crafting of prompts to maximize the output quality of Generative AI models. unlocking the full potential of AI tools.",
    icon: Terminal
  },
  {
    title: "Security-First Code Audits",
    description: "Reviewing and fortifying codebases against vulnerabilities. Implementing security best practices from the ground up.",
    icon: ShieldCheck
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative z-10">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Services & Expertise</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Delivering value through a blend of engineering precision and AI innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-indigo-500/50 hover:bg-slate-900 transition-all group"
            >
              <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors">
                <service.icon className="w-7 h-7 text-indigo-400 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
