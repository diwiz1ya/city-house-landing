import React, { useState } from 'react';
import { motion, useScroll, useTransform, useMotionValue, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, 
  Phone, 
  MapPin, 
  Instagram, 
  MessageCircle, 
  Hammer, 
  PencilRuler,
  Clock, 
  Camera, 
  ShieldCheck, 
  ArrowRight,
  Menu,
  X,
  Star,
  ChevronDown,
  ChevronUp,
  Send,
  MoreVertical,
  PhoneCall,
  FileText,
  User,
  // Новые иконки для отдельных услуг
  Zap,
  Droplets,
  Wind,
  AppWindow
} from 'lucide-react';
import legendaKitchen from './assets/legenda-kitchen.jpg';
import foremanReport from './defr.jpg';

// --- Компоненты UI ---

const Button = ({ children, className, variant = 'primary', ...props }) => {
  const baseStyle = "inline-flex items-center justify-center px-6 py-3 text-base font-medium transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95";
  const variants = {
    primary: "bg-teal-800 text-white hover:bg-teal-900 focus:ring-teal-700 shadow-lg shadow-teal-900/20 hover:shadow-xl hover:shadow-teal-900/30",
    outline: "bg-transparent border-2 border-teal-800 text-teal-800 hover:bg-teal-50 focus:ring-teal-700",
    white: "bg-white text-teal-900 hover:bg-gray-50 focus:ring-white shadow-md hover:shadow-lg"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const Input = ({ label, ...props }) => (
  <div className="mb-4">
    {label && <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>}
    <input 
      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-600 focus:ring-1 focus:ring-teal-600 outline-none transition-all bg-gray-50 focus:bg-white placeholder:text-gray-400"
      {...props}
    />
  </div>
);

// --- Hero Section ---

const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-5, 5]);

  return (
    <section 
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-stone-50"
      onMouseMove={handleMouseMove}
    >
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl from-teal-50 to-transparent -z-10 opacity-60 blur-3xl" />

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center space-x-2 bg-white px-3 py-1 rounded-full shadow-sm border border-stone-200 mb-6">
            <span className="w-2 h-2 bg-teal-600 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-stone-600">Работаем в Санкт-Петербурге с 2015 года</span>
          </div>
          
          <h1 className="font-serif text-4xl md:text-6xl leading-tight text-slate-900 mb-6">
            Ремонт квартир <span className="text-teal-800 italic">под ключ</span>, который не хочется скрывать в Инстаграме
          </h1>
          
          <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
            Создаем современные интерьеры с фиксированной сметой и сроками. 
            Бесплатный дизайн-проект при заказе ремонта под ключ.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <div className="flex items-center gap-2 text-slate-700">
              <CheckCircle2 className="w-5 h-5 text-teal-600" />
              <span>Дизайн-проект в подарок</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <CheckCircle2 className="w-5 h-5 text-teal-600" />
              <span>Фото-отчеты ежедневно</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-xl border border-stone-100 max-w-md relative overflow-hidden">
             <div className="absolute top-0 left-0 w-1 h-full bg-teal-600"></div>
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Рассчитайте стоимость ремонта за 1 минуту</h3>
            <form className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <select className="w-full px-3 py-2 rounded-lg border border-gray-300 bg-gray-50 text-sm outline-none focus:border-teal-600">
                  <option>Студия</option>
                  <option>1-комнатная</option>
                  <option>2-комнатная</option>
                  <option>3-комнатная</option>
                  <option>Частный дом</option>
                </select>
                <input 
                  type="number" 
                  placeholder="Площадь, м²" 
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 bg-gray-50 text-sm outline-none focus:border-teal-600"
                />
              </div>
              <input 
                type="tel" 
                placeholder="+7 (___) ___-__-__" 
                className="w-full px-3 py-2 rounded-lg border border-gray-300 bg-gray-50 text-sm outline-none focus:border-teal-600"
              />
              <Button className="w-full text-sm py-3">Рассчитать стоимость</Button>
              <p className="text-xs text-center text-gray-400 mt-2">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>
          </div>
        </motion.div>

        <div className="relative perspective-1000 hidden lg:block h-[600px]">
          <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="w-full h-full flex items-center justify-center"
          >
            <div className="relative w-[90%] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-teal-900/20 border-4 border-white bg-gray-200">
              <img 
                src={legendaKitchen} 
                alt="Modern kitchen renovation for Legenda complex" 
                className="w-full h-full object-cover"
              />
              <motion.div 
                style={{ transform: "translateZ(50px)" }}
                className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg max-w-[200px]"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-green-100 p-2 rounded-full">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Статус</p>
                    <p className="text-sm font-bold text-slate-800">Сдано в срок</p>
                  </div>
                </div>
                <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full w-full bg-green-500"></div>
                </div>
              </motion.div>
              <motion.div 
                 style={{ transform: "translateZ(30px)" }}
                 className="absolute top-8 right-8 bg-teal-800 text-white px-4 py-2 rounded-full shadow-lg text-sm font-medium"
              >
                ЖК «Legenda»
              </motion.div>
            </div>
            <div className="absolute top-10 -right-10 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute -bottom-10 left-10 w-64 h-64 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { title: "Ремонт под ключ", desc: "Полный цикл работ от демонтажа до клининга. Вы получаете готовую квартиру, в которую можно заезжать.", icon: <Hammer className="w-6 h-6 text-teal-700" />, price: "от 15 000 ₽/м²" },
    { title: "Дизайн-проект", desc: "Разработка планировочных решений, 3D-визуализация и подбор материалов. Бесплатно при заказе ремонта.", icon: <PencilRuler className="w-6 h-6 text-teal-700" />, price: "Бесплатно*" },
    { title: "Приемка квартир", desc: "Помощь в приемке квартиры у застройщика в новостройках СПб. Найдем все дефекты и сэкономим ваши деньги.", icon: <ShieldCheck className="w-6 h-6 text-teal-700" />, price: "от 3 000 ₽" }
  ];
  return (
    <section className="py-20 bg-white" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-slate-900 mb-4">Наши услуги</h2>
          <p className="text-slate-600">Мы специализируемся на комплексном ремонте новостроек и вторичного жилья в Санкт-Петербурге.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} whileHover={{ y: -5 }} className="bg-stone-50 rounded-2xl p-8 border border-stone-100 hover:shadow-xl hover:shadow-stone-200/50 transition-all duration-300 group">
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-stone-100">{service.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed text-sm">{service.desc}</p>
              <div className="flex items-center justify-between pt-4 border-t border-stone-200">
                <span className="font-semibold text-teal-800">{service.price}</span>
                <button className="text-slate-400 hover:text-teal-700 transition-colors"><ArrowRight className="w-5 h-5" /></button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- НОВЫЙ БЛОК: Отдельные услуги с WOW-эффектом ---

