import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Upload, CheckCircle2, Loader2, Link as LinkIcon, Send } from 'lucide-react';
import { useOrderModal } from '../contexts/OrderModalContext';

export function OrderModal() {
  const { isOpen, closeModal, predefinedData, modalType } = useOrderModal();
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    telegram: '',
    sizeX: '',
    sizeY: '',
    sizeZ: '',
    thickness: '',
    material: '',
    construction: '',
    fileLink: '',
    role: '',
    notes: '',
    estimatedPrice: '',
    estimatedWeight: '',
    idea: '',
    budget: '',
    timeline: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Update form data when predefined data changes
  useEffect(() => {
    if (isOpen) {
      setFormData(prev => ({
        ...prev,
        name: predefinedData?.phone || '', 
        material: predefinedData?.material || prev.material,
        construction: predefinedData?.construction || prev.construction,
        sizeX: predefinedData?.sizeX?.toString() || prev.sizeX,
        sizeY: predefinedData?.sizeY?.toString() || prev.sizeY,
        sizeZ: predefinedData?.sizeZ?.toString() || prev.sizeZ,
        thickness: predefinedData?.thickness?.toString() || prev.thickness,
        role: predefinedData?.role || prev.role,
        notes: predefinedData?.notes || prev.notes || '',
        estimatedPrice: predefinedData?.estimatedPrice?.toString() || prev.estimatedPrice,
        estimatedWeight: predefinedData?.estimatedWeight?.toString() || prev.estimatedWeight,
        fileLink: '',
        phone: predefinedData?.phone || (predefinedData?.contact && !predefinedData.contact.startsWith('@') ? predefinedData.contact : prev.phone),
        telegram: predefinedData?.telegram || (predefinedData?.contact?.startsWith('@') ? predefinedData.contact : prev.telegram),
        idea: predefinedData?.idea || prev.idea,
        budget: predefinedData?.budget || prev.budget,
        timeline: predefinedData?.timeline || prev.timeline,
      }));
      setStatus('idle');
    }
  }, [isOpen, predefinedData, modalType]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.phone && !formData.telegram) {
      setErrorMessage('Пожалуйста, укажите хотя бы один способ связи (Телефон или Telegram)');
      setStatus('error');
      return;
    }

    setStatus('submitting');
    
    // Generate order ID and Date for the payload
    const orderId = Math.floor(Math.random() * 100000);
    const date = new Date().toLocaleString('ru-RU');

    let payload: any = {
      SheetName: modalType === 'idea' ? 'Дизайнеры' : 'Суперспешл',
      ID_Заказа: orderId,
      Дата: date,
    };

    if (modalType === 'idea') {
      payload['Имя / Компания'] = formData.name;
      payload['Имя/Компания'] = formData.name;
      payload['Телефон_Клиента'] = formData.phone;
      payload['ТГ_Клиента'] = formData.telegram;
      payload['Суть идеи'] = formData.idea;
      payload['Бюджет'] = formData.budget;
      payload['Срок реализации'] = formData.timeline;
      payload['Деятельность / Аудитория'] = formData.role || '';
      payload['Фото идеи / Набросок (Ссылка)'] = formData.fileLink;
      payload['Дополнительные примечания'] = formData.notes;
    } else {
      payload['Контакт_Клиента'] = formData.phone;
      payload['ТГ_Клиента'] = formData.telegram;
      payload['Роль_Клиента'] = formData.role;
      payload['Высота_мм'] = formData.sizeZ;
      payload['Ширина_мм'] = formData.sizeX;
      payload['Длина_мм'] = formData.sizeY;
      payload['Толщина_Стенки'] = formData.thickness;
      payload['Расчетный_Вес'] = formData.estimatedWeight;
      payload['Тип_Материала'] = formData.material;
      payload['Тип_Конструкции'] = formData.construction;
      payload['Предварительная_Цена'] = formData.estimatedPrice;
      payload['Ссылка_на_файл'] = formData.fileLink;
      payload['Комментарий'] = formData.notes;
    }

    // Simulate API request - To connect exactly to the user's spreadsheet,
    // they will need to set up a Google Apps Script Web App. 
    // Here we define the logic for when they add VITE_GOOGLE_SHEETS_WEBHOOK to their env.
    try {
      const webhookUrl = 'https://script.google.com/macros/s/AKfycbyqxBrhDoEfZl6A4eJgfgyb1IIFeH15xQz33XEBfOyYx_HZHWN4QqIAcOFj7tDgmpDorw/exec';
      
      console.log('Sending request to:', webhookUrl);
      console.log('Payload:', payload);

      await fetch(webhookUrl, {
        method: 'POST',
        mode: 'no-cors',
        keepalive: true,
        headers: {
          'Content-Type': 'text/plain',
        },
        body: JSON.stringify(payload),
      });
      
      // Since mode is 'no-cors', we can't see the response, but if fetch didn't throw, we assume success
      setStatus('success');
      setTimeout(() => {
        closeModal();
      }, 3000);
    } catch (error) {
      console.error(error);
      setStatus('error');
      setErrorMessage('Произошла ошибка при отправке. Пожалуйста, попробуйте позже.');
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
          className="absolute inset-0 bg-bee-black/80 backdrop-blur-sm"
        />
        
        <motion.div 
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="relative w-full max-w-2xl bg-bee-black border border-bee-border overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-10 max-h-[90vh] overflow-y-auto custom-scrollbar"
        >
          <button 
            onClick={closeModal}
            className="absolute top-6 right-6 text-bee-text-muted hover:text-bee-yellow transition-colors z-20"
          >
            <X className="w-6 h-6" />
          </button>

          {status === 'success' ? (
            <div className="p-12 md:p-20 flex flex-col items-center justify-center text-center min-h-[400px]">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", bounce: 0.5 }}
              >
                <CheckCircle2 className="w-24 h-24 text-bee-yellow mb-8" />
              </motion.div>
              <h3 className="text-3xl font-black uppercase tracking-tighter italic mb-4">Данные отправлены</h3>
              <p className="text-bee-text-muted font-light mb-8 max-w-md mx-auto">
                Мы получили ваш запрос и свяжемся с вами в ближайшее время для обсуждения деталей.
              </p>
              <button 
                onClick={closeModal}
                className="px-8 py-4 bg-bee-transparent border border-bee-border text-bee-white text-[10px] uppercase tracking-widest font-bold hover:border-bee-yellow hover:text-bee-yellow transition-colors"
              >
                Закрыть
              </button>
            </div>
          ) : (
            <div className="p-8 md:p-12">
              <div className="mb-10 block">
                <span className="text-bee-yellow text-xs font-bold uppercase tracking-[0.4em] bg-bee-yellow/5 px-4 py-2 border border-bee-yellow/20 inline-block mb-4">
                  {modalType === 'idea' ? 'Запуск производства' : 'Оформление запроса'}
                </span>
                <h2 className="text-3xl font-black uppercase tracking-tighter italic">
                  {modalType === 'idea' ? 'Ваша идея' : 'Детали проекта'}
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {modalType === 'idea' && (
                  <div className="space-y-6">
                    <div className="space-y-2">
                       <label className="text-[10px] uppercase tracking-widest text-bee-text-muted font-bold">Имя / Компания</label>
                       <input 
                         type="text" 
                         name="name"
                         required
                         value={formData.name}
                         onChange={handleChange}
                         placeholder="Как нам к вам обращаться?"
                         className="w-full bg-transparent border-b border-bee-border px-0 py-4 text-sm font-light text-bee-white outline-none focus:border-bee-yellow transition-colors placeholder:text-bee-text-muted/50"
                       />
                    </div>
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-bee-text-muted font-bold">Телефон / WhatsApp</label>
                    <input 
                      type="text" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+7..."
                      className="w-full bg-transparent border-b border-bee-border px-0 py-4 text-sm font-light text-bee-white outline-none focus:border-bee-yellow transition-colors placeholder:text-bee-text-muted/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-bee-text-muted font-bold">Telegram</label>
                    <input 
                      type="text" 
                      name="telegram"
                      value={formData.telegram}
                      onChange={handleChange}
                      placeholder="@username"
                      className="w-full bg-transparent border-b border-bee-border px-0 py-4 text-sm font-light text-bee-white outline-none focus:border-bee-yellow transition-colors placeholder:text-bee-text-muted/50"
                    />
                  </div>
                </div>

                {modalType === 'idea' ? (
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-bee-text-muted font-bold">Суть вашей идеи</label>
                      <textarea 
                        name="idea"
                        required
                        value={formData.idea}
                        onChange={handleChange}
                        placeholder="Опишите в 2-3 предложениях, что вы хотите реализовать..."
                        className="w-full bg-bee-black border border-bee-border px-6 py-4 text-sm font-light text-bee-white outline-none focus:border-bee-yellow transition-colors placeholder:text-bee-text-muted/50 min-h-[100px] resize-none custom-scrollbar"
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-bee-text-muted font-bold">Бюджет</label>
                        <select 
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full bg-transparent border-b border-bee-border px-0 py-4 text-sm font-light text-bee-white outline-none focus:border-bee-yellow transition-colors appearance-none"
                        >
                          <option value="" disabled className="text-bee-black">Укажите бюджет</option>
                          <option value="до 50.000 руб." className="text-bee-black">до 50.000 руб.</option>
                          <option value="50 - 200.000 руб." className="text-bee-black">50 - 200.000 руб.</option>
                          <option value="200 - 500.000 руб." className="text-bee-black">200 - 500.000 руб.</option>
                          <option value="от 500.000 руб." className="text-bee-black">от 500.000 руб.</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-bee-text-muted font-bold">Срок реализации</label>
                        <select 
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          className="w-full bg-transparent border-b border-bee-border px-0 py-4 text-sm font-light text-bee-white outline-none focus:border-bee-yellow transition-colors appearance-none"
                        >
                          <option value="" disabled className="text-bee-black">Желаемый срок</option>
                          <option value="Как можно скорее" className="text-bee-black">Как можно скорее</option>
                          <option value="2-4 недели" className="text-bee-black">2-4 недели</option>
                          <option value="1-3 месяца" className="text-bee-black">1-3 месяца</option>
                          <option value="Не горит" className="text-bee-black">Не горит</option>
                        </select>
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-bee-text-muted font-bold">Тип материала</label>
                        <input 
                          type="text" 
                          name="material"
                          value={formData.material}
                          onChange={handleChange}
                          placeholder="Например: Пластик, Композит"
                          className="w-full bg-transparent border-b border-bee-border px-0 py-4 text-sm font-light text-bee-white outline-none focus:border-bee-yellow transition-colors placeholder:text-bee-text-muted/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-bee-text-muted font-bold">Тип конструкции</label>
                        <input 
                          type="text" 
                          name="construction"
                          value={formData.construction}
                          onChange={handleChange}
                          placeholder="Например: Монолитная, Полая"
                          className="w-full bg-transparent border-b border-bee-border px-0 py-4 text-sm font-light text-bee-white outline-none focus:border-bee-yellow transition-colors placeholder:text-bee-text-muted/50"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-bee-text-muted font-bold">Высота (мм)</label>
                        <input 
                          type="number" 
                          name="sizeZ"
                          value={formData.sizeZ}
                          onChange={handleChange}
                          placeholder="Z"
                          className="w-full bg-transparent border-b border-bee-border px-0 py-4 text-sm font-light text-bee-white outline-none focus:border-bee-yellow transition-colors placeholder:text-bee-text-muted/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-bee-text-muted font-bold">Ширина (мм)</label>
                        <input 
                          type="number" 
                          name="sizeX"
                          value={formData.sizeX}
                          onChange={handleChange}
                          placeholder="X"
                          className="w-full bg-transparent border-b border-bee-border px-0 py-4 text-sm font-light text-bee-white outline-none focus:border-bee-yellow transition-colors placeholder:text-bee-text-muted/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-bee-text-muted font-bold">Длина (мм)</label>
                        <input 
                          type="number" 
                          name="sizeY"
                          value={formData.sizeY}
                          onChange={handleChange}
                          placeholder="Y"
                          className="w-full bg-transparent border-b border-bee-border px-0 py-4 text-sm font-light text-bee-white outline-none focus:border-bee-yellow transition-colors placeholder:text-bee-text-muted/50"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-bee-text-muted font-bold">Ваша роль</label>
                        <select 
                          name="role"
                          value={formData.role}
                          onChange={handleChange}
                          className="w-full bg-transparent border-b border-bee-border px-0 py-4 text-sm font-light text-bee-white outline-none focus:border-bee-yellow transition-colors appearance-none"
                        >
                          <option value="" disabled className="text-bee-black">Выберите роль</option>
                          <option value="Селлер маркетплейса" className="text-bee-black">Селлер маркетплейса</option>
                          <option value="Инженер / Производство" className="text-bee-black">Инженер / Производство</option>
                          <option value="Дизайнер / Архитектор" className="text-bee-black">Дизайнер / Архитектор</option>
                          <option value="Другое" className="text-bee-black">Другое</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-bee-text-muted font-bold">Толщина стенки (мм)</label>
                        <input 
                          type="number" 
                          name="thickness"
                          value={formData.thickness}
                          onChange={handleChange}
                          placeholder="Тонкая / Монолит"
                          className="w-full bg-transparent border-b border-bee-border px-0 py-4 text-sm font-light text-bee-white outline-none focus:border-bee-yellow transition-colors placeholder:text-bee-text-muted/50"
                        />
                      </div>
                    </div>
                  </>
                )}

                <div className="space-y-2 pt-2">
                  <label className="text-[10px] uppercase tracking-widest text-bee-text-muted font-bold flex items-center gap-2">
                    <LinkIcon className="w-3 h-3" /> {modalType === 'idea' ? 'Фото идеи / Набросок (Cсылка)' : 'Ссылка на файл с 3D моделью'}
                  </label>
                  <p className="text-xs text-bee-text-muted pb-2">Приложите ссылку на Google Диск / Яндекс Диск / Облако с {modalType === 'idea' ? 'фотографией или скетчем' : 'вашей моделью'}.</p>
                  <div className="relative group">
                    <input 
                      type="url" 
                      name="fileLink"
                      value={formData.fileLink}
                      onChange={handleChange}
                      placeholder="https://..."
                      className="w-full bg-bee-black border border-bee-border px-6 py-4 pr-12 text-sm font-light text-bee-white outline-none focus:border-bee-yellow transition-colors placeholder:text-bee-text-muted/50"
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                       <label className="cursor-pointer hover:text-bee-yellow transition-colors">
                          <Upload className="w-4 h-4 text-bee-text-muted" />
                          <input type="file" className="hidden" onChange={(e) => {
                             const file = e.target.files?.[0];
                             if (file) {
                               setFormData(prev => ({ ...prev, notes: prev.notes + `\n[ВЫБРАН ФАЙЛ: ${file.name}]` }));
                               alert('Файл выбран. Пожалуйста, также загрузите его на свой Google Диск и приложите ссылку для надежности.');
                             }
                          }} />
                       </label>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-bee-text-muted font-bold">
                    {modalType === 'idea' ? 'Дополнительные примечания' : 'Ваш запрос / Примечание'}
                  </label>
                  <textarea 
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder={modalType === 'idea' ? "Расскажите подробнее о проекте, если нужно..." : "Напишите здесь детали вашего проекта или вопросы к инженеру..."}
                    className="w-full bg-bee-black border border-bee-border px-6 py-4 text-sm font-light text-bee-white outline-none focus:border-bee-yellow transition-colors placeholder:text-bee-text-muted/50 min-h-[100px] resize-none custom-scrollbar"
                  />
                </div>

                {status === 'error' && (
                  <div className="p-4 border border-red-500/30 bg-red-500/10 text-red-500 text-sm">
                    {errorMessage}
                  </div>
                )}

                <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button 
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-bee-yellow text-bee-black px-8 py-5 text-[10px] font-bold uppercase tracking-widest hover:bg-bee-white active:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-70"
                  >
                    {status === 'submitting' ? (
                      <><Loader2 className="w-4 h-4 animate-spin" /> Обработка...</>
                    ) : (
                      'Отправить через сайт'
                    )}
                  </button>

                  <button 
                    type="button"
                    onClick={() => {
                        let message = '';
                        if (modalType === 'idea') {
                          message = `Юрий, здравствуйте! \n\nЯ хочу обсудить идею с сайта BlackBee.\n\n- Имя/Компания: ${formData.name}\n- Идея: ${formData.idea}\n- Бюджет: ${formData.budget}\n- Сроки: ${formData.timeline}\n- Ссылка на файл: ${formData.fileLink}\n- Примечания: ${formData.notes}`;
                        } else {
                          message = `Юрий, здравствуйте! \n\nЯ пишу с сайта BlackBee по поводу 3D печати. Мои детали:\n- Моя роль: ${formData.role || ''}\n- Материал: ${formData.material || ''}\n- Конструкция: ${formData.construction || ''}\n- Габариты: ${formData.sizeX || ''} x ${formData.sizeY || ''} x ${formData.sizeZ || ''} мм\n- Толщина стенки: ${formData.thickness || ''} мм\n- Ссылка на файл: ${formData.fileLink || ''}\n- Мой запрос: ${formData.notes || ''}`;
                        }
                      window.open(`https://t.me/BlackBee_Com?text=${encodeURIComponent(message)}`, '_blank');
                    }}
                    className="w-full bg-transparent border border-bee-border text-bee-white px-8 py-5 text-[10px] font-bold uppercase tracking-widest hover:border-bee-yellow hover:text-bee-yellow active:scale-[0.98] transition-all flex items-center justify-center gap-3"
                  >
                    <Send className="w-4 h-4" />
                    Написать в Telegram
                  </button>
                </div>
                <p className="text-center text-[10px] text-bee-text-muted mt-4 uppercase tracking-widest">
                  Ваши данные надежно защищены
                </p>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
