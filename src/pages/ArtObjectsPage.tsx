import { useEffect, useState } from "react";
import { useOrderModal } from "../contexts/OrderModalContext";
import { X, Maximize2, Play, Layers, Hammer, Palette } from "lucide-react";

export function ArtObjectsPage() {
  const { openModal } = useOrderModal();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-20 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto min-h-screen flex flex-col gap-16 md:gap-24">
      {/* 1. Header Section */}
      <div className="space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tight text-bee-white leading-[1]">
          Производство <br className="hidden lg:block"/><span className="text-bee-yellow">арт-объектов</span>
        </h1>
        <p className="text-lg md:text-xl text-bee-white/60 max-w-3xl leading-relaxed font-medium">
          Создаем эксклюзивные крупногабаритные арт-объекты и декорации для выставок, форумов, торговых центров и городских пространств. Любые формы и масштабы благодаря промышленной 3D-печати.
        </p>
        <button 
          onClick={() => openModal()}
          className="mt-4 px-8 py-4 bg-bee-yellow text-bee-black font-black uppercase tracking-[0.2em] text-sm hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,215,0,0.2)]"
        >
          Обсудить проект
        </button>
      </div>

      {/* 2. Cases Section ("Наши кейсы") */}
      <div className="flex flex-col gap-16 md:gap-24">
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider border-b border-bee-border pb-6">
          Наши кейсы
        </h2>

        {/* Case 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 lg:order-1 space-y-6">
            <div className="space-y-2">
              <div className="text-bee-yellow text-sm font-bold uppercase tracking-widest">Кейс #1</div>
              <h3 className="text-2xl md:text-3xl font-bold leading-tight">Арт объект ZOI</h3>
            </div>
            <p className="text-bee-white/80 leading-relaxed text-base md:text-lg">
              Изготовление масштабного арт-объекта со сложной геометрией и детализацией.
            </p>
            <div className="grid grid-cols-2 gap-4 border-t border-bee-border pt-6">
              <div>
                <div className="text-bee-white/50 text-xs uppercase tracking-widest mb-1">Высота</div>
                <div className="text-xl font-bold font-mono">3 метра</div>
              </div>
              <div>
                <div className="text-bee-white/50 text-xs uppercase tracking-widest mb-1">Срок</div>
                <div className="text-xl font-bold font-mono">2 месяца</div>
              </div>
              <div>
                <div className="text-bee-white/50 text-xs uppercase tracking-widest mb-1">Цена</div>
                <div className="text-xl font-bold font-mono text-bee-yellow">1 000 000 ₽</div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
            <div className="relative group cursor-pointer h-full" onClick={() => setSelectedImage("/st1.png")}>
              <img 
                src="/st1.png" 
                alt="Арт объект ZOI 1" 
                className="w-full h-full aspect-square object-cover rounded-sm border border-bee-border group-hover:opacity-90 transition-opacity"
              />
              <div className="absolute top-3 right-3 bg-bee-black/60 p-1.5 md:p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm border border-bee-white/10 pointer-events-none">
                <Maximize2 size={16} className="text-bee-white md:w-5 md:h-5" />
              </div>
            </div>
            <div className="relative group cursor-pointer h-full" onClick={() => setSelectedImage("/st2.png")}>
              <img 
                src="/st2.png" 
                alt="Арт объект ZOI 2" 
                className="w-full h-full aspect-square object-cover rounded-sm border border-bee-border group-hover:opacity-90 transition-opacity"
              />
              <div className="absolute top-3 right-3 bg-bee-black/60 p-1.5 md:p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm border border-bee-white/10 pointer-events-none">
                <Maximize2 size={16} className="text-bee-white md:w-5 md:h-5" />
              </div>
            </div>
          </div>
        </div>

        {/* Case 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-1 lg:order-1 grid grid-cols-2 gap-4">
            <div className="relative group cursor-pointer h-full" onClick={() => setSelectedImage("/st3.png")}>
              <img 
                src="/st3.png" 
                alt="Матрешка 1" 
                className="w-full h-full aspect-square object-cover rounded-sm border border-bee-border group-hover:opacity-90 transition-opacity"
              />
              <div className="absolute top-3 right-3 bg-bee-black/60 p-1.5 md:p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm border border-bee-white/10 pointer-events-none">
                <Maximize2 size={16} className="text-bee-white md:w-5 md:h-5" />
              </div>
            </div>
            <div className="relative group cursor-pointer h-full" onClick={() => setSelectedImage("/st4.png")}>
              <img 
                src="/st4.png" 
                alt="Матрешка с человеком" 
                className="w-full h-full aspect-square object-cover rounded-sm border border-bee-border group-hover:opacity-90 transition-opacity"
              />
              <div className="absolute top-3 right-3 bg-bee-black/60 p-1.5 md:p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm border border-bee-white/10 pointer-events-none">
                <Maximize2 size={16} className="text-bee-white md:w-5 md:h-5" />
              </div>
            </div>
          </div>
          <div className="order-2 lg:order-2 space-y-6">
            <div className="space-y-2">
              <div className="text-bee-yellow text-sm font-bold uppercase tracking-widest">Кейс #2</div>
              <h3 className="text-2xl md:text-3xl font-bold leading-tight">Матрешка</h3>
            </div>
            <p className="text-bee-white/80 leading-relaxed text-base md:text-lg">
              Производство крупногабаритной матрешки с покраской и финишной обработкой.
            </p>
            <div className="grid grid-cols-2 gap-4 border-t border-bee-border pt-6">
              <div>
                <div className="text-bee-white/50 text-xs uppercase tracking-widest mb-1">Высота</div>
                <div className="text-xl font-bold font-mono">2 метра</div>
              </div>
              <div>
                <div className="text-bee-white/50 text-xs uppercase tracking-widest mb-1">Срок</div>
                <div className="text-xl font-bold font-mono">1 месяц</div>
              </div>
              <div>
                <div className="text-bee-white/50 text-xs uppercase tracking-widest mb-1">Цена</div>
                <div className="text-xl font-bold font-mono text-bee-yellow">500 000 ₽</div>
              </div>
            </div>
          </div>
        </div>

        {/* Case 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 lg:order-1 space-y-6">
            <div className="space-y-2">
              <div className="text-bee-yellow text-sm font-bold uppercase tracking-widest">Кейс #3</div>
              <h3 className="text-2xl md:text-3xl font-bold leading-tight">Ящерица</h3>
            </div>
            <p className="text-bee-white/80 leading-relaxed text-base md:text-lg">
              Детализированная фигура ящерицы с точным соблюдением всех анатомических пропорций и текстур.
            </p>
            <div className="grid grid-cols-2 gap-4 border-t border-bee-border pt-6">
              <div>
                <div className="text-bee-white/50 text-xs uppercase tracking-widest mb-1">Длина</div>
                <div className="text-xl font-bold font-mono">2 метра</div>
              </div>
              <div>
                <div className="text-bee-white/50 text-xs uppercase tracking-widest mb-1">Срок</div>
                <div className="text-xl font-bold font-mono">3 недели</div>
              </div>
              <div>
                <div className="text-bee-white/50 text-xs uppercase tracking-widest mb-1">Цена</div>
                <div className="text-xl font-bold font-mono text-bee-yellow">400 000 ₽</div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
            <div className="relative group cursor-pointer h-full" onClick={() => setSelectedImage("/st5.png")}>
              <img 
                src="/st5.png" 
                alt="Ящерица 1" 
                className="w-full h-full aspect-square object-cover rounded-sm border border-bee-border group-hover:opacity-90 transition-opacity"
              />
              <div className="absolute top-3 right-3 bg-bee-black/60 p-1.5 md:p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm border border-bee-white/10 pointer-events-none">
                <Maximize2 size={16} className="text-bee-white md:w-5 md:h-5" />
              </div>
            </div>
            <div className="relative group cursor-pointer h-full" onClick={() => setSelectedImage("/st6.png")}>
              <img 
                src="/st6.png" 
                alt="Ящерица 2" 
                className="w-full h-full aspect-square object-cover rounded-sm border border-bee-border group-hover:opacity-90 transition-opacity"
              />
              <div className="absolute top-3 right-3 bg-bee-black/60 p-1.5 md:p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm border border-bee-white/10 pointer-events-none">
                <Maximize2 size={16} className="text-bee-white md:w-5 md:h-5" />
              </div>
            </div>
          </div>
        </div>

        {/* Case 4 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-1 lg:order-1 grid grid-cols-2 gap-4">
            <div className="relative group cursor-pointer h-full" onClick={() => setSelectedImage("/st7.png")}>
              <img 
                src="/st7.png" 
                alt="Губа 1" 
                className="w-full h-full aspect-square object-cover rounded-sm border border-bee-border group-hover:opacity-90 transition-opacity"
              />
              <div className="absolute top-3 right-3 bg-bee-black/60 p-1.5 md:p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm border border-bee-white/10 pointer-events-none">
                <Maximize2 size={16} className="text-bee-white md:w-5 md:h-5" />
              </div>
            </div>
            <div className="relative group cursor-pointer h-full" onClick={() => setSelectedImage("/st8.png")}>
              <img 
                src="/st8.png" 
                alt="Губа 2" 
                className="w-full h-full aspect-square object-cover rounded-sm border border-bee-border group-hover:opacity-90 transition-opacity"
              />
              <div className="absolute top-3 right-3 bg-bee-black/60 p-1.5 md:p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm border border-bee-white/10 pointer-events-none">
                <Maximize2 size={16} className="text-bee-white md:w-5 md:h-5" />
              </div>
            </div>
          </div>
          <div className="order-2 lg:order-2 space-y-6">
            <div className="space-y-2">
              <div className="text-bee-yellow text-sm font-bold uppercase tracking-widest">Кейс #4</div>
              <h3 className="text-2xl md:text-3xl font-bold leading-tight">Работа по дизайн проекту</h3>
            </div>
            <p className="text-bee-white/80 leading-relaxed text-base md:text-lg">
              Производство инсталляции "Губы" с гладкой поверхностью и премиальной покраской по индивидуальному дизайн-проекту.
            </p>
            <div className="grid grid-cols-2 gap-4 border-t border-bee-border pt-6">
              <div>
                <div className="text-bee-white/50 text-xs uppercase tracking-widest mb-1">Длина одной губы</div>
                <div className="text-xl font-bold font-mono">1 метр</div>
              </div>
              <div>
                <div className="text-bee-white/50 text-xs uppercase tracking-widest mb-1">Срок</div>
                <div className="text-xl font-bold font-mono">3 недели</div>
              </div>
              <div>
                <div className="text-bee-white/50 text-xs uppercase tracking-widest mb-1">Цена</div>
                <div className="text-xl font-bold font-mono text-bee-yellow">300 000 ₽</div>
              </div>
            </div>
          </div>
        </div>

        {/* Case 5 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 lg:order-1 space-y-6">
            <div className="space-y-2">
              <div className="text-bee-yellow text-sm font-bold uppercase tracking-widest">Кейс #5</div>
              <h3 className="text-2xl md:text-3xl font-bold leading-tight">Оформление в кофейне ROJI</h3>
            </div>
            <p className="text-bee-white/80 leading-relaxed text-base md:text-lg">
              Комплексное оформление интерьера для кофейни ROJI по эксклюзивному дизайн-проекту. Мы создали кастомные элементы декора, идеально вписавшиеся в концепцию заведения.
            </p>
            <div className="grid grid-cols-2 gap-4 border-t border-bee-border pt-6">
              <div>
                <div className="text-bee-white/50 text-xs uppercase tracking-widest mb-1">Срок</div>
                <div className="text-xl font-bold font-mono">1,5 месяца</div>
              </div>
              <div>
                <div className="text-bee-white/50 text-xs uppercase tracking-widest mb-1">Цена</div>
                <div className="text-xl font-bold font-mono text-bee-yellow">400 000 ₽</div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
            <div className="relative group cursor-pointer h-full" onClick={() => setSelectedImage("/st9.png")}>
              <img 
                src="/st9.png" 
                alt="Кофейня roji 1" 
                className="w-full h-full aspect-square object-cover rounded-sm border border-bee-border group-hover:opacity-90 transition-opacity"
              />
              <div className="absolute top-3 right-3 bg-bee-black/60 p-1.5 md:p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm border border-bee-white/10 pointer-events-none">
                <Maximize2 size={16} className="text-bee-white md:w-5 md:h-5" />
              </div>
            </div>
            <div className="grid grid-rows-2 gap-4">
              <div className="relative group cursor-pointer h-full" onClick={() => setSelectedImage("/st10.png")}>
                <img 
                  src="/st10.png" 
                  alt="Кофейня roji 2" 
                  className="w-full h-full object-cover rounded-sm border border-bee-border group-hover:opacity-90 transition-opacity"
                />
                <div className="absolute top-3 right-3 bg-bee-black/60 p-1.5 md:p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm border border-bee-white/10 pointer-events-none">
                  <Maximize2 size={16} className="text-bee-white md:w-5 md:h-5" />
                </div>
              </div>
              <div className="relative group cursor-pointer h-full" onClick={() => setSelectedImage("/st11.png")}>
                <img 
                  src="/st11.png" 
                  alt="Кофейня roji 3" 
                  className="w-full h-full object-cover rounded-sm border border-bee-border group-hover:opacity-90 transition-opacity"
                />
                <div className="absolute top-3 right-3 bg-bee-black/60 p-1.5 md:p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm border border-bee-white/10 pointer-events-none">
                  <Maximize2 size={16} className="text-bee-white md:w-5 md:h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Super Special Section */}
      <div className="space-y-12 md:space-y-16 py-8">
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight">
            SUPER <span className="text-bee-white/40">SPECIAL</span>
          </h2>
          <p className="text-lg md:text-xl text-bee-white/60 leading-relaxed font-medium">
            Мы не просто печатаем. Мы создаем полноценные арт-объекты, монументальные инсталляции и статуи «под ключ» музейного качества.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8 md:space-y-12">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-full border border-bee-yellow flex items-center justify-center">
                <Layers size={18} className="text-bee-yellow" />
              </div>
              <div>
                <h3 className="text-xl font-bold uppercase tracking-wider mb-3">01. Макро-печать</h3>
                <p className="text-bee-white/60 leading-relaxed">
                  Крупноформатная печать составных деталей идеальной точности, что позволяет собирать объекты высотой в несколько метров. Мы используем передовые FDM-технологии и широкий спектр инженерных пластиков: от ударопрочного ABS и ASA до экологичного PLA и износостойкого PETG.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-full border border-bee-yellow flex items-center justify-center">
                <Hammer size={18} className="text-bee-yellow" />
              </div>
              <div>
                <h3 className="text-xl font-bold uppercase tracking-wider mb-3">02. Постобработка</h3>
                <p className="text-bee-white/60 leading-relaxed">
                  Выход детали из станка — это только начало. Работа продолжается вручную: профессиональная грунтовка, шпаклевка и доведение до идеальной гладкости, стирающая следы послойной печати. Наши мастера вручную дошлифовывают каждый изгиб.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-full border border-bee-yellow flex items-center justify-center">
                <Palette size={18} className="text-bee-yellow" />
              </div>
              <div>
                <h3 className="text-xl font-bold uppercase tracking-wider mb-3">03. Художники и материалы</h3>
                <p className="text-bee-white/60 leading-relaxed">
                  В нашей команде работают профессиональные декораторы и художники. Мы используем премиальную многослойную покраску — от глубокого глянца автомобильного лака до реалистичной имитации бронзы, патины, мрамора или ржавчины.
                </p>
              </div>
            </div>
          </div>

          <div className="relative h-full min-h-[500px] lg:min-h-[600px] rounded-sm overflow-hidden border border-bee-border group cursor-pointer" onClick={() => setSelectedImage("/st4.png")}>
            <img src="/st4.png" alt="Производство матрешки с человеком" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute top-4 right-4 bg-bee-white text-bee-black font-bold text-xs uppercase tracking-widest px-3 py-1.5 flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-bee-black rounded-full"></div>
              Спецификация
            </div>
          </div>
        </div>
      </div>

      {/* 4. Video Section */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch border border-bee-yellow/20 bg-bee-black p-6 md:p-8 lg:p-10 rounded-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-bee-yellow/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-bee-yellow/5 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="w-full lg:w-[35%] flex flex-col justify-center space-y-6 relative z-10">
          <div className="inline-block px-3 py-1 bg-bee-yellow/10 border border-bee-yellow/30 text-bee-yellow text-xs font-bold uppercase tracking-widest w-fit mb-2">
            Взгляд изнутри
          </div>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight leading-tight">
            Black Bee на <br className="hidden lg:block"/><span className="text-bee-yellow">конференции</span>
          </h2>
          <p className="text-bee-white/70 leading-relaxed font-medium">
            Регулярно участвуем в индустриальных выставках, где вживую демонстрируем возможности нашей техники и делимся опытом создания нестандартных объектов.
          </p>
          <button 
            onClick={() => setIsVideoModalOpen(true)}
            className="group flex items-center gap-4 text-bee-yellow uppercase tracking-widest text-sm font-bold mt-4"
          >
            <span className="w-12 h-12 flex items-center justify-center rounded-full border border-bee-yellow group-hover:bg-bee-yellow group-hover:text-bee-black transition-colors">
              <Play size={18} className="ml-1" />
            </span>
            Смотреть видео
          </button>
        </div>
        <div 
          className="w-full lg:w-[65%] relative group cursor-pointer rounded-sm overflow-hidden border border-bee-border flex items-center justify-center bg-black min-h-[350px] md:min-h-[450px] lg:min-h-[500px]" 
          onClick={() => setIsVideoModalOpen(true)}
        >
          <video 
            src="/merch.mp4" 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-50 transition-opacity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bee-black/80 via-transparent to-transparent pointer-events-none"></div>
        </div>
      </div>

      {/* 5. Production Speed Section */}
      <div className="space-y-10 md:space-y-12">
        <div className="space-y-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight">
            Производство на <span className="text-bee-yellow">максимальных</span> скоростях
          </h2>
          <p className="text-lg md:text-xl text-bee-white/60 leading-relaxed font-medium">
            Понимаем, когда результат нужен был «еще вчера». Наш процесс выстроен для быстрого запуска проектов без потери качества — от чертежа до готовой инсталляции.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6">
          {[
            { step: '01', title: 'Оценка проекта', desc: 'Быстро рассчитываем точную стоимость и жестко фиксируем сроки в день обращения.' },
            { step: '02', title: 'Создание прототипа', desc: 'Создаем 3D-модель и печатаем первый образец. Согласуем детали за 24–48 часов.' },
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

      {/* 6. Final CTA Block ("Обсудить проект с менеджером") */}
      <div className="bg-gradient-to-r from-bee-yellow/10 via-bee-black to-bee-yellow/10 border border-bee-yellow/30 p-8 md:p-12 lg:p-16 rounded-sm text-center space-y-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-bee-yellow/10 rounded-full blur-[120px] pointer-events-none"></div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-bee-white relative z-10">
          Готовы реализовать ваш <span className="text-bee-yellow">арт-объект</span>?
        </h2>
        <p className="text-base md:text-lg text-bee-white/70 max-w-2xl mx-auto leading-relaxed relative z-10">
          Обсудите проект напрямую с главным инженером и менеджером. Рассчитаем стоимость и предложим оптимальные технологии за 15 минут.
        </p>
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
          <button 
            onClick={() => openModal()}
            className="w-full sm:w-auto px-8 py-4 bg-bee-yellow text-bee-black font-black uppercase tracking-[0.2em] text-sm hover:bg-bee-white transition-colors shadow-[0_0_25px_rgba(255,215,0,0.3)]"
          >
            Обсудить проект с менеджером
          </button>
          <a 
            href="https://t.me/blackbeee_group" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 border border-bee-border hover:border-bee-yellow text-bee-white font-bold uppercase tracking-widest text-sm transition-colors text-center"
          >
            Написать в Telegram
          </a>
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
