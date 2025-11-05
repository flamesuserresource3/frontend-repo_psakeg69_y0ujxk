import React from 'react';
import { Award, Trophy, Star } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="relative z-10 mx-auto max-w-7xl px-6 py-20 text-white">
      <div className="grid gap-10 lg:grid-cols-2">
        {/* Achievements */}
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
            <Trophy className="h-3.5 w-3.5 text-amber-300" /> Achievements
          </div>
          <h3 className="text-2xl font-semibold">Competitive Highlights</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-200">
            <li>• Codeforces: Pupil, max rating 1356. Global Rank 2013/36218 in Round 1029.</li>
            <li>• CodeChef: 3★, max rating 1722. Global Rank 148/43132 in Starters 178.</li>
            <li>• LeetCode: Max Rating 1940+ (Knight). Solved 1000+ problems across platforms.</li>
            <li>• Runner‑up, T‑Hacks 7.0 (IEEE ADGIPS, Oct 2024) — 2nd place among 50+ teams.</li>
            <li>• Participant, brainwave 2024 (DTU) — explored AI/ML workshops and challenges.</li>
          </ul>
        </div>

        {/* Roles & Volunteering */}
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
            <Award className="h-3.5 w-3.5 text-cyan-300" /> Experience & Impact
          </div>
          <h3 className="text-2xl font-semibold">Roles & Community</h3>
          <div className="mt-4 space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center justify-between">
                <p className="font-medium">Mentor — Toyota Hackathon 2025</p>
                <span className="text-xs text-slate-400">2025</span>
              </div>
              <p className="mt-1 text-sm text-slate-300">
                Oversaw development of "Chetak", a smart wearable for road safety. Mentored IoT prototyping with
                Doppler radar and reflective design. Collaborated with Toyota experts to apply industry best practices.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="font-medium">Volunteer — Robin Hood Army</p>
              <p className="mt-1 text-sm text-slate-300">
                Distributed food to underprivileged families and taught children from economically weaker sections.
                Passionate about community, teamwork and using tech for good.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="font-medium">Interests</p>
              <p className="mt-1 text-sm text-slate-300">Cooking, cricket, music and anime for creative inspiration.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-12 flex flex-col items-center justify-center gap-3 text-center">
        <p className="text-sm text-slate-300">Open to internships, freelance collaborations and hackathons.</p>
        <a
          href="mailto:alokkimtu@gmail.com"
          className="inline-flex items-center gap-2 rounded-full bg-white/90 px-5 py-2.5 text-sm font-medium text-slate-900 transition hover:bg-white"
        >
          <Star className="h-4 w-4" /> Let's build together
        </a>
      </div>
    </section>
  );
};

export default Experience;
