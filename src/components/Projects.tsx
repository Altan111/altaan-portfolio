import { motion } from "motion/react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import Card3D from "./ui/Card3D";

const projects = [
  {
    title: "AI-Integrated Secure SaaS Dashboard",
    description: "A comprehensive dashboard combining MERN stack robustness with OpenAI's API for intelligent data insights, secured via JWT authentication.",
    tags: ["MERN", "OpenAI API", "JWT", "React"],
    link: "#",
    github: "#"
  },
  {
    title: "Prompt Engineering Hub",
    description: "A centralized platform for managing and optimizing AI workflows, built with Next.js to ensure high performance and SEO capability.",
    tags: ["Next.js", "AI Workflows", "Tailwind"],
    link: "#",
    github: "#"
  },
  {
    title: "Cyber-Shield Vulnerability Scanner",
    description: "Lightweight security tool designed to identify common web vulnerabilities, demonstrating a security-first approach to software development.",
    tags: ["Python", "Security APIs", "Automation"],
    link: "#",
    github: "#"
  },
  {
    title: "FinTech Insight Engine",
    description: "Real-time financial data visualization tool leveraging complex charting libraries and external financial APIs for market analysis.",
    tags: ["JavaScript", "Chart.js", "Financial APIs"],
    link: "#",
    github: "#"
  },
  {
    title: "Automated Content Engine",
    description: "Content generation system utilizing GPT-4 to produce high-quality, context-aware text outputs with a modern Tailwind UI.",
    tags: ["GPT-4 API", "Tailwind CSS", "React"],
    link: "#",
    github: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-slate-400 max-w-xl">
              A selection of work demonstrating the convergence of full-stack engineering, AI integration, and security protocols.
            </p>
          </div>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors font-medium">
            View GitHub Profile <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card3D key={index} className="h-full">
              <div className="h-full bg-slate-900/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-800 p-8 flex flex-col">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 text-xs font-medium text-slate-300 bg-slate-800/50 border border-slate-700 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-4 pt-6 border-t border-slate-800/50">
                    <a href={project.github} className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors z-20">
                      <Github className="w-4 h-4" /> Code
                    </a>
                    <a href={project.link} className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors z-20">
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </Card3D>
          ))}
        </div>
      </div>
    </section>
  );
}
