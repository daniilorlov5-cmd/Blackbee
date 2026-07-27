import { useEffect, useState } from "react";
import { ArrowRight, ArrowDown, Send } from "lucide-react";
import { useOrderModal } from "../contexts/OrderModalContext";

export function MarketplacePage() {
  const { openModal } = useOrderModal();
  const [openFaq, setOpenFaq] = useState<number | null>(3); // Set 4th item (index 3) as open by default like in screenshot

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-20 w-full min-h-screen flex flex-col bg-white text-black [.dark_&]:bg-bee-black [.dark_&]:text-bee-white transition-colors font-sans">
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Abstract block pattern background from screenshot */}
        <div className="absolute inset-0 opacity-[0.03] [.dark_&]:opacity-[0.05] pointer-events-none" 
             style={{ 
               backgroundImage: `linear-gradient(45deg, currentColor 25%, transparent 25%), linear-gradient(-45deg, currentColor 25%, transparent 25%), linear-gradient(45deg, transparent 75%, currentColor 75%), linear-gradient(-45deg, transparent 75%, currentColor 75%)`,
               backgroundSize: '100px 100px',
               backgroundPosition: '0 0, 0 50px, 50px 50px, 50px 0'
             }}></div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-16 md:pt-28 pb-12 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1] uppercase">
                Запусти свою идею<br />
                на Wildberries и Ozon
              </h1>
              <p className="text-lg md:text-xl max-w-xl text-black/60 [.dark_&]:text-white/60">
                без вложений в оптовые партии —<br />
                мы печатаем под заказ на 3D-принтере
              </p>
              
              <button 
                onClick={() => openModal('idea')} 
                className="bg-black text-white [.dark_&]:bg-bee-yellow [.dark_&]:text-bee-black px-12 py-5 rounded-full font-bold uppercase tracking-[0.2em] hover:scale-105 transition-all text-xs shadow-xl [.dark_&]:shadow-[0_0_30px_rgba(255,215,0,0.2)]"
              >
                Отправить идею
              </button>
            </div>
            
            <div className="flex-1 flex justify-center md:justify-end">
              <img src="/111.png" alt="Blackbee product" className="w-full max-w-sm md:max-w-md lg:max-w-lg object-contain drop-shadow-2xl" />
            </div>
          </div>
          
          {/* Steps Bar */}
          <div className="mt-20 border-y border-black/10 [.dark_&]:border-white/10 py-8 flex flex-col md:flex-row md:items-center justify-between gap-8 text-sm md:text-base font-medium text-black/80 [.dark_&]:text-white/80">
            <div className="flex items-center gap-4">
              <ArrowRight className="w-5 h-5 font-light opacity-30" strokeWidth={1} />
              <span className="uppercase tracking-wider">Без оптовых закупок</span>
            </div>
            <div className="flex items-center gap-4">
              <ArrowRight className="w-5 h-5 font-light opacity-30" strokeWidth={1} />
              <span className="uppercase tracking-wider">MVP за пару часов</span>
            </div>
            <div className="flex items-center gap-4">
              <ArrowRight className="w-5 h-5 font-light opacity-30" strokeWidth={1} />
              <span className="uppercase tracking-wider">Полное оформление карточек</span>
            </div>
          </div>
        </div>
      </div>

      {/* 99% Section */}
      <div className="bg-[#f8f8fafb] [.dark_&]:bg-bee-gray py-28 border-y border-black/5 [.dark_&]:border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-20">
          <div className="space-y-8 border-t border-black/20 [.dark_&]:border-white/20 pt-12">
            <h2 className="text-8xl md:text-9xl lg:text-[140px] font-normal tracking-tighter text-black [.dark_&]:text-bee-yellow leading-none">99%</h2>
            <p className="text-2xl md:text-3xl lg:text-4xl font-medium leading-[1.1] max-w-md">
              идей так и не доходят до маркетплейса — дорого, долго, рискованно
            </p>
            <div className="h-px w-20 bg-black/20 [.dark_&]:bg-white/20 my-8"></div>
            <p className="text-sm md:text-base text-black/60 [.dark_&]:text-white/60 max-w-sm">
              Необходимо вложить тысячи рублей, потратить недели на переговоры и оформление документов, и только потом понять, есть ли спрос на ваш товар.
            </p>
          </div>
          
          <div className="border-t border-black/20 [.dark_&]:border-white/20 pt-12 flex flex-col justify-between">
            <div className="space-y-0 text-lg md:text-xl font-medium">
               <div className="flex items-center justify-between border-b border-black/10 [.dark_&]:border-white/10 py-6">
                 <span>Идея</span>
                 <ArrowDown className="w-5 h-5 opacity-30" strokeWidth={1} />
               </div>
               <div className="flex items-center justify-between border-b border-black/10 [.dark_&]:border-white/10 py-6">
                 <ArrowDown className="w-5 h-5 opacity-30" strokeWidth={1} />
                 <span>Поиск поставщика</span>
               </div>
               <div className="flex items-center justify-between border-b border-black/10 [.dark_&]:border-white/10 py-6">
                 <span>Оптовая партия</span>
                 <ArrowDown className="w-5 h-5 opacity-30" strokeWidth={1} />
               </div>
               <div className="flex items-center justify-between border-b border-black/10 [.dark_&]:border-white/10 py-6">
                 <ArrowDown className="w-5 h-5 opacity-30" strokeWidth={1} />
                 <span>Регистрация</span>
               </div>
               <div className="py-6 pt-10">
                 <span className="text-black/40 [.dark_&]:text-white/40 uppercase text-xs tracking-[0.2em]">Только потом проверка идеи</span>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Steps Images Section */}
      <div className="relative overflow-hidden py-32">
        {/* Abstract block pattern background from screenshot */}
        <div className="absolute inset-0 opacity-[0.03] [.dark_&]:opacity-[0.05] pointer-events-none" 
             style={{ 
               backgroundImage: `linear-gradient(45deg, currentColor 25%, transparent 25%), linear-gradient(-45deg, currentColor 25%, transparent 25%), linear-gradient(45deg, transparent 75%, currentColor 75%), linear-gradient(-45deg, transparent 75%, currentColor 75%)`,
               backgroundSize: '100px 100px',
               backgroundPosition: '0 0, 0 50px, 50px 50px, 50px 0'
             }}></div>
             
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-medium mb-20 tracking-tight uppercase leading-none">Мы берём все этапы<br/>на себя</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-l border-black/10 [.dark_&]:border-white/10 bg-white/50 [.dark_&]:bg-bee-black/50 backdrop-blur-sm">
          <div className="border-r border-black/10 [.dark_&]:border-white/10 p-8 flex flex-col group relative overflow-hidden transition-all hover:bg-black/[0.02] [.dark_&]:hover:bg-white/[0.02]">
            <img src="/222.png" alt="Идея" className="w-full aspect-[4/5] object-cover mb-10 bg-black/5" />
            <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">Идея</h3>
            <p className="text-sm md:text-base text-black/50 [.dark_&]:text-white/50 leading-relaxed font-medium">Индивидуальное<br/>3D-моделирование</p>
            <div className="absolute bottom-4 right-4 w-2 h-2 bg-black/10 [.dark_&]:bg-white/10 rounded-full group-hover:scale-150 transition-transform"></div>
          </div>
          <div className="border-r border-black/10 [.dark_&]:border-white/10 p-8 flex flex-col group relative overflow-hidden transition-all hover:bg-black/[0.02] [.dark_&]:hover:bg-white/[0.02]">
            <img src="/333.png" alt="3D-печать" className="w-full aspect-[4/5] object-cover mb-10 bg-black/5" />
            <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">3D-печать</h3>
            <p className="text-sm md:text-base text-black/50 [.dark_&]:text-white/50 leading-relaxed font-medium">Печать под каждый заказ</p>
            <div className="absolute bottom-4 right-4 w-2 h-2 bg-black/10 [.dark_&]:bg-white/10 rounded-full group-hover:scale-150 transition-transform"></div>
          </div>
          <div className="border-r border-t sm:border-t-0 lg:border-t-0 border-black/10 [.dark_&]:border-white/10 p-8 flex flex-col group relative overflow-hidden transition-all hover:bg-black/[0.02] [.dark_&]:hover:bg-white/[0.02]">
            <img src="/444.png" alt="Карточка товара" className="w-full aspect-[4/5] object-cover mb-10 bg-black/5" />
            <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">Карточка товара</h3>
            <p className="text-sm md:text-base text-black/50 [.dark_&]:text-white/50 leading-relaxed font-medium">Создание магазина<br/>и карточки</p>
            <div className="absolute bottom-4 right-4 w-2 h-2 bg-black/10 [.dark_&]:bg-white/10 rounded-full group-hover:scale-150 transition-transform"></div>
          </div>
          <div className="border-r border-t lg:border-t-0 border-black/10 [.dark_&]:border-white/10 p-8 flex flex-col group relative overflow-hidden transition-all hover:bg-black/[0.02] [.dark_&]:hover:bg-white/[0.02]">
            <img src="/555.png" alt="Продажи" className="w-full aspect-[4/5] object-cover mb-10 bg-black/5" />
            <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">Продажи</h3>
            <p className="text-sm md:text-base text-black/50 [.dark_&]:text-white/50 leading-relaxed font-medium">Мы печатаем - вы<br/>получаете прибыль</p>
            <div className="absolute bottom-4 right-4 w-2 h-2 bg-black/10 [.dark_&]:bg-white/10 rounded-full group-hover:scale-150 transition-transform"></div>
          </div>
        </div>
      </div>
    </div>

      {/* Numbered grid section */}
      <div className="relative overflow-hidden bg-[#f8f8fafb] [.dark_&]:bg-bee-gray py-32 border-t border-black/5 [.dark_&]:border-white/5">
        {/* Abstract block pattern background from screenshot */}
        <div className="absolute inset-0 opacity-[0.02] [.dark_&]:opacity-[0.04] pointer-events-none" 
             style={{ 
               backgroundImage: `linear-gradient(45deg, currentColor 25%, transparent 25%), linear-gradient(-45deg, currentColor 25%, transparent 25%), linear-gradient(45deg, transparent 75%, currentColor 75%), linear-gradient(-45deg, transparent 75%, currentColor 75%)`,
               backgroundSize: '120px 120px',
               backgroundPosition: '0 0, 0 60px, 60px 60px, 60px 0'
             }}></div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-medium mb-24 tracking-tight uppercase leading-none">Как это работает</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8 flex-col">
             {/* Row 1 */}
             <div className="col-span-1 min-h-48 md:aspect-square flex items-center justify-center p-4 order-1 md:order-none">
               <span className="text-8xl md:text-[120px] font-light text-black/10 [.dark_&]:text-bee-yellow/20">1</span>
             </div>
             <div className="col-span-1 min-h-48 md:aspect-square bg-white [.dark_&]:bg-bee-black border border-black/5 [.dark_&]:border-white/5 p-8 flex flex-col items-center justify-center text-center text-sm lg:text-base font-medium shadow-sm leading-relaxed order-4 md:order-none">
               Мы делаем эскиз<br/>и согласуем
             </div>
             <div className="col-span-1 min-h-48 md:aspect-square flex items-center justify-center p-4 order-5 md:order-none">
               <span className="text-8xl md:text-[120px] font-light text-black/10 [.dark_&]:text-bee-yellow/20">3</span>
             </div>
             <div className="col-span-1 min-h-48 md:aspect-square bg-white [.dark_&]:bg-bee-black border border-black/5 [.dark_&]:border-white/5 p-8 flex flex-col items-center justify-center text-center text-sm lg:text-base font-medium shadow-sm leading-relaxed order-8 md:order-none">
               Ваш клиент<br/>заказывает —<br/>мы печатаем<br/>и отправляем
             </div>
             <div className="col-span-1 min-h-48 md:aspect-square flex items-center justify-center p-4 order-9 md:order-none">
               <span className="text-8xl md:text-[120px] font-light text-black/10 [.dark_&]:text-bee-yellow/20">5</span>
             </div>

             {/* Row 2 */}
             <div className="col-span-1 min-h-48 md:aspect-square bg-white [.dark_&]:bg-bee-black border border-black/5 [.dark_&]:border-white/5 p-8 flex flex-col items-center justify-center text-center text-sm lg:text-base font-medium shadow-sm leading-relaxed order-2 md:order-none">
               Вы присылаете идею<br/>(формат описания/<br/>набросок)
             </div>
             <div className="col-span-1 min-h-48 md:aspect-square flex items-center justify-center p-4 order-3 md:order-none">
               <span className="text-8xl md:text-[120px] font-light text-black/10 [.dark_&]:text-bee-yellow/20">2</span>
             </div>
             <div className="col-span-1 min-h-48 md:aspect-square bg-white [.dark_&]:bg-bee-black border border-black/5 [.dark_&]:border-white/5 p-8 flex flex-col items-center justify-center text-center text-sm lg:text-base font-medium shadow-sm leading-relaxed order-6 md:order-none">
               Размещаем товар<br/>на маркетплейсе<br/>(Wildberries/другие)
             </div>
             <div className="col-span-1 min-h-48 md:aspect-square flex items-center justify-center p-4 order-7 md:order-none">
               <span className="text-8xl md:text-[120px] font-light text-black/10 [.dark_&]:text-bee-yellow/20">4</span>
             </div>
             <div className="col-span-1 min-h-48 md:aspect-square bg-white [.dark_&]:bg-bee-black border border-black/5 [.dark_&]:border-white/5 p-8 flex flex-col items-center justify-center text-center text-sm lg:text-base font-medium shadow-sm leading-relaxed order-10 md:order-none">
               Вы получаете<br/>прибыль, оплачивая<br/>лишь материал<br/>за каждое изделие
             </div>
          </div>
        </div>
      </div>
      {/* Product Ideas Section */}
      <div className="relative overflow-hidden py-32 border-t border-black/5 [.dark_&]:border-white/5">
        {/* Abstract block pattern background */}
        <div className="absolute inset-0 opacity-[0.03] [.dark_&]:opacity-[0.05] pointer-events-none" 
             style={{ 
               backgroundImage: `linear-gradient(45deg, currentColor 25%, transparent 25%), linear-gradient(-45deg, currentColor 25%, transparent 25%), linear-gradient(45deg, transparent 75%, currentColor 75%), linear-gradient(-45deg, transparent 75%, currentColor 75%)`,
               backgroundSize: '100px 100px',
               backgroundPosition: '0 0, 0 50px, 50px 50px, 50px 0'
             }}></div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-medium mb-20 tracking-tight uppercase leading-none">Эти товары начали<br/>с одной идеи</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-black/10 [.dark_&]:border-white/10 bg-white/40 [.dark_&]:bg-bee-black/40 backdrop-blur-sm divide-x divide-y divide-black/10 [.dark_&]:divide-white/10">
            <div className="p-0 flex flex-col group">
              <div className="p-8 border-b border-black/10 [.dark_&]:border-white/10 flex items-center justify-between">
                <span className="text-xl font-bold uppercase tracking-tight">Чехлы</span>
              </div>
              <img src="/666.png" alt="Чехлы" className="w-full aspect-square object-cover" />
            </div>
            <div className="p-0 flex flex-col group">
              <div className="p-8 border-b border-black/10 [.dark_&]:border-white/10 flex items-center justify-between">
                <span className="text-xl font-bold uppercase tracking-tight">Для кухни</span>
              </div>
              <img src="/777.png" alt="Для кухни" className="w-full aspect-square object-cover" />
            </div>
            <div className="p-0 flex flex-col group">
              <div className="p-8 border-b border-black/10 [.dark_&]:border-white/10 flex items-center justify-between">
                <span className="text-xl font-bold uppercase tracking-tight">Инструменты</span>
              </div>
              <img src="/888.png" alt="Инструменты" className="w-full aspect-square object-cover" />
            </div>
            <div className="p-0 flex flex-col group">
              <div className="p-8 border-b border-black/10 [.dark_&]:border-white/10 flex items-center justify-between">
                <span className="text-xl font-bold uppercase tracking-tight">Аксессуары</span>
              </div>
              <img src="/999.png" alt="Аксессуары" className="w-full aspect-square object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-32 bg-white [.dark_&]:bg-bee-black border-y border-black/5 [.dark_&]:border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row gap-20">
          <div className="w-full md:w-1/3 space-y-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-none uppercase">Ваши выгоды</h2>
            <p className="text-lg opacity-60 font-medium">
              Мы стремимся предоставить вам не только продукт, но и целый ряд преимуществ, которые помогут вашему бизнесу расти и развиваться.
            </p>
            <button 
              onClick={() => openModal('idea')}
              className="bg-black text-white [.dark_&]:bg-bee-yellow [.dark_&]:text-bee-black px-12 py-5 rounded-full font-bold uppercase tracking-[0.2em] hover:scale-105 transition-all text-xs"
            >
              Отправить идею
            </button>
          </div>
          
          <div className="w-full md:w-2/3 divide-y divide-black/10 [.dark_&]:divide-white/10">
            <div className="py-8 flex items-center justify-between group cursor-default">
              <span className="text-xl md:text-2xl font-medium group-hover:pl-4 transition-all">Быстрый запуск MVP — от идеи до продажи за 1 день</span>
              <div className="w-2 h-2 bg-bee-yellow rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="py-8 flex items-center justify-between group cursor-default">
              <span className="text-xl md:text-2xl font-medium group-hover:pl-4 transition-all">Минимальные вложения — платишь только за материал</span>
              <div className="w-2 h-2 bg-bee-yellow rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="py-8 flex items-center justify-between group cursor-default">
              <span className="text-xl md:text-2xl font-medium group-hover:pl-4 transition-all">Индивидуальность — любой дизайн</span>
              <div className="w-2 h-2 bg-bee-yellow rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="py-8 flex items-center justify-between group cursor-default">
              <span className="text-xl md:text-2xl font-medium group-hover:pl-4 transition-all uppercase leading-tight">Под ключ — не нужен склад, поставщик, юрлица</span>
              <div className="w-2 h-2 bg-bee-yellow rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="relative overflow-hidden py-32 bg-[#f8f8fafb] [.dark_&]:bg-bee-gray border-b border-black/5 [.dark_&]:border-white/5">
        {/* Abstract block pattern background */}
        <div className="absolute inset-0 opacity-[0.02] [.dark_&]:opacity-[0.04] pointer-events-none" 
             style={{ 
               backgroundImage: `linear-gradient(45deg, currentColor 25%, transparent 25%), linear-gradient(-45deg, currentColor 25%, transparent 25%), linear-gradient(45deg, transparent 75%, currentColor 75%), linear-gradient(-45deg, transparent 75%, currentColor 75%)`,
               backgroundSize: '120px 120px',
               backgroundPosition: '0 0, 0 60px, 60px 60px, 60px 0'
             }}></div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-medium mb-20 tracking-tight uppercase leading-none">Отзывы</h2>
          
          <div className="relative flex flex-col md:flex-row items-center gap-12 bg-white [.dark_&]:bg-bee-black p-8 md:p-12 shadow-sm border border-black/5 [.dark_&]:border-white/5">
            <div className="w-full md:w-1/2">
              <img src="/1111.png" alt="Review product" className="w-full aspect-square object-cover shadow-xl" />
            </div>
            
            <div className="w-full md:w-1/2 space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-black/10 flex items-center justify-center overflow-hidden">
                  <img src="/alexey.png" alt="Алексей" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-lg uppercase">Алексей</h4>
                </div>
              </div>
              
              <p className="text-xl md:text-2xl font-medium leading-relaxed italic opacity-80">
                "Принес в компанию свою идею настольного органайзера, они напечатали прототип и сразу подсказали, как оформить карточку товара на маркетплейсе. Через месяц я уже продавал первые партии!"
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-32 border-b border-black/5 [.dark_&]:border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-medium mb-24 tracking-tight uppercase leading-none">Стоимость и условия</h2>
          
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="w-full md:w-1/2">
              <img src="/1212.png" alt="3D Printing process" className="w-full aspect-[4/3] object-cover shadow-2xl rounded-sm" />
            </div>
            
            <div className="w-full md:w-1/2 grid grid-cols-1 gap-6 text-black [.dark_&]:text-white">
              <div className="bg-[#f8f8fafb] [.dark_&]:bg-bee-gray p-10 border border-black/5 [.dark_&]:border-white/5">
                <p className="text-lg md:text-xl font-medium leading-relaxed">
                  Печать под заказ — <span className="text-bee-yellow">X ₽</span> за грамм материала
                </p>
              </div>
              <div className="bg-[#f8f8fafb] [.dark_&]:bg-bee-gray p-10 border border-black/5 [.dark_&]:border-white/5">
                <p className="text-lg md:text-xl font-medium leading-relaxed">
                  Создание и оформление карточки — <span className="text-bee-yellow uppercase">бесплатно</span>
                </p>
              </div>
              <div className="bg-[#f8f8fafb] [.dark_&]:bg-bee-gray p-10 border border-black/5 [.dark_&]:border-white/5">
                <p className="text-lg md:text-xl font-medium leading-relaxed uppercase">
                  Вы устанавливаете цену сами
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="relative overflow-hidden py-32 bg-[#f8f8fafb] [.dark_&]:bg-bee-gray border-b border-black/5 [.dark_&]:border-white/5">
        <div className="absolute inset-0 opacity-[0.03] [.dark_&]:opacity-[0.05] pointer-events-none" 
             style={{ 
               backgroundImage: `linear-gradient(45deg, currentColor 25%, transparent 25%), linear-gradient(-45deg, currentColor 25%, transparent 25%), linear-gradient(45deg, transparent 75%, currentColor 75%), linear-gradient(-45deg, transparent 75%, currentColor 75%)`,
               backgroundSize: '100px 100px',
               backgroundPosition: '0 0, 0 50px, 50px 50px, 50px 0'
             }}></div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-medium mb-20 tracking-tight uppercase leading-none">Часто задаваемые вопросы</h2>
          
          <div className="divide-y divide-black/10 [.dark_&]:divide-white/10 border-t border-black/10 [.dark_&]:border-white/10">
            <div className="py-8 space-y-4">
              <div 
                className="flex items-center justify-between cursor-pointer group"
                onClick={() => setOpenFaq(openFaq === 0 ? null : 0)}
              >
                <span className="text-xl md:text-2xl font-bold uppercase tracking-tight">Сколько занимает печать?</span>
                <div className={`w-10 h-10 rounded-full border border-black/10 [.dark_&]:border-white/10 flex items-center justify-center transition-all ${openFaq === 0 ? 'bg-black text-white' : 'group-hover:bg-black group-hover:text-white'}`}>
                  <ArrowDown className={`w-5 h-5 transition-transform duration-300 ${openFaq === 0 ? 'rotate-180' : ''}`} strokeWidth={1.5} />
                </div>
              </div>
              {openFaq === 0 && (
                <div className="bg-white [.dark_&]:bg-bee-black p-6 border border-black/5 [.dark_&]:border-white/5 animate-in fade-in slide-in-from-top-1">
                  <p className="text-lg font-medium opacity-80">
                    От 1 до 3 рабочих дней в зависимости от тиража и сложности изделия.
                  </p>
                </div>
              )}
            </div>
            
            <div className="py-8 space-y-4">
              <div 
                className="flex items-center justify-between cursor-pointer group"
                onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}
              >
                <span className="text-xl md:text-2xl font-bold uppercase tracking-tight">Что если моя идея сложная?</span>
                <div className={`w-10 h-10 rounded-full border border-black/10 [.dark_&]:border-white/10 flex items-center justify-center transition-all ${openFaq === 1 ? 'bg-black text-white' : 'group-hover:bg-black group-hover:text-white'}`}>
                  <ArrowDown className={`w-5 h-5 transition-transform duration-300 ${openFaq === 1 ? 'rotate-180' : ''}`} strokeWidth={1.5} />
                </div>
              </div>
              {openFaq === 1 && (
                <div className="bg-white [.dark_&]:bg-bee-black p-6 border border-black/5 [.dark_&]:border-white/5 animate-in fade-in slide-in-from-top-1">
                  <p className="text-lg font-medium opacity-80">
                    Наши инженеры адаптируют любую идею для качественной 3D-печати без потери сути.
                  </p>
                </div>
              )}
            </div>
            
            <div className="py-8 space-y-4">
              <div 
                className="flex items-center justify-between cursor-pointer group"
                onClick={() => setOpenFaq(openFaq === 2 ? null : 2)}
              >
                <span className="text-xl md:text-2xl font-bold uppercase tracking-tight">Можно ли менять дизайн?</span>
                <div className={`w-10 h-10 rounded-full border border-black/10 [.dark_&]:border-white/10 flex items-center justify-center transition-all ${openFaq === 2 ? 'bg-black text-white' : 'group-hover:bg-black group-hover:text-white'}`}>
                  <ArrowDown className={`w-5 h-5 transition-transform duration-300 ${openFaq === 2 ? 'rotate-180' : ''}`} strokeWidth={1.5} />
                </div>
              </div>
              {openFaq === 2 && (
                <div className="bg-white [.dark_&]:bg-bee-black p-6 border border-black/5 [.dark_&]:border-white/5 animate-in fade-in slide-in-from-top-1">
                  <p className="text-lg font-medium opacity-80">
                    Да, мы предоставляем возможность внести правки на этапе создания 3D-модели.
                  </p>
                </div>
              )}
            </div>
            
            <div className="py-8 space-y-4">
              <div 
                className="flex items-center justify-between cursor-pointer group"
                onClick={() => setOpenFaq(openFaq === 3 ? null : 3)}
              >
                <span className="text-xl md:text-2xl font-bold uppercase tracking-tight">Как осуществляется доставка клиенту?</span>
                <div className={`w-10 h-10 rounded-full border border-black/10 [.dark_&]:border-white/10 flex items-center justify-center transition-all ${openFaq === 3 ? 'bg-black text-white' : 'group-hover:bg-black group-hover:text-white'}`}>
                  <ArrowDown className={`w-5 h-5 transition-transform duration-300 ${openFaq === 3 ? 'rotate-180' : ''}`} strokeWidth={1.5} />
                </div>
              </div>
              {openFaq === 3 && (
                <div className="bg-white [.dark_&]:bg-bee-black p-6 border border-black/5 [.dark_&]:border-white/5 animate-in fade-in slide-in-from-top-1">
                  <p className="text-lg font-medium opacity-80">
                    Мы печатаем и отправляем товар напрямую, используя логистику Wildberries / Ozon.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-32 bg-white [.dark_&]:bg-bee-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center gap-20">
          <div className="w-full md:w-1/2 space-y-10">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] uppercase">Проверь свою<br/>идею уже сегодня</h2>
            <p className="text-xl opacity-60 font-medium max-w-lg">
              Начните свой бизнес без рисков и больших вложений. Просто отправьте нам свою идею!
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
              <button 
                onClick={() => openModal('idea')}
                className="w-full sm:w-auto bg-black text-white [.dark_&]:bg-bee-yellow [.dark_&]:text-bee-black px-12 py-5 rounded-full font-bold uppercase tracking-[0.2em] hover:scale-105 transition-all text-xs"
              >
                Отправить идею
              </button>
              <a 
                href="https://t.me/blackbeee_group" 
                target="_blank" 
                rel="noreferrer"
                className="w-14 h-14 rounded-full border border-black/10 [.dark_&]:border-white/10 flex items-center justify-center hover:bg-[#0088cc] hover:text-white transition-all group shadow-sm bg-white [.dark_&]:bg-white/5"
              >
                <Send className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <img src="/141414.png" alt="Bear model" className="w-full max-w-lg mx-auto object-contain drop-shadow-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
