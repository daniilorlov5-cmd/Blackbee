import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, BarChart3, PackageOpen, Box, Factory, Printer, Truck, ChevronDown } from "lucide-react";
import { Logo } from "../components/Logo";

export function SaaSPage() {
  const [activePlatformTab, setActivePlatformTab] = useState("Мои товары");

  const platformTabs = [
    { 
      id: "Мои товары", 
      image: "/121.png",
      benefits: [
        "Автоматическое создание 3D-мокапов для вашего каталога",
        "Управление наценкой и маржинальностью в два клика",
        "Быстрый тест новых товаров без вложений"
      ]
    },
    { 
      id: "Видео", 
      image: "/122.png",
      benefits: [
        "Автогенерация видео-креативов с вашим товаром",
        "Готовые форматы для Reels, TikTok и Shorts",
        "Высокая конверсия благодаря реалистичной 3D-анимации"
      ]
    },
    { 
      id: "Клиенты", 
      image: "/123.png",
      benefits: [
        "Полная база ваших покупателей и их заказов",
        "Сегментация для эффективных повторных продаж",
        "Детальная история взаимодействия с вашим брендом"
      ]
    },
    { 
      id: "Производство", 
      image: "/124.png",
      benefits: [
        "Прозрачное отслеживание статуса каждого заказа",
        "Автоматическая маршрутизация на наши 3D-фермы",
        "Контроль качества на каждом этапе 3D-печати"
      ]
    },
    { 
      id: "Аналитика", 
      image: "/125.png",
      benefits: [
        "Дашборд с ключевыми метриками: переходы, конверсии",
        "Подробная воронка продаж по каждому вашему товару",
        "Автоматический расчет чистой прибыли и LTV покупателей"
      ]
    }
  ];

  const activeTabData = platformTabs.find(t => t.id === activePlatformTab)!;

  return (
    <div className="min-h-screen bg-bee-black text-bee-white font-sans antialiased overflow-x-hidden selection:bg-bee-yellow selection:text-bee-black">
      
      {/* SaaS Custom Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 border-b border-bee-white/10 bg-bee-black/95 backdrop-blur-md">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 lg:h-24 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 lg:gap-3 group">
            <Logo className="h-6 md:h-8 text-bee-logo group-hover:scale-105 transition-transform duration-500 hover:text-bee-white" />
          </Link>
          
          <div className="hidden lg:flex items-center gap-8">
            {['Как работает', 'Платформа', 'Экономика', 'FAQ'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-[11px] uppercase tracking-[0.2em] font-semibold text-bee-white/70 hover:text-bee-yellow transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <Link 
            to="/"
            className="px-6 py-3 border border-bee-border text-bee-yellow bg-bee-gray hover:bg-bee-yellow hover:text-bee-black transition-all rounded-sm text-xs md:text-sm font-bold uppercase tracking-wider relative overflow-hidden group/btn flex items-center"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover/btn:-translate-x-1 transition-transform" />
            На сайт BlackBee
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-28 pb-16 md:pt-40 md:pb-24 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 w-full max-w-[1600px] mx-auto min-h-[100svh] flex items-center">
        {/* Abstract Background Element */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-bee-yellow/5 rounded-full blur-[150px] -z-10 pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
          <div className="lg:col-span-6 space-y-8 md:space-y-12">
            <div className="inline-block border border-bee-white/20 px-4 py-2 rounded-sm bg-bee-white/5">
              <span className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-bee-white/70">
                Для блогеров, арбитражников и владельцев аудиторий
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-[4rem] xl:text-[5rem] font-black uppercase leading-[1.05] tracking-tight text-balance">
              Запускайте <br className="hidden lg:block" />
              <span className="text-bee-yellow">3D-товары</span> <br className="hidden lg:block" />
              без производства
            </h1>

            <p className="text-lg md:text-xl text-bee-text-muted font-light max-w-2xl leading-relaxed">
              Мы берем на себя 3D-моделирование, производство, склад и доставку заказов. <span className="text-bee-white font-medium">Вы занимаетесь только трафиком и продажами.</span>
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button className="px-8 py-5 md:py-6 bg-bee-yellow text-bee-black font-black uppercase tracking-[0.2em] text-xs md:text-sm hover:scale-[1.02] transition-transform shadow-[0_0_30px_rgba(255,215,0,0.15)] flex justify-center items-center group relative overflow-hidden">
                <span className="relative z-10">Запустить первый товар</span>
                <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform relative z-10" />
              </button>
              
              <button className="px-8 py-5 md:py-6 border border-bee-border bg-bee-gray text-bee-white font-bold uppercase tracking-[0.2em] text-xs md:text-sm hover:border-bee-yellow/50 hover:bg-bee-white/5 transition-all flex justify-center items-center">
                Посмотреть платформу
              </button>
            </div>

            <div className="flex flex-wrap gap-2 md:gap-3 pt-6 lg:pt-10">
              {['Print on demand', 'Модель 3D-фермы', 'Аналитика'].map((tag) => (
                <div key={tag} className="border border-bee-border bg-bee-black px-3 py-1.5 md:px-4 md:py-2 font-mono text-[10px] md:text-xs uppercase tracking-widest text-bee-white/50">
                  {tag}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="bg-bee-black border border-bee-border p-6 md:p-10 lg:p-12 relative overflow-hidden flex flex-col justify-center">
              {/* Decorative corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-bee-yellow opacity-50" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-bee-yellow opacity-50" />

              <div className="relative z-10 space-y-6">
                
                {/* 3D Product Mockup Card */}
                <div className="bg-bee-gray border border-bee-border flex items-center justify-center relative group p-4 lg:p-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-bee-yellow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
                  <img src="/121.png" alt="3D Product Mockup" className="w-full h-auto object-contain transition-all duration-700 relative z-20 group-hover:scale-[1.02]" />
                </div>

                <div className="space-y-4">
                  <div className="bg-bee-gray/50 border border-bee-border p-5 hover:bg-bee-gray transition-colors cursor-default flex items-center justify-between">
                    <span className="text-bee-white/80 font-medium tracking-wide">Дашборд: продажи, клиенты, переходы</span>
                    <BarChart3 className="w-5 h-5 text-bee-yellow/70" />
                  </div>
                  <div className="bg-bee-gray/50 border border-bee-border p-5 hover:bg-bee-gray transition-colors cursor-default flex items-center justify-between">
                    <span className="text-bee-white/80 font-medium tracking-wide">Запущенные товары и видео</span>
                    <PackageOpen className="w-5 h-5 text-bee-yellow/70" />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Section */}
      <section id="платформа" className="py-20 md:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 xl:px-12 bg-bee-gray relative z-10 border-t border-bee-border/50 overflow-hidden">
        {/* Background Graphic */}
        <div className="absolute top-0 right-0 -mr-[400px] -mt-[200px] w-[800px] h-[800px] bg-bee-yellow/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-[200px] -mb-[200px] w-[600px] h-[600px] bg-bee-white/[0.02] rounded-full blur-[100px] pointer-events-none" />

        <div className="w-full max-w-[1600px] mx-auto relative z-10">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mb-16 md:mb-24">
            Платформа для полного<br className="hidden md:block"/> цикла запуска
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            
            {/* Tabs Sidebar */}
            <div className="lg:col-span-3 flex lg:flex-col gap-2 md:gap-3 overflow-x-auto pb-4 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0 lg:overflow-visible scrollbar-hide snap-x">
              {platformTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActivePlatformTab(tab.id)}
                  className={`flex-shrink-0 snap-start text-left px-5 py-3 md:px-6 md:py-4 font-bold text-sm md:text-base lg:text-lg transition-all duration-300 whitespace-nowrap lg:whitespace-normal rounded-sm lg:rounded-none ${
                    activePlatformTab === tab.id
                      ? "bg-bee-yellow text-bee-black shadow-[0_0_20px_rgba(255,215,0,0.15)]"
                      : "bg-bee-black border border-bee-border text-bee-white/60 hover:text-bee-white hover:bg-bee-white/5"
                  }`}
                >
                  {tab.id}
                </button>
              ))}
            </div>

            {/* Content Area */}
            <div className="lg:col-span-9 bg-bee-black border border-bee-border p-6 md:p-8 lg:p-12 relative overflow-hidden">
              {/* Subtle mesh background inside the content box */}
              <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '2rem 2rem' }} />

              <div className="relative z-10 flex flex-col h-full">
                <div className="aspect-[16/9] w-full bg-bee-gray border border-bee-border flex items-center justify-center mb-8 overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-bee-yellow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none" />
                  <img src={activeTabData.image} alt={activeTabData.id} className="w-full h-full object-contain transition-all duration-700 relative z-20 group-hover:scale-[1.02] p-4 lg:p-8" />
                </div>
                
                <div className="bg-bee-gray/80 backdrop-blur-sm border border-bee-border p-6 md:p-8 mt-auto">
                  <h3 className="text-xl font-bold mb-6 text-bee-yellow">{activeTabData.id}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {activeTabData.benefits.map((benefit, i) => (
                      <div key={i} className="flex gap-4 items-start">
                        <div className="w-2 h-2 rounded-full bg-bee-yellow/80 mt-2 flex-shrink-0" />
                        <p className="text-sm text-bee-white/90 leading-relaxed font-medium">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 md:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 xl:px-12 bg-bee-black relative z-10 border-t border-bee-border/50">
        <div className="w-full max-w-[1600px] mx-auto">
          <div className="w-full text-center max-w-5xl mx-auto mb-16 lg:mb-24">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[1.1] text-balance">
              Физический товар обычно сложнее, чем трафик.<br className="hidden lg:block" />
              <span className="text-bee-yellow">Поэтому мы забрали всю рутину на себя.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { title: "Склад", desc: "Не закупаете партии заранее." },
              { title: "Производство", desc: "Не разбираетесь в материалах и станках." },
              { title: "Доставка", desc: "Не упаковываете и не отправляете вручную." },
              { title: "Аналитика", desc: "Видите переходы, клиентов и продажи в кабинете." }
            ].map((feature, i) => (
              <div key={i} className="bg-bee-gray border border-bee-border p-8 hover:border-bee-yellow/50 transition-colors group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-bee-yellow/5 blur-3xl rounded-full group-hover:bg-bee-yellow/10 transition-colors" />
                <h3 className="text-xl font-bold mb-4 relative z-10">{feature.title}</h3>
                <p className="text-bee-text-muted relative z-10">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Backend Section */}
      <section className="py-24 md:py-36 lg:py-48 px-4 sm:px-6 lg:px-8 xl:px-12 bg-bee-gray relative z-10 border-y border-bee-border overflow-hidden">
        {/* Background Mesh/Grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '4rem 4rem' }}>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-bee-yellow/5 blur-[120px] rounded-[100%]" />

        <div className="w-full max-w-[1600px] mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-tight mb-8 text-balance">
            Всё производство и доставка <br className="hidden lg:block"/>в одном окне
          </h2>
          <p className="text-lg md:text-xl text-bee-text-muted font-light max-w-4xl mx-auto leading-relaxed text-balance">
            Никаких сложных интеграций и закупки партий. Вы продаете товары своей аудитории, а мы производим их на наших 3D-фермах, бережно упаковываем и отправляем напрямую вашим покупателям.
          </p>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="как работает" className="py-20 md:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 xl:px-12 bg-bee-black relative z-10">
        <div className="w-full max-w-[1600px] mx-auto">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-16">
            Как это работает
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { step: "1", title: "Идея", desc: "Выбираем товар под нишу." },
              { step: "2", title: "Тест", desc: "Модель и тестовая партия." },
              { step: "3", title: "Трафик", desc: "Посты, видео, реклама." },
              { step: "4", title: "Заказы", desc: "BlackBee производит и доставляет." },
            ].map((item, i) => (
              <div key={i} className="bg-bee-gray/50 border border-bee-border p-8 hover:bg-bee-gray transition-colors flex flex-col relative overflow-hidden group">
                {/* Number Watermark */}
                <span className="absolute -right-4 -bottom-8 text-[120px] font-black text-bee-white/[0.02] group-hover:text-bee-yellow/[0.05] transition-colors pointer-events-none select-none">
                  {item.step}
                </span>
                
                <div className="font-mono text-bee-yellow text-sm mb-4">{item.step}</div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-bee-text-muted mt-auto relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Estimate Section */}
      <section id="экономика" className="py-20 md:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 xl:px-12 bg-bee-gray relative z-10 border-t border-bee-border/50">
        <div className="w-full max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-24 items-start">
            <div>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4">
                Оцените потенциал запуска
              </h2>
              <p className="text-bee-text-muted text-lg md:text-xl mb-8 lg:mb-10">
                Примерный расчет помогает понять порядок цифр до общения с командой.
              </p>
              
              <div className="space-y-4 md:space-y-6 max-w-xl">
                <div className="space-y-1.5 md:space-y-2">
                  <label className="text-xs md:text-sm font-medium text-bee-white/80">Количество аудитории / Охваты</label>
                  <input type="text" className="w-full bg-bee-black border border-bee-border px-4 py-3 md:py-4 text-bee-white placeholder-bee-white/20 focus:outline-none focus:border-bee-yellow transition-colors" placeholder="Например: 10 000" />
                </div>
                <div className="space-y-1.5 md:space-y-2">
                  <label className="text-xs md:text-sm font-medium text-bee-white/80">Примерная цена товара ($)</label>
                  <input type="text" className="w-full bg-bee-black border border-bee-border px-4 py-3 md:py-4 text-bee-white placeholder-bee-white/20 focus:outline-none focus:border-bee-yellow transition-colors" placeholder="Например: 50" />
                </div>
                <div className="space-y-1.5 md:space-y-2">
                  <label className="text-xs md:text-sm font-medium text-bee-white/80">Ожидаемая конверсия (%)</label>
                  <input type="text" className="w-full bg-bee-black border border-bee-border px-4 py-3 md:py-4 text-bee-white placeholder-bee-white/20 focus:outline-none focus:border-bee-yellow transition-colors" placeholder="Например: 1.5" />
                </div>
              </div>
            </div>

            <div className="bg-bee-black border border-bee-border p-6 sm:p-8 lg:p-12 relative overflow-hidden group h-full flex flex-col justify-center mt-8 lg:mt-0">
              <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-bee-yellow/5 blur-[80px] rounded-full group-hover:bg-bee-yellow/10 transition-colors pointer-events-none" />
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Примерный результат</h3>
                <p className="text-bee-text-muted mb-8 md:mb-12 text-sm md:text-base">
                  Оборот, доход партнера, количество заказов.
                </p>
                <button className="w-full bg-bee-yellow/10 text-bee-yellow border border-bee-yellow/30 font-bold uppercase tracking-wider text-xs md:text-sm py-4 md:py-5 px-6 md:px-8 hover:bg-bee-yellow hover:text-bee-black transition-all">
                  Получить расчет под мою аудиторию
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What we do Section */}
      <section className="py-20 md:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 xl:px-12 bg-bee-black relative z-10 border-t border-bee-border/50">
        <div className="w-full max-w-[1600px] mx-auto">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-16 text-center">
            Что BlackBee берет на себя
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { title: "3D-модель", icon: <Box className="w-8 h-8 md:w-10 md:h-10 text-bee-white/40 group-hover:text-bee-yellow transition-colors mb-4 md:mb-6" /> },
              { title: "Тестовая партия", icon: <Factory className="w-8 h-8 md:w-10 md:h-10 text-bee-white/40 group-hover:text-bee-yellow transition-colors mb-4 md:mb-6" /> },
              { title: "Производство", icon: <Printer className="w-8 h-8 md:w-10 md:h-10 text-bee-white/40 group-hover:text-bee-yellow transition-colors mb-4 md:mb-6" /> },
              { title: "Упаковка и доставка", icon: <Truck className="w-8 h-8 md:w-10 md:h-10 text-bee-white/40 group-hover:text-bee-yellow transition-colors mb-4 md:mb-6" /> },
            ].map((item, i) => (
              <div key={i} className="bg-bee-gray/50 border border-bee-border p-6 md:p-8 hover:bg-bee-gray transition-colors group">
                {item.icon}
                <h3 className="text-lg font-bold">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 md:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 xl:px-12 bg-bee-gray relative z-10 border-t border-bee-border/50">
        <div className="w-full max-w-[1000px] mx-auto">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-10 md:mb-16 text-center">
            FAQ
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "Нужен ли мне свой товар?",
                a: "Не обязательно. Можно прийти с аудиторией или нишей — команда поможет подобрать формат."
              },
              {
                q: "Кто занимается доставкой?",
                a: "Доставка и fulfillment находятся на стороне BlackBee."
              }
            ].map((faq, i) => (
              <details key={i} className="group bg-bee-black border border-bee-border [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer p-5 lg:p-8 font-bold text-base md:text-lg lg:text-xl list-none focus:outline-none">
                  <span className="pr-4">{faq.q}</span>
                  <span className="transition duration-300 group-open:-rotate-180 text-bee-yellow/50 group-hover:text-bee-yellow flex-shrink-0">
                    <ChevronDown className="w-5 h-5 md:w-6 md:h-6" />
                  </span>
                </summary>
                <div className="px-5 pb-5 lg:px-8 lg:pb-8 text-bee-text-muted leading-relaxed text-sm md:text-base lg:text-lg">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 md:py-36 lg:py-48 px-4 sm:px-6 lg:px-8 xl:px-12 bg-bee-black relative z-10 border-t border-bee-border/50 overflow-hidden">
         {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-bee-yellow/20 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-bee-yellow/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="w-full max-w-[800px] mx-auto relative z-10">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-4 md:mb-6">
              Давайте подберем первый товар под вашу аудиторию
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-bee-text-muted px-4 md:px-0">
              Оставьте контакт и пару деталей о трафике. Мы предложим формат запуска и следующий шаг.
            </p>
          </div>

          <form className="space-y-4 md:space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-2">
                <input type="text" className="w-full bg-bee-gray border border-bee-border px-5 md:px-6 py-3.5 md:py-4 text-sm md:text-base text-bee-white placeholder-bee-white/30 focus:outline-none focus:border-bee-yellow transition-colors" placeholder="Имя" />
              </div>
              <div className="space-y-2">
                <input type="text" className="w-full bg-bee-gray border border-bee-border px-5 md:px-6 py-3.5 md:py-4 text-sm md:text-base text-bee-white placeholder-bee-white/30 focus:outline-none focus:border-bee-yellow transition-colors" placeholder="Telegram / Email" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-2 relative">
                <select defaultValue="" className="w-full bg-bee-gray border border-bee-border px-5 md:px-6 py-3.5 md:py-4 text-sm md:text-base text-bee-white/90 focus:outline-none focus:border-bee-yellow transition-colors appearance-none cursor-pointer">
                  <option value="" disabled className="text-bee-white/30">Кто вы?</option>
                  <option value="blogger" className="bg-bee-black text-bee-white">Блогер</option>
                  <option value="arbitrage" className="bg-bee-black text-bee-white">Арбитражник</option>
                  <option value="brand" className="bg-bee-black text-bee-white">Владелец бренда</option>
                  <option value="other" className="bg-bee-black text-bee-white">Другое</option>
                </select>
                <div className="absolute right-4 md:right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                  <ChevronDown className="w-4 h-4 md:w-5 md:h-5 text-bee-white/50" />
                </div>
              </div>
              <div className="space-y-2">
                <input type="text" className="w-full bg-bee-gray border border-bee-border px-5 md:px-6 py-3.5 md:py-4 text-sm md:text-base text-bee-white placeholder-bee-white/30 focus:outline-none focus:border-bee-yellow transition-colors" placeholder="Где аудитория / трафик?" />
              </div>
            </div>

            <div className="space-y-2">
              <textarea rows={4} className="w-full bg-bee-gray border border-bee-border px-5 md:px-6 py-3.5 md:py-4 text-sm md:text-base text-bee-white placeholder-bee-white/30 focus:outline-none focus:border-bee-yellow transition-colors resize-none" placeholder="Ниша или идея товара"></textarea>
            </div>

            <button type="submit" className="w-full bg-bee-yellow text-bee-black font-bold uppercase tracking-wider text-sm md:text-base py-4 md:py-5 px-8 hover:bg-bee-yellow/90 transition-all shadow-[0_0_20px_rgba(255,215,0,0.1)] hover:shadow-[0_0_30px_rgba(255,215,0,0.2)]">
              Получить разбор и демо
            </button>
          </form>
        </div>
      </section>

      {/* Simple Footer for SaaS */}
      <footer className="py-8 border-t border-bee-border text-center text-bee-white/30 text-sm">
         <p>© {new Date().getFullYear()} BlackBee. All rights reserved.</p>
      </footer>
    </div>
  );
}
