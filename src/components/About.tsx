import { motion } from "motion/react";
import { User, Award, BookOpen } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Engineering Efficiency through <span className="text-indigo-400">Innovation</span>
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Entry-level Full Stack Developer & AI Tools Expert with hands-on project experience in web development and AI-based workflow automation.
              </p>
              <p>
                Skilled in prompt engineering, modern web technologies, and building scalable digital solutions. Passionate about using AI to improve productivity and create smart automation systems.
              </p>
              <p>
                Eager to contribute and grow in a dynamic tech environment, leveraging my dual capability in infrastructure and intelligent automation.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-900/50 backdrop-blur-sm border border-slate-800">
                <h3 className="text-2xl font-bold text-white mb-1">3+</h3>
                <p className="text-sm text-slate-500">Years of Academic Excellence</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/50 backdrop-blur-sm border border-slate-800">
                <h3 className="text-2xl font-bold text-white mb-1">5+</h3>
                <p className="text-sm text-slate-500">Major Projects Delivered</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-cyan-500/20 rounded-2xl blur-2xl"></div>
            <div className="relative bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-indigo-400" />
                Education History
              </h3>
              
              <div className="space-y-6">
                <div className="relative pl-6 border-l border-slate-800">
                  <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-indigo-500"></div>
                  <h4 className="text-white font-medium">Diploma in Computer Science & Engineering</h4>
                  <p className="text-sm text-slate-500">PK Polytechnic | Pursuing (2023 - 2026)</p>
                </div>

                <div className="relative pl-6 border-l border-slate-800">
                  <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                  <h4 className="text-white font-medium">Intermediate (12th)</h4>
                  <p className="text-sm text-slate-500">UP Board | 2023</p>
                </div>

                <div className="relative pl-6 border-l border-slate-800">
                  <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                  <h4 className="text-white font-medium">High School (10th)</h4>
                  <p className="text-sm text-slate-500">UP Board | 2021</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
