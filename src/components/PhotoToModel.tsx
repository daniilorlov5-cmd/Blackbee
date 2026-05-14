/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Camera, ArrowRight, Box, X, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from 'motion/react';

export function PhotoToModel() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="модель-из-фото" className="py-20 md:py-32 border-t border-bee-border bg-bee-black transition-colors overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Visual Block */}
          <div className="order-2 lg:order-1 relative group w-full mt-8 lg:mt-0">
            <div className="absolute inset-0 bg-gradient-to-br from-bee-yellow/10 to-bee-black pointer-events-none rounded-lg"></div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 lg:gap-16 relative z-10 py-16 px-6 sm:px-10 border-l-[6px] border-bee-yellow bg-bee-gray shadow-2xl backdrop-blur-md rounded-r-lg min-h-[350px]">
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-bee-black border border-bee-white/20 shadow-md flex items-center justify-center -rotate-2 group-hover:rotate-0 transition-transform duration-500">
                  <Camera className="w-8 h-8 sm:w-10 sm:h-10 text-bee-white" />
                </div>
                <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-bee-white font-bold">2D ФОТОГРАФИЯ</span>
              </div>

              <div className="hidden sm:flex items-center justify-center flex-1 min-w-[80px] border-t border-dashed border-bee-yellow/40 relative">
                <div className="absolute bg-bee-white px-2 py-1 text-[8px] font-mono text-bee-black shadow-sm uppercase font-black whitespace-nowrap">
                  НЕЙРООБРАБОТКА
                </div>
                <ArrowRight className="absolute -right-3 w-4 h-4 text-bee-yellow" />
              </div>

              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-bee-black border-2 border-bee-yellow shadow-md flex items-center justify-center rotate-3 group-hover:rotate-0 transition-transform duration-500">
                  <Box className="w-8 h-8 sm:w-10 sm:h-10 text-bee-yellow" />
                </div>
                <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-bee-yellow font-bold text-center">3D МОДЕЛЬ (STL)</span>
              </div>
              
              {/* Ready to Print Badge */}
              <div className="absolute -bottom-8 -right-4 w-20 h-20 border border-bee-border bg-bee-black p-0.5 shadow-xl rotate-12 group-hover:rotate-0 transition-transform duration-700 flex items-center justify-center z-20">
                <div className="w-full h-full border border-bee-border flex items-center justify-center bg-bee-black">
                   <span className="font-mono text-[8px] text-bee-yellow text-center uppercase tracking-widest font-black leading-tight">ГОТОВО<br/>К<br/>ПЕЧАТИ</span>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="flex items-center gap-2 text-bee-white/40 font-mono text-[9px] md:text-[10px] uppercase tracking-widest mb-4">
              <span className="w-2 h-2 bg-bee-yellow"></span> Входная Точка
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.85] italic skew-heading mb-6 md:mb-8">
              Модель<br /><span className="text-bee-yellow">Из Фотографии</span>
            </h2>
            
            <div className="space-y-6 text-sm md:text-base text-bee-text-muted font-light leading-relaxed">
              <p>
                Вам не нужно быть 3D-дизайнером или иметь готовый STL-файл. Наш уникальный сервис позволяет запустить производство, имея на руках лишь фотографию или физический предмет-образец.
              </p>
              <p>
                Мы выстроили интеллектуальный мост между картинкой и готовым физическим продуктом. Это снимает главный барьер на пути к созданию эксклюзивных деталей и объектов.
              </p>
              
              <div className="pt-4 flex flex-col sm:flex-row gap-4 mb-10">
                <div className="border-l-2 border-bee-yellow pl-4">
                  <div className="font-bold text-bee-white uppercase tracking-widest text-sm mb-1 italic">Простое фото</div>
                  <div className="font-mono text-[10px] text-bee-white/40 uppercase">Достаточно нескольких ракурсов</div>
                </div>
                <div className="border-l-2 border-bee-white/20 pl-4">
                  <div className="font-bold text-bee-white uppercase tracking-widest text-sm mb-1 italic">Сложный скан</div>
                  <div className="font-mono text-[10px] text-bee-white/40 uppercase">Для технических деталей</div>
                </div>
              </div>
              
              <div className="pt-2">
                <button onClick={() => setIsModalOpen(true)} className="inline-flex items-center gap-3 bg-bee-white text-bee-black px-8 py-4 font-bold uppercase tracking-widest text-[10px] md:text-xs hover:bg-bee-yellow hover:text-bee-black transition-colors shadow-lg">
                  Перейти на сервис
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-bee-black/80 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="bg-bee-gray border border-bee-border p-8 md:p-12 max-w-md w-full relative shadow-2xl flex flex-col items-center text-center"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-bee-text-muted hover:text-bee-yellow transition-colors p-2"
              >
                <X className="w-5 h-5" />
              </button>
              
              <Loader2 className="w-12 h-12 text-bee-yellow animate-spin mb-6" />
              
              <h3 className="text-2xl font-black uppercase tracking-tighter italic mb-4">Сервис в разработке</h3>
              <p className="text-sm text-bee-text-muted font-light mb-8">
                Нейросеть для генерации 3D-моделей из фотографий сейчас находится на этапе закрытого тестирования. Оставьте заявку на печать и мы смоделируем вашу деталь вручную!
              </p>
              
              <button 
                onClick={() => setIsModalOpen(false)}
                className="w-full border border-bee-border py-4 text-[10px] uppercase tracking-widest font-bold hover:border-bee-yellow hover:text-bee-yellow transition-colors"
              >
                Закрыть
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
