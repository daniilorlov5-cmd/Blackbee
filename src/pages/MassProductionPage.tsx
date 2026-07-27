import { useEffect } from "react";
import { ArrowLeft, MessageSquare, Send } from "lucide-react";
import { Link } from "react-router-dom";

export function MassProductionPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-20 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto min-h-screen flex flex-col gap-12 md:gap-16">
      <div className="flex flex-col gap-6">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-8xl font-black uppercase tracking-tight text-bee-white leading-[0.9]">
            Серийное <br className="hidden lg:block"/><span className="text-bee-yellow">производство</span>
          </h1>
          <p className="text-lg md:text-xl text-bee-white/60 max-w-2xl leading-relaxed font-medium">
            Производим брендированные инструменты, корпуса и другие изделия для бизнеса крупными партиями. Высокая повторяемость и качество от детали к детали.
          </p>
        </div>
      </div>

      <div className="relative w-full aspect-[4/5] md:aspect-video lg:aspect-[21/9] max-h-[70vh] bg-bee-black border border-bee-border overflow-hidden rounded-sm group">
        <video 
          className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700" 
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src={`${import.meta.env.BASE_URL}33.mp4`} type="video/mp4" />
        </video>
        
        <div className="absolute top-0 inset-x-0 p-6 md:p-10 flex flex-col items-start z-10 pointer-events-none">
           <div className="bg-black text-white text-[10px] md:text-[11px] font-bold px-3 py-1.5 uppercase tracking-widest w-fit mb-2">
             B2B ПРОИЗВОДСТВО
           </div>
           <div className="flex flex-wrap gap-2">
              <span className="bg-white/95 text-black/60 text-[8px] md:text-[9px] px-2 py-1 uppercase tracking-widest font-bold">
                10 000+ ИЗДЕЛИЙ
              </span>
              <span className="bg-white/95 text-black/60 text-[8px] md:text-[9px] px-2 py-1 uppercase tracking-widest font-bold">
                ЛИТЬЕ & ПЕЧАТЬ
              </span>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="border border-bee-border bg-bee-gray p-8 hover:border-bee-yellow/50 transition-colors">
          <h3 className="text-xl font-bold uppercase tracking-widest text-bee-yellow mb-4">Надежность при масштабировании</h3>
          <p className="text-bee-white/80 leading-relaxed text-sm">
            Обеспечиваем стабильно высокое качество на всей партии. Гарантируем 100% повторяемость геометрии и свойств изделий от первого до тысячного экземпляра.
          </p>
        </div>
        <div className="border border-bee-border bg-bee-gray p-8 hover:border-bee-yellow/50 transition-colors">
          <h3 className="text-xl font-bold uppercase tracking-widest text-bee-yellow mb-4">Различные технологии</h3>
          <p className="text-bee-white/80 leading-relaxed text-sm">
            Не только FDM и SLA печать, но и литье в силиконовые формы и под давлением, адаптируя метод производства под ваши экономические и технические задачи.
          </p>
        </div>
        <div className="border border-bee-border bg-bee-gray p-8 hover:border-bee-yellow/50 transition-colors">
          <h3 className="text-xl font-bold uppercase tracking-widest text-bee-yellow mb-4">Полный цикл</h3>
          <p className="text-bee-white/80 leading-relaxed text-sm">
            От проектирования 3D-модели корпуса до сборки, постобработки и брендирования. Готовые к использованию устройства на выходе.
          </p>
        </div>
        <div className="border border-bee-border bg-bee-gray p-8 hover:border-bee-yellow/50 transition-colors">
          <h3 className="text-xl font-bold uppercase tracking-widest text-bee-yellow mb-4">Оптимизация затрат</h3>
          <p className="text-bee-white/80 leading-relaxed text-sm">
            Снижение стоимости единицы продукции при увеличении объемов. Экономическая эффективность для вашего бизнеса.
          </p>
        </div>
      </div>
      
      {/* КЕЙС из скриншота */}
      <div className="border border-bee-border bg-bee-gray/50 p-8 md:p-12 mb-12">
        <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-bee-white mb-8 border-b border-bee-white/10 pb-4">
          ИНСТРУМЕНТЫ ГК «СМИТ»
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-8 space-y-6">
            <div>
              <div className="text-[10px] text-bee-yellow font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                <div className="w-4 h-4 border border-bee-yellow/50 bg-bee-yellow/10 rounded flex items-center justify-center">
                  <span className="block w-2.5 h-1 border-y border-bee-yellow/60"></span>
                </div>
                ЗАДАЧА
              </div>
              <p className="text-bee-white/80 leading-relaxed">
                Производим брендированные строй инструменты для федеральной сети. За 2 года работы отгружено более 10 000 изделий.
              </p>
            </div>
          </div>
          
          <div className="md:col-span-4 grid grid-cols-2 md:grid-cols-1 gap-6 pt-6 md:pt-0 border-t md:border-t-0 md:border-l border-bee-white/10 md:pl-8">
            <div>
              <div className="text-[10px] text-bee-white/50 font-bold uppercase tracking-widest mb-1 flex items-center gap-2">
                Срок
              </div>
              <div className="text-xl font-mono text-bee-white">2+ <span className="text-sm font-sans">года</span></div>
            </div>
            <div>
              <div className="text-[10px] text-bee-white/50 font-bold uppercase tracking-widest mb-1 flex items-center gap-2">
                Объем
              </div>
              <div className="text-xl font-mono text-bee-white">10000+ <span className="text-sm font-sans">изд.</span></div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
