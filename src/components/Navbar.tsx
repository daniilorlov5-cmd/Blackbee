/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from"motion/react";
import { Zap, Hexagon, Users, Terminal, Sun, Moon, Menu, X, ArrowLeft, Send, Check } from "lucide-react";
import { Logo } from "./Logo";
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export function Navbar() {
  const [isLight, setIsLight] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText("+7 937 710 7767").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }).catch((err) => {
      console.error("Failed to copy phone number: ", err);
    });
  };

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
 document.body.style.overflow ="hidden";
 } else {
 document.body.style.overflow ="unset";
 }
 return () => {
 document.body.style.overflow ="unset";
 };
 }, [isMenuOpen]);

 const navLinks = [
 { name:"О студии", id:"что-мы-делаем" },
 { name:"Рассчитать", id:"калькулятор" },
 { name:"Галерея изделий", id:"кейсы" },
 { name:"Стать партнером", id:"стать-партнером" }
 ];

  const handleScroll = (id: string) => {
    setIsMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 border-b border-bee-white/10 bg-bee-black/95 backdrop-blur-md">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 h-16 md:h-20 flex items-center justify-between">
          {/* Left section: Logo + О компании */}
          <div className="flex items-center shrink-0 lg:flex-1">
            <a href="https://bbee.pro" target="_blank" rel="noopener noreferrer" className="flex items-center pr-3 group/logo">
              <Logo className="h-5 sm:h-6 md:h-7 lg:h-8 xl:h-10 text-bee-logo group-hover/logo:scale-105 transition-transform duration-500 hover:text-bee-white" />
            </a>
            <a 
              href="https://bbee.pro" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden sm:flex items-center border-l border-bee-white/20 pl-3 h-6 transition-colors hover:border-bee-yellow/50 group/company"
            >
              <span className="text-[9px] xl:text-[10px] uppercase tracking-[0.3em] font-semibold text-bee-white/50 group-hover/company:text-bee-yellow transition-colors whitespace-nowrap leading-none">
                О компании
              </span>
            </a>
          </div>
 {/* Desktop Navigation */}
 <div className="hidden lg:flex items-center justify-center gap-4 xl:gap-6 px-8 flex-none">
 {navLinks.map((item) => (
 <a key={item.id} href={`#${item.id}`}
 onClick={(e) => {
 e.preventDefault();
 handleScroll(item.id);
 }}
 className="group flex items-center text-[10px] xl:text-[11px] uppercase tracking-[0.2em] xl:tracking-[0.3em] font-semibold text-bee-white/70 hover:text-bee-yellow transition-colors whitespace-nowrap"
 >
 {item.name}
 <svg className="w-3 h-3 ml-1 opacity-40 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
 </svg>
 </a>
 ))}
 </div>

  {/* Right Actions */}
  <div className="flex items-center justify-end gap-2 sm:gap-4 lg:flex-1">
    <div className="hidden lg:flex items-center gap-4 xl:gap-5 mr-1">
      <div className="relative">
        <button 
          onClick={handleCopy}
          className="text-sm lg:text-base xl:text-lg font-black text-bee-white hover:text-bee-yellow transition-colors whitespace-nowrap tracking-wide cursor-pointer focus:outline-none"
          title="Нажмите, чтобы скопировать номер"
        >
          +7 937 710 7767
        </button>
        <AnimatePresence>
          {copied && (
            <motion.div 
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1.5 bg-bee-yellow text-bee-black text-[10px] sm:text-xs font-bold uppercase tracking-wider rounded-sm shadow-xl whitespace-nowrap pointer-events-none z-50 flex items-center gap-1.5 border border-bee-yellow"
            >
              <Check className="w-3.5 h-3.5" /> Скопировано
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <a href={`https://t.me/blackbeee_group?text=${encodeURIComponent("Здравствуйте, у меня есть запрос: ")}`}
        target="_blank"
        rel="noreferrer"
        className="w-10 h-10 lg:w-11 lg:h-11 xl:w-12 xl:h-12 flex items-center justify-center border border-bee-border text-bee-yellow hover:bg-bee-yellow hover:text-bee-black hover:border-bee-yellow transition-all rounded-sm bg-bee-gray shrink-0"
        title="Telegram"
      >
        <Send className="w-5 h-5 lg:w-[22px] lg:h-[22px]" />
      </a>
    </div>
    <button onClick={() => setIsLight(!isLight)}
      className="w-10 h-10 lg:w-11 lg:h-11 xl:w-12 xl:h-12 flex items-center justify-center border border-bee-border hover:bg-bee-yellow hover:text-bee-black hover:border-bee-yellow transition-all rounded-sm group bg-bee-gray shrink-0"
      title="Сменить тему"
    >
      {isLight ? <Moon className="w-5 h-5 lg:w-[22px] lg:h-[22px]" /> : <Sun className="w-5 h-5 lg:w-[22px] lg:h-[22px]" />}
    </button>
    <a href={`https://t.me/blackbeee_group?text=${encodeURIComponent(
      `Здравствуйте, у меня есть запрос: `
    )}`}
      target="_blank"
      rel="noreferrer"
      className="hidden sm:inline-block px-5 py-2.5 text-xs lg:px-6 lg:py-3 lg:text-sm border border-bee-border text-bee-white font-extrabold uppercase tracking-[0.1em] md:tracking-[0.2em] hover:bg-bee-yellow hover:text-bee-black hover:border-bee-yellow transition-all whitespace-nowrap shrink-0"
    >
      Связаться
    </a>
 {location.pathname !== '/' && (
   <>
     <Link 
       to="/" 
       className="hidden xl:flex items-center gap-2 text-bee-yellow hover:text-bee-white transition-colors text-[10px] xl:text-[11px] uppercase tracking-[0.3em] font-bold ml-2 lg:ml-4 border-l border-bee-white/10 pl-4 lg:pr-2 shrink-0 whitespace-nowrap"
     >
       <ArrowLeft className="w-3 h-3" />
       На главную
     </Link>
     <Link 
       to="/" 
       className="xl:hidden w-8 h-8 flex items-center justify-center border border-bee-border text-bee-yellow bg-bee-gray hover:bg-bee-yellow hover:text-bee-black transition-all shrink-0 ml-1"
       title="На главную"
     >
       <ArrowLeft className="w-4 h-4" />
     </Link>
   </>
 )}
 <a href={`https://t.me/blackbeee_group`}
 className="lg:hidden w-8 h-8 flex items-center justify-center border border-bee-border bg-bee-gray hover:bg-bee-yellow hover:text-bee-black transition-all shrink-0"
 >
 <Zap className="w-4 h-4" />
 </a>
 {/* Mobile Menu Toggle */}
 <button onClick={() => setIsMenuOpen(!isMenuOpen)}
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
 <a key={item.id} href={`#${item.id}`}
 onClick={(e) => {
 e.preventDefault();
 handleScroll(item.id);
 }}
 className="flex items-center text-lg sm:text-xl uppercase tracking-[0.2em] font-bold text-bee-white hover:text-bee-yellow transition-colors border-b border-bee-white/10 pb-4"
 >
 {item.name}
 <svg className="w-5 h-5 ml-2 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
 </svg>
 </a>
 ))}
 <div className="mt-8 pt-8 border-t border-bee-white/10">
 <p className="text-bee-white/50 text-[10px] uppercase tracking-[0.2em] mb-6 font-bold">Связаться напрямую</p>
 <div className="flex flex-col gap-6 mb-8">
 <div className="relative w-fit">
   <button 
     onClick={handleCopy}
     className="text-xl font-black text-bee-white hover:text-bee-yellow transition-colors text-left focus:outline-none cursor-pointer"
     title="Нажмите, чтобы скопировать номер"
   >
     +7 937 710 7767
   </button>
   <AnimatePresence>
     {copied && (
       <motion.div 
         initial={{ opacity: 0, scale: 0.95 }}
         animate={{ opacity: 1, scale: 1 }}
         exit={{ opacity: 0, scale: 0.95 }}
         className="absolute left-0 mt-1.5 px-3 py-1 bg-bee-yellow text-bee-black text-[10px] font-bold uppercase tracking-wider rounded-sm shadow-xl whitespace-nowrap pointer-events-none z-50 flex items-center gap-1.5 border border-bee-yellow"
       >
         <Check className="w-3.5 h-3.5" /> Скопировано
       </motion.div>
     )}
   </AnimatePresence>
 </div>
 <a href={`https://t.me/blackbeee_group?text=${encodeURIComponent("Здравствуйте, у меня есть запрос: ")}`}
 target="_blank"
 rel="noreferrer"
 className="flex items-center gap-3 text-bee-yellow hover:text-bee-white transition-colors uppercase tracking-widest text-xs font-bold"
 >
 <Send className="w-4 h-4" /> Написать в Telegram
 </a>
 </div>
 <p className="text-bee-white/50 text-xs uppercase tracking-widest mb-4">О компании</p>
 <a href="https://bbee.pro"
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
