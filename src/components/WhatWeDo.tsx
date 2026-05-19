/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Users, PenTool, Lightbulb, ArrowUpRight } from"lucide-react";
import { useOrderModal } from"../contexts/OrderModalContext";

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
 <span className="text-bee-yellow text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.4em] block mb-2 md:mb-4">Запуск_продукта</span>
 <h2 className="text-[6vw] sm:text-4xl md:text-5xl lg:text-5xl font-black uppercase tracking-tight leading-tight">
 Есть идея, но<br /><span className="text-bee-yellow">нет 3D-модели?</span><br />Превратим в товар
 </h2>
 </div>
 <div className="max-w-md md:text-right flex-shrink-0 lg:pb-4">
 <div className="w-12 h-1 bg-bee-yellow mb-4 md:ml-auto"></div>
 <p className="font-mono text-[10px] md:text-xs text-bee-white/40 uppercase tracking-widest leading-relaxed">
 Запуск продукта: от идеи до первых продаж за 48 часов
 </p>
 </div>
 </div>

 <div className="grid lg:grid-cols-12 gap-8 md:gap-16 items-start">
 <div className="lg:col-span-5 text-base md:text-lg text-bee-text-muted font-light leading-relaxed space-y-6">
 <p>
 У вас есть только идея, набросок или картинка? Этого уже достаточно, чтобы начать. BlackBee — это не просто 3D-печать. Мы берем на себя весь цикл: сами спроектируем точную 3D-модель, подберем прочные материалы, напечатаем партию и поможем запустить продажи на маркетплейсах.
 </p>
 <p>
 Вам больше не нужны миллионные бюджеты на изготовление пресс-форм, аренда складов и долгие месяцы ожиданий. Мы производим вещи нового поколения — быстро, гибко и ровно в том объеме, который вам нужен прямо сейчас.
 </p>
 <div className="bg-bee-gray p-6 border-l-4 border-bee-yellow font-medium text-bee-white text-sm md:text-base mt-8">
 <span className="text-bee-yellow uppercase text-[10px] block mb-2 font-black tracking-widest not-">Print on Demand (Печать по запросу)</span>
"Вы не тратите деньги на производство товара «впрок». Печать по факту покупки: как только покупатель оплачивает заказ на маркетплейсе, мы мгновенно запускаем производство."
 </div>
 </div>

 <div className="lg:col-span-1"></div>

 <div className="lg:col-span-6 grid sm:grid-cols-2 gap-8">
 <div className="group border border-bee-border bg-bee-gray/50 p-6 hover:border-bee-yellow/50 hover:bg-bee-gray transition-all">
 <PenTool className="w-8 h-8 text-bee-yellow mb-6 group-hover:scale-110 transition-transform" />
 <h3 className="text-lg font-bold uppercase tracking-widest mb-3">Соавторство и разработка</h3>
 <p className="text-xs text-bee-white/50 font-mono leading-relaxed">
 Мы берем вашу задумку, прорабатываем технические нюансы, создаем коммерческую 3D-модель и оптимизируем ее конструкцию, чтобы сделать производство дешевле.
 </p>
 </div>
 <button onClick={() => {
 const target = document.getElementById('модель-из-фото');
 if (target) target.scrollIntoView({ behavior: 'smooth' });
 }}
 className="group border border-bee-border bg-bee-gray/50 p-6 hover:border-bee-yellow/50 hover:bg-bee-gray transition-all text-left w-full"
 >
 <Lightbulb className="w-8 h-8 text-bee-white mb-6 group-hover:scale-110 group-hover:text-bee-yellow transition-all" />
 <h3 className="text-lg font-bold uppercase tracking-widest mb-3">Геймификация и тест</h3>
 <p className="text-xs text-bee-white/50 font-mono leading-relaxed">
 Попробуйте наш интерактивный онлайн-конструктор. Загрузите изображение, выберите параметры и покрутите будущую деталь на экране до того, как вложите первый рубль.
 </p>
 </button>

 <button onClick={() => openModal('idea')}
 className="group border border-bee-border bg-bee-gray/50 p-6 hover:border-bee-yellow/50 hover:bg-bee-gray transition-all sm:col-span-2 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6 cursor-pointer w-full text-left"
 >
 <div>
 <h3 className="text-lg font-bold uppercase tracking-widest mb-2 text-bee-yellow">Серийный выпуск и маркетплейсы</h3>
 <p className="text-xs text-bee-white/50 font-mono leading-relaxed">
 Мы берем на себя оформление карточек товаров и интеграцию с торговыми площадками, обеспечивая вам быстрое и бесперебойное производство.
 </p>
 </div>
 <div className="flex items-center gap-4">
 <span className="font-mono text-[8px] uppercase tracking-widest text-bee-white group-hover:text-bee-yellow transition-colors hidden sm:block max-w-[100px]">
 Заполнить форму и рассчитать стоимость
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
