/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Link, 
  useLocation 
} from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShoppingBag, 
  Menu, 
  X, 
  Instagram, 
  Facebook, 
  MessageCircle, 
  ChevronRight, 
  Truck, 
  ShieldCheck, 
  Sparkles,
  Heart,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Leaf,
  Play,
  Music2 as TiktokIcon
} from 'lucide-react';

import { products, tips } from './data';
import { Product } from './types';

// --- Sub-components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Quiénes somos', href: '/#quienes-somos' },
    { name: 'Catálogo', href: '/catalogo' },
    { name: 'Tips', href: '/tips' },
    { name: 'Infórmate', href: '/informate' },
    { name: 'Contacto', href: '/#contacto' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled || location.pathname !== '/' ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center group">
          <img 
            src="/logo.png" 
            alt="Logo NUA" 
            className="h-20 w-auto transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            link.href.startsWith('/#') ? (
               <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium text-black/70 hover:text-primary transition-colors hover:underline underline-offset-8 decoration-primary/30"
              >
                {link.name}
              </a>
            ) : (
              <Link 
                key={link.name} 
                to={link.href} 
                className={`text-sm font-medium transition-colors hover:underline underline-offset-8 decoration-primary/30 ${location.pathname === link.href ? 'text-primary underline' : 'text-black/70 hover:text-primary'}`}
              >
                {link.name}
              </Link>
            )
          ))}
          <button className="bg-primary text-white p-2 rounded-full hover:bg-secondary transition-colors">
            <ShoppingBag size={18} />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-black" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                link.href.startsWith('/#') ? (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    className="text-lg font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link 
                    key={link.name} 
                    to={link.href} 
                    className="text-lg font-medium" 
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                )
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section className="relative min-h-[90vh] bg-white pt-24 lg:pt-32 pb-16 overflow-hidden flex items-center">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-xs font-bold tracking-widest uppercase mb-8"
          >
            <Sparkles size={14} />
            <span>Belleza Real • Sin Filtros</span>
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl font-display font-black leading-[0.9] mb-8 text-black">
            Cuidarte es <br />
            <span className="text-primary italic">amarte</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-lg leading-relaxed font-medium">
            Descubre tu belleza natural con productos pensados especialmente para ti.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <Link to="/catalogo" className="group relative bg-black text-white px-12 py-5 rounded-full font-bold text-lg overflow-hidden shadow-xl transition-all hover:scale-105 active:scale-95 text-center">
              <span className="relative z-10 text-white group-hover:text-white transition-colors">Ver catálogo</span>
              <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Link>
          </div>
        </motion.div>

        {/* Right Content: Diverse Beauty Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="relative mt-8 lg:mt-0 h-[400px] lg:h-[600px] flex items-center justify-center"
        >
          {/* Main Diverse Image */}
          <div className="relative w-full h-full rounded-[3rem] overflow-hidden bg-gray-50 border border-gray-100 shadow-2xl">
            <img 
              src="/src/assets/images/regenerated_image_1777846406771.png" 
              alt="Belleza Múltiple y Real NUA" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1596462502278-27bfdc4033c8?q=80&w=1000";
              }}
            />
            {/* Subtle overlay for better blending */}
            <div className="absolute inset-0 bg-primary/5 mix-blend-overlay" />
          </div>
        </motion.div>
      </div>

      {/* Inspirational Bottom Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.02 }}
        transition={{ 
          type: "spring",
          stiffness: 100,
          damping: 20,
          delay: 1
        }}
        className="mt-20 flex justify-center group cursor-default"
      >
        <div className="bg-white px-8 md:px-16 py-10 md:py-12 rounded-[2.5rem] shadow-xl shadow-black/[0.03] border border-gray-50 text-center max-w-5xl transition-shadow duration-500 group-hover:shadow-2xl group-hover:shadow-primary/5">
          <p className="text-xl md:text-3xl font-display italic text-gray-800 leading-snug font-black">
            “En NUA creemos en la belleza real, en una piel sin filtros y en el poder de cuidarte.”
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

const About = () => {
  const [activeTab, setActiveTab] = useState('objetivo');

  const tabContent = {
    objetivo: {
      title: "Nuestro Objetivo",
      text: "Acompañarte en tu proceso de cuidado personal con productos que resalten tu belleza natural."
    },
    valores: {
      title: "Nuestros Valores",
      text: "Autenticidad, amor propio, confianza y bienestar."
    },
    esencia: {
      title: "Nuestra Esencia",
      text: "NUA nace para recordarte que no necesitas filtros para verte hermosa, solo cuidarte y sentirte bien contigo."
    },
    elegir: {
      title: "¿Por qué elegir NUA?",
      text: "Porque no solo encuentras productos, encuentras un espacio pensado para ti, donde tu bienestar es lo más importante."
    }
  };

  return (
    <section id="quienes-somos" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-24">
          {/* Left Column: Video and Info Cards */}
          <div className="flex flex-col gap-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-[380px] rounded-[2.5rem] overflow-hidden shadow-xl bg-gray-100 group cursor-pointer"
            >
              <video 
                autoPlay 
                muted 
                loop 
                playsInline 
                poster="https://images.unsplash.com/photo-1552046122-03184de85e08?q=80&w=1000&auto=format&fit=crop"
                className="w-full h-full object-cover"
              >
                <source src="https://assets.mixkit.co/videos/preview/mixkit-serene-woman-with-face-cream-on-her-cheeks-42848-large.mp4" type="video/mp4" />
              </video>
              
              {/* Aesthetic Overlay */}
              <div className="absolute inset-0 bg-primary/5 mix-blend-overlay group-hover:bg-primary/0 transition-colors duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60" />
              
              {/* Minimalist Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-20 h-20 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl border border-white/50 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white"
                >
                  <Play size={32} fill="currentColor" className="ml-1" />
                </motion.div>
              </div>
              
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-5 rounded-2xl border border-white/50 shadow-lg group-hover:translate-y-2 group-hover:opacity-0 transition-all duration-500">
                 <p className="text-xs md:text-sm font-display font-bold text-gray-800 leading-relaxed italic text-center">
                   “En NUA creemos en la belleza real, en una piel sin filtros y en el poder de cuidarte.”
                 </p>
              </div>
            </motion.div>

            {/* Rediseño de Recuadros (Informativos) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.05)" }}
                className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100 flex items-start gap-4 transition-all duration-300"
              >
                <div className="w-12 h-12 shrink-0 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                  <Sparkles size={24} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg mb-1">Belleza real</h3>
                  <p className="text-gray-500 text-xs leading-snug">Creemos en una piel natural, sin filtros y auténtica.</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.05)" }}
                className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100 flex items-start gap-4 transition-all duration-300"
              >
                <div className="w-12 h-12 shrink-0 bg-teal/10 rounded-2xl flex items-center justify-center text-teal">
                  <Leaf size={24} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg mb-1">Cuidado consciente</h3>
                  <p className="text-gray-500 text-xs leading-snug">Seleccionamos productos pensados para tu bienestar.</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Text content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:pt-4"
          >
            <span className="text-secondary font-display font-black tracking-widest uppercase text-xs mb-4 block">Nuestra Historia</span>
            <h2 className="text-5xl md:text-6xl font-display font-black mb-8 leading-[1]">Piel Real,<br />Sin Filtros.</h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              En NUA creemos en la belleza que no necesita esconderse. Somos un espacio diseñado para que conectes contigo misma, donde cada ritual es un acto de amor propio y confianza.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-10">
               {Object.keys(tabContent).map((key) => (
                 <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-6 py-3 rounded-2xl text-xs font-bold transition-all duration-300 ${activeTab === key ? 'bg-primary text-white shadow-lg' : 'bg-gray-50 text-gray-400 hover:bg-primary/10'}`}
                 >
                   {key === 'objetivo' && 'Objetivo'}
                   {key === 'valores' && 'Valores'}
                   {key === 'esencia' && 'Nuestra Esencia'}
                   {key === 'elegir' && '¿Por qué NUA?'}
                 </button>
               ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 min-h-[160px] flex flex-col justify-center shadow-inner"
              >
                <h4 className="text-primary font-display font-black text-xl mb-3 flex items-center gap-2">
                  <Heart size={20} fill="currentColor" opacity={0.3} />
                  {tabContent[activeTab as keyof typeof tabContent].title}
                </h4>
                <p className="text-md text-gray-700 leading-relaxed">
                  {tabContent[activeTab as keyof typeof tabContent].text}
                </p>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Catalog = () => {
  const [filter, setFilter] = useState('all');
  
  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(p => p.category === filter);

  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'makeup', name: 'Maquillaje' },
    { id: 'skincare', name: 'Skin Care' },
    { id: 'haircare', name: 'Cabello' },
    { id: 'esthetics', name: 'Estética' },
  ];

  return (
    <section id="catalogo" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">Catálogo NUA</h2>
          <p className="text-gray-500 max-w-xl mx-auto">Selección exclusiva de productos diseñados para tu bienestar.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button 
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${filter === cat.id ? 'bg-primary text-white shadow-lg' : 'bg-white text-gray-600 hover:bg-primary/10'}`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProducts.map((product) => (
            <motion.div 
              layout
              key={product.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all"
            >
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-md rounded-full text-secondary opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
                  <Heart size={20} />
                </button>
                {product.brand && (
                  <span className="absolute bottom-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    {product.brand}
                  </span>
                )}
              </div>
              <div className="p-6">
                <h3 className="font-display font-bold text-xl mb-1">{product.name}</h3>
                <p className="text-gray-400 text-sm mb-4 uppercase tracking-tighter">{product.category}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-black text-black">${product.price.toFixed(2)}</span>
                  <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-xl hover:bg-primary transition-colors text-sm font-bold">
                    Comprar <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Tips = () => (
  <section id="tips" className="section-padding bg-white">
    <div className="container mx-auto">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-4xl md:text-5xl font-black mb-4">Consejos & Tips</h2>
          <p className="text-gray-500">Aprende a cuidar de ti con nuestros expertos.</p>
        </div>
        <a href="#" className="hidden md:flex items-center gap-2 text-primary font-bold hover:underline">
          Ver todo el blog <ChevronRight size={18} />
        </a>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {tips.map((tip) => (
          <motion.div 
            whileHover={{ y: -10 }}
            key={tip.id} 
            className="flex flex-col group cursor-pointer"
          >
            <div className="aspect-[16/10] rounded-3xl overflow-hidden mb-6">
              <img 
                src={tip.image} 
                alt={tip.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="text-xs font-bold uppercase text-secondary tracking-widest mb-2 px-3 py-1 bg-secondary/10 w-fit rounded-lg">
              {tip.category}
            </span>
            <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-primary transition-colors">
              {tip.title}
            </h3>
            <p className="text-gray-600 mb-4 line-clamp-2">
              {tip.excerpt}
            </p>
            <span className="flex items-center gap-1 text-black font-bold text-sm">
              Leer más <ArrowRight size={14} />
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Connection = () => (
  <section className="py-24 bg-primary text-white overflow-hidden relative">
    <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
      <div className="grid grid-cols-2 gap-4 -rotate-12 translate-x-12 translate-y-12">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="w-40 h-40 rounded-3xl border-4 border-white" />
        ))}
      </div>
    </div>
    
    <div className="container mx-auto px-6 text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <span className="text-sm font-bold uppercase tracking-[0.3em] mb-8 block opacity-80 italic">Tu rutina es tu momento</span>
        <h2 className="text-5xl md:text-7xl font-display font-black leading-tight mb-12 text-white">
          "Amarte empieza por cuidarte"
        </h2>
        <p className="text-2xl font-display font-medium opacity-90 max-w-2xl mx-auto">
          Tu piel, tu historia. Conecta contigo misma a través de rituales que celebran quien eres.
        </p>
      </motion.div>
    </div>
  </section>
);

const Informate = () => {
  const [activeTab, setActiveTab] = useState('promos');

  return (
    <section id="informate" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 italic">Infórmate</h2>
          <p className="text-gray-500">Todo lo que necesitas saber sobre comprar en NUA.</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex bg-gray-100 p-2 rounded-2xl mb-12">
            <button 
              onClick={() => setActiveTab('promos')}
              className={`flex-1 py-4 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${activeTab === 'promos' ? 'bg-white shadow-sm text-primary' : 'text-gray-500 hover:text-black'}`}
            >
              <Sparkles size={16} /> Promo Especial
            </button>
            <button 
              onClick={() => setActiveTab('envios')}
              className={`flex-1 py-4 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${activeTab === 'envios' ? 'bg-white shadow-sm text-primary' : 'text-gray-500 hover:text-black'}`}
            >
              <Truck size={16} /> Envíos
            </button>
            <button 
              onClick={() => setActiveTab('politicas')}
              className={`flex-1 py-4 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${activeTab === 'politicas' ? 'bg-white shadow-sm text-primary' : 'text-gray-500 hover:text-black'}`}
            >
              <ShieldCheck size={16} /> Políticas
            </button>
          </div>

          <div className="min-h-[400px]">
            <AnimatePresence mode="wait">
              {activeTab === 'promos' && (
                <motion.div 
                  key="promos"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="nua-gradient p-12 rounded-[3rem] text-white overflow-hidden relative"
                >
                  <div className="absolute top-10 right-10 w-24 h-24 bg-white/20 rounded-full blur-2xl" />
                  <div className="relative z-10 text-center">
                    <span className="bg-white/30 backdrop-blur-md px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-8 inline-block">Una en un millón 💫</span>
                    <h3 className="text-4xl md:text-5xl font-black mb-6">Promoción Mensual</h3>
                    <p className="text-xl opacity-90 max-w-lg mx-auto mb-10 leading-relaxed">
                      "Aprovecha todos los 1eros de cada mes y recibe tu súper promo en marcas seleccionadas, porque NUA es una en un millón 💫"
                    </p>
                    <button className="bg-white text-primary px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform">
                      Descubre la promo de hoy
                    </button>
                  </div>
                </motion.div>
              )}

              {activeTab === 'envios' && (
                <motion.div 
                  key="envios"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="grid md:grid-cols-2 gap-8"
                >
                  <div className="bg-blue/5 p-8 rounded-3xl">
                    <Truck className="text-blue mb-4" size={32} />
                    <h3 className="text-2xl font-bold mb-4">Tiempos de Entrega</h3>
                    <p className="text-gray-600 mb-4">
                      Entregas locales (mismo día si compras antes de las 2pm) y nacionales de 2 a 5 días hábiles.
                    </p>
                    <ul className="text-sm text-gray-500 space-y-2">
                      <li>• Local: 24 horas</li>
                      <li>• Regional: 1-3 días</li>
                      <li>• Nacional: 2-5 días</li>
                    </ul>
                  </div>
                  <div className="bg-teal/5 p-8 rounded-3xl">
                    <Sparkles className="text-teal mb-4" size={32} />
                    <h3 className="text-2xl font-bold mb-4">Cobertura & Costos</h3>
                    <p className="text-gray-600 mb-4">
                      Llegamos a todo el país. Envíos gratis por compras superiores a $150.000.
                    </p>
                    <div className="flex gap-4">
                        <div className="flex-1 border border-teal/20 p-4 rounded-xl">
                            <span className="block text-xs font-bold text-teal uppercase">Fijo Local</span>
                            <span className="text-lg font-black">$8.000</span>
                        </div>
                        <div className="flex-1 border border-teal/20 p-4 rounded-xl">
                            <span className="block text-xs font-bold text-teal uppercase">Nacional</span>
                            <span className="text-lg font-black">$15.000</span>
                        </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'politicas' && (
                <motion.div 
                  key="politicas"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-4"
                >
                  {[
                    { title: 'Cambios y Devoluciones', content: 'Tienes 5 días hábiles para reportar cualquier inconveniente con tu producto. Debe estar sellado y en perfecto estado.' },
                    { title: 'Garantías', content: 'Nuestros productos cuentan con garantía de originalidad y calidad según el fabricante.' },
                    { title: 'Términos y Condiciones', content: 'Al comprar en NUA, aceptas nuestras políticas de tratamiento de datos y condiciones comerciales.' }
                  ].map((p, i) => (
                    <div key={i} className="border border-gray-100 rounded-2xl p-6 hover:bg-gray-50 transition-colors">
                      <h4 className="font-bold mb-2 flex items-center justify-between">
                        {p.title} <ChevronRight size={16} />
                      </h4>
                      <p className="text-gray-600 text-sm">{p.content}</p>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contacto" className="section-padding bg-gray-50">
    <div className="container mx-auto">
      <div className="bg-white rounded-[4rem] overflow-hidden shadow-xl grid md:grid-cols-2">
        <div className="p-12 md:p-20 flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Hablemos</h2>
          <p className="text-gray-500 mb-10">¿Tienes dudas o quieres asesoría personalizada? Estamos para ayudarte a encontrar lo mejor para ti.</p>
          
          <div className="space-y-6 mb-12">
             <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <MessageCircle size={24} />
                </div>
                <div>
                   <p className="text-xs font-bold text-gray-400 uppercase">WhatsApp</p>
                   <p className="text-lg font-bold">+57 320 000 0000</p>
                </div>
             </div>
             <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-purple/10 flex items-center justify-center text-purple group-hover:bg-purple group-hover:text-white transition-all">
                    <Instagram size={24} />
                </div>
                <div>
                   <p className="text-xs font-bold text-gray-400 uppercase">Instagram</p>
                   <p className="text-lg font-bold">@nua.beauty</p>
                </div>
             </div>
          </div>

          <a href="#" className="flex items-center justify-center gap-3 bg-teal text-white py-4 rounded-2xl font-display font-black text-xl hover:shadow-xl hover:scale-105 transition-all">
            Contactar por WhatsApp <ChevronRight size={20} />
          </a>
        </div>

        <div className="bg-gray-100 p-12 md:p-20 relative overflow-hidden">
           {/* Abstract Circles */}
           <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
           <div className="absolute bottom-0 left-0 w-60 h-60 bg-secondary/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

           <form className="relative z-10 space-y-6">
              <div className="space-y-2">
                 <label className="text-sm font-bold text-gray-600 block px-1">Nombre completo</label>
                 <input type="text" className="w-full bg-white px-6 py-4 rounded-2xl border-none focus:ring-2 focus:ring-primary/50 text-gray-800" placeholder="¿Cómo te llamas?" />
              </div>
              <div className="space-y-2">
                 <label className="text-sm font-bold text-gray-600 block px-1">Correo electrónico</label>
                 <input type="email" className="w-full bg-white px-6 py-4 rounded-2xl border-none focus:ring-2 focus:ring-primary/50 text-gray-800" placeholder="ejemplo@correo.com" />
              </div>
              <div className="space-y-2">
                 <label className="text-sm font-bold text-gray-600 block px-1">Tu mensaje</label>
                 <textarea rows={4} className="w-full bg-white px-6 py-4 rounded-2xl border-none focus:ring-2 focus:ring-primary/50 text-gray-800" placeholder="¿En qué podemos ayudarte?" />
              </div>
              <button type="submit" className="w-full bg-black text-white py-5 rounded-2xl font-black text-lg hover:bg-primary transition-colors">
                 Enviar mensaje
              </button>
           </form>
        </div>
      </div>
    </div>
  </section>
);

