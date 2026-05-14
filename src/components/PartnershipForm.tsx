/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export function PartnershipForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    const orderId = Math.floor(Math.random() * 100000);
    const date = new Date().toLocaleString('ru-RU');

    // Build form data representation
    const formDataObj = new FormData(e.target as HTMLFormElement);
    const name = formDataObj.get("name") as string;
    const phone = formDataObj.get("phone") as string;
    const tg = formDataObj.get("tg") as string;
    const role = formDataObj.get("role") as string;

    const payload = {
      "SheetName": "Блогеры",
      "ID_Заказа": orderId,
      "Дата": date,
      "Имя / Компания": name,
      "Имя/Компания": name,
      "Телефон_Клиента": phone,
      "ТГ_Клиента": tg,
      "Деятельность / Аудитория": role
    };

    try {
      const webhookUrl = 'https://script.google.com/macros/s/AKfycbyqxBrhDoEfZl6A4eJgfgyb1IIFeH15xQz33XEBfOyYx_HZHWN4QqIAcOFj7tDgmpDorw/exec';
      
      await fetch(webhookUrl, {
        method: 'POST',
        mode: 'no-cors',
        keepalive: true,
        headers: {
          'Content-Type': 'text/plain',
        },
        body: JSON.stringify(payload),
      });

      setStatus("success");
    } catch (error) {
      console.error(error);
      setStatus("success"); // Still show success since no-cors might hide network errors
    }
  };

  return (
    <section id="стать-партнером" className="py-20 md:py-32 border-t border-bee-border bg-bee-gray transition-colors">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20">
          
          <div>
            <span className="text-bee-yellow text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.4em] block mb-2 md:mb-4 italic">Агенты_Влияния</span>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.85] italic skew-heading mb-6 md:mb-8">
              Стать<br /><span className="text-bee-yellow">Партнером</span>
            </h2>
            
            <div className="space-y-6 text-sm md:text-base text-bee-text-muted font-light leading-relaxed mb-8 md:mb-10 max-w-md">
              <p>
                Мы строим сеть профессионалов. Если вы дизайнер, архитектор, проектировщик или просто человек с выходом на крупные заказы — давайте зарабатывать вместе.
              </p>
              <div className="p-4 border-l-2 border-bee-yellow bg-bee-black">
                <p className="text-bee-white font-medium text-sm md:text-base mb-2">Монетизация трафика</p>
                <p className="text-sm">
                  Если у вас есть аудитория (вы блогер, инфлюенсер или владелец медиа), у нас есть всё для производства. Это идеальное партнерство. За счет вашего трафика мы можем делать крутые совместные запуски, мерч или продукты и работать по прозрачной процентной модели.
                </p>
              </div>
              <p className="text-bee-white/80 font-medium text-sm">
                Мы открыто платим агентский процент за контакты заказчиков и сопровождение масштабных проектов.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {['Дизайнер', 'Архитектор', 'Проектировщик', 'Блогер'].map((tag) => (
                <div key={tag} className="border border-bee-border bg-bee-black px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-bee-white/50">
                  {tag}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-bee-black border border-bee-border p-6 md:p-10 lg:p-12 relative overflow-hidden flex flex-col justify-center">
             <div className="absolute top-0 right-0 p-4 font-mono text-bee-white/10 text-[10px] uppercase tracking-widest">
               СИНХРОНИЗАЦИЯ_С_БАЗОЙ
             </div>
             
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center h-full min-h-[300px] text-center">
                  <div className="w-16 h-16 bg-bee-yellow/10 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8 text-bee-yellow" />
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tighter italic mb-4">Заявка принята</h3>
                  <p className="font-mono text-xs text-bee-white/50 uppercase tracking-widest">Мы свяжемся с вами в ближайшее время</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 text-left">
                  <div>
                    <label htmlFor="name" className="block font-mono text-[10px] uppercase tracking-widest text-bee-white/40 mb-2">Имя / Компания</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      required
                      className="w-full bg-transparent border-b border-bee-border py-3 text-bee-white focus:outline-none focus:border-bee-yellow transition-colors font-sans"
                      placeholder="Иван Иванов"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block font-mono text-[10px] uppercase tracking-widest text-bee-white/40 mb-2">Телефон</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone"
                        required
                        className="w-full bg-transparent border-b border-bee-border py-3 text-bee-white focus:outline-none focus:border-bee-yellow transition-colors font-sans"
                        placeholder="+7 (999) 000-00-00"
                      />
                    </div>
                    <div>
                      <label htmlFor="tg" className="block font-mono text-[10px] uppercase tracking-widest text-bee-white/40 mb-2">Telegram</label>
                      <input 
                        type="text" 
                        id="tg" 
                        name="tg"
                        className="w-full bg-transparent border-b border-bee-border py-3 text-bee-white focus:outline-none focus:border-bee-yellow transition-colors font-sans"
                        placeholder="@username"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="role" className="block font-mono text-[10px] uppercase tracking-widest text-bee-white/40 mb-2">Ваша деятельность / Аудитория</label>
                    <input 
                      type="text" 
                      id="role" 
                      name="role"
                      className="w-full bg-transparent border-b border-bee-border py-3 text-bee-white focus:outline-none focus:border-bee-yellow transition-colors font-sans"
                      placeholder="Например: Промдизайнер или Блогер (Xk подп.)"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 mt-8">
                    <button 
                     type="submit" 
                     disabled={status === "submitting"}
                     className="w-full flex items-center justify-center gap-3 bg-bee-yellow text-bee-black py-4 font-bold uppercase tracking-widest text-[10px] md:text-xs hover:bg-bee-white transition-colors disabled:opacity-50"
                    >
                      {status === "submitting" ? "Отправка..." : "Отправить"} <Send className="w-4 h-4" />
                    </button>
                    <a 
                     href="https://t.me/BlackBee_Com?text=Здравствуйте,%20хочу%20обсудить%20партнерство/трафик."
                     target="_blank" rel="noreferrer"
                     className="w-full flex items-center justify-center gap-3 bg-transparent border border-bee-white text-bee-white py-4 font-bold uppercase tracking-widest text-[10px] md:text-xs hover:bg-bee-white hover:text-bee-black transition-colors"
                    >
                      Написать в Telegram <Send className="w-4 h-4" />
                    </a>
                  </div>
                  
                  <p className="text-[9px] text-bee-text-muted font-mono uppercase tracking-widest text-center mt-6">
                    Заявка будет отправлена инженеру
                  </p>
                </form>
              )}
          </div>
          
        </div>
      </div>
    </section>
  );
}
