/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Users, PenTool, Lightbulb, ArrowUpRight } from "lucide-react";
import { useOrderModal } from "../contexts/OrderModalContext";

export function WhatWeDo() {
  const { openModal } = useOrderModal();
  
  return (
    <section id="что-мы-делаем" className="py-20 md:py-32 border-t border-bee-border bg-bee-black transition-colors relative overflow-hidden">
      <div className="absolute top-0 right-0 p-8 font-mono text-[10px] text-bee-white/10 uppercase tracking-widest hidden lg:block">
        Инициализация_Партнерства // 0xBBEE
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-3xl">
            <span className="text-bee-yellow text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.4em] block mb-2 md:mb-4 italic">Миссия_BlackBee</span>
            <h2 className="text-[9vw] sm:text-4xl md:text-6xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85] italic skew-heading">
              Ваше<br /><span className="text-bee-yellow">Технологическое</span><br />Плечо
            </h2>
          </div>
          <div className="max-w-xs md:text-right flex-shrink-0 lg:pb-4">
            <div className="w-12 h-1 bg-bee-yellow mb-4 md:ml-auto"></div>
            <p className="font-mono text-[10px] md:text-xs text-bee-white/40 uppercase tracking-widest">
              Синхронизация на этапе проектирования
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 md:gap-16 items-start">
          <div className="lg:col-span-5 text-base md:text-lg text-bee-text-muted font-light leading-relaxed space-y-6">
            <p>
              Black Bee — это больше, чем 3D-печать. Это пространство, где любая смелая идея находит свое идеальное физическое воплощение.
            </p>
            <p>
              Мы работаем с дизайнерами, архитекторами и творческими предпринимателями, подключаясь к процессам на самых ранних этапах. Мы здесь, чтобы помочь вам понять, как цифровая задумка будет выглядеть и работать в реальном мире.
            </p>
            <div className="bg-bee-gray p-6 border-l-4 border-bee-yellow italic font-medium text-bee-white text-sm md:text-base mt-8">
              "Вы дизайнер или креативный человек, который хочет воплотить смелую идею? Давайте в проект. Мы реализуем ваше авторское видение."
            </div>
          </div>

          <div className="lg:col-span-1"></div>

          <div className="lg:col-span-6 grid sm:grid-cols-2 gap-8">
            <div className="group border border-bee-border bg-bee-gray/50 p-6 hover:border-bee-yellow/50 hover:bg-bee-gray transition-all">
              <PenTool className="w-8 h-8 text-bee-yellow mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold uppercase tracking-widest italic mb-3">Соавторство</h3>
              <p className="text-xs text-bee-white/50 font-mono leading-relaxed">
                Погружаемся в специфику вашего дизайна. Решаем инженерные задачи, сохраняя первоначальный творческий порыв.
              </p>
            </div>
            
            <div className="group border border-bee-border bg-bee-gray/50 p-6 hover:border-bee-yellow/50 hover:bg-bee-gray transition-all">
              <Lightbulb className="w-8 h-8 text-bee-white mb-6 group-hover:scale-110 group-hover:text-bee-yellow transition-all" />
              <h3 className="text-lg font-bold uppercase tracking-widest italic mb-3">Экспертиза</h3>
              <p className="text-xs text-bee-white/50 font-mono leading-relaxed">
                Выбираем оптимальные материалы и технологии под конкретную эстетическую и функциональную задачу.
              </p>
            </div>

            <button 
              onClick={() => openModal('idea')}
              className="group border border-bee-border bg-bee-gray/50 p-6 hover:border-bee-yellow/50 hover:bg-bee-gray transition-all sm:col-span-2 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6 cursor-pointer w-full text-left"
            >
              <div>
                <h3 className="text-lg font-bold uppercase tracking-widest italic mb-2 text-bee-yellow">Обсудить идею</h3>
                <p className="text-xs text-bee-white/50 font-mono">
                  Просто заполните форму и приложите фото или набросок — мы возьмем остальное на себя.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-mono text-[10px] uppercase tracking-widest text-bee-white group-hover:text-bee-yellow transition-colors hidden sm:block">
                  Заполнить форму
                </span>
                <div className="w-12 h-12 flex-shrink-0 border border-bee-yellow/20 flex items-center justify-center rounded-full group-hover:bg-bee-yellow group-hover:text-bee-black transition-colors">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
