/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Hexagon, Send, MessageSquare, ChevronDown, Check } from "lucide-react";
import { Logo } from "./Logo";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useOrderModal } from "../contexts/OrderModalContext";

export function Footer() {
  const { openModal } = useOrderModal();
  const [isPhoneCopied, setIsPhoneCopied] = useState(false);
  const [isIconCopied, setIsIconCopied] = useState(false);
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Вы кто?");

  const options = [
    "Селлер маркетплейса",
    "Инженер / Производство",
    "Дизайнер / Архитектор",
    "Другое"
  ];

  const handlePhoneCopy = () => {
    navigator.clipboard.writeText("+79020909222");
    setIsPhoneCopied(true);
    setTimeout(() => setIsPhoneCopied(false), 2000);
  };

  const handleIconCopy = () => {
    navigator.clipboard.writeText("+79020909222");
    setIsIconCopied(true);
    setTimeout(() => setIsIconCopied(false), 2000);
  };

  return (
    <footer className="z-20 relative">
      <div className="py-16 md:py-24 border-t border-bee-border bg-bee-black transition-colors">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Main Footer Lead Form */}
          <div className="mb-16 md:mb-24 p-6 md:p-12 bg-bee-gray border border-bee-border flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-12 transition-colors">
            <div className="max-w-md shrink-0">
              <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter italic mb-4">Обсудить проект с ведущим инженером</h3>
              <p className="text-bee-text-muted font-light leading-relaxed text-sm md:text-base">
                Получите техническую консультацию по материалам и оптимизации вашей модели для печати. Оставьте контакт — мы напишем в Telegram.
              </p>
            </div>
            <div className="flex-grow w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <input 
                type="text" 
                id="footer-contact-input"
                placeholder="@username или +7..."
                className="bg-bee-black border border-bee-border px-6 py-4 text-sm font-light text-bee-white outline-none focus:border-bee-yellow transition-colors placeholder:text-bee-text-muted/50 w-full"
                required
              />
              
              {/* Custom Dropdown */}
              <div className="relative w-full">
                <button 
                  type="button"
                  onClick={() => setIsSelectOpen(!isSelectOpen)}
                  className="w-full bg-bee-black border border-bee-border px-6 py-4 text-sm font-light text-bee-white outline-none flex items-center justify-between hover:border-bee-yellow transition-colors text-left"
                >
                  <span className={`truncate ${selectedOption === "Вы кто?" ? "text-bee-text-muted/50" : "text-bee-white"}`}>
                    {selectedOption}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-bee-yellow transition-transform duration-300 flex-shrink-0 ${isSelectOpen ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {isSelectOpen && (
                    <>
                      <div className="fixed inset-0 z-40" onClick={() => setIsSelectOpen(false)}></div>
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute bottom-full mb-2 left-0 w-full bg-bee-gray border border-bee-border z-50 overflow-hidden shadow-2xl"
                      >
                        {options.map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => {
                              setSelectedOption(opt);
                              setIsSelectOpen(false);
                            }}
                            className="w-full px-6 py-4 text-left text-sm font-light text-bee-white hover:bg-bee-black hover:text-bee-yellow transition-colors first:border-0 border-t border-bee-border/50 truncate"
                          >
                            {opt}
                          </button>
                        ))}
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>

              <button 
                onClick={() => {
                  const val = (document.getElementById('footer-contact-input') as HTMLInputElement)?.value;
                  const isTelegram = val.startsWith('@') || val.toLowerCase().startsWith('t.me/');
                  openModal({ 
                    phone: isTelegram ? '' : val,
                    telegram: isTelegram ? val : '',
                    role: selectedOption === "Вы кто?" ? "" : selectedOption 
                  });
                }}
                className="w-full bg-bee-yellow text-bee-black px-6 md:px-8 py-4 text-[10px] font-bold uppercase tracking-widest hover:bg-bee-white active:scale-95 transition-all whitespace-nowrap md:col-span-2 lg:col-span-1 shadow-[0_10px_20px_rgba(255,215,0,0.1)] text-center"
              >
                Отправить запрос
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-16 mb-16 md:mb-24">
            <div className="col-span-1 lg:col-span-2">
              <div className="flex items-center gap-4 mb-8">
                <Logo className="w-10 h-10 text-bee-logo" />
                <span className="font-display text-2xl font-bold tracking-tighter uppercase">Black Bee</span>
              </div>
              <p className="text-bee-text-muted max-w-sm mb-4 leading-relaxed text-sm font-light">
                Промышленная сеть аддитивного производства. 
                Воплощаем сложные идеи с хирургической точностью.
              </p>

              <div className="mb-8 space-y-1">
                <button 
                  onClick={handlePhoneCopy}
                  className="group flex items-center gap-3 relative"
                >
                  <span className="block text-lg font-black italic tracking-tighter group-hover:text-bee-yellow transition-colors">
                    +7 902 0909222
                  </span>
                  <AnimatePresence>
                    {isPhoneCopied && (
                      <motion.span 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        className="absolute left-full ml-4 px-2 py-0.5 bg-bee-yellow text-bee-black text-[9px] font-bold uppercase tracking-tight rounded-sm whitespace-nowrap flex items-center gap-1"
                      >
                        <Check className="w-2 h-2" /> Скопирован
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
                <span className="text-[10px] uppercase tracking-widest text-bee-text-muted">Для прямых запросов и консультаций</span>
              </div>
              
              <div className="flex flex-wrap gap-4 mb-8">
                  <div className="px-3 py-1 border border-bee-border rounded-full flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-bee-yellow"></div>
                      <span className="text-[9px] uppercase tracking-widest text-bee-white/40 font-bold">Резидент инновационного центра</span>
                  </div>
                  <div className="px-3 py-1 border border-bee-border rounded-full flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-bee-white/20"></div>
                      <span className="text-[9px] uppercase tracking-widest text-bee-white/40 font-bold">Print on Demand Technology</span>
                  </div>
              </div>

              <div className="flex gap-3">
                <a 
                  href={`https://t.me/BlackBee_Com?text=${encodeURIComponent(
                    `Юрий, здравствуйте! \n\nЯ пишу с сайта BlackBee по поводу 3D печати. Мои детали:\n- Моя роль: \n- Материал: \n- Конструкция: \n- Габариты: \n- Толщина стенки: \n- Ссылка на файл: \n- Мой запрос: `
                  )}`} 
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 border border-bee-border flex items-center justify-center hover:bg-bee-yellow hover:text-bee-black hover:border-bee-yellow transition-all"
                >
                  <Send className="w-4 h-4" />
                </a>
                <button 
                  onClick={handleIconCopy}
                  className="w-10 h-10 border border-bee-border flex items-center justify-center hover:bg-bee-yellow hover:text-bee-black hover:border-bee-yellow transition-all relative group/msg"
                >
                  <MessageSquare className="w-4 h-4" />
                  <AnimatePresence>
                    {isIconCopied && (
                      <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: -35 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="absolute bg-bee-yellow text-bee-black text-[8px] font-bold uppercase py-1 px-2 rounded-sm whitespace-nowrap pointer-events-none"
                      >
                        Номер скопирован
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </div>
            </div>
            
            <div>
              <h4 className="font-mono text-[10px] uppercase tracking-[0.4em] text-bee-yellow mb-8 font-bold">Навигация</h4>
              <ul className="space-y-4">
                {[
                  { name: "Калькулятор", id: "калькулятор" },
                  { name: "Технологии", id: "услуги" },
                  { name: "Кейсы", id: "кейсы" },
                  { name: "О производстве", id: "о-производстве" }
                ].map((item) => (
                  <li key={item.id}>
                    <a 
                      href={`#${item.id}`} 
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-[11px] uppercase tracking-widest text-bee-text-muted hover:text-bee-white transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-mono text-[10px] uppercase tracking-[0.4em] text-bee-yellow mb-8 font-bold">Партнеры</h4>
              <div className="space-y-4 opacity-20 grayscale hover:grayscale-0 transition-all cursor-default">
                  <div className="text-[10px] uppercase tracking-[0.4em] border-b border-bee-border pb-2">TECH_CORP // V2</div>
                  <div className="text-[10px] uppercase tracking-[0.4em] border-b border-bee-border pb-2">POLYMER_DYN</div>
                  <div className="text-[10px] uppercase tracking-[0.4em]">ROBO_FACTORY</div>
              </div>
            </div>

            <div className="lg:text-right flex flex-col lg:items-end">
              <h4 className="font-mono text-[10px] uppercase tracking-[0.4em] text-bee-text-muted mb-8 font-bold">Локация серверов</h4>
              <div className="font-mono text-[11px] text-bee-text-muted uppercase tracking-widest opacity-60 leading-relaxed">
                <span className="text-red-500/50">Москва</span> // <span className="text-green-500/80">Волгоград</span><br />
                <span className="text-red-500/50">Дубай</span> // <span className="text-red-500/50">Новосибирск</span><br />
                <span className="text-bee-white/20">Статус: В разработке</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Actual Status Bar Footer */}
      <div className="h-16 border-t border-bee-border px-12 flex items-center justify-between bg-bee-black transition-colors">
        <div className="flex items-center gap-4">
           <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
           <span className="text-[10px] uppercase tracking-[0.2em] text-bee-text-muted font-bold">Система онлайн // Прием файлов активен</span>
        </div>
        <div className="text-[10px] text-bee-text-muted font-mono tracking-tighter uppercase hidden sm:block opacity-40">
           ID_СЕССИИ: BB_SYNC_ACTIVE [RU-01]
        </div>
      </div>
    </footer>
  );
}
