/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Maximize2, Layers, Clock, Tag, X } from "lucide-react";
import { useState } from "react";
import { useOrderModal } from "../contexts/OrderModalContext";

interface Project {
  id: number;
  title: string;
  category: string;
  material: string;
  method: string;
  task: string;
  duration: string;
  price: string;
  image: string;
  video?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "ОБРАЗОВАТЕЛЬНАЯ\nШКОЛА «ПОКОЛЕНИЕ»",
    category: "Индивидуальный заказ",
    material: "ABS / Фотополимер",
    method: "Многоцветная печать",
    task: "Полный цикл: от идеи до реализации. Разработка мерча и кастомных брелков (100 шт, 4х4 см).",
    duration: "14 дней",
    price: "NDA",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
    video: "/11.mp4"
  },
  {
    id: 2,
    title: "Коллаборация с блогером",
    category: "Fashion / Аксессуары",
    material: "Гибридный полимер",
    method: "SLA / Покраска",
    task: "Партнерство с топ-блогером (NDA). Продано более 1000 экземпляров за 3 недели. Полный цикл производства на нашей базе.",
    duration: "4 часа / изд.",
    price: "14 500 ₽",
    image: "https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=800&auto=format&fit=crop",
    video: "/22.MP4"
  },
  {
    id: 3,
    title: "Инструменты ГК «Смит»",
    category: "Серийное производство",
    material: "Ударопрочный ABS",
    method: "FDM / Литье",
    task: "Производим брендированные строй инструменты для федеральной сети. За 2 года работы отгружено более 10 000 изделий.",
    duration: "2+ года",
    price: "850 изд. (заказ)",
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=800&auto=format&fit=crop",
    video: "/33.mp4"
  }
];

