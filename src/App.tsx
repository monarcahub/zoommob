/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  Shield, 
  Zap, 
  TrendingDown, 
  Menu, 
  X, 
  Instagram, 
  MapPin, 
  Gift, 
  Apple, 
  Play, 
  Trophy, 
  Flag, 
  Sparkles, 
  Car, 
  Clock, 
  Check, 
  ArrowRight,
  FileText
} from "lucide-react";
import { useState } from "react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isRulesModalOpen, setIsRulesModalOpen] = useState(false);

  const features = [
    {
      icon: <Shield className="w-8 h-8 text-zoom-blue" />,
      title: "Segurança",
      description: "Monitoramento em tempo real e motoristas verificados para sua total tranquilidade.",
    },
    {
      icon: <TrendingDown className="w-8 h-8 text-zoom-blue" />,
      title: "Economia",
      description: "Preços justos e transparentes. Viaje mais gastando menos com nossas tarifas otimizadas.",
    },
    {
      icon: <Zap className="w-8 h-8 text-zoom-blue" />,
      title: "Rapidez",
      description: "Algoritmos inteligentes que conectam você ao motorista mais próximo em segundos.",
    },
  ];

  return (
    <div className="min-h-screen bg-zoom-purple selection:bg-zoom-blue selection:text-zoom-purple">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-zoom-purple/80 backdrop-blur-md border-b border-white/10">
        {/* Tarja de aviso "Seja Motorista Parceiro" */}
        <div className="bg-zoom-blue text-zoom-purple text-xs md:text-sm font-black py-2.5 px-6 text-center shadow-lg transition-all hover:bg-white">
          <a 
            href="https://wa.me/5555997238570" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-center gap-2 hover:underline tracking-wide uppercase"
          >
            <span>🚗 SEJA MOTORISTA PARCEIRO • Clique aqui e fale no WhatsApp!</span>
          </a>
        </div>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img 
              src="https://i.ibb.co/nqQhhrfb/zoommob-logo-site.png" 
              alt="ZoomMob Logo" 
              className="h-10 w-auto"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm font-medium hover:text-zoom-blue transition-colors">Vantagens</a>
            <a href="#cities" className="text-sm font-medium hover:text-zoom-blue transition-colors">Cidades</a>
            <a 
              href="https://play.google.com/store/apps/details?id=br.com.zoommob.passenger.drivermachine&hl=pt_BR"
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-zoom-blue text-white px-5 py-2 rounded-full font-bold text-xs hover:scale-105 transition-all flex items-center gap-1.5 shadow-[0_0_15px_rgba(30,169,246,0.3)] text-center"
            >
              <Play className="w-3 h-3 fill-white" /> Android
            </a>
            <a 
              href="https://apps.apple.com/br/app/zoommob/id6780639540"
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-zoom-purple px-5 py-2 rounded-full font-bold text-xs hover:scale-105 transition-all flex items-center gap-1.5 shadow-[0_0_15px_rgba(255,255,255,0.15)] text-center"
            >
              <Apple className="w-3.5 h-3.5 fill-current" /> iPhone
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-zoom-purple border-b border-white/10 px-6 py-8 flex flex-col gap-4"
          >
            <a href="#features" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Vantagens</a>
            <a href="#cities" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Cidades</a>
            <div className="flex flex-col gap-2 pt-2">
              <a 
                href="https://play.google.com/store/apps/details?id=br.com.zoommob.passenger.drivermachine&hl=pt_BR"
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-zoom-blue text-white px-6 py-3 rounded-full font-bold text-center flex items-center justify-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Play className="w-4 h-4 fill-white" /> Baixe para Android
              </a>
              <a 
                href="https://apps.apple.com/br/app/zoommob/id6780639540"
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-zoom-purple px-6 py-3 rounded-full font-bold text-center flex items-center justify-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Apple className="w-4 h-4 fill-current" /> Baixe para iPhone
              </a>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section - Campanha Reta Final Premiada */}
      <section className="relative pt-36 pb-16 md:pt-48 md:pb-28 overflow-hidden bg-zoom-gradient">
        {/* Subtle Racing Track, Speed Lines & Finish Line Motifs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Ambient Lighting & Glows */}
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-zoom-blue/15 rounded-full blur-[130px]" />
          <div className="absolute bottom-0 right-[-10%] w-[50%] h-[60%] bg-amber-400/10 rounded-full blur-[140px]" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-zoom-magenta/20 rounded-full blur-[120px]" />

          {/* Subtle Speed Lines (angled trails) */}
          <div className="absolute inset-0 opacity-[0.07] mix-blend-overlay">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="speed-stripes" width="120" height="120" patternTransform="rotate(25 0 0)" patternUnits="userSpaceOnUse">
                  <line x1="0" y1="20" x2="120" y2="20" stroke="white" strokeWidth="2" strokeDasharray="40 20 10 15" />
                  <line x1="0" y1="60" x2="120" y2="60" stroke="#FBBF24" strokeWidth="1.5" strokeDasharray="30 25 15 20" />
                  <line x1="0" y1="100" x2="120" y2="100" stroke="#1ea9f6" strokeWidth="2" strokeDasharray="50 15" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#speed-stripes)" />
            </svg>
          </div>

          {/* Subtle Checkered Finish Line Strip Accent at bottom border */}
          <div className="absolute bottom-0 left-0 right-0 h-3 opacity-15 overflow-hidden flex">
            <div 
              className="w-full h-full"
              style={{
                backgroundImage: `repeating-conic-gradient(#fff 0% 25%, #000 0% 50%)`,
                backgroundSize: '16px 16px'
              }}
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Coluna Esquerda: Conteúdo da Campanha & CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="lg:col-span-7 flex flex-col items-start"
            >
              {/* Brand message sub-tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/25 border border-white/10 text-white/80 text-xs font-medium backdrop-blur-md mb-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>ZoomMob é o aplicativo de mobilidade para o dia a dia</span>
              </div>

              {/* Badge: 🏁 RETA FINAL PREMIADA */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/20 via-pink-500/25 to-zoom-blue/20 border border-amber-400/50 text-amber-300 text-xs sm:text-sm font-black tracking-wider uppercase backdrop-blur-md shadow-[0_0_20px_rgba(251,191,36,0.25)] mb-5"
              >
                <span className="text-base">🏁</span>
                <span className="tracking-widest">RETA FINAL PREMIADA</span>
                <span className="text-[10px] bg-amber-400 text-zoom-purple font-black px-2 py-0.5 rounded-full ml-1 uppercase">
                  R$ 1.000 no Pix
                </span>
              </motion.div>

              {/* Headline Principal */}
              <h1 className="text-3xl sm:text-5xl lg:text-[3.4rem] font-black leading-[1.1] mb-5 tracking-tight text-white">
                Suas corridas podem valer{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-white drop-shadow-[0_2px_15px_rgba(251,191,36,0.4)]">
                  dinheiro
                </span>{" "}
                neste fim de ano.
              </h1>

              {/* Texto de Apoio */}
              <p className="text-base sm:text-lg md:text-xl text-white/90 mb-7 max-w-2xl leading-relaxed">
                Baixe o ZoomMob, faça suas corridas pelo app e participe da <span className="font-bold text-amber-300">Reta Final Premiada</span>. Quanto mais você roda, mais economia com cashback e mais perto fica do topo do ranking.
              </p>

              {/* Bloco de Premiação Destacada Visualmente (Podium Pix) */}
              <div className="w-full max-w-xl bg-black/35 border border-white/15 rounded-3xl p-4 sm:p-5 backdrop-blur-md mb-7 shadow-2xl relative overflow-hidden group">
                {/* Glow decorativo dourado */}
                <div className="absolute top-0 right-0 w-36 h-36 bg-amber-400/15 rounded-full blur-2xl pointer-events-none" />
                
                <div className="flex items-center justify-between gap-2 mb-3.5 pb-2.5 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-amber-400 shrink-0" />
                    <span className="text-xs sm:text-sm font-extrabold tracking-wide uppercase text-white">
                      Premiação no Ranking de Corridas
                    </span>
                  </div>
                  <span className="text-[11px] font-bold text-amber-300 bg-amber-400/15 border border-amber-400/30 px-2.5 py-0.5 rounded-full whitespace-nowrap">
                    Total R$ 1.000 no Pix
                  </span>
                </div>

                {/* Os 3 Prêmios */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-3.5">
                  {/* 1º Lugar */}
                  <div className="bg-gradient-to-b from-amber-500/25 to-amber-600/10 border-2 border-amber-400/60 rounded-2xl p-2.5 sm:p-3 text-center relative shadow-[0_0_15px_rgba(251,191,36,0.15)] flex flex-col justify-between">
                    <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-amber-400 text-zoom-purple text-[9px] font-black px-2 py-0.2 rounded-full uppercase">
                      Líder
                    </span>
                    <div className="text-base sm:text-xl mb-0.5">🥇</div>
                    <div className="text-[10px] sm:text-xs text-amber-200 font-bold uppercase tracking-wide">1º lugar</div>
                    <div className="text-sm sm:text-lg font-black text-amber-300">R$ 500</div>
                    <div className="text-[10px] text-white/70 font-semibold">no Pix</div>
                  </div>

                  {/* 2º Lugar */}
                  <div className="bg-gradient-to-b from-slate-300/15 to-white/5 border border-slate-300/40 rounded-2xl p-2.5 sm:p-3 text-center flex flex-col justify-between">
                    <div className="text-base sm:text-xl mb-0.5">🥈</div>
                    <div className="text-[10px] sm:text-xs text-slate-200 font-bold uppercase tracking-wide">2º lugar</div>
                    <div className="text-sm sm:text-lg font-black text-white">R$ 300</div>
                    <div className="text-[10px] text-white/70 font-semibold">no Pix</div>
                  </div>

                  {/* 3º Lugar */}
                  <div className="bg-gradient-to-b from-amber-700/20 to-white/5 border border-amber-600/40 rounded-2xl p-2.5 sm:p-3 text-center flex flex-col justify-between">
                    <div className="text-base sm:text-xl mb-0.5">🥉</div>
                    <div className="text-[10px] sm:text-xs text-amber-200/90 font-bold uppercase tracking-wide">3º lugar</div>
                    <div className="text-sm sm:text-lg font-black text-amber-100">R$ 200</div>
                    <div className="text-[10px] text-white/70 font-semibold">no Pix</div>
                  </div>
                </div>

                {/* Período da Campanha & Link Regulamento */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-2 border-t border-white/10 text-xs">
                  <div className="flex items-center gap-1.5 text-white/80 font-medium">
                    <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Participe até 20/12 • Resultado até 23/12</span>
                  </div>
                  <button
                    onClick={() => setIsRulesModalOpen(true)}
                    className="text-amber-300 hover:text-white underline underline-offset-4 decoration-amber-400/60 font-semibold flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Regulamento completo</span>
                  </button>
                </div>
              </div>

              {/* Botões de Ação (CTAs Principais e Secundários) */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-4">
                {/* Botão Principal: Baixar o ZoomMob */}
                <a 
                  href="#download-options"
                  onClick={(e) => {
                    // Smooth scroll to store buttons or download container
                    const target = document.getElementById('store-badges-hero');
                    if (target) {
                      e.preventDefault();
                      target.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 text-zoom-purple hover:to-white px-7 py-3.5 rounded-2xl font-black text-base transition-all transform hover:scale-[1.02] active:scale-95 shadow-[0_0_30px_rgba(251,191,36,0.35)] flex items-center justify-center gap-2.5 text-center cursor-pointer"
                >
                  <Flag className="w-5 h-5 fill-current" />
                  <span>Baixar o ZoomMob</span>
                </a>

                {/* Botão Secundário: Saiba mais sobre a campanha */}
                <button
                  onClick={() => setIsRulesModalOpen(true)}
                  className="border-2 border-white/30 hover:border-white hover:bg-white/10 text-white px-6 py-3.5 rounded-2xl font-bold text-sm transition-all flex items-center justify-center gap-2 text-center backdrop-blur-sm cursor-pointer"
                >
                  <span>Saiba mais sobre a campanha</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Badges Oficiais Google Play e App Store (Preservados com links) */}
              <div id="store-badges-hero" className="flex flex-wrap items-center gap-3 mb-6 w-full">
                <a 
                  href="https://play.google.com/store/apps/details?id=br.com.zoommob.passenger.drivermachine&hl=pt_BR"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-zoom-blue/90 hover:bg-zoom-blue text-white px-5 py-2.5 rounded-xl font-bold text-xs hover:scale-105 transition-all shadow-md flex items-center gap-2.5 border border-white/10"
                >
                  <Play className="w-4 h-4 fill-white" />
                  <div className="text-left leading-tight">
                    <span className="text-[9px] opacity-80 block font-normal uppercase tracking-wider">Baixar para</span>
                    <span className="text-xs font-black">Google Play</span>
                  </div>
                </a>

                <a 
                  href="https://apps.apple.com/br/app/zoommob/id6780639540"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-white/95 text-zoom-purple px-5 py-2.5 rounded-xl font-bold text-xs hover:scale-105 transition-all shadow-md flex items-center gap-2.5"
                >
                  <Apple className="w-4 h-4 fill-current" />
                  <div className="text-left leading-tight">
                    <span className="text-[9px] opacity-70 block font-normal uppercase tracking-wider">Baixar na</span>
                    <span className="text-xs font-black">App Store</span>
                  </div>
                </a>

                <a 
                  href="https://instagram.com/zoommobilidade" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-black/20 hover:bg-black/30 border border-white/15 px-4 py-2.5 rounded-xl font-medium text-xs text-white/90 hover:text-white transition-all flex items-center gap-2"
                >
                  <Instagram className="w-4 h-4" />
                  <span>@zoommobilidade</span>
                </a>
              </div>

              {/* Linha de Benefícios */}
              <div className="pt-2 border-t border-white/10 w-full">
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm font-semibold text-white/90">
                  <span className="inline-flex items-center gap-1.5 text-emerald-300">
                    <Check className="w-4 h-4 text-emerald-400 stroke-[3]" /> Preço justo
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-amber-300">
                    <Check className="w-4 h-4 text-amber-400 stroke-[3]" /> Cashback
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-yellow-300">
                    <Check className="w-4 h-4 text-yellow-400 stroke-[3]" /> Premiações
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-zoom-blue">
                    <Check className="w-4 h-4 text-zoom-blue stroke-[3]" /> Mobilidade todos os dias
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Coluna Direita: Smartphone com App ZoomMob + Veículo + Elementos da Reta Final */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
              className="lg:col-span-5 relative flex justify-center items-center mt-6 lg:mt-0"
            >
              {/* Glow circular de fundo */}
              <div className="absolute w-[340px] md:w-[420px] aspect-square bg-gradient-to-tr from-amber-400/20 via-zoom-magenta/25 to-zoom-blue/20 rounded-full blur-[90px] -z-10" />

              {/* Linha decorativa de pista / bandeira quadriculada de corrida */}
              <div className="absolute -top-6 -right-4 w-40 h-2 bg-gradient-to-r from-amber-400 via-white to-transparent rounded-full opacity-60 hidden sm:block" />
              <div className="absolute top-20 -left-6 w-24 h-1.5 bg-gradient-to-r from-zoom-blue to-transparent rounded-full opacity-50 hidden sm:block" />

              {/* Container Principal do Smartphone e Overlays */}
              <div className="relative w-full max-w-[340px] sm:max-w-[370px]">
                
                {/* O Smartphone ZoomMob */}
                <div className="relative mx-auto w-[280px] sm:w-[310px] aspect-[9/18.8] bg-slate-950 rounded-[2.8rem] border-[7px] border-slate-800/90 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8),0_0_30px_rgba(251,191,36,0.15)] overflow-hidden z-20">
                  
                  {/* Dynamic Island / Notch do Smartphone */}
                  <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-full z-30 flex items-center justify-end pr-2">
                    <div className="w-2 h-2 rounded-full bg-slate-900 border border-slate-800" />
                  </div>

                  {/* Tela do Aplicativo ZoomMob */}
                  <div className="relative w-full h-full bg-slate-900 flex flex-col justify-between overflow-hidden select-none">
                    
                    {/* Topo do App (Header) */}
                    <div className="pt-8 px-4 pb-3 bg-gradient-to-b from-zoom-purple/90 to-zoom-purple/40 backdrop-blur-md z-20 flex items-center justify-between border-b border-white/10">
                      <div className="flex items-center gap-1.5">
                        <img 
                          src="https://i.ibb.co/nqQhhrfb/zoommob-logo-site.png" 
                          alt="ZoomMob" 
                          className="h-5 w-auto" 
                        />
                      </div>
                      <div className="flex items-center gap-1 text-[10px] bg-black/40 px-2 py-0.5 rounded-full text-white/90 border border-white/10">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                        <span>Online</span>
                      </div>
                    </div>

                    {/* Mapa Simulado com rota, veículo ZoomMob em movimento e chegada */}
                    <div className="absolute inset-0 z-0 bg-[#1a1429]">
                      {/* Grid de ruas estilo mapa noturno moderno */}
                      <svg className="w-full h-full opacity-35" xmlns="http://www.w3.org/2000/svg">
                        <pattern id="street-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                          <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#6b21a8" strokeWidth="1.2" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#street-grid)" />
                        
                        {/* Linha da rota da corrida em andamento */}
                        <path 
                          d="M 60 380 Q 140 330 155 240 T 220 130" 
                          fill="none" 
                          stroke="#1ea9f6" 
                          strokeWidth="5" 
                          strokeLinecap="round" 
                          strokeDasharray="6 4"
                        />
                        <path 
                          d="M 60 380 Q 140 330 155 240 T 220 130" 
                          fill="none" 
                          stroke="#00e5ff" 
                          strokeWidth="2" 
                          strokeLinecap="round"
                        />
                        {/* Ponto de destino com bandeira quadriculada */}
                        <circle cx="220" cy="130" r="10" fill="#FBBF24" opacity="0.3" />
                        <circle cx="220" cy="130" r="5" fill="#FBBF24" />
                      </svg>

                      {/* Veículo ZoomMob posicionado na rota */}
                      <div className="absolute top-[230px] left-[135px] -translate-x-1/2 -translate-y-1/2 z-10">
                        <div className="relative">
                          {/* Pulso de velocidade */}
                          <div className="absolute -inset-2 bg-zoom-blue/40 rounded-full blur-sm animate-pulse" />
                          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-zoom-purple to-zoom-magenta border-2 border-white flex items-center justify-center shadow-lg">
                            <Car className="w-4 h-4 text-white" />
                          </div>
                          {/* Tooltip do veículo */}
                          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/80 text-[8px] font-bold text-white px-1.5 py-0.2 rounded border border-white/20">
                            ZoomMob
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Card de Campanha RETA FINAL PREMIADA fixo dentro da tela do app */}
                    <div className="relative z-20 px-3.5 pt-2">
                      <div className="bg-gradient-to-r from-black/80 via-zoom-purple/90 to-black/80 border border-amber-400/50 rounded-2xl p-2.5 backdrop-blur-md shadow-xl text-left">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-[9px] font-black tracking-wider text-amber-300 uppercase flex items-center gap-1">
                            <span>🏁</span> Reta Final Premiada
                          </span>
                          <span className="text-[8px] bg-amber-400 text-zoom-purple font-black px-1.5 py-0.5 rounded-full">
                            TOP 3 PIX
                          </span>
                        </div>
                        <div className="text-[10px] text-white/90 font-medium leading-tight mb-1">
                          Cada corrida realizada soma pontos no seu ranking!
                        </div>
                        {/* Barra de progresso de corridas */}
                        <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden mt-1 mb-1">
                          <div className="bg-gradient-to-r from-amber-400 to-zoom-blue h-full w-[72%]" />
                        </div>
                        <div className="flex justify-between text-[8px] text-white/60 font-semibold">
                          <span>Suas corridas: 18</span>
                          <span className="text-amber-300 font-bold">Rumo ao pódio 🚀</span>
                        </div>
                      </div>
                    </div>

                    {/* Rodapé da tela do app: Status da Viagem & Cashback */}
                    <div className="relative z-20 p-3 bg-gradient-to-t from-black via-black/95 to-transparent pt-6">
                      <div className="bg-white/10 border border-white/15 rounded-xl p-2.5 backdrop-blur-md mb-2 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-lg bg-zoom-blue/20 flex items-center justify-center">
                            <Car className="w-4 h-4 text-zoom-blue" />
                          </div>
                          <div>
                            <div className="text-[10px] font-bold text-white">Corrida em andamento</div>
                            <div className="text-[8px] text-white/60">Motorista a 2 min</div>
                          </div>
                        </div>
                        <span className="text-[9px] font-black text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                          +Cashback
                        </span>
                      </div>

                      <div className="w-full bg-zoom-blue py-2 rounded-xl text-center text-white text-[11px] font-black shadow-lg">
                        Solicitar ZoomMob
                      </div>
                    </div>

                  </div>
                </div>

                {/* Card Flutuante 1: 🥇 R$ 500 no Pix (1º Lugar) */}
                <motion.div 
                  initial={{ opacity: 0, y: -20, x: 20 }}
                  animate={{ opacity: 1, y: 0, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="absolute -top-3 -right-2 sm:-right-6 bg-gradient-to-br from-amber-400/95 to-yellow-500 text-zoom-purple p-2.5 sm:p-3 rounded-2xl shadow-[0_10px_25px_rgba(251,191,36,0.4)] border border-white/40 z-30 flex items-center gap-2.5"
                >
                  <div className="w-9 h-9 rounded-xl bg-zoom-purple text-amber-300 flex items-center justify-center font-black text-base shadow-inner">
                    🥇
                  </div>
                  <div className="text-left leading-tight pr-1">
                    <span className="text-[9px] font-black uppercase tracking-wider block text-zoom-purple/80">1º Lugar</span>
                    <span className="text-sm sm:text-base font-black block text-zoom-purple">R$ 500</span>
                    <span className="text-[8px] font-extrabold uppercase text-zoom-purple/70">Via Pix</span>
                  </div>
                </motion.div>

                {/* Card Flutuante 2: 🥈 R$ 300 e 🥉 R$ 200 no Pix */}
                <motion.div 
                  initial={{ opacity: 0, y: 20, x: -20 }}
                  animate={{ opacity: 1, y: 0, x: 0 }}
                  transition={{ delay: 0.55, duration: 0.6 }}
                  className="absolute -bottom-4 -left-2 sm:-left-8 bg-black/85 text-white p-2.5 sm:p-3 rounded-2xl shadow-[0_15px_30px_rgba(0,0,0,0.5)] border border-white/20 backdrop-blur-md z-30 flex items-center gap-3"
                >
                  <div className="flex -space-x-1 text-sm sm:text-base">
                    <span>🥈</span>
                    <span>🥉</span>
                  </div>
                  <div className="text-left leading-tight">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold text-slate-300">2º R$ 300</span>
                      <span className="text-[10px] text-white/30">•</span>
                      <span className="text-[10px] font-bold text-amber-300">3º R$ 200</span>
                    </div>
                    <span className="text-[8px] font-semibold text-white/60 uppercase tracking-wider block mt-0.5">
                      Premiação direto no Pix
                    </span>
                  </div>
                </motion.div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 md:py-32 bg-zoom-purple">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Por que escolher o ZoomMob?</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Desenvolvemos uma plataforma focada no que realmente importa para quem se desloca todos os dias.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
              >
                <div className="w-16 h-16 rounded-2xl bg-zoom-blue/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-white/60 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cities Block */}
      <section id="cities" className="py-24 bg-zoom-purple/50 border-t border-b border-white/5 relative overflow-hidden">
        {/* Decorative visual elements */}
        <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-zoom-blue/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="bg-zoom-blue/10 text-zoom-blue text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full inline-block mb-4">Expansão</span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Onde o ZoomMob está ativo?</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Já estamos conectando pessoas e transformando o transporte local em importantes cidades. Confira onde você já pode pedir seu ZoomMob!
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            {[
              { city: "São Borja", state: "RS", description: "Sua melhor opção de transporte na Fronteira Oeste." },
              { city: "Bento Gonçalves", state: "RS", description: "Mobilidade ágil e de qualidade na Serra Gaúcha." },
              { city: "Quaraí", state: "RS", description: "Conforto e segurança para todas as suas viagens diárias." }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center relative group overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-zoom-blue opacity-50" />
                <div className="w-12 h-12 bg-zoom-blue/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <MapPin className="text-zoom-blue w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-1">{item.city}</h3>
                <span className="text-xs bg-white/10 text-white/80 px-2 py-0.5 rounded font-semibold uppercase">{item.state}</span>
                <p className="text-white/60 text-sm mt-3 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Invest in city CTA card */}
          <div className="bg-gradient-to-r from-zoom-purple to-zoom-magenta border border-white/10 rounded-3xl p-8 md:p-12 max-w-3xl mx-auto text-center shadow-2xl relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-zoom-blue/10 rounded-full blur-3xl pointer-events-none" />
            <h3 className="text-2xl md:text-3xl font-black mb-4">Quer investir no app em sua cidade?</h3>
            <p className="text-white/80 text-base mb-8 max-w-lg mx-auto">
              Leve o ZoomMob para a sua região e faça parte de uma das franquias de mobilidade urbana que mais crescem no estado.
            </p>
            <a 
              href="https://wa.me/5555997238570" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-zoom-blue text-white hover:bg-white hover:text-zoom-purple px-8 py-3.5 rounded-full font-extrabold tracking-wide text-base transition-all inline-flex items-center gap-2 shadow-[0_0_30px_rgba(30,169,246,0.3)] active:scale-95"
            >
              <span>Fale Conosco</span>
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.623-1.023-5.086-2.885-6.948C16.59 2.016 14.133 1 11.516 1 6.082 1 1.657 5.37 1.653 10.803c-.001 1.762.474 3.487 1.378 5.027l-1.012 3.693 3.792-.988c1.51.879 3.15 1.341 4.836 1.343zM18.254 15c-.328-.164-1.94-.956-2.24-1.066-.298-.11-.516-.164-.73.164-.216.328-.834 1.066-1.022 1.284-.188.218-.376.246-.704.082-.328-.164-1.383-.51-2.634-1.627-.973-.867-1.629-1.939-1.82-2.266-.19-.328-.02-.505.143-.668.148-.147.328-.383.492-.574.164-.19.219-.328.328-.546.11-.218.055-.41-.027-.574-.082-.164-.73-1.76-.998-2.414-.26-.628-.526-.54-.73-.54-.188-.008-.404-.01-.622-.01-.218 0-.574.082-.874.41-.3.328-1.148 1.12-1.148 2.73s1.172 3.168 1.334 3.386c.164.218 2.304 3.518 5.582 4.934.78.336 1.39.537 1.86.686.784.248 1.498.214 2.062.129.628-.094 1.94-.793 2.213-1.529.274-.738.274-1.366.19-1.5-.083-.133-.31-.214-.638-.377z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-zoom-gradient relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-8">Campanhas, Prêmios & Sorteios Exclusivos! 🎁</h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Cadastre seu WhatsApp e garanta cupons de desconto, corridas grátis e participação em nossas campanhas promocionais e sorteios semanais!
          </p>
          
          {isSubmitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white/10 border border-zoom-blue/50 p-8 rounded-3xl max-w-md mx-auto backdrop-blur-md"
            >
              <div className="w-16 h-16 bg-zoom-blue rounded-full flex items-center justify-center mx-auto mb-4 shadow-[0_0_20px_rgba(30,169,246,0.5)]">
                <Gift className="text-white fill-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Inscrição Confirmada! 🎉</h3>
              <p className="text-white/70">
                Seu número foi registrado. Agora você já está participando de todas as nossas ofertas, sorteios e campanhas de prêmios. Fique de olho no seu WhatsApp!
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="mt-6 text-zoom-blue font-bold hover:underline"
              >
                Cadastrar outro contato
              </button>
            </motion.div>
          ) : (
            <form 
              onSubmit={async (e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const whatsapp = formData.get('whatsapp');
                
                try {
                  const response = await fetch('https://webhook.monarcahub.com/webhook/cadastro-site', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ 
                      whatsapp,
                      source: 'promo-sorteios-campanhas',
                      timestamp: new Date().toISOString()
                    }),
                  });
                  
                  if (response.ok) {
                    setIsSubmitted(true);
                    (e.target as HTMLFormElement).reset();
                  } else {
                    alert('Ocorreu um erro ao realizar o cadastro. Tente novamente mais tarde.');
                  }
                } catch (error) {
                  console.error('Webhook error:', error);
                  alert('Erro de conexão. Verifique sua internet e tente novamente.');
                }
              }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <input 
                name="whatsapp"
                type="tel" 
                required
                placeholder="Seu WhatsApp (com DDD)" 
                className="w-full sm:w-80 px-6 py-4 rounded-full bg-white/10 border border-white/20 focus:outline-none focus:border-zoom-blue transition-colors text-white placeholder:text-white/40"
              />
              <button type="submit" className="w-full sm:w-auto bg-zoom-blue text-white px-10 py-4 rounded-full font-black text-lg hover:scale-105 transition-transform active:scale-95 shadow-xl">
                QUERO PARTICIPAR
              </button>
            </form>
          )}
        </div>
        
        {/* Decorative Circles */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-zoom-blue/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 bg-zoom-purple">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-8 text-center">
          <div className="flex items-center gap-2">
            <img 
              src="https://i.ibb.co/nqQhhrfb/zoommob-logo-site.png" 
              alt="ZoomMob Logo" 
              className="h-8 w-auto"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="text-white/40 text-sm max-w-2xl">
            © 2026 ZoomMob Mobilidade Urbana. Todos os direitos reservados - Desenvolvido por MonarcaHub.
          </div>

          <div className="flex gap-6 text-white/60 text-sm">
            <a href="#" className="hover:text-zoom-blue transition-colors">Privacidade</a>
            <a href="#" className="hover:text-zoom-blue transition-colors">Termos</a>
            <a href="#" className="hover:text-zoom-blue transition-colors">Contato</a>
          </div>
        </div>
      </footer>

      {/* Modal do Regulamento Completo da Reta Final Premiada */}
      <AnimatePresence>
        {isRulesModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsRulesModalOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-[#200938] border border-amber-400/30 rounded-3xl p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.8)] z-10 max-h-[90vh] overflow-y-auto text-left"
            >
              {/* Header do Modal */}
              <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-5 mb-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/40 text-[11px] font-black uppercase tracking-wider mb-2">
                    <span>🏁</span> Regulamento Oficial
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white">
                    Campanha Reta Final Premiada
                  </h3>
                  <p className="text-white/60 text-sm mt-1">
                    Suas corridas do dia a dia valendo dinheiro via Pix neste fim de ano.
                  </p>
                </div>
                <button 
                  onClick={() => setIsRulesModalOpen(false)}
                  className="p-2 text-white/60 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors cursor-pointer"
                  aria-label="Fechar"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Informação Fundamental sobre a Mecânica */}
              <div className="bg-amber-400/10 border border-amber-400/30 rounded-2xl p-4 mb-6">
                <div className="flex items-start gap-3">
                  <Trophy className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-amber-200 leading-relaxed">
                    <strong className="text-white">Mecânica por Mérito de Uso:</strong> Esta campanha não é um sorteio. Os vencedores serão os passageiros que acumularem o maior número de corridas finalizadas pelo app ZoomMob durante o período oficial.
                  </p>
                </div>
              </div>

              {/* Seções das Regras */}
              <div className="space-y-5 text-sm text-white/80">
                <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                  <h4 className="font-black text-white text-base mb-1.5 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-amber-400" />
                    1. Período da Campanha
                  </h4>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                    A contagem de corridas é válida até o dia <strong>20 de dezembro de 2026</strong> às 23h59. A verificação final e divulgação do ranking oficial acontecerão até o dia <strong>23 de dezembro de 2026</strong>.
                  </p>
                </div>

                <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                  <h4 className="font-black text-white text-base mb-2 flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-amber-400" />
                    2. Premiação via Pix (R$ 1.000 no total)
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm">
                    <li className="flex items-center justify-between p-2 rounded-xl bg-amber-500/15 border border-amber-400/30">
                      <span className="font-bold text-amber-200">🥇 1º Lugar (Maior número de corridas):</span>
                      <strong className="text-amber-300 font-black text-base">R$ 500 no Pix</strong>
                    </li>
                    <li className="flex items-center justify-between p-2 rounded-xl bg-slate-300/10 border border-slate-300/20">
                      <span className="font-bold text-slate-200">🥈 2º Lugar (Segundo maior número):</span>
                      <strong className="text-white font-black text-base">R$ 300 no Pix</strong>
                    </li>
                    <li className="flex items-center justify-between p-2 rounded-xl bg-amber-700/15 border border-amber-600/30">
                      <span className="font-bold text-amber-200/90">🥉 3º Lugar (Terceiro maior número):</span>
                      <strong className="text-amber-100 font-black text-base">R$ 200 no Pix</strong>
                    </li>
                  </ul>
                </div>

                <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                  <h4 className="font-black text-white text-base mb-1.5">3. Como Funciona a Pontuação</h4>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                    Cada viagem solicitada e completada com sucesso no aplicativo ZoomMob adiciona 1 corrida ao seu histórico na campanha. Todas as corridas continuam valendo os preços justos e o cashback regular do aplicativo.
                  </p>
                </div>

                <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                  <h4 className="font-black text-white text-base mb-1.5">4. Critério de Desempate</h4>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                    Caso dois ou mais participantes empatem na quantidade exata de corridas concluídas, o critério de desempate considerará o participante que atingiu a marca primeiro no sistema.
                  </p>
                </div>

                <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                  <h4 className="font-black text-white text-base mb-1.5">5. Pagamento e Contato</h4>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                    Os 3 ganhadores serão comunicados pelo número de WhatsApp e telefone registrado na conta ZoomMob. A premiação será transferida em até 48 horas úteis após a confirmação dos dados da chave Pix.
                  </p>
                </div>
              </div>

              {/* Botões do Rodapé do Modal */}
              <div className="mt-8 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-white/50">
                  ZoomMob • Conectando você ao que importa
                </span>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a 
                    href="https://play.google.com/store/apps/details?id=br.com.zoommob.passenger.drivermachine&hl=pt_BR"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial bg-zoom-blue text-white px-4 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 hover:scale-105 transition-transform"
                  >
                    <Play className="w-3.5 h-3.5 fill-white" /> Google Play
                  </a>
                  <a 
                    href="https://apps.apple.com/br/app/zoommob/id6780639540"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial bg-white text-zoom-purple px-4 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 hover:scale-105 transition-transform"
                  >
                    <Apple className="w-3.5 h-3.5 fill-current" /> App Store
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
