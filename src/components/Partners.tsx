/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Users, Layers, ShieldCheck, CheckCircle2 } from "lucide-react";

const partners = [
  { name: "REVENT", size: "text-2xl md:text-4xl", highlight: true },
  { name: "ARCH_STUDIO", size: "text-lg md:text-xl", highlight: false },
  { name: "TECH-D", size: "text-xl md:text-2xl", highlight: false },
  { name: "B-PRO", size: "text-lg md:text-xl", highlight: false },
  { name: "CREATIVE_LAB", size: "text-xl md:text-2xl", highlight: false },
  { name: "FORMA", size: "text-lg md:text-xl", highlight: false },
];

export function Partners() {
  return (
    <section id="партнеры" className="py-16 md:py-24 border-t border-bee-border bg-bee-gray overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-bee-yellow/5 via-bee-black/0 to-bee-black/0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 md:mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-bee-border pb-8">
          <div>
             <span className="flex items-center gap-2 text-bee-white/40 font-mono text-[9px] md:text-[10px] uppercase tracking-widest mb-3">
              <ShieldCheck className="w-3 h-3 text-bee-yellow" /> Социальное доказательство
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter italic skew-heading">
              Нам доверяют <span className="text-bee-yellow">Лидеры</span>
            </h2>
          </div>
          <div className="max-w-[280px]">
            <p className="text-xs text-bee-white/50 font-mono leading-relaxed">
              Мы работаем напрямую с лидерами индустрии и помогаем им масштабировать их идеи, обеспечивая бесперебойное производство под проекты от 5 до 50 млн рублей.
            </p>
          </div>
        </div>
      </div>

      {/* Marquee for Partners */}
      <div className="relative w-full flex overflow-x-hidden border-y border-bee-border/50 bg-bee-black/50 select-none py-8 md:py-12">
        <div className="animate-marquee flex items-center whitespace-nowrap min-w-max">
          {[...partners, ...partners, ...partners].map((partner, i) => (
            <div key={i} className="flex items-center mx-8 md:mx-16">
              <span className={`font-black uppercase tracking-tighter italic skew-heading ${partner.size} ${partner.highlight ? 'text-bee-white drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]' : 'text-bee-white/20'}`}>
                {partner.name}
              </span>
              <div className="w-2 h-2 rounded-full bg-bee-yellow/20 ml-8 md:ml-16"></div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 md:mt-16 grid sm:grid-cols-3 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-bee-border">
        <div className="py-4 sm:py-0 sm:px-6">
          <div className="text-2xl md:text-3xl font-black italic text-bee-yellow mb-1">+50</div>
          <div className="text-[10px] text-bee-white/40 uppercase tracking-widest font-mono">Корпоративных клиентов</div>
        </div>
        <div className="py-4 sm:py-0 sm:px-6">
          <div className="text-2xl md:text-3xl font-black italic text-bee-white mb-1">100%</div>
          <div className="text-[10px] text-bee-white/40 uppercase tracking-widest font-mono">Соблюдение NDA</div>
        </div>
        <div className="py-4 sm:py-0 sm:px-6">
          <div className="text-2xl md:text-3xl font-black italic text-bee-white mb-1">№1</div>
          <div className="text-[10px] text-bee-white/40 uppercase tracking-widest font-mono">В сложных сборках</div>
        </div>
      </div>
    </section>
  );
}