export function Gallery() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const { openModal } = useOrderModal();

  return (
    <section id="кейсы" className="py-16 md:py-32 bg-bee-black lg:px-12">
      {/* Full-screen Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4 md:p-12"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-6xl aspect-video bg-black shadow-2xl border border-bee-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <video 
                src={selectedVideo} 
                className="w-full h-full object-contain" 
                controls 
                autoPlay 
              />
              <button 
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-10 md:-top-12 right-0 text-bee-white/60 hover:text-bee-yellow flex items-center gap-2 uppercase text-[10px] tracking-widest font-bold font-mono transition-colors"
              >
                Закрыть <X className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16 md:mb-24 space-y-8 md:space-y-12">
          <div className="max-w-4xl">
            <span className="text-bee-yellow text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.4em] block mb-2 md:mb-4 italic">Архив_Кейсов</span>
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85] italic skew-heading">
              Галерея<br /><span className="text-bee-yellow">Спецзаказов</span>
            </h2>
          </div>
          <p className="text-base md:text-lg text-bee-text-muted max-w-2xl font-light leading-relaxed">
            Мы не просто печатаем детали — мы решаем сложные технологические задачи. 
            От макетов до серийного производства.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project: any) => (
            <motion.div 
              key={project.id}
              className="bg-bee-black group relative overflow-hidden flex flex-col border border-bee-border hover:border-bee-yellow/50 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] z-0 hover:z-10"
            >
              <div className="aspect-[4/5] overflow-hidden relative bg-bee-black">
                {project.video ? (
                  <video 
                    src={project.video} 
                    autoPlay 
                    muted 
                    loop 
                    playsInline 
                    className="w-full h-full object-cover grayscale-0 md:grayscale md:group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                  />
                ) : (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover grayscale-0 md:grayscale md:group-hover:grayscale-0 transition-all duration-700 scale-105 md:scale-110 group-hover:scale-100"
                  />
                )}
                
                {/* Fixed the 'line' issue by making the gradient overlay perfectly flush and deeper */}
                <div className="absolute inset-0 bg-gradient-to-t from-bee-black via-transparent to-transparent flex flex-col justify-end">
                  <div className="h-24 bg-gradient-to-t from-bee-black to-transparent"></div>
                </div>
                
                {/* Tech Wireframe Overlay on Hover */}
                <div className="absolute inset-0 opacity-0 md:group-hover:opacity-10 pointer-events-none transition-opacity duration-700 bg-[linear-gradient(rgba(255,215,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,215,0,0.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

                <div className="absolute top-4 md:top-6 left-4 md:left-6 flex flex-col gap-2">
                  <span className="bg-bee-yellow text-bee-black text-[8px] md:text-[9px] font-bold px-3 py-1 uppercase tracking-widest w-fit">
                    {project.category}
                  </span>
                  <div className="flex gap-1">
                    <span className="bg-bee-black/80 text-bee-white/60 text-[7px] md:text-[8px] px-2 py-0.5 rounded-sm uppercase tracking-widest">{project.material}</span>
                    <span className="bg-bee-black/80 text-bee-yellow/60 text-[7px] md:text-[8px] px-2 py-0.5 rounded-sm uppercase tracking-widest">{project.method}</span>
                  </div>
                </div>

                <div className="absolute top-4 right-4 md:top-6 md:right-6 z-10">
                  {project.video && (
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedVideo(project.video!);
                      }}
                      className="w-8 h-8 md:w-10 md:h-10 bg-bee-white/10 backdrop-blur-md flex items-center justify-center rounded-full md:opacity-0 md:group-hover:opacity-100 transition-opacity hover:bg-bee-yellow md:group-hover:text-bee-black"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>

              <div className="p-6 md:p-10 flex-grow flex flex-col">
                <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight mb-4 md:mb-6 italic group-hover:text-bee-yellow transition-colors whitespace-pre-line">
                  {project.title}
                </h3>
                
                <div className="space-y-4 md:space-y-6 flex-grow">
                  <div className="flex gap-4">
                    <Layers className="w-4 h-4 text-bee-yellow shrink-0 mt-1" />
                    <div>
                      <span className="block text-[9px] md:text-[10px] uppercase font-bold tracking-widest text-bee-text-muted mb-1">Задача</span>
                      <p className="text-xs md:text-sm text-bee-white/60 font-light">{project.task}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 pt-4 md:pt-6 border-t border-bee-border">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Clock className="w-3 h-3 text-bee-yellow" />
                        <span className="text-[8px] md:text-[9px] uppercase font-bold tracking-widest text-bee-text-muted">Срок</span>
                      </div>
                      <span className="text-xs md:text-sm font-mono text-bee-white">{project.duration}</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Tag className="w-3 h-3 text-bee-yellow" />
                        <span className="text-[8px] md:text-[9px] uppercase font-bold tracking-widest text-bee-text-muted">Цена</span>
                      </div>
                      <span className="text-xs md:text-sm font-mono text-bee-white">{project.price}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 md:mt-8 flex flex-col gap-3">
                    <button 
                      onClick={() => openModal()}
                      className="w-full py-3 md:py-4 border border-bee-border text-[9px] md:text-[10px] uppercase font-bold tracking-[0.3em] hover:bg-bee-white/5 transition-all flex items-center justify-center gap-2"
                    >
                    Подробнее <ArrowUpRight className="w-3 h-3" />
                    </button>
                    <button 
                      onClick={() => openModal()}
                      className="w-full py-2 text-[8px] md:text-[9px] uppercase font-bold tracking-[0.2em] text-bee-yellow hover:text-bee-white transition-colors bg-bee-yellow/5 hover:bg-bee-yellow/10"
                    >
                    Хочу такой же проект
                    </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 md:mt-20 p-6 md:p-12 border border-bee-border bg-bee-gray relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-bee-yellow/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-8">
            <div>
              <h4 className="text-xl md:text-2xl font-bold uppercase tracking-tight italic mb-2">Не нашли похожий проект?</h4>
              <p className="text-sm md:text-base text-bee-text-muted font-light">Мы беремся за задачи любой сложности, которые другие называют невозможными.</p>
            </div>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => openModal()}
              className="w-full md:w-auto px-8 md:px-10 py-4 md:py-5 bg-bee-white text-bee-black text-[9px] md:text-[10px] font-bold uppercase tracking-widest hover:bg-bee-yellow transition-colors whitespace-nowrap active:opacity-80 text-center"
            >
              Обсудить нестандартную задачу
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
