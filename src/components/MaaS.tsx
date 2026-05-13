/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Repeat, Factory, Globe, Cpu, ShieldCheck } from "lucide-react";

const features = [
  {
    id: "01",
    icon: Globe,
    title: "Распределенная сеть",
    description: "Black Bee — это не один принтер в гараже, а промышленная сеть узлов по всей стране. Это гарантирует бесперебойность."
  },
  {
    id: "02",
    icon: Repeat,
    title: "Повторяемость",
    description: "Сегодня мы печатаем одну статую, а завтра — сто таких же. С тем же микроном точности и в тот же срок."
  },
  {
    id: "03",
    icon: Factory,
    title: "Печать по требованию",
    description: "Технология «Печать по требованию». Вы получаете мощности целого завода через один простой интерфейс нашего сайта."
  }
];

export function MaaS() {
  return (
    <section id="услуги" className="py-20 md:py-32 border-t border-bee-border bg-bee-gray transition-colors">
      <div id="о-производстве" className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-20 items-center mb-16 md:mb-24">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-3 h-3 md:w-4 md:h-4 bg-bee-yellow animate-pulse"></div>
              <span className="font-mono text-sm md:text-lg uppercase tracking-[0.2em] text-bee-yellow">Пром_Инфраструктура_RU+UAE</span>
            </div>
            <h2 className="flex flex-col text-5xl md:text-7xl lg:text-[90px] font-black uppercase tracking-tighter leading-[0.9] italic skew-heading mb-8 md:mb-10">
              <span className="text-bee-white drop-shadow-lg">ВАШ СКЛАД</span>
              <div className="w-20 h-2 md:w-24 md:h-3 bg-bee-white my-2 md:my-4 drop-shadow-lg" style={{ marginLeft: "2px" }}></div>
              <span className="text-bee-yellow drop-shadow-lg">В ОБЛАКЕ</span>
            </h2>
            <p className="text-base md:text-lg text-bee-text-muted max-w-md font-light">
              Забудьте о MOQ и переполненных складах. Black Bee — это «Zero Stock» производство. 
              Ваш инвентарь теперь в цифровом облаке, а деталь печатается по запросу.
            </p>
          </div>
          
          <div className="relative group p-6 md:p-10 bg-bee-black border border-bee-border overflow-hidden">
            <div className="absolute top-0 right-0 p-4 font-mono text-xs text-bee-white/20 uppercase tracking-widest hidden sm:block">Отчет_эффективности_v1.2</div>
            <h4 className="text-sm md:text-base font-bold uppercase tracking-[0.2em] mb-6 md:mb-8 text-bee-yellow italic pt-2 sm:pt-0">Экономика Black Bee</h4>
            
            <div className="space-y-6 md:space-y-8">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-bee-border pb-4 gap-1 sm:gap-0">
                    <span className="text-xs md:text-sm uppercase tracking-widest text-bee-white/40">Оборотный капитал</span>
                    <span className="text-lg md:text-xl font-bold italic text-bee-yellow">-40% затрат</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-bee-border pb-4 gap-1 sm:gap-0">
                    <span className="text-xs md:text-sm uppercase tracking-widest text-bee-white/40">Складские площади</span>
                    <span className="text-lg md:text-xl font-bold italic text-bee-yellow">0 м² [Zero]</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-bee-border pb-4 gap-1 sm:gap-0">
                    <span className="text-xs md:text-sm uppercase tracking-widest text-bee-white/40">Минимальный заказ (MOQ)</span>
                    <span className="text-lg md:text-xl font-bold italic text-bee-yellow">1 единица</span>
                </div>
            </div>
          </div>
        </div>

        <div className="mb-16 md:mb-24 py-12 md:py-20 px-6 md:px-12 bg-bee-black border border-bee-border relative group overflow-hidden">
            {/* Stylized Node Map Visualizer */}
            <div className="absolute inset-0 opacity-10 pointer-events-none hidden md:block">
                <svg className="w-full h-full" viewBox="0 0 1000 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="200" cy="150" r="2" fill="#FFD700" className="animate-pulse" />
                    <circle cx="350" cy="200" r="2" fill="#FFD700" className="animate-pulse" />
                    <circle cx="800" cy="250" r="2" fill="#FFD700" className="animate-pulse" />
                    <circle cx="500" cy="180" r="2" fill="#FFD700" className="animate-pulse" />
                    <path d="M200 150 L350 200 L500 180 L800 250" stroke="#FFD700" strokeWidth="0.5" strokeDasharray="4 4" />
                </svg>
            </div>
            
            <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center md:text-left">
                {[
                    { city: "Москва", node: "NODE_RU_01", status: "В разработке", active: false },
                    { city: "Волгоград", node: "NODE_RU_02", status: "Активен", latency: "8мс", active: true },
                    { city: "Дубай", node: "NODE_UAE_01", status: "В разработке", active: false },
                    { city: "Новосибирск", node: "NODE_RU_03", status: "В разработке", active: false },
                ].map((n, i) => (
                    <div key={i} className="space-y-2">
                        <span className="block text-[9px] md:text-[10px] text-bee-yellow uppercase font-bold tracking-widest">{n.city}</span>
                        <span className="block text-lg md:text-2xl font-black italic uppercase tracking-tighter">{n.node}</span>
                        <div className="flex items-center gap-2 justify-center md:justify-start">
                            <span className={`w-1.5 h-1.5 rounded-full ${n.active ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]' : 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)] animate-pulse'}`}></span>
                            <span className="font-mono text-[8px] md:text-[9px] text-bee-white/40">
                              {n.status} {n.latency ? `// ${n.latency}` : ''}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1px bg-bee-border border border-bee-border">
          {features.map((feature) => (
            <div 
              key={feature.id}
              className={`bg-bee-black p-8 md:p-12 hover:bg-bee-gray transition-all duration-500 group relative flex flex-col h-full ${feature.id === "03" ? "sm:col-span-2 lg:col-span-1" : ""}`}
            >
              <div className="absolute top-0 right-0 p-4 font-mono text-bee-text-muted text-[10px] md:text-xs opacity-30">{feature.id}</div>
              <feature.icon className={`w-8 h-8 md:w-10 md:h-10 mb-8 md:mb-10 ${feature.id === "01" ? 'text-bee-yellow' : 'text-bee-logo'} group-hover:scale-110 transition-transform duration-500`} />
              <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tighter mb-4 italic group-hover:text-bee-yellow transition-colors break-words">
                {feature.title}
              </h3>
              <div className="md:min-h-[120px] lg:min-h-[100px] mb-8 md:mb-10">
                <p className="text-bee-text-muted text-xs md:text-sm leading-relaxed font-light font-mono opacity-80">
                  {feature.id === "01" 
                    ? <>Black Bee — это не один принтер в гараже, а промышленная сеть узлов по всей стране. <span className="whitespace-normal xl:whitespace-nowrap">Это гарантирует бесперебойность.</span></> 
                    : feature.description}
                </p>
              </div>
              
              <div className="mt-auto">
                <div className="h-px w-full bg-bee-border group-hover:bg-bee-yellow/20 transition-colors mb-6"></div>
                <button className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] font-bold text-bee-text-muted hover:text-bee-yellow transition-colors flex items-center gap-2">
                  Тех. Характеристики <Cpu className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
