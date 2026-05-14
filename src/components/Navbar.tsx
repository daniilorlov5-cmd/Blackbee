/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { Zap, Hexagon, Users, Terminal, Sun, Moon, Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { useState, useEffect } from "react";

export function Navbar() {
  const [isLight, setIsLight] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isLight) {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  }, [isLight]);

  // Handle body scroll locking when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: "О студии", id: "что-мы-делаем" },
    { name: "Технологии", id: "услуги" },
    { name: "Галерея", id: "кейсы" },
    { name: "Стать партнером", id: "стать-партнером" }
  ];

  const handleScroll = (id: string) => {
    setIsMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 border-b border-bee-white/10 bg-bee-black/95 backdrop-blur-md">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 h-16 md:h-20 flex items-center justify-between">
          
          {/* Left section: Logo + О компании */}
          <div className="flex items-center group shrink-0 lg:w-1/4">
            <a 
              href="https://bbee.pro"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center pr-3"
            >
              <Logo className="h-5 sm:h-6 md:h-7 lg:h-8 xl:h-10 text-bee-logo group-hover:scale-105 transition-transform duration-500 hover:text-bee-white" />
            </a>
            
            <div className="hidden sm:flex items-center border-l border-bee-white/20 pl-3 h-6 transition-colors group-hover:border-bee-yellow/50 shrink-0">
              <span className="text-[9px] xl:text-[10px] uppercase tracking-[0.3em] font-semibold text-bee-white/50 group-hover:text-bee-yellow transition-colors whitespace-nowrap leading-none">
                О компании
              </span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center gap-4 xl:gap-8 flex-1 px-4">
            {navLinks.map((item) => (
              <a 
                key={item.id} 
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll(item.id);
                }}
                className="text-[10px] xl:text-[11px] uppercase tracking-[0.2em] xl:tracking-[0.3em] font-semibold text-bee-white/70 hover:text-bee-yellow transition-colors whitespace-nowrap shrink-0"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center justify-end gap-1 sm:gap-4 shrink-0 lg:w-1/4">
            <button 
              onClick={() => setIsLight(!isLight)}
              className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center border border-bee-border hover:bg-bee-yellow hover:text-bee-black hover:border-bee-yellow transition-all rounded-sm group bg-bee-gray shrink-0"
              title="Сменить тему"
            >
              {isLight ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>
            
            <a 
              href={`https://t.me/BlackBee_Com?text=${encodeURIComponent(
                `Юрий, здравствуйте! \n\nЯ пишу с сайта BlackBee по поводу 3D печати. Мои детали:\n- Моя роль: \n- Материал: \n- Конструкция: \n- Габариты: \n- Толщина стенки: \n- Ссылка на файл: \n- Мой запрос: `
              )}`}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-block px-4 py-2 text-[10px] md:px-6 md:py-2.5 md:text-xs border border-bee-border text-bee-white font-bold uppercase tracking-[0.1em] md:tracking-[0.2em] hover:bg-bee-yellow hover:text-bee-black hover:border-bee-yellow transition-all whitespace-nowrap shrink-0"
            >
              Связаться
            </a>
            
            <a 
              href={`https://t.me/BlackBee_Com`}
              className="sm:hidden w-8 h-8 flex items-center justify-center border border-bee-border bg-bee-gray hover:bg-bee-yellow hover:text-bee-black transition-all shrink-0"
            >
              <Zap className="w-4 h-4" />
            </a>
            
            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden w-8 h-8 flex items-center justify-center text-bee-white hover:text-bee-yellow transition-colors shrink-0"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-bee-black pt-20 pb-6 px-6 lg:hidden overflow-y-auto flex flex-col"
          >
            <div className="flex flex-col gap-8 mt-8">
              {navLinks.map((item) => (
                <a 
                  key={item.id} 
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll(item.id);
                  }}
                  className="text-lg sm:text-xl uppercase tracking-[0.2em] font-bold text-bee-white hover:text-bee-yellow transition-colors border-b border-bee-white/10 pb-4"
                >
                  {item.name}
                </a>
              ))}
              
              <div className="mt-8">
                <p className="text-bee-white/50 text-xs uppercase tracking-widest mb-4">О компании</p>
                <a 
                  href="https://bbee.pro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-bee-yellow uppercase tracking-widest font-semibold text-sm hover:underline"
                >
                  Перейти на главный сайт &rarr;
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
