import React from 'react';
import { Code, Layers, Database, Wrench } from 'lucide-react';

const SkillCard = ({ icon: Icon, title, items }) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:bg-white/10">
    <div className="mb-3 inline-flex items-center gap-2">
      <div className="rounded-lg bg-cyan-500/15 p-2 text-cyan-300">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-base font-semibold text-white">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {items.map((s) => (
        <span key={s} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
          {s}
        </span>
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="relative z-10 mx-auto max-w-7xl px-6 py-20 text-white">
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Tech I enjoy</h2>
      <p className="mt-2 max-w-2xl text-slate-300">
        From low‑level problem solving with C++ to crafting delightful UIs and scalable, real‑time backends.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <SkillCard icon={Code} title="Languages" items={['C++', 'Python', 'HTML', 'CSS', 'SCSS']} />
        <SkillCard icon={Layers} title="Core" items={['DSA', 'OS', 'OOP', 'DBMS']} />
        <SkillCard icon={Wrench} title="Frameworks & Libraries" items={['Node.js', 'Express', 'React', 'Next.js', 'Redux', 'React Native', 'Tailwind', 'Socket.IO', 'FastAPI']} />
        <SkillCard icon={Database} title="Data & Tools" items={['MongoDB', 'MySQL', 'Web Scraping', 'REST', 'GraphQL', 'Git', 'GitHub', 'Postman']} />
      </div>
    </section>
  );
};

export default Skills;
