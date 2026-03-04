import { motion, useMotionValue, useTransform } from "motion/react";
import { ArrowRight, Download, Code2, Shield, Cpu } from "lucide-react";
import { useEffect } from "react";

export default function Hero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [5, -5]);
  const rotateY = useTransform(x, [-100, 100], [-5, 5]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const xPct = (e.clientX / window.innerWidth - 0.5) * 100;
      const yPct = (e.clientY / window.innerHeight - 0.5) * 100;
      x.set(xPct);
      y.set(yPct);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 perspective-1000">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          style={{ rotateX, rotateY, perspective: 1000 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Available for Opportunities
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight"
          >
            Architecting Secure, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 animate-gradient-x">
              AI-Driven Digital Experiences
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Computer Science Engineer building high-performance applications, securing digital systems, and leveraging Generative AI for workflow optimization.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a 
              href="#projects" 
              className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-all flex items-center justify-center gap-2 group shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40"
            >
              View My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact" 
              className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 text-white border border-slate-700 font-medium transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16 flex items-center justify-center gap-8 text-slate-500"
          >
            <div className="flex flex-col items-center gap-2 hover:text-indigo-400 transition-colors duration-300">
              <Code2 className="w-6 h-6" />
              <span className="text-xs uppercase tracking-wider">Full Stack</span>
            </div>
            <div className="w-px h-8 bg-slate-800"></div>
            <div className="flex flex-col items-center gap-2 hover:text-purple-400 transition-colors duration-300">
              <Cpu className="w-6 h-6" />
              <span className="text-xs uppercase tracking-wider">AI Strategy</span>
            </div>
            <div className="w-px h-8 bg-slate-800"></div>
            <div className="flex flex-col items-center gap-2 hover:text-cyan-400 transition-colors duration-300">
              <Shield className="w-6 h-6" />
              <span className="text-xs uppercase tracking-wider">Security</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
