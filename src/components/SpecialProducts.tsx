/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Sparkles, Paintbrush, Layers, ArrowRight } from "lucide-react";
import React from "react";
import specialProductImg from "./12345.jpg";
import { useOrderModal } from "../contexts/OrderModalContext";

export function SpecialProducts() {
  const { openModal } = useOrderModal();

  return (
  <section id="студия" className="py-20 md:py-32 border-t border-bee-border bg-bee-black transition-colors relative">
  <div className="absolute left-0 top-1/4 w-[1px] h-32 bg-bee-yellow/50 shadow-[0_0_15px_rgba(255,215,0,0.5)]"></div>
  <div className="max-w-7xl mx-auto px-6 md:px-12">
  <div className="mb-12 md:mb-20 text-center">
  <h2 className="text-4xl md:text-5xl lg:text-5xl font-black uppercase tracking-tight leading-tight">
  Super <span className="text-bee-white/20">Special</span>
  </h2>
  <p className="mt-6 md:mt-8 text-sm md:text-base text-bee-text-muted font-mono max-w-2xl mx-auto leading-relaxed">
  Мы не просто печатаем. Мы создаем полноценные арт-объекты, монументальные инсталляции и статуи «под ключ» музейного качества.
  </p>
  </div>

  <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
  <div className="space-y-8 md:space-y-12">
  <div className="relative group pl-6 md:pl-10 border-l-2 border-bee-border hover:border-bee-yellow transition-colors">
  <span className="absolute -left-[17px] top-0 w-8 h-8 bg-bee-black border-2 border-bee-border group-hover:border-bee-yellow rounded-full flex items-center justify-center transition-colors">
  <Layers className="w-4 h-4 text-bee-white group-hover:text-bee-yellow transition-colors" />
  </span>
  <h3 className="text-xl md:text-2xl font-bold uppercase tracking-widest mb-3">01. Макро-печать</h3>
  <p className="text-sm md:text-base text-bee-white/50 font-light leading-relaxed">
  Крупноформатная печать составных деталей идеальной точности, что позволяет собирать объекты высотой в несколько метров. Мы используем передовые FDM-технологии и широкий спектр инженерных пластиков: от ударопрочного ABS и ASA до экологичного PLA и износостойкого PETG.
  </p>
  </div>

  <div className="relative group pl-6 md:pl-10 border-l-2 border-bee-border hover:border-bee-yellow transition-colors">
  <span className="absolute -left-[17px] top-0 w-8 h-8 bg-bee-black border-2 border-bee-border group-hover:border-bee-yellow rounded-full flex items-center justify-center transition-colors">
  <Paintbrush className="w-4 h-4 text-bee-white group-hover:text-bee-yellow transition-colors" />
  </span>
  <h3 className="text-xl md:text-2xl font-bold uppercase tracking-widest mb-3">02. Постобработка</h3>
  <p className="text-sm md:text-base text-bee-white/50 font-light leading-relaxed">
  Выход детали из станка — это только начало. Работа продолжается вручную: профессиональная грунтовка, шпаклевка и доведение до идеальной гладкости, стирающая следы послойной печати. Наши мастера вручную дошлифовывают каждый изгиб.
  </p>
  </div>

  <div className="relative group pl-6 md:pl-10 border-l-2 border-bee-border hover:border-bee-yellow transition-colors">
  <span className="absolute -left-[17px] top-0 w-8 h-8 bg-bee-black border-2 border-bee-border group-hover:border-bee-yellow rounded-full flex items-center justify-center transition-colors">
  <Sparkles className="w-4 h-4 text-bee-white group-hover:text-bee-yellow transition-colors" />
  </span>
  <h3 className="text-xl md:text-2xl font-bold uppercase tracking-widest mb-3">03. Художники и Материалы</h3>
  <p className="text-sm md:text-base text-bee-white/50 font-light leading-relaxed">
  В нашей команде работают профессиональные декораторы и художники. Мы используем премиальную многослойную покраску — от глубокого глянца автомобильного лака до реалистичной имитации бронзы, патины, мрамора или ржавчины.
  </p>
  </div>
  </div>

  <div className="relative aspect-square md:aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none bg-bee-gray border border-bee-border overflow-hidden group/image">
  <div className="absolute inset-0">
  <img 
    src={specialProductImg} 
    alt="Ваша идея, воплощенная нами" 
    className="w-full h-full object-cover object-center transform group-hover/image:scale-105 transition-transform duration-700 ease-out" 
    referrerPolicy="no-referrer"
  />
  </div>
  
  {/* Infographics Overlays - HUD Style - Adjusted to open LEFT */}
  <div className="absolute top-[38%] right-[22%] group/info cursor-crosshair z-20 hidden md:block">
    <div className="relative">
      <div className="w-3 h-3 bg-bee-yellow rounded-full animate-ping absolute -left-1.5 -top-1.5 opacity-80"></div>
      <div className="w-2 h-2 bg-bee-yellow rounded-full absolute -left-1 -top-1 border border-bee-black"></div>
      <div className="absolute top-0 right-full mr-6 bg-bee-black/95 backdrop-blur-xl border border-bee-yellow/30 p-4 w-60 opacity-0 group-hover/info:opacity-100 transition-all duration-300 pointer-events-none translate-x-4 group-hover/info:translate-x-0 shadow-2xl">
        <p className="font-mono text-[10px] text-bee-yellow uppercase font-black mb-2 tracking-widest border-b border-bee-yellow/20 pb-1">Детализация_Лица</p>
        <p className="font-sans text-[11px] text-bee-white/70 leading-relaxed font-light">Сверхточная проработка черт лица. Печать с разрешением 25 микрон позволяет достичь портретного сходства даже в крупном масштабе.</p>
      </div>
    </div>
  </div>
  
  <div className="absolute top-[66%] right-[18%] group/info cursor-crosshair z-20 hidden md:block">
    <div className="relative">
      <div className="w-3 h-3 bg-bee-yellow rounded-full animate-ping absolute -left-1.5 -top-1.5 opacity-80"></div>
      <div className="w-2 h-2 bg-bee-yellow rounded-full absolute -left-1 -top-1 border border-bee-black"></div>
      <div className="absolute top-0 right-full mr-6 bg-bee-black/95 backdrop-blur-xl border border-bee-yellow/30 p-4 w-60 opacity-0 group-hover/info:opacity-100 transition-all duration-300 pointer-events-none translate-x-4 group-hover/info:translate-x-0 shadow-2xl">
        <p className="font-mono text-[10px] text-bee-yellow uppercase font-black mb-2 tracking-widest border-b border-bee-yellow/20 pb-1">Фирменный_Стиль_BBee</p>
        <p className="font-sans text-[11px] text-bee-white/70 leading-relaxed font-light">Интегрированный логотип. Мы наносим любой брендинг или сложный орнамент напрямую в структуру модели на этапе 3D-проектирования.</p>
      </div>
    </div>
  </div>
  
  <div className="absolute bottom-[12%] right-[28%] group/info cursor-crosshair z-20 hidden md:block">
    <div className="relative">
      <div className="w-3 h-3 bg-bee-yellow rounded-full animate-ping absolute -left-1.5 -top-1.5 opacity-80"></div>
      <div className="w-2 h-2 bg-bee-yellow rounded-full absolute -left-1 -top-1 border border-bee-black"></div>
      <div className="absolute bottom-0 right-full mr-6 bg-bee-black/95 backdrop-blur-xl border border-bee-yellow/30 p-4 w-60 opacity-0 group-hover/info:opacity-100 transition-all duration-300 pointer-events-none translate-x-4 group-hover/info:translate-x-0 shadow-2xl">
        <p className="font-mono text-[10px] text-bee-yellow uppercase font-black mb-2 tracking-widest border-b border-bee-yellow/20 pb-1">Устойчивость_Конструкции</p>
        <p className="font-sans text-[11px] text-bee-white/70 leading-relaxed font-light">Сбалансированный центр тяжести и усиленное дно. Крупные арт-объекты стоят уверенно без дополнительных креплений к поверхности.</p>
      </div>
    </div>
  </div>
  
  <div className="absolute top-4 right-4 bg-bee-black/60 border border-bee-yellow px-3 py-2 flex items-center gap-2 backdrop-blur-md z-10 shadow-xl pointer-events-none">
  <div className="w-1.5 h-1.5 bg-bee-yellow rounded-full animate-pulse"></div>
  <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-widest text-bee-yellow font-bold">СПЕЦИФИКАЦИЯ</span>
  </div>
  </div>
  </div>

  <div className="mt-16 md:mt-24 text-center max-w-3xl mx-auto">
    <p className="text-bee-white/70 font-light mb-10 text-sm md:text-lg leading-relaxed px-4">
      Каждый проект Special Product — это вызов нашим инженерам и художникам. Мы превращаем виртуальные модели в монументальные объекты, которые украшают офисы, выставки и частные коллекции по всей стране.
    </p>
    <div className="flex flex-col items-center gap-4">
      <button 
        onClick={() => openModal('order', { notes: "Запрос через форму Special Product" })}
        className="group w-full md:w-auto inline-flex h-16 md:h-24 items-center justify-between md:justify-center gap-8 px-10 md:px-20 bg-bee-yellow text-bee-black font-black uppercase tracking-[0.3em] text-sm md:text-lg hover:bg-bee-white transition-all duration-500 shadow-[0_0_40px_rgba(255,215,0,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] active:scale-95"
      >
        <span className="leading-tight">Оставить заявку на проект</span> 
        <ArrowRight className="w-6 h-6 md:w-8 md:h-8 flex-shrink-0 group-hover:translate-x-3 transition-transform" />
      </button>
      <p className="text-bee-white/30 font-mono text-[10px] uppercase tracking-widest">Ожидаемое время ответа инженера: до 24 часов</p>
    </div>
  </div>
  </div>
  </section>
  );
}
