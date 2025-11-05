import React from 'react';
import Spline from '@splinetool/react-spline';
import { Github, Linkedin, Mail, Rocket } from 'lucide-react';

const Hero3D = () => {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-900/40 to-slate-950/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950/90" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
          <Rocket className="h-4 w-4 text-cyan-400" />
          <span className="text-xs tracking-wide text-cyan-200">Tech • Portfolio • Interactive</span>
        </div>

        <h1 className="text-balance bg-gradient-to-br from-white via-cyan-200 to-blue-300 bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-5xl md:text-6xl">
          Alok — Building immersive, fast and modern experiences
        </h1>

        <p className="mt-4 max-w-2xl text-pretty text-sm text-slate-200 sm:text-base">
          Full‑stack developer skilled in C++/Python, React, FastAPI and real‑time systems. I love crafting clean UIs,
          scalable backends and playful interactions.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:alokkimtu@gmail.com"
            className="group inline-flex items-center gap-2 rounded-full bg-cyan-500 px-5 py-2.5 text-sm font-medium text-slate-950 shadow-lg shadow-cyan-500/25 transition hover:translate-y-[-1px] hover:bg-cyan-400"
          >
            <Mail className="h-4 w-4 transition-transform group-hover:-rotate-6" />
            Contact Me
          </a>
          <a
            href="https://github.com/Krishan-Kant123"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/alok-65aaa919b"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs text-slate-300">
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">DTU'27 • 8.21 CGPA</span>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Open Source</span>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Real‑time Systems</span>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">AI + GraphQL</span>
        </div>
      </div>
    </section>
  );
};

export default Hero3D;