const CatalogPage = () => (
  <div className="pt-24 min-h-screen">
    <Catalog />
  </div>
);

const TipsPage = () => (
  <div className="pt-24 min-h-screen">
    <Tips />
  </div>
);

const InformatePage = () => (
  <div className="pt-24 min-h-screen">
    <Informate />
  </div>
);

const Footer = () => (
  <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-2">
          <Link to="/" className="inline-block mb-6 group">
            <img 
              src="/logo.png" 
              alt="Logo NUA" 
              className="h-24 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link>
          <p className="text-xl font-display italic text-gray-400 mb-8 max-w-sm">
            “Cuidarte es amarte”. Creamos experiencias de bienestar a través del cuidado personal.
          </p>
          <div className="flex gap-4">
             <a 
               href="https://www.instagram.com/" 
               target="_blank" 
               rel="noopener noreferrer"
               className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white hover:scale-110 transition-all duration-300"
               title="Instagram"
             >
               <Instagram size={22} />
             </a>
             <a 
               href="https://www.facebook.com/" 
               target="_blank" 
               rel="noopener noreferrer"
               className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white hover:scale-110 transition-all duration-300"
               title="Facebook"
             >
               <Facebook size={22} />
             </a>
             <a 
               href="https://www.tiktok.com/" 
               target="_blank" 
               rel="noopener noreferrer"
               className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white hover:scale-110 transition-all duration-300"
               title="TikTok"
             >
               <TiktokIcon size={22} />
             </a>
          </div>
        </div>
        
        <div>
          <h4 className="font-display font-black text-xl mb-6">Links rápidos</h4>
          <ul className="space-y-4 text-gray-500 font-medium">
            <li><Link to="/" className="hover:text-primary transition-colors">Inicio</Link></li>
            <li><a href="/#quienes-somos" className="hover:text-primary transition-colors">Quiénes somos</a></li>
            <li><Link to="/catalogo" className="hover:text-primary transition-colors">Catálogo</Link></li>
            <li><Link to="/tips" className="hover:text-primary transition-colors">Tips de belleza</Link></li>
            <li><Link to="/informate" className="hover:text-primary transition-colors">Infórmate</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-black text-xl mb-6">Contacto</h4>
          <ul className="space-y-4 text-gray-500 font-medium">
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-primary" />
              <span>+57 300 000 0000</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-primary" />
              <span>hola@nuabeauty.com</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1">
                <MapPin size={18} className="text-primary" />
              </div>
              <span className="text-sm italic">📍 Dirección: Calle de la Belleza #123, Barrio El Poblado, Medellín, Colombia</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-gray-100 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-gray-400 text-sm">© 2026 NUA Beauty. Todos los derechos reservados.</p>
        <div className="flex gap-8 text-xs font-bold text-gray-300 uppercase tracking-widest">
           <a href="#" className="hover:text-gray-500 transition-colors">Privacidad</a>
           <a href="#" className="hover:text-gray-500 transition-colors">Términos</a>
           <a href="#" className="hover:text-gray-500 transition-colors">Cookies</a>
        </div>
      </div>
    </div>
  </footer>
);

const Home = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return (
    <>
      <Hero />
      <About />
      <Connection />
      <Contact />
    </>
  );
};

// --- Main App ---

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalogo" element={<CatalogPage />} />
            <Route path="/tips" element={<TipsPage />} />
            <Route path="/informate" element={<InformatePage />} />
          </Routes>
        </main>
        <Footer />
        
        {/* Floating Actions */}
        <div className="fixed bottom-8 right-8 z-40 flex flex-col gap-4">
           <motion.a 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
           >
              <MessageCircle size={32} />
           </motion.a>
        </div>
      </div>
    </Router>
  );
}
