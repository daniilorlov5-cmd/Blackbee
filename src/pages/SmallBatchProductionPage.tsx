import { useEffect } from "react";
import { ArrowLeft, MessageSquare, Send } from "lucide-react";
import { Link } from "react-router-dom";

export function SmallBatchProductionPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-20 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto min-h-screen flex flex-col gap-12 md:gap-16">
      <div className="flex flex-col gap-6">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-8xl font-black uppercase tracking-tight text-bee-white leading-[0.9]">
            Мелкосерийное <br className="hidden lg:block"/><span className="text-bee-yellow">производство</span>
          </h1>
          <p className="text-lg md:text-xl text-bee-white/60 max-w-2xl leading-relaxed font-medium">
            Быстрый и экономически выгодный способ запуска вашего продукта без затрат на дорогостоящую оснастку. Идеально для партий от 1 до 1000 единиц.
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
          <source src={`${import.meta.env.BASE_URL}22.mp4`} type="video/mp4" />
        </video>
        
        <div className="absolute top-0 inset-x-0 p-6 md:p-10 flex flex-col items-start z-10 pointer-events-none">
           <div className="bg-black text-white text-[10px] md:text-[11px] font-bold px-3 py-1.5 uppercase tracking-widest w-fit mb-2">
             ИНДИВИДУАЛЬНЫЙ ЗАКАЗ
           </div>
           <div className="flex flex-wrap gap-2">
              <span className="bg-white/95 text-black/60 text-[8px] md:text-[9px] px-2 py-1 uppercase tracking-widest font-bold">
                ABS / ФОТОПОЛИМЕР
              </span>
              <span className="bg-white/95 text-black/60 text-[8px] md:text-[9px] px-2 py-1 uppercase tracking-widest font-bold">
                МНОГОЦВЕТНАЯ ПЕЧАТЬ
              </span>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="border border-bee-border bg-bee-gray p-8 hover:border-bee-yellow/50 transition-colors">
          <h3 className="text-xl font-bold uppercase tracking-widest text-bee-yellow mb-4">Скорость запуска</h3>
          <p className="text-bee-white/80 leading-relaxed text-sm">
            Вам не нужно ждать месяцами. От утверждения 3D-модели до отгрузки первой партии может пройти всего 3-5 дней.
          </p>
        </div>
        <div className="border border-bee-border bg-bee-gray p-8 hover:border-bee-yellow/50 transition-colors">
          <h3 className="text-xl font-bold uppercase tracking-widest text-bee-yellow mb-4">Выгода</h3>
          <p className="text-bee-white/80 leading-relaxed text-sm">
            Никаких капитальных затрат на запуск производства. Вы платите только за готовые изделия, которые сразу можно продавать.
          </p>
        </div>
        <div className="border border-bee-border bg-bee-gray p-8 hover:border-bee-yellow/50 transition-colors">
          <h3 className="text-xl font-bold uppercase tracking-widest text-bee-yellow mb-4">Гибкость</h3>
          <p className="text-bee-white/80 leading-relaxed text-sm">
            Вносить изменения в дизайн можно на любом этапе. Заметили ошибку в первой партии? Вторая уже будет напечатана с исправлениями.
          </p>
        </div>
        <div className="border border-bee-border bg-bee-gray p-8 hover:border-bee-yellow/50 transition-colors">
          <h3 className="text-xl font-bold uppercase tracking-widest text-bee-yellow mb-4">Качество</h3>
          <p className="text-bee-white/80 leading-relaxed text-sm">
            Используем инженерные полимеры, которые по прочности и долговечности не уступают, а иногда и превосходят литьевой пластик.
          </p>
        </div>
      </div>
    </div>
  );
}
