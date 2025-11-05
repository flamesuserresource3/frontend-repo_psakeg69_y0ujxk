import React from 'react';
import Hero3D from './components/Hero3D';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import { ArrowUp } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-slate-950 text-white">
      {/* Nav */}
      <header className="fixed inset-x-0 top-0 z-50 mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
          <a href="#home" className="text-sm font-semibold tracking-wide text-white">ALOK</a>
          <nav className="hidden items-center gap-4 text-sm text-slate-200 sm:flex">
            <a className="rounded-md px-3 py-1 hover:bg-white/10" href="#projects">Projects</a>
            <a className="rounded-md px-3 py-1 hover:bg-white/10" href="#skills">Skills</a>
            <a className="rounded-md px-3 py-1 hover:bg-white/10" href="#experience">Experience</a>
          </nav>
          <a
            href="mailto:alokkimtu@gmail.com"
            className="rounded-full bg-cyan-500 px-3 py-1.5 text-xs font-medium text-slate-950 hover:bg-cyan-400"
          >
            Contact
          </a>
        </div>
      </header>

      {/* Sections */}
      <main className="pt-24">
        <Hero3D />
        <Projects />
        <Skills />
        <Experience />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-slate-950/60">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8 text-sm text-slate-400">
          <p>© {new Date().getFullYear()} Alok. Built with love, React and a dash of 3D.</p>
          <a
            href="#home"
            className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 hover:bg-white/10"
          >
            <ArrowUp className="h-4 w-4" /> Back to top
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
