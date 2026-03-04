import { motion } from "motion/react";
import { Mail, Linkedin, Github, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative z-10 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-500 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to build something <span className="text-indigo-400">secure</span> and <span className="text-cyan-400">intelligent</span>?
          </h2>
          <p className="text-slate-400 text-lg">
            I am currently open to internships, full-time roles, and high-impact collaborations. Let's discuss how I can contribute to your team's success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <motion.a
            href="mailto:altaanqureshi756@gmail.com"
            whileHover={{ y: -5 }}
            className="flex flex-col items-center justify-center p-8 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl hover:border-indigo-500/50 transition-colors group"
          >
            <div className="w-12 h-12 bg-slate-900/80 rounded-full flex items-center justify-center mb-4 group-hover:bg-indigo-500/20 transition-colors">
              <Mail className="w-6 h-6 text-indigo-400" />
            </div>
            <h3 className="text-white font-medium mb-1">Email Me</h3>
            <p className="text-slate-500 text-sm">altaanqureshi756@gmail.com</p>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/altaan-qureshi"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
            className="flex flex-col items-center justify-center p-8 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl hover:border-indigo-500/50 transition-colors group"
          >
            <div className="w-12 h-12 bg-slate-900/80 rounded-full flex items-center justify-center mb-4 group-hover:bg-indigo-500/20 transition-colors">
              <Linkedin className="w-6 h-6 text-indigo-400" />
            </div>
            <h3 className="text-white font-medium mb-1">LinkedIn</h3>
            <p className="text-slate-500 text-sm">Connect Professionally</p>
          </motion.a>

          <motion.a
            href="https://github.com/altaan-qureshi"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
            className="flex flex-col items-center justify-center p-8 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl hover:border-indigo-500/50 transition-colors group"
          >
            <div className="w-12 h-12 bg-slate-900/80 rounded-full flex items-center justify-center mb-4 group-hover:bg-indigo-500/20 transition-colors">
              <Github className="w-6 h-6 text-indigo-400" />
            </div>
            <h3 className="text-white font-medium mb-1">GitHub</h3>
            <p className="text-slate-500 text-sm">Review My Code</p>
          </motion.a>

          <motion.a
            href="tel:8433052331"
            whileHover={{ y: -5 }}
            className="flex flex-col items-center justify-center p-8 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl hover:border-indigo-500/50 transition-colors group"
          >
            <div className="w-12 h-12 bg-slate-900/80 rounded-full flex items-center justify-center mb-4 group-hover:bg-indigo-500/20 transition-colors">
              <Send className="w-6 h-6 text-indigo-400" />
            </div>
            <h3 className="text-white font-medium mb-1">Phone</h3>
            <p className="text-slate-500 text-sm">843-305-2331</p>
          </motion.a>
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} Altaan Qureshi. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
