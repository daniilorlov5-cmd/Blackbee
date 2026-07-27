import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useOrderModal } from "../contexts/OrderModalContext";
import { X, Maximize2, Play, Truck, MapPin } from "lucide-react";

export function MerchPage() {
  const { openModal } = useOrderModal();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-20 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto min-h-screen flex flex-col gap-16 md:gap-24">
      <div className="space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tight text-bee-white leading-[1]">
          Производство <br className="hidden lg:block"/><span className="text-bee-yellow">мерча</span>
        </h1>
        <p className="text-lg md:text-xl text-bee-white/60 max-w-3xl leading-relaxed font-medium">
          Производим уникальный мерч, корпоративные подарки и награды для компаний по всей России. Реализуем проекты любой сложности с помощью технологий 3D-печати.
        </p>
        <button 
          onClick={() => openModal()}
          className="mt-4 px-8 py-4 bg-bee-yellow text-bee-black font-black uppercase tracking-[0.2em] text-sm hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,215,0,0.2)]"
        >
          Обсудить проект
        </button>
      </div>

      {/* Video Section */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch border border-bee-border bg-bee-black p-6 md:p-8 lg:p-10 rounded-sm">
        <div className="w-full lg:w-[30%] flex flex-col justify-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">
            Black Bee на <br className="hidden lg:block"/><span className="text-bee-yellow">конференции</span>
          </h2>
          <p className="text-bee-white/70 leading-relaxed font-medium">
            Мы регулярно делимся экспертизой и рассказываем о возможностях промышленной 3D-печати для создания мерча, сувениров и корпоративных наград на профильных мероприятиях.
          </p>
          <div className="p-4 border border-bee-yellow/30 bg-bee-yellow/5 rounded-sm">
            <p className="text-bee-yellow font-bold uppercase tracking-widest text-sm">Хотите узнать подробнее? Запустите видео.</p>
          </div>
        </div>
        <div 
          className="w-full lg:w-[70%] relative group cursor-pointer rounded-sm overflow-hidden border border-bee-border flex items-center justify-center bg-black min-h-[400px] md:min-h-[500px]" 
          onClick={() => setIsVideoModalOpen(true)}
        >
          <video 
            src="/merch.mp4" 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="absolute inset-0 w-full h-full object-contain opacity-70 group-hover:opacity-50 transition-opacity"
          />
          <div className="relative z-10 w-20 h-20 rounded-full bg-bee-yellow flex items-center justify-center text-bee-black shadow-[0_0_30px_rgba(255,215,0,0.4)] group-hover:scale-110 transition-transform">
            <Play size={32} className="ml-2" />
          </div>
        </div>
      </div>

      {/* Delivery & Service Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className="bg-bee-black border border-bee-border p-8 rounded-sm relative overflow-hidden group hover:border-bee-yellow/50 transition-colors">
          <div className="absolute -right-4 -top-4 text-bee-white/5 group-hover:text-bee-yellow/5 transition-colors transform rotate-12">
            <Truck size={160} strokeWidth={1} />
          </div>
          <div className="relative z-10 flex flex-col h-full">
            <div className="bg-bee-yellow/10 w-14 h-14 rounded-full flex items-center justify-center mb-6">
              <Truck size={28} className="text-bee-yellow" />
            </div>
            <h3 className="text-2xl font-black uppercase tracking-wider mb-4">Доставка <span className="text-bee-yellow">от 3 дней</span></h3>
            <p className="text-bee-white/60 font-medium leading-relaxed max-w-sm">
              Оперативно отправляем готовые тиражи в любую точку России. Тщательная упаковка гарантирует 100% сохранность каждого изделия в пути.
            </p>
          </div>
        </div>

        <div className="bg-bee-black border border-bee-border p-8 rounded-sm relative overflow-hidden group hover:border-bee-yellow/50 transition-colors">
          <div className="absolute -right-4 -bottom-4 text-bee-white/5 group-hover:text-bee-yellow/5 transition-colors transform -rotate-12">
            <MapPin size={160} strokeWidth={1} />
          </div>
          <div className="relative z-10 flex flex-col h-full">
            <div className="bg-bee-yellow/10 w-14 h-14 rounded-full flex items-center justify-center mb-6">
              <MapPin size={28} className="text-bee-yellow" />
            </div>
            <h3 className="text-2xl font-black uppercase tracking-wider mb-4">Особый сервис <span className="text-bee-yellow">в Москве</span></h3>
            <p className="text-bee-white/60 font-medium leading-relaxed max-w-sm">
              Для московских клиентов доступна курьерская доставка «день в день», а также личные встречи для детального согласования пилотных образцов.
            </p>
          </div>
        </div>
      </div>

      {/* User Journey / Process */}
      <div className="space-y-10 md:space-y-12">
        <div className="space-y-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight">
            Производство на <span className="text-bee-yellow">максимальных</span> скоростях
          </h2>
          <p className="text-lg md:text-xl text-bee-white/60 leading-relaxed font-medium">
            Понимаем, когда корпоративные подарки нужны были «еще вчера». Наш процесс выстроен для быстрого запуска партий без потери качества — от идеи до готового тиража в ваших руках.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6">
          {[
            { step: '01', title: 'Оценка проекта', desc: 'Быстро рассчитываем точную стоимость и жестко фиксируем сроки в день обращения.' },
            { step: '02', title: 'Прототипирование', desc: 'Создаем 3D-модель и печатаем первый образец. Согласуем детали за 24–48 часов.' },
            { step: '03', title: 'Масс-продакшн', desc: 'Запускаем 3D-фермы. Работаем без выходных для самых горящих дедлайнов.' },
            { step: '04', title: 'Постобработка', desc: 'Ручная шлифовка, профессиональная покраска, сборка и брендирование изделий.' },
            { step: '05', title: 'Логистика', desc: 'Надежно упаковываем и доставляем готовую партию точно в срок, в любую точку РФ.' },
          ].map((item, idx) => (
            <div key={idx} className="bg-bee-black border border-bee-border p-6 hover:border-bee-yellow/50 transition-colors flex flex-col relative group h-full">
              <div className="text-bee-yellow/20 group-hover:text-bee-yellow/40 transition-colors font-mono text-4xl font-bold absolute top-4 right-4 leading-none">{item.step}</div>
              <div className="flex-1 mt-6 sm:mt-8 flex flex-col">
                <h3 className="font-bold text-sm lg:text-[11px] xl:text-xs 2xl:text-sm uppercase tracking-wider mb-3 leading-snug min-h-[2.5rem] md:min-h-[3rem] break-words" style={{ wordBreak: 'normal', overflowWrap: 'break-word' }}>{item.title}</h3>
                <p className="text-sm text-bee-white/60 leading-relaxed flex-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-16 md:gap-24">
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider border-b border-bee-border pb-6">
          Кейсы
        </h2>

        {/* Case 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 lg:order-1 space-y-6">
            <div className="space-y-2">
              <div className="text-bee-yellow text-sm font-bold uppercase tracking-widest">Кейс #1</div>
              <h3 className="text-2xl md:text-3xl font-bold leading-tight">Статуэтка для мероприятия в Сколково «Битва менторов»</h3>
            </div>
            <p className="text-bee-white/80 leading-relaxed text-base md:text-lg">
              Нужны были уникальные награды на мероприятие. Мы разработали дизайн и изготовили партию статуэток.
            </p>
            <div className="grid grid-cols-2 gap-4 border-t border-bee-border pt-6">
              <div>
                <div className="text-bee-white/50 text-xs uppercase tracking-widest mb-1">Высота</div>
                <div className="text-xl font-bold font-mono">20 см</div>
              </div>
              <div>
                <div className="text-bee-white/50 text-xs uppercase tracking-widest mb-1">Партия</div>
                <div className="text-xl font-bold font-mono">10 шт.</div>
              </div>
              <div>
                <div className="text-bee-white/50 text-xs uppercase tracking-widest mb-1">Срок</div>
                <div className="text-xl font-bold font-mono">7 дней</div>
              </div>
              <div>
                <div className="text-bee-white/50 text-xs uppercase tracking-widest mb-1">Цена за шт.</div>
                <div className="text-xl font-bold font-mono text-bee-yellow">2 000 ₽</div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative group cursor-pointer" onClick={() => setSelectedImage("/merch1.png")}>
            <img 
              src="/merch1.png" 
              alt="Статуэтка Битва менторов" 
              className="w-full h-auto aspect-[4/3] object-cover rounded-sm border border-bee-border group-hover:opacity-90 transition-opacity"
            />
            <div className="absolute top-4 right-4 bg-bee-black/60 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm border border-bee-white/10 pointer-events-none">
              <Maximize2 size={20} className="text-bee-white" />
            </div>
          </div>
        </div>

        {/* Case 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-1 lg:order-1 relative group cursor-pointer" onClick={() => setSelectedImage("/merch2.png")}>
            <img 
              src="/merch2.png" 
              alt="Статуэтка KingStore" 
              className="w-full h-auto aspect-[4/3] object-cover rounded-sm border border-bee-border object-top group-hover:opacity-90 transition-opacity"
            />
            <div className="absolute top-4 right-4 bg-bee-black/60 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm border border-bee-white/10 pointer-events-none">
              <Maximize2 size={20} className="text-bee-white" />
            </div>
          </div>
          <div className="order-2 lg:order-2 space-y-6">
            <div className="space-y-2">
              <div className="text-bee-yellow text-sm font-bold uppercase tracking-widest">Кейс #2</div>
              <h3 className="text-2xl md:text-3xl font-bold leading-tight">Статуэтка для сети магазинов техники «KingStore»</h3>
            </div>
            <p className="text-bee-white/80 leading-relaxed text-base md:text-lg">
              Клиент пришел с идеей поставить в каждом своем магазине (сеть из 18 магазинов) золотой айфон с логотипом компании.
            </p>
            <div className="grid grid-cols-2 gap-4 border-t border-bee-border pt-6">
              <div>
                <div className="text-bee-white/50 text-xs uppercase tracking-widest mb-1">Высота</div>
                <div className="text-xl font-bold font-mono">25 см</div>
              </div>
              <div>
                <div className="text-bee-white/50 text-xs uppercase tracking-widest mb-1">Партия</div>
                <div className="text-xl font-bold font-mono">18 шт.</div>
              </div>
              <div>
                <div className="text-bee-white/50 text-xs uppercase tracking-widest mb-1">Срок</div>
                <div className="text-xl font-bold font-mono">7 дней</div>
              </div>
              <div>
                <div className="text-bee-white/50 text-xs uppercase tracking-widest mb-1">Цена за шт.</div>
                <div className="text-xl font-bold font-mono text-bee-yellow">2 000 ₽</div>
              </div>
            </div>
          </div>
        </div>

        {/* Case 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 lg:order-1 space-y-6">
            <div className="space-y-2">
              <div className="text-bee-yellow text-sm font-bold uppercase tracking-widest">Кейс #3</div>
              <h3 className="text-2xl md:text-3xl font-bold leading-tight">Брелки для частной школы «Поколение»</h3>
              <div className="text-bee-white/60 text-sm">г. Волгоград</div>
            </div>
            <p className="text-bee-white/80 leading-relaxed text-base md:text-lg">
              Реализовали партию стильных кастомных брелков для учеников школы.
            </p>
            <div className="grid grid-cols-2 gap-4 border-t border-bee-border pt-6">
              <div>
                <div className="text-bee-white/50 text-xs uppercase tracking-widest mb-1">Партия</div>
                <div className="text-xl font-bold font-mono">200 шт.</div>
              </div>
              <div>
                <div className="text-bee-white/50 text-xs uppercase tracking-widest mb-1">Срок</div>
                <div className="text-xl font-bold font-mono">14 дней</div>
              </div>
              <div>
                <div className="text-bee-white/50 text-xs uppercase tracking-widest mb-1">Цена за шт.</div>
                <div className="text-xl font-bold font-mono text-bee-yellow">150 ₽</div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-3 sm:gap-4 h-[320px] sm:h-[420px] md:h-[480px]">
            <div className="relative group cursor-pointer w-full h-full overflow-hidden rounded-sm border border-bee-border" onClick={() => setSelectedImage("/merch3.png")}>
              <img 
                src="/merch3.png" 
                alt="Брелок 1" 
                className="absolute inset-0 w-full h-full object-cover group-hover:opacity-90 transition-opacity"
              />
              <div className="absolute top-3 right-3 bg-bee-black/60 p-1.5 md:p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm border border-bee-white/10 pointer-events-none">
                <Maximize2 size={16} className="text-bee-white md:w-5 md:h-5" />
              </div>
            </div>
            <div className="grid grid-rows-2 gap-3 sm:gap-4 h-full">
              <div className="relative group cursor-pointer w-full h-full overflow-hidden rounded-sm border border-bee-border" onClick={() => setSelectedImage("/merch4.png")}>
                <img 
                  src="/merch4.png" 
                  alt="Брелок 2" 
                  className="absolute inset-0 w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                />
                <div className="absolute top-3 right-3 bg-bee-black/60 p-1.5 md:p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm border border-bee-white/10 pointer-events-none">
                  <Maximize2 size={16} className="text-bee-white md:w-5 md:h-5" />
                </div>
              </div>
              <div className="relative group cursor-pointer w-full h-full overflow-hidden rounded-sm border border-bee-border" onClick={() => setSelectedImage("/merch5.png")}>
                <img 
                  src="/merch5.png" 
                  alt="Брелок 3" 
                  className="absolute inset-0 w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                />
                <div className="absolute top-3 right-3 bg-bee-black/60 p-1.5 md:p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm border border-bee-white/10 pointer-events-none">
                  <Maximize2 size={16} className="text-bee-white md:w-5 md:h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Case 4 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-1 lg:order-1 grid grid-cols-2 gap-3 sm:gap-4 h-[320px] sm:h-[420px] md:h-[480px]">
            <div className="relative group cursor-pointer w-full h-full overflow-hidden rounded-sm border border-bee-border" onClick={() => setSelectedImage("/merch6.png")}>
              <img 
                src="/merch6.png" 
                alt="Брелок Аляска 1" 
                className="absolute inset-0 w-full h-full object-cover group-hover:opacity-90 transition-opacity"
              />
              <div className="absolute top-3 right-3 bg-bee-black/60 p-1.5 md:p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm border border-bee-white/10 pointer-events-none">
                <Maximize2 size={16} className="text-bee-white md:w-5 md:h-5" />
              </div>
            </div>
            <div className="relative group cursor-pointer w-full h-full overflow-hidden rounded-sm border border-bee-border" onClick={() => setSelectedImage("/merch7.png")}>
              <img 
                src="/merch7.png" 
                alt="Брелок Аляска 2" 
                className="absolute inset-0 w-full h-full object-cover group-hover:opacity-90 transition-opacity"
              />
              <div className="absolute top-3 right-3 bg-bee-black/60 p-1.5 md:p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm border border-bee-white/10 pointer-events-none">
                <Maximize2 size={16} className="text-bee-white md:w-5 md:h-5" />
              </div>
            </div>
          </div>
          <div className="order-2 lg:order-2 space-y-6">
            <div className="space-y-2">
              <div className="text-bee-yellow text-sm font-bold uppercase tracking-widest">Кейс #4</div>
              <h3 className="text-2xl md:text-3xl font-bold leading-tight">Брелки для бара «Аляска»</h3>
              <div className="text-bee-white/60 text-sm">г. Волгоград</div>
            </div>
            <p className="text-bee-white/80 leading-relaxed text-base md:text-lg">
              Ко дню рождения бара произвели лимитированную партию эксклюзивных брелков.
            </p>
            <div className="grid grid-cols-2 gap-4 border-t border-bee-border pt-6">
              <div>
                <div className="text-bee-white/50 text-xs uppercase tracking-widest mb-1">Партия</div>
                <div className="text-xl font-bold font-mono">50 шт.</div>
              </div>
              <div>
                <div className="text-bee-white/50 text-xs uppercase tracking-widest mb-1">Срок</div>
                <div className="text-xl font-bold font-mono">7 дней</div>
              </div>
              <div>
                <div className="text-bee-white/50 text-xs uppercase tracking-widest mb-1">Цена за шт.</div>
                <div className="text-xl font-bold font-mono text-bee-yellow">70 ₽</div>
              </div>
            </div>
          </div>
        </div>

        {/* Case 5 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 lg:order-1 space-y-6">
            <div className="space-y-2">
              <div className="text-bee-yellow text-sm font-bold uppercase tracking-widest">Кейс #5</div>
              <h3 className="text-2xl md:text-3xl font-bold leading-tight">Награды для компании «Доброгост»</h3>
              <div className="text-bee-white/60 text-sm">Мясокомбинат, г. Екатеринбург</div>
            </div>
            <p className="text-bee-white/80 leading-relaxed text-base md:text-lg">
              Клиент пришел с идеей, и мы разработали под них индивидуально модель награды.
            </p>
            <div className="grid grid-cols-2 gap-4 border-t border-bee-border pt-6">
              <div>
                <div className="text-bee-white/50 text-xs uppercase tracking-widest mb-1">Высота</div>
                <div className="text-xl font-bold font-mono">31 см</div>
              </div>
              <div>
                <div className="text-bee-white/50 text-xs uppercase tracking-widest mb-1">Партия</div>
                <div className="text-xl font-bold font-mono">30 шт.</div>
              </div>
              <div>
                <div className="text-bee-white/50 text-xs uppercase tracking-widest mb-1">Срок</div>
                <div className="text-xl font-bold font-mono">10 дней</div>
              </div>
              <div>
                <div className="text-bee-white/50 text-xs uppercase tracking-widest mb-1">Цена за шт.</div>
                <div className="text-xl font-bold font-mono text-bee-yellow">2 000 ₽</div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative group cursor-pointer" onClick={() => setSelectedImage("/merch8.png")}>
            <img 
              src="/merch8.png" 
              alt="Награды Доброгост" 
              className="w-full h-auto aspect-[4/3] object-cover rounded-sm border border-bee-border object-center group-hover:opacity-90 transition-opacity"
            />
            <div className="absolute top-4 right-4 bg-bee-black/60 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm border border-bee-white/10 pointer-events-none">
              <Maximize2 size={20} className="text-bee-white" />
            </div>
          </div>
        </div>

      </div>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-bee-black/95 backdrop-blur-md"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <button 
            className="absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8 z-50 p-2 text-bee-white/60 hover:text-bee-white hover:bg-bee-white/10 rounded-full transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setIsVideoModalOpen(false);
            }}
          >
            <X size={32} />
          </button>
          <div className="relative z-10 w-full h-full max-w-5xl mx-auto flex items-center justify-center">
            <video 
              src="/merch.mp4" 
              controls 
              autoPlay 
              className="max-w-full max-h-full object-contain rounded-sm shadow-[0_0_50px_rgba(0,0,0,0.5)]"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8"
          onClick={() => setSelectedImage(null)}
        >
          <div className="absolute inset-0 bg-bee-black/90 backdrop-blur-sm" />
          <button 
            className="absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8 z-50 p-2 text-bee-white/60 hover:text-bee-white hover:bg-bee-white/10 rounded-full transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            <X size={32} />
          </button>
          <div className="relative z-10 w-full h-full max-w-7xl mx-auto flex items-center justify-center">
            <img 
              src={selectedImage} 
              alt="Увеличенное изображение" 
              className="max-w-full max-h-full object-contain rounded-sm"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
}