const IndividualServices = () => {
  const items = [
    { 
      title: "Сантехника", 
      text: "Разводка труб Rehau, монтаж инсталляций, установка чистовой сантехники.", 
      icon: <Droplets className="w-8 h-8" /> 
    },
    { 
      title: "Электрика", 
      text: "Сборка щитов ABB/Schneider, разводка по потолку, монтаж розеток и треков.", 
      icon: <Zap className="w-8 h-8" /> 
    },
    { 
      title: "Остекление", 
      text: "Утепление лоджий, замена холодного остекления на теплое, отделка под ключ.", 
      icon: <AppWindow className="w-8 h-8" /> 
    },
    { 
      title: "Вентиляция", 
      text: "Монтаж кондиционеров, прокладка трасс в штробе, установка бризеров.", 
      icon: <Wind className="w-8 h-8" /> 
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <section className="py-20 bg-stone-100 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
           <div className="max-w-xl">
             <h2 className="font-serif text-3xl md:text-4xl text-slate-900 mb-4">Точечные решения</h2>
             <p className="text-slate-600">
               Вам не обязательно заказывать весь ремонт целиком. Мы профессионально выполняем отдельные этапы инженерных и отделочных работ.
             </p>
           </div>
           <Button variant="outline" className="hidden md:flex">Скачать прайс-лист</Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial="initial"
              whileHover="hover"
              className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer bg-white shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              {/* Background gradient that appears on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-900 to-slate-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              
              {/* Default State Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between z-20 group-hover:opacity-0 transition-opacity duration-300">
                <div className="w-12 h-12 bg-stone-100 rounded-xl flex items-center justify-center text-stone-400">
                  {React.cloneElement(item.icon, { className: "w-6 h-6" })}
                </div>
                <div>
                  <h3 className="text-2xl font-serif text-slate-900 mb-2">{item.title}</h3>
                  <div className="w-10 h-1 bg-teal-600"></div>
                </div>
              </div>

              {/* Hover State Content (White Text) */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-teal-300 border border-white/10">
                   {item.icon}
                </div>
                
                <div>
                  {/* Эффект появления букв */}
                  <motion.div
                     variants={container}
                     initial="hidden"
                     whileInView="visible"
                     className="text-2xl font-serif text-white mb-4 flex overflow-hidden"
                  >
                     {item.title.split("").map((letter, idx) => (
                       <motion.span key={idx} variants={child}>
                         {letter}
                       </motion.span>
                     ))}
                  </motion.div>
                  
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    {item.text}
                  </p>
                  <div className="flex items-center text-white text-sm font-medium group-hover:translate-x-2 transition-transform">
                    Заказать <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </div>

              {/* Decorative subtle pattern */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-teal-500/20 rounded-full blur-3xl z-0 group-hover:bg-teal-400/20 transition-colors"></div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 md:hidden">
           <Button variant="outline" className="w-full">Скачать прайс-лист</Button>
        </div>
      </div>
    </section>
  );
};


const WhyUs = () => {
  const benefits = [
    { title: "Фиксированные сроки", desc: "Прописываем даты начала и окончания работ в договоре. За каждый день просрочки — штраф нам.", icon: <Clock className="w-8 h-8 text-white" /> },
    { title: "Фото-отчеты 24/7", desc: "Создаем чат в WhatsApp, куда прораб ежедневно скидывает фото и видео процесса. Вы всегда в курсе.", icon: <Camera className="w-8 h-8 text-white" /> },
    { title: "Без скрытых доплат", desc: "Смета фиксируется до начала работ. Если мы что-то не учли — делаем за свой счет.", icon: <ShieldCheck className="w-8 h-8 text-white" /> }
  ];
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"><div className="absolute right-0 top-0 w-96 h-96 bg-teal-500 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="lg:w-1/3">
            <h2 className="font-serif text-3xl md:text-4xl mb-6">Почему петербуржцы доверяют нам ключи</h2>
            <p className="text-slate-400 mb-8 leading-relaxed">Ремонт — это стресс. Мы забираем этот стресс на себя. Ваша задача — согласовать дизайн и въехать в чистую квартиру.</p>
            <Button variant="white">Обсудить проект</Button>
          </div>
          <div className="lg:w-2/3 grid md:grid-cols-2 gap-6">
             {benefits.map((item, idx) => (
               <motion.div key={idx} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.2 }} className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 backdrop-blur-sm">
                 <div className="w-12 h-12 bg-teal-700 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-teal-900/50">{item.icon}</div>
                 <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                 <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
               </motion.div>
             ))}
             <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="bg-gradient-to-br from-teal-800 to-teal-900 p-6 rounded-2xl flex flex-col justify-center items-center text-center border border-teal-700">
                <span className="text-4xl font-serif font-bold mb-1">150+</span>
                <span className="text-sm text-teal-200">сданных квартир <br/>по всему СПб</span>
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- НОВЫЙ БЛОК: Прозрачный ремонт (WhatsApp стиль) ---

const TransparencyDemo = () => {
  return (
    <section className="py-24 bg-stone-50 overflow-hidden">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Текст */}
        <div className="order-2 lg:order-1">
          <div className="inline-flex items-center space-x-2 bg-green-100 px-3 py-1 rounded-full mb-6">
            <MessageCircle className="w-4 h-4 text-green-700" />
            <span className="text-xs font-bold text-green-800 tracking-wide uppercase">Полная прозрачность</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-slate-900 mb-6">
            Ремонт под контролем. <br/>
            <span className="text-teal-800 italic">Даже если вы в отпуске.</span>
          </h2>
          <p className="text-slate-600 text-lg mb-8 leading-relaxed">
            Вам не нужно ездить на объект каждый день. Мы создаем чат в WhatsApp, где прораб ежедневно отправляет фото и видео отчеты о проделанной работе. Вы видите прогресс в реальном времени.
          </p>
          
          <div className="flex flex-col gap-4">
             <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-stone-200 shadow-sm">
               <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                 <FileText className="w-5 h-5 text-teal-700" />
               </div>
               <div>
                 <h4 className="font-bold text-slate-900">Всё по проекту</h4>
                 <p className="text-xs text-slate-500">Сверяем каждый этап с чертежами</p>
               </div>
             </div>
             <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-stone-200 shadow-sm">
               <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                 <VideoIcon className="w-5 h-5 text-teal-700" />
               </div>
               <div>
                 <h4 className="font-bold text-slate-900">Видео-экскурсии</h4>
                 <p className="text-xs text-slate-500">Показываем скрытые работы до чистовой отделки</p>
               </div>
             </div>
          </div>
        </div>

        {/* Визуал Чата */}
        <div className="order-1 lg:order-2 flex justify-center">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative w-[320px] h-[580px] bg-white rounded-[2.5rem] border-8 border-slate-900 shadow-2xl overflow-hidden"
          >
             {/* Phone Status Bar */}
             <div className="absolute top-0 left-0 right-0 h-6 bg-slate-900 z-20 flex justify-center">
                <div className="w-20 h-4 bg-slate-900 rounded-b-xl"></div>
             </div>

             {/* Chat Header */}
             <div className="bg-stone-100 p-4 pt-8 flex items-center justify-between border-b border-stone-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-teal-700 rounded-full flex items-center justify-center text-white font-bold text-sm">СН</div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Сергей (Прораб)</p>
                    <p className="text-[10px] text-slate-500">был(а) недавно</p>
                  </div>
                </div>
                <MoreVertical className="w-5 h-5 text-slate-400" />
             </div>

             {/* Chat Body */}
             <div className="p-4 bg-[#E5DDD5] h-full flex flex-col gap-4 overflow-hidden relative">
                <div className="bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] absolute inset-0 opacity-40 pointer-events-none"></div>
                
                <div className="self-center bg-[#DDECF2] px-2 py-1 rounded text-[10px] text-slate-500 shadow-sm mb-2 z-10">
                  Сегодня
                </div>

                {/* Сообщение прораба */}
                <motion.div 
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white p-2 rounded-tr-xl rounded-br-xl rounded-bl-xl max-w-[85%] shadow-sm z-10 self-start"
                >
                  <p className="text-xs text-slate-800 mb-2">Доброе утро! Закончили монтаж инсталляции и разводку труб в ванной. Начинаем зашивку коробов.</p>
                  <img src={foremanReport} alt="Фото отчета прораба с объекта" className="rounded-lg mb-1 w-full h-32 object-cover" />
                  <span className="text-[10px] text-slate-400 float-right">10:42</span>
                </motion.div>

                {/* Сообщение клиента */}
                <motion.div 
                   initial={{ x: 20, opacity: 0 }}
                   whileInView={{ x: 0, opacity: 1 }}
                   transition={{ delay: 0.8 }}
                   className="bg-[#DCF8C6] p-2 rounded-tl-xl rounded-bl-xl rounded-br-xl max-w-[80%] shadow-sm z-10 self-end"
                >
                  <p className="text-xs text-slate-800">Супер! Вывод под гигиенический душ справа, как обсуждали?</p>
                  <span className="text-[10px] text-slate-400/70 float-right">10:45</span>
                  <div className="absolute bottom-0 right-0 transform translate-x-1">
                    <CheckCircle2 className="w-3 h-3 text-teal-600" />
                  </div>
                </motion.div>

                {/* Сообщение прораба ответ */}
                <motion.div 
                   initial={{ x: -20, opacity: 0 }}
                   whileInView={{ x: 0, opacity: 1 }}
                   transition={{ delay: 1.4 }}
                   className="bg-white p-2 rounded-tr-xl rounded-br-xl rounded-bl-xl max-w-[85%] shadow-sm z-10 self-start"
                >
                  <p className="text-xs text-slate-800">Да, конечно. Вот фото узла крупнее 👇</p>
                  <img 
                    src="https://images.unsplash.com/photo-1600566752033-7d94c5b5f860?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                    alt="Ремонт в ванной"
                    className="rounded-lg mb-1 w-full h-32 object-cover"
                  />
                  <span className="text-[10px] text-slate-400 float-right">10:46</span>
                </motion.div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const cases = [
    { title: "Евротрешка на Васильевском", location: "ЖК «Эмеральд на Малой Неве»", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", tags: ["84 м²", "Сканди", "Вторичка"] },
    { title: "Минимализм в новостройке", location: "ЖК «Чистое Небо»", image: "https://images.unsplash.com/photo-1616594039964-40891f91304b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", tags: ["42 м²", "Минимализм", "Новостройка"] },
    { title: "Студия с мужским характером", location: "Апарт-отель «Yes»", image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", tags: ["28 м²", "Лофт", "Апартаменты"] }
  ];
  return (
    <section className="py-20 bg-white" id="portfolio">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-slate-900 mb-4">Наши работы</h2>
          <p className="text-slate-600 max-w-xl mx-auto">Реальные примеры ремонтов квартир под ключ. Эстетика, функциональность и внимание к деталям.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.2 }} whileHover={{ y: -10 }} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer border border-stone-100">
              <div className="relative h-64 overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-slate-800">{item.tags[0]}</div>
              </div>
              <div className="p-6">
                <div className="flex gap-2 mb-3">{item.tags.slice(1).map((tag, i) => (<span key={i} className="text-xs font-medium text-teal-700 bg-teal-50 px-2 py-1 rounded">{tag}</span>))}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">{item.title}</h3>
                <p className="text-slate-500 text-sm flex items-center gap-1"><MapPin className="w-3 h-3" /> {item.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
           <Button variant="outline">Смотреть все проекты в Instagram*</Button>
           <p className="text-xs text-slate-400 mt-2">*Meta признана экстремистской организацией в РФ</p>
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    { title: "Заявка и замер", desc: "Вы оставляете заявку. Наш инженер приезжает, делает замеры и консультацию. Это бесплатно." },
    { title: "Смета и Договор", desc: "Готовим детальную смету. Если все устраивает — подписываем договор с фиксацией сроков." },
    { title: "Дизайн и Материалы", desc: "Разрабатываем проект, помогаем закупить чистовые материалы со скидками партнеров." },
    { title: "Ремонт", desc: "Выполняем работы. Присылаем отчеты в WhatsApp. Вы приезжаете только на ключевые этапы." },
    { title: "Сдача и Клининг", desc: "Проводим профессиональную уборку. Вручаем ключи от готовой, чистой квартиры." }
  ];
  return (
    <section className="py-20 bg-stone-50 overflow-hidden">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}>
          <h2 className="font-serif text-3xl md:text-4xl text-slate-900 mb-6">Понятный процесс без хаоса</h2>
          <p className="text-slate-600 mb-8 text-lg">Мы выстроили систему, при которой ремонт перестает быть стихийным бедствием. Каждый шаг предсказуем.</p>
          <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Архитектор за работой" className="rounded-2xl shadow-2xl w-full object-cover h-[400px]" />
        </motion.div>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-200"></div>
          <div className="space-y-8">
            {steps.map((step, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.15 }} className="relative pl-12">
                <div className="absolute left-0 top-1 w-8 h-8 bg-white border-2 border-teal-600 rounded-full flex items-center justify-center text-sm font-bold text-teal-700 z-10">{idx + 1}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// --- НОВЫЙ БЛОК: Отзывы ---

const Reviews = () => {
  const reviews = [
    {
      name: "Ольга и Андрей",
      location: "ЖК «Ultra City»",
      text: "Купили бетонную коробку, а получили квартиру мечты. Очень переживали за сроки, так как нужно было съезжать со съемной. Ребята сдали объект на 3 дня раньше срока в договоре! Чистота идеальная.",
      area: "72 м²",
      rating: 5
    },
    {
      name: "Михаил В.",
      location: "Петроградский р-н",
      text: "Сложный старый фонд, было много проблем с полом и стенами. Понравилось, что не грузили проблемами, а предлагали решения. Дизайн-проект реально помог сэкономить на материалах.",
      area: "94 м²",
      rating: 5
    },
    {
      name: "Елена Смирнова",
      location: "ЖК «Riverside»",
      text: "Делала ремонт дистанционно, живя в Москве. Ни разу не приезжала до сдачи! Все решали по видеосвязи. Результат превзошел ожидания, особенно плитка в ванной — ювелирная работа.",
      area: "56 м²",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white" id="reviews">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl text-slate-900 mb-12 text-center">Отзывы наших клиентов</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-stone-50 p-8 rounded-2xl border border-stone-100 relative"
            >
              <div className="flex gap-1 mb-4 text-yellow-500">
                {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-slate-700 mb-6 text-sm leading-relaxed italic">"{review.text}"</p>
              <div className="mt-auto flex items-center gap-3 border-t border-stone-200 pt-4">
                <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center text-teal-800 font-bold text-sm">
                   {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">{review.name}</p>
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span>{review.location}</span>
                    <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                    <span>{review.area}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8">
           <a href="#" className="text-teal-700 font-medium border-b border-teal-200 hover:border-teal-700 transition-colors text-sm pb-0.5">Читать все отзывы на Яндекс.Картах</a>
        </div>
      </div>
    </section>
  );
};

// --- НОВЫЙ БЛОК: FAQ (Аккордеон) ---

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  
  const questions = [
    { q: "Может ли измениться стоимость в процессе ремонта?", a: "Стоимость работ фиксируется в договоре и не меняется. Изменения возможны только если вы сами захотите добавить дополнительные работы, которые не были учтены изначально." },
    { q: "Как происходит оплата?", a: "Мы не берем авансы за работы. Оплата происходит поэтапно: выполнили этап (например, черновая отделка) — вы проверили — оплатили. Материалы оплачиваются отдельно по чекам." },
    { q: "Входит ли закупка материалов в ваши услуги?", a: "Да, мы берем на себя закупку и доставку черновых материалов. Чистовые материалы (плитка, обои) помогаем выбрать и купить со скидками от наших партнеров (до 20%)." },
    { q: "Кто будет делать ремонт?", a: "У нас свои штатные бригады узкопрофильных специалистов. Мы не нанимаем случайных людей с улицы. Каждый объект контролирует прораб и инженер технадзора." }
  ];

  return (
    <section className="py-20 bg-stone-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-serif text-3xl md:text-4xl text-slate-900 mb-10 text-center">Частые вопросы</h2>
        <div className="space-y-4">
          {questions.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between bg-white hover:bg-stone-50 transition-colors"
              >
                <span className="font-bold text-slate-900 pr-8">{item.q}</span>
                {openIndex === index ? <ChevronUp className="w-5 h-5 text-teal-600 shrink-0" /> : <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-slate-600 text-sm leading-relaxed border-t border-stone-100 pt-4">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  return (
    <section className="py-20 bg-teal-900 text-white relative overflow-hidden" id="contacts">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      <div className="absolute -right-20 -top-20 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">
          <div className="p-8 md:p-12 flex flex-col justify-center bg-slate-900 text-white">
            <h2 className="font-serif text-3xl mb-4 leading-tight">Получите 3 варианта планировки вашей квартиры</h2>
            <p className="text-slate-400 mb-8">Оставьте заявку сейчас — это бесплатно и ни к чему вас не обязывает. Архитектор свяжется с вами для уточнения деталей.</p>
            <ul className="space-y-3 text-sm text-slate-300 mb-8">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-teal-500"/> Предварительная смета</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-teal-500"/> Консультация по материалам</li>
            </ul>
          </div>
          <div className="p-8 md:p-12 bg-white text-slate-900">
            <form className="space-y-4">
              <Input placeholder="Ваше имя" type="text" />
              <Input placeholder="+7 (999) 000-00-00" type="tel" />
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Тип объекта</label>
                <div className="flex gap-2">
                  <span className="px-3 py-2 bg-gray-100 rounded-lg text-sm cursor-pointer hover:bg-teal-50 hover:text-teal-700 transition">Новостройка</span>
                  <span className="px-3 py-2 bg-gray-100 rounded-lg text-sm cursor-pointer hover:bg-teal-50 hover:text-teal-700 transition">Вторичка</span>
                </div>
              </div>
              <Button className="w-full mt-4">Получить варианты</Button>
              <p className="text-xs text-center text-gray-400 mt-4">Ваши данные в безопасности</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800 pb-28 md:pb-12"> {/* Extra padding bottom for mobile FAB */}
      <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8 mb-8">
        <div>
          <h3 className="text-2xl font-serif text-white mb-4">CITY HOUSE</h3>
          <p className="text-sm mb-4">Ремонт квартир под ключ в Санкт-Петербурге с любовью к деталям.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-teal-500 transition"><Instagram className="w-5 h-5"/></a>
            <a href="#" className="hover:text-teal-500 transition"><MessageCircle className="w-5 h-5"/></a>
          </div>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Услуги</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">Ремонт под ключ</a></li>
            <li><a href="#" className="hover:text-white transition">Дизайн интерьера</a></li>
            <li><a href="#" className="hover:text-white transition">Приемка квартир</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Контакты</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2"><Phone className="w-4 h-4"/> +7 (812) 999-99-99</li>
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4"/> СПб, Невский пр., 120</li>
            <li className="text-xs mt-2">Ежедневно с 10:00 до 20:00</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Есть вопрос?</h4>
          <div className="flex gap-2">
            <input type="text" placeholder="Ваш телефон" className="bg-stone-800 border-none text-sm px-3 py-2 rounded w-full focus:ring-1 focus:ring-teal-600 outline-none text-white"/>
            <button className="bg-teal-700 hover:bg-teal-600 px-3 py-2 rounded text-white transition"><ArrowRight className="w-4 h-4" /></button>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 pt-8 border-t border-stone-800 text-xs text-center flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© 2023 CITY HOUSE. Все права защищены.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">Политика конфиденциальности</a>
          <a href="#" className="hover:text-white">Договор оферты</a>
        </div>
      </div>
    </footer>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-stone-100">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="text-2xl font-serif font-bold text-slate-900 tracking-tight">CITY HOUSE</div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#services" className="hover:text-teal-800 transition">Услуги</a>
          <a href="#portfolio" className="hover:text-teal-800 transition">Портфолио</a>
          <a href="#reviews" className="hover:text-teal-800 transition">Отзывы</a>
          <a href="#contacts" className="hover:text-teal-800 transition">Контакты</a>
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <div className="text-right hidden lg:block">
            <div className="text-xs text-slate-400">Есть вопросы?</div>
            <div className="font-bold text-slate-900">+7 (812) 999-99-99</div>
          </div>
          <Button className="text-sm py-2 px-4">Заказать звонок</Button>
        </div>
        <button className="md:hidden text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isMenuOpen && (
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-stone-100 shadow-xl p-4 flex flex-col gap-4">
          <a href="#services" className="text-lg font-medium text-slate-800" onClick={() => setIsMenuOpen(false)}>Услуги</a>
          <a href="#portfolio" className="text-lg font-medium text-slate-800" onClick={() => setIsMenuOpen(false)}>Портфолио</a>
          <a href="#contacts" className="text-lg font-medium text-slate-800" onClick={() => setIsMenuOpen(false)}>Контакты</a>
          <Button className="w-full mt-2">Рассчитать стоимость</Button>
        </motion.div>
      )}
    </header>
  );
};

// --- НОВЫЙ КОМПОНЕНТ: Mobile Floating CTA ---

const MobileFloatingCTA = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-md border-t border-stone-200 shadow-[0_-5px_20px_rgba(0,0,0,0.1)] z-40 flex gap-3 items-center">
       <a href="tel:+78129999999" className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center text-teal-800 shadow-sm active:scale-95 transition-transform">
         <PhoneCall className="w-6 h-6" />
       </a>
       <button className="flex-1 bg-teal-800 text-white h-12 rounded-xl font-medium shadow-lg shadow-teal-900/20 active:scale-95 transition-transform flex items-center justify-center gap-2">
         Рассчитать стоимость
       </button>
    </div>
  );
};

// --- Helper Icon для TransparencyDemo ---
const VideoIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m22 8-6 4 6 4V8Z"/><rect width="14" height="12" x="2" y="6" rx="2" ry="2"/>
  </svg>
);

export default function CityHouseLanding() {
  return (
    <div className="bg-stone-50 min-h-screen font-sans text-slate-900 selection:bg-teal-200 selection:text-teal-900">
      <Header />
      <main>
        <Hero />
        <Services />
        {/* Вставлен новый блок "Точечные решения" */}
        <IndividualServices />
        <WhyUs />
        <TransparencyDemo /> 
        <Portfolio />
        <Process />
        <Reviews />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <MobileFloatingCTA />
    </div>
  );
}
