import React from 'react';
import { ExternalLink, Play, Zap } from 'lucide-react';

const projects = [
  {
    title: 'Ad‑Free Anime Streaming — Afor‑Anime',
    description:
      'Responsive anime streaming platform with SCSS styling, HLS playback via video.js, and a FastAPI backend that fetches from MyAnimeList using GraphQL. Streams are sourced from community APIs.',
    tags: ['React', 'Redux', 'SCSS', 'FastAPI', 'GraphQL', 'HLS'],
    link: '#',
  },
  {
    title: 'Real‑Time Chess — Lichess‑Inspired',
    description:
      'Multiplayer chess built with MERN + Socket.IO featuring random matchmaking, AI opponents, timed modes, ELO rating, auth + guest play, and scalable room management optimized for mobile.',
    tags: ['MongoDB', 'Express', 'React', 'Node', 'Socket.IO'],
    link: '#',
  },
  {
    title: 'Walls‑Peek — Real‑Time Wallpapers',
    description:
      'React Native Expo app delivering high‑res dynamic wallpapers scraped from external sources, with a FastAPI backend for realtime updates and AI‑powered image generation.',
    tags: ['React Native', 'Expo', 'FastAPI', 'AI', 'Realtime'],
    link: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative z-10 mx-auto max-w-7xl px-6 py-20 text-white">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Featured Projects</h2>
          <p className="mt-2 text-slate-300">A selection of things I loved building recently.</p>
        </div>
        <span className="hidden rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 md:inline-flex">
          <Zap className="mr-1 h-3.5 w-3.5 text-cyan-400" /> realtime • interactive
        </span>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article
            key={p.title}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-5 transition hover:translate-y-[-2px] hover:shadow-xl hover:shadow-cyan-500/10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/0 to-cyan-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <h3 className="relative z-10 text-lg font-semibold">{p.title}</h3>
            <p className="relative z-10 mt-2 text-sm text-slate-300">{p.description}</p>

            <div className="relative z-10 mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                  {t}
                </span>
              ))}
            </div>

            <div className="relative z-10 mt-5 flex items-center justify-between">
              <a
                href={p.link}
                target={p.link.startsWith('http') ? '_blank' : undefined}
                rel={p.link.startsWith('http') ? 'noreferrer' : undefined}
                className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300 hover:text-cyan-200"
              >
                <ExternalLink className="h-4 w-4" /> Open Project
              </a>
              <button className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white transition hover:bg-white/10">
                <Play className="h-3.5 w-3.5" /> Demo
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
