import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, BarChart3, PackageOpen, Box, Factory, Printer, Truck, ChevronDown, Users, Search, PenTool, Megaphone, Wallet, Send, Moon } from "lucide-react";
import { Logo } from "../components/Logo";

export function SaaSPage() {
  const [activePlatformTab, setActivePlatformTab] = useState("Мои товары");
  
  // Form State
  const [formData, setFormData] = useState({
    role: '',
    link: '',
    audience: '',
    niche: '',
    contact: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const WEBHOOK_URL = import.meta.env.VITE_GOOGLE_SHEET_URL || "https://script.google.com/macros/s/AKfycbz5YvGoezeGCB19MScK9dRlC3C97poBkP-2Rd7Y4vwc2V1s2S8YR-vMwK8o9OpNz7k0cQ/exec";
    
    if (!WEBHOOK_URL) {
      console.warn("VITE_GOOGLE_SHEET_URL is missing. Simulating request...");
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitStatus('success');
        setFormData({ role: '', link: '', audience: '', niche: '', contact: '' });
      }, 1000);
      return;
    }

    try {
      const data = new FormData();
      data.append("Кто вы?", formData.role);
      data.append("Ссылка на блог/магазин/сообщество", formData.link);
      data.append("Примерная аудитория", formData.audience);
      data.append("Ниша", formData.niche);
      data.append("Контакт", formData.contact);
      
      data.append("role", formData.role);
      data.append("link", formData.link);
      data.append("audience", formData.audience);
      data.append("niche", formData.niche);
      data.append("contact", formData.contact);

      await fetch(WEBHOOK_URL, {
        method: "POST",
        mode: "no-cors",
        body: data,
      });
      
      // With mode: 'no-cors', response is opaque. Assume success if fetch didn't throw.
      setSubmitStatus('success');
      setFormData({ role: '', link: '', audience: '', niche: '', contact: '' });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const platformTabs = [
    { 
      id: "Мои товары", 
      image: "/121.png",
      benefits: [
        "Создавайте карточки товаров",
        "Смотрите себестоимость и маржинальность",
        "Быстро тестируйте новые идеи",
        "Запускайте товар без закупки партии"
      ]
    },
    { 
      id: "Видео", 
      image: "/122.png",
      benefits: [
        "Генерация видеокреативов с товаром",
        "Форматы под Reels, TikTok, Shorts",
        "Визуализация товара без дорогой съемки",
        "Можно быстро тестировать разные креативы",
        "Видео помогает продавать еще до массового производства"
      ]
    },
    { 
      id: "Клиенты", 
      image: "/123.png",
      benefits: [
        "База покупателей и история заказов",
        "Какие товары покупали",
        "Сегменты клиентов и повторные продажи",
        "Понимание, какие товары лучше заходят аудитории"
      ]
    },
    { 
      id: "Производство", 
      image: "/124.png",
      benefits: [
        "Производство на 3D-ферме BlackBee",
        "Не нужно закупать оборудование и нанимать команду",
        "Не нужно держать склад и закупать партии заранее",
        "Товар производится под заказ",
        "BlackBee упаковывает и отправляет товар покупателю"
      ]
    },
    { 
      id: "Аналитика", 
      image: "/125.png",
      benefits: [
        "Продажи, выручка, маржинальность",
        "Популярные товары и статистика видео",
        "Заказы, клиенты, эффективность трафика"
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
            {['Как работает', 'Платформа', 'FAQ'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-[11px] uppercase tracking-[0.2em] font-semibold text-bee-white/70 hover:text-bee-yellow transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden xl:flex items-center gap-3 mr-4">
               <a href="tel:+79377107767" className="font-bold text-sm tracking-wider hover:text-bee-yellow transition-colors whitespace-nowrap">+7 937 710 7767</a>
               <a href="#" className="p-3 border border-bee-border bg-bee-gray hover:bg-bee-white/5 transition-colors rounded-sm text-bee-white">
                 <Send className="w-4 h-4" />
               </a>
               <button className="p-3 border border-bee-border bg-bee-gray hover:bg-bee-white/5 transition-colors rounded-sm text-bee-white">
                 <Moon className="w-4 h-4" />
               </button>
            </div>
            <button 
              onClick={() => document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="hidden lg:block bg-bee-yellow text-bee-black font-bold uppercase tracking-wider text-[10px] md:text-sm py-3 px-6 hover:bg-bee-yellow/90 hover:scale-[1.02] transition-all shadow-[0_0_15px_rgba(255,215,0,0.1)]"
            >
              Запустить товар
            </button>
            <Link 
              to="/"
              className="hidden sm:flex px-6 py-3 border border-bee-border text-bee-white/70 hover:text-bee-white bg-bee-gray hover:bg-bee-white/10 transition-all rounded-sm text-xs font-bold uppercase tracking-wider relative overflow-hidden group/btn items-center"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover/btn:-translate-x-1 transition-transform" />
              На сайт BlackBee
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-28 pb-16 md:pt-40 md:pb-24 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 w-full max-w-[1600px] mx-auto min-h-[100svh] flex items-center">
        {/* Abstract Background Element */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-bee-yellow/5 rounded-full blur-[150px] -z-10 pointer-events-none" />

        <div className="flex flex-col w-full">
          {/* Headline spans wider */}
          <div className="mb-10 lg:mb-12 pointer-events-none relative z-30">
            <div className="inline-block border border-bee-border px-4 py-2 rounded-sm bg-bee-gray pointer-events-auto mb-6">
              <span className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-bee-white/70">
                Для тех, у кого есть аудитория, магазин, сообщество или идея
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3rem] xl:text-[3.4rem] 2xl:text-[4rem] font-black uppercase leading-[1.05] tracking-tight pointer-events-auto w-full">
              Запустите свой товар без склада,<br className="hidden lg:block"/> закупок и производства
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start w-full relative">
            <div className="lg:col-start-1 lg:col-end-6 xl:col-end-5 2xl:col-end-4 space-y-8 md:space-y-10 relative z-30 pointer-events-none">
              <div className="pointer-events-auto bg-bee-gray/50 border border-bee-border p-6 md:p-8 rounded-sm w-full max-w-[400px] lg:max-w-full">
                <p className="text-base md:text-lg text-bee-text-muted leading-relaxed mb-6 lg:max-w-md">
                  Вы приносите идею или аудиторию — мы помогаем сделать товар, проверить спрос, произвести его и доставить покупателям.
                </p>

                <ul className="text-bee-white/90 space-y-3 text-sm md:text-base font-medium">
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 bg-bee-yellow rounded-full flex-shrink-0 mt-2"/> Вы продаете товар своей аудитории</li>
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 bg-bee-yellow rounded-full flex-shrink-0 mt-2"/> BlackBee делает производство</li>
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 bg-bee-yellow rounded-full flex-shrink-0 mt-2"/> BlackBee делает упаковку</li>
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 bg-bee-yellow rounded-full flex-shrink-0 mt-2"/> BlackBee делает доставку</li>
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 bg-bee-yellow rounded-full flex-shrink-0 mt-2"/> BlackBee дает аналитику по продажам</li>
                  <li className="flex items-start gap-3 text-bee-yellow"><div className="w-1.5 h-1.5 bg-bee-yellow rounded-full flex-shrink-0 mt-2"/> Вам не нужно закупать партии и держать склад</li>
                </ul>
              </div>

              <div className="flex flex-col items-stretch gap-4 pointer-events-auto w-full max-w-[400px] lg:max-w-full">
                <button 
                  onClick={() => document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' })} 
                  className="px-8 py-5 md:py-6 bg-bee-yellow text-bee-black font-black uppercase tracking-[0.2em] text-xs md:text-sm hover:scale-[1.02] transition-transform shadow-[0_0_20px_rgba(255,215,0,0.15)] flex justify-center items-center group relative overflow-hidden flex-shrink-0"
                >
                  <span className="relative z-10">Запустить первый товар</span>
                  <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform relative z-10" />
                </button>
                
                <button onClick={() => document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-5 md:py-6 border border-bee-border bg-bee-gray text-bee-white font-bold uppercase tracking-[0.2em] text-xs md:text-sm hover:border-bee-yellow/50 hover:bg-bee-white/5 transition-all flex justify-center items-center flex-shrink-0">
                  Посмотреть платформу
                </button>
              </div>

              <div className="flex flex-wrap gap-2 md:gap-3 pointer-events-auto w-full max-w-[400px] lg:max-w-full">
                {['Без производства', 'Без склада', 'Аналитика продаж'].map((tag) => (
                  <div key={tag} className="border border-bee-border bg-bee-black px-3 py-1.5 md:px-4 md:py-2 font-mono text-[10px] md:text-xs uppercase tracking-widest text-bee-white/50">
                    {tag}
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-start-6 xl:col-start-6 lg:col-end-13 relative z-10 mt-12 lg:mt-0 pointer-events-auto flex flex-col items-center xl:items-end justify-start">
              <div className="relative w-full xl:w-[105%] max-w-[1100px] xl:-right-[2%] pt-0">
                {/* Main Screenshot */}
                <img src="/121.png" alt="Platform Dashboard" className="w-full h-auto object-contain shadow-2xl rounded-lg border border-bee-white/10" />
              </div>
              
              {/* Flow Steps below the image */}
              <div className="w-full xl:w-[105%] max-w-[1100px] xl:-right-[2%] relative flex items-center gap-2 xl:gap-3 mt-6">
                {/* Step 1 */}
                <div className="flex-1 bg-bee-black border border-bee-border p-3 rounded-lg shadow-[0_15px_40px_rgba(0,0,0,0.6)] flex items-center gap-3 hover:-translate-y-1 transition-transform z-20">
                   <div className="bg-bee-yellow/10 p-2 rounded-md text-bee-yellow flex-shrink-0 hidden xl:flex">
                      <Box className="w-5 h-5" />
                   </div>
                   <div>
                      <div className="text-[8px] md:text-[9px] uppercase tracking-widest font-bold text-bee-yellow/70 mb-0.5">Шаг 1</div>
                      <div className="text-[10px] xl:text-xs font-bold text-bee-white leading-tight">Выбор<br className="xl:hidden"/> товара</div>
                   </div>
                </div>
                
                <ArrowRight className="text-bee-yellow/50 w-3 h-3 xl:w-4 xl:h-4 flex-shrink-0" />
                
                {/* Step 2 */}
                <div className="flex-1 bg-bee-black border border-bee-border p-3 rounded-lg shadow-[0_15px_40px_rgba(0,0,0,0.6)] flex items-center gap-3 hover:-translate-y-1 transition-transform z-20">
                   <div className="bg-bee-white/5 p-2 rounded-md text-bee-white flex-shrink-0 hidden xl:flex">
                      <Factory className="w-5 h-5" />
                   </div>
                   <div>
                      <div className="text-[8px] md:text-[9px] uppercase tracking-widest font-bold text-bee-white/50 mb-0.5">Шаг 2</div>
                      <div className="text-[10px] xl:text-xs font-bold text-bee-white leading-tight">Производство<br className="xl:hidden"/> под заказ</div>
                   </div>
                </div>

                <ArrowRight className="text-bee-yellow/50 w-3 h-3 xl:w-4 xl:h-4 flex-shrink-0" />

                {/* Step 3 */}
                <div className="flex-1 bg-bee-black border border-bee-border p-3 rounded-lg shadow-[0_15px_40px_rgba(0,0,0,0.6)] flex items-center gap-3 hover:-translate-y-1 transition-transform z-20">
                   <div className="bg-bee-yellow/10 p-2 rounded-md text-bee-yellow flex-shrink-0 hidden xl:flex">
                      <Truck className="w-5 h-5" />
                   </div>
                   <div>
                      <div className="text-[8px] md:text-[9px] uppercase tracking-widest font-bold text-bee-yellow/70 mb-0.5">Шаг 3</div>
                      <div className="text-[10px] xl:text-xs font-bold text-bee-white leading-tight">Сборка и<br className="xl:hidden"/> Доставка</div>
                   </div>
                </div>

                <ArrowRight className="text-bee-yellow/50 w-3 h-3 xl:w-4 xl:h-4 flex-shrink-0" />

                {/* Step 4 (Результат) */}
                <div className="flex-[1.2] bg-bee-yellow border border-bee-yellow p-3 lg:p-4 rounded-lg shadow-[0_0_30px_rgba(255,215,0,0.3)] flex items-center gap-3 hover:-translate-y-1 transition-transform z-20">
                   <div className="bg-bee-black/10 p-2 rounded-md flex-shrink-0 hidden xl:flex">
                      <Wallet className="w-5 h-5 text-bee-black" />
                   </div>
                   <div>
                      <div className="text-[8px] md:text-[9px] uppercase tracking-widest font-bold text-bee-black/60 mb-0.5">Результат</div>
                      <div className="text-[10px] xl:text-xs font-black text-bee-black uppercase leading-tight">Прибыль<br className="xl:hidden"/> и Аналитика</div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is BlackBee Section */}
      <section className="py-20 md:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 xl:px-12 bg-bee-black relative z-10 border-t border-bee-border/50">
        <div className="w-full max-w-[1600px] mx-auto">
          <div className="max-w-5xl mb-16 lg:mb-24">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[1.1] text-balance">
              BlackBee — это платформа для запуска физических товаров <span className="text-bee-yellow">без собственного производства</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              { text: "У вас есть аудитория, магазин, блог, ниша или идея.", icon: <Users className="w-8 h-8 md:w-10 md:h-10 text-bee-white/30 mb-6 group-hover:text-bee-yellow transition-colors" /> },
              { text: "Мы вместе выбираем товар.", icon: <Search className="w-8 h-8 md:w-10 md:h-10 text-bee-white/30 mb-6 group-hover:text-bee-yellow transition-colors" /> },
              { text: "BlackBee делает модель и тестовый образец.", icon: <PenTool className="w-8 h-8 md:w-10 md:h-10 text-bee-white/30 mb-6 group-hover:text-bee-yellow transition-colors" /> },
              { text: "Вы запускаете рекламу или рассказываете аудитории.", icon: <Megaphone className="w-8 h-8 md:w-10 md:h-10 text-bee-white/30 mb-6 group-hover:text-bee-yellow transition-colors" /> },
              { text: "Заказы попадают в систему, BlackBee производит и доставляет товар.", icon: <Factory className="w-8 h-8 md:w-10 md:h-10 text-bee-white/30 mb-6 group-hover:text-bee-yellow transition-colors" /> },
              { text: "Вы видите продажи, клиентов и прибыль в кабинете.", icon: <Wallet className="w-8 h-8 md:w-10 md:h-10 text-bee-white/30 mb-6 group-hover:text-bee-yellow transition-colors" /> }
            ].map((item, i) => (
              <div key={i} className="bg-bee-gray/50 border border-bee-border p-6 md:p-8 h-full flex flex-col hover:border-bee-yellow/20 transition-colors group">
                {item.icon}
                <div className="flex gap-4">
                  <div className="w-2 h-2 mt-2.5 rounded-full bg-bee-yellow flex-shrink-0 shadow-[0_0_10px_rgba(255,215,0,0.5)]" />
                  <p className="text-base md:text-lg text-bee-white/90 font-medium leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
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
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-12 md:mb-16">
            Как это работает
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { step: "1", title: "Вы приносите идею или аудиторию", desc: "Например: блог, канал, магазин, сообщество, база клиентов или просто понимание ниши." },
              { step: "2", title: "Мы подбираем товар", desc: "Вместе выбираем, что можно быстро произвести и протестировать." },
              { step: "3", title: "Делаем тестовую модель", desc: "BlackBee готовит первый вариант товара в течение суток." },
              { step: "4", title: "Готовим товар к продажам", desc: "Дорабатываем товар, считаем себестоимость, цену и маржинальность." },
              { step: "5", title: "Вы приводите трафик", desc: "Через блог, рекламу, сторис, Reels, Telegram, TikTok, маркетплейс или свой магазин." },
              { step: "6", title: "BlackBee производит и доставляет", desc: "Мы берем на себя производство, упаковку, доставку и обработку заказов." },
              { step: "7", title: "Вы видите результат", desc: "Продажи, заказы, клиенты, товары, видео, аналитика в личном кабинете." },
            ].map((item, i) => (
              <div key={i} className={`bg-bee-gray/50 border border-bee-border p-6 md:p-8 hover:bg-bee-gray transition-colors flex flex-col relative overflow-hidden group ${i >= 4 && i <= 6 ? 'lg:col-span-auto' : ''} ${i === 6 ? 'md:col-span-2 lg:col-span-2' : ''}`}>
                {/* Number Watermark */}
                <span className="absolute -right-2 -bottom-6 md:-right-4 md:-bottom-8 text-[100px] md:text-[120px] font-black text-bee-white/[0.02] group-hover:text-bee-yellow/[0.05] transition-colors pointer-events-none select-none">
                  {item.step}
                </span>
                
                <div className="font-mono text-bee-yellow text-sm font-bold mb-3 md:mb-4">Шаг {item.step}</div>
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 pr-8 relative z-10">{item.title}</h3>
                <p className="text-sm md:text-base text-bee-text-muted mt-auto relative z-10 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 md:mt-16 flex justify-center">
            <button 
              onClick={() => document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-bee-yellow text-bee-black font-bold uppercase tracking-wider text-sm md:text-base py-4 md:py-5 px-8 hover:bg-bee-yellow/90 hover:scale-[1.02] transition-all shadow-[0_0_20px_rgba(255,215,0,0.15)]"
            >
              Запустить товар
            </button>
          </div>
        </div>
      </section>

      {/* Estimate Section */}
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
                q: "Нужен ли мне готовый товар?",
                a: "Нет. Можно прийти с аудиторией, нишей или идеей — BlackBee поможет подобрать товар."
              },
              {
                q: "Кто занимается производством?",
                a: "BlackBee производит товары на своей 3D-ферме."
              },
              {
                q: "Кто занимается доставкой?",
                a: "BlackBee берет на себя упаковку и доставку заказов."
              },
              {
                q: "Нужно ли закупать партию заранее?",
                a: "Нет. Товары можно производить под заказ."
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

          <div className="mt-12 md:mt-16 flex justify-center">
            <button 
              onClick={() => document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-bee-yellow text-bee-black font-bold uppercase tracking-wider text-sm md:text-base py-4 md:py-5 px-8 hover:bg-bee-yellow/90 hover:scale-[1.02] transition-all shadow-[0_0_20px_rgba(255,215,0,0.15)]"
            >
              Запустить товар
            </button>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="form-section" className="py-24 md:py-36 lg:py-48 px-4 sm:px-6 lg:px-8 xl:px-12 bg-bee-black relative z-10 border-t border-bee-border/50 overflow-hidden">
         {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-bee-yellow/20 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-bee-yellow/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="w-full max-w-[800px] mx-auto relative z-10">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-4 md:mb-6">
              Хотите понять, какой товар можно запустить под вашу аудиторию?
            </h2>
          </div>

          <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <select 
                value={formData.role} 
                onChange={(e) => setFormData(p => ({ ...p, role: e.target.value }))}
                required
                className="w-full bg-bee-gray border border-bee-border px-5 md:px-6 py-3.5 md:py-4 text-sm md:text-base text-bee-white appearance-none focus:outline-none focus:border-bee-yellow transition-colors"
               >
                <option value="" disabled>Кто вы?</option>
                <option value="Автор / блогер">Автор / блогер</option>
                <option value="Владелец магазина">Владелец магазина</option>
                <option value="Владелец сообщества">Владелец сообщества</option>
                <option value="Бренд">Бренд</option>
                <option value="Есть аудитория">Есть аудитория</option>
                <option value="Есть идея товара">Есть идея товара</option>
                <option value="Другое">Другое</option>
              </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-2">
                <input 
                  type="text" 
                  value={formData.link}
                  onChange={(e) => setFormData(p => ({ ...p, link: e.target.value }))}
                  className="w-full bg-bee-gray border border-bee-border px-5 md:px-6 py-3.5 md:py-4 text-sm md:text-base text-bee-white placeholder-bee-white/30 focus:outline-none focus:border-bee-yellow transition-colors" 
                  placeholder="Ссылка на блог / магазин / сообщество" 
                />
              </div>
              <div className="space-y-2">
                <input 
                  type="text" 
                  value={formData.audience}
                  onChange={(e) => setFormData(p => ({ ...p, audience: e.target.value }))}
                  className="w-full bg-bee-gray border border-bee-border px-5 md:px-6 py-3.5 md:py-4 text-sm md:text-base text-bee-white placeholder-bee-white/30 focus:outline-none focus:border-bee-yellow transition-colors" 
                  placeholder="Примерная аудитория" 
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-2">
                <input 
                  type="text" 
                  value={formData.niche}
                  onChange={(e) => setFormData(p => ({ ...p, niche: e.target.value }))}
                  className="w-full bg-bee-gray border border-bee-border px-5 md:px-6 py-3.5 md:py-4 text-sm md:text-base text-bee-white placeholder-bee-white/30 focus:outline-none focus:border-bee-yellow transition-colors" 
                  placeholder="Ниша" 
                />
              </div>
              <div className="space-y-2">
                <input 
                  type="text" 
                  value={formData.contact}
                  onChange={(e) => setFormData(p => ({ ...p, contact: e.target.value }))}
                  required
                  className="w-full bg-bee-gray border border-bee-border px-5 md:px-6 py-3.5 md:py-4 text-sm md:text-base text-bee-white placeholder-bee-white/30 focus:outline-none focus:border-bee-yellow transition-colors" 
                  placeholder="Контакт (Telegram / Phone / Email)" 
                />
              </div>
            </div>

            {submitStatus === 'success' && (
              <div className="p-4 bg-green-500/10 border border-green-500/20 text-green-400 text-sm text-center">
                Спасибо! Заявка успешно отправлена.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center">
                Произошла ошибка при отправке. Пожалуйста, попробуйте позже.
              </div>
            )}

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-bee-yellow text-bee-black font-bold uppercase tracking-wider text-sm md:text-base py-4 md:py-5 px-8 hover:bg-bee-yellow/90 transition-all shadow-[0_0_20px_rgba(255,215,0,0.1)] hover:shadow-[0_0_30px_rgba(255,215,0,0.2)] disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center"
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-bee-black border-t-transparent rounded-full animate-spin" />
              ) : (
                "Получить расчет"
              )}
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
