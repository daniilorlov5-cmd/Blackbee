/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Zap, Hexagon, Users, Terminal, Sun, Moon } from "lucide-react";
import { Logo } from "./Logo";
import { useState, useEffect } from "react";

export function Navbar() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    if (isLight) {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  }, [isLight]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-bee-white/10 bg-bee-black/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-12 h-20 flex items-center justify-between">
        <div className="flex items-center gap-4 md:gap-8 flex-1">
          <a 
            href="https://bbee.pro"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center shrink-0 group"
          >
            <Logo className="h-6 md:h-8 text-bee-logo group-hover:scale-105 transition-transform duration-500" />
          </a>
          
          <div className="hidden xl:flex items-center gap-4 border-l border-bee-white/20 pl-4 lg:gap-6">
            <span className="text-[7px] md:text-[10px] uppercase tracking-[0.3em] font-semibold text-bee-white/50 group-hover:text-bee-yellow transition-colors whitespace-nowrap">
              О компании
            </span>
          </div>
        </div>
        
        <div className="hidden lg:flex items-center justify-center gap-6 xl:gap-10 flex-[2]">
          {[
            { name: "Калькулятор", id: "калькулятор" },
            { name: "Услуги", id: "услуги" },
            { name: "Кейсы", id: "кейсы" },
            { name: "О производстве", id: "о-производстве" }
          ].map((item) => (
            <a 
              key={item.id} 
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-[11px] md:text-xs uppercase tracking-[0.3em] font-semibold text-bee-white/50 hover:text-bee-yellow transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="flex flex-1 items-center justify-end gap-2 md:gap-6">
          <button 
            onClick={() => setIsLight(!isLight)}
            className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center border border-bee-border hover:bg-bee-yellow hover:text-bee-black hover:border-bee-yellow transition-all rounded-sm group bg-bee-gray shrink-0"
            title="Сменить тему"
          >
            {isLight ? <Moon className="w-3.5 h-3.5 md:w-4 h-4" /> : <Sun className="w-3.5 h-3.5 md:w-4 h-4" />}
          </button>
          
          <a 
            href={`https://t.me/BlackBee_Com?text=${encodeURIComponent(
              `Юрий, здравствуйте! \n\nЯ пишу с сайта BlackBee по поводу 3D печати. Мои детали:\n- Моя роль: \n- Материал: \n- Конструкция: \n- Габариты: \n- Толщина стенки: \n- Ссылка на файл: \n- Мой запрос: `
            )}`}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 md:px-6 md:py-2.5 border border-bee-border text-bee-white text-[9px] md:text-xs font-bold uppercase tracking-[0.1em] md:tracking-[0.2em] hover:bg-bee-yellow hover:text-bee-black hover:border-bee-yellow transition-all whitespace-nowrap text-center"
          >
            Связаться
          </a>
        </div>
      </div>
    </nav>
  );
}
