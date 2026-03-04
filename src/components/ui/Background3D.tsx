import { motion, useScroll, useTransform } from "motion/react";

export default function Background3D() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -150]);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-slate-950">
      {/* Deep Space Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black opacity-80"></div>

      {/* 3D Grid Floor */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          perspective: "1000px",
        }}
      >
        <motion.div
          className="absolute inset-[-100%] w-[300%] h-[300%] bg-[linear-gradient(to_right,#4f46e5_1px,transparent_1px),linear-gradient(to_bottom,#4f46e5_1px,transparent_1px)] bg-[size:60px_60px]"
          style={{
            transform: "rotateX(60deg)",
            y: y1,
          }}
        />
      </div>

      {/* Floating Particles/Orbs */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px]"
        style={{ y: y2 }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-600/10 rounded-full blur-[80px]"
        style={{ y: y1 }}
      />
    </div>
  );
}
