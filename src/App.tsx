/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Shield, Zap, TrendingDown, Smartphone, Menu, X, Instagram, MapPin, Gift, Apple, Play } from "lucide-react";
import { useState } from "react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

      {/* Hero Section */}
      <section className="relative pt-44 pb-20 md:pt-56 md:pb-32 overflow-hidden bg-zoom-gradient">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-zoom-blue/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-white/5 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-5xl md:text-7xl font-black leading-[1.1] mb-8 tracking-tight">
                ZoomMob: <br />
                <span className="text-white/90">Conectando você ao que importa!</span>
              </h1>
              <p className="text-xl text-white/70 mb-10 max-w-lg leading-relaxed">
                A nova era da mobilidade urbana chegou. Mais segurança, mais economia e a rapidez que o seu dia a dia exige.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full">
                <a 
                  href="https://play.google.com/store/apps/details?id=br.com.zoommob.passenger.drivermachine&hl=pt_BR"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-zoom-blue text-white px-6 py-3 rounded-2xl font-bold text-base hover:scale-105 transition-transform active:scale-95 shadow-[0_0_30px_rgba(30,169,246,0.3)] flex items-center justify-center gap-3 border border-white/5"
                >
                  <Play className="w-6 h-6 fill-white" />
                  <div className="text-left leading-none">
                    <span className="text-[9px] opacity-75 block font-normal uppercase tracking-wider">Disponível no</span>
                    <span className="text-sm font-black">Google Play</span>
                  </div>
                </a>
                <a 
                  href="https://apps.apple.com/br/app/zoommob/id6780639540"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-zoom-purple px-6 py-3 rounded-2xl font-bold text-base hover:scale-105 transition-transform active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.15)] flex items-center justify-center gap-3"
                >
                  <Apple className="w-6 h-6 fill-current" />
                  <div className="text-left leading-none">
                    <span className="text-[9px] opacity-75 block font-normal uppercase tracking-wider">Disponível na</span>
                    <span className="text-sm font-black">App Store</span>
                  </div>
                </a>
                <a 
                  href="https://instagram.com/zoommobilidade" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="border-2 border-white/20 hover:border-white/40 hover:bg-white/5 px-6 py-3.5 rounded-2xl font-bold text-sm transition-all flex items-center justify-center gap-2"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Instagram</span>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="relative hidden lg:block"
            >
              {/* Smartphone Mockups */}
              <div className="relative z-10 flex justify-center lg:justify-end">
                <div className="relative w-[280px] md:w-[320px] aspect-[9/19] bg-black rounded-[3rem] border-8 border-white/10 shadow-2xl overflow-hidden transform -rotate-6 translate-x-12 translate-y-8">
                  <img 
                    src="https://picsum.photos/seed/zoommob1/600/1200" 
                    alt="App Screenshot 1" 
                    className="w-full h-full object-cover opacity-80"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="relative w-[280px] md:w-[320px] aspect-[9/19] bg-black rounded-[3rem] border-8 border-white/10 shadow-2xl overflow-hidden z-20">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 pointer-events-none" />
                  <img 
                    src="https://picsum.photos/seed/zoommob2/600/1200" 
                    alt="App Screenshot 2" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  {/* Mock UI Overlay */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-between">
                    <div className="flex justify-between items-center">
                      <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm" />
                      <div className="w-20 h-4 rounded-full bg-white/20 backdrop-blur-sm" />
                    </div>
                    <div className="space-y-4">
                      <div className="h-12 w-full bg-zoom-blue/90 rounded-xl" />
                      <div className="h-12 w-full bg-white/10 backdrop-blur-md rounded-xl" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-zoom-blue/20 rounded-full blur-[100px] -z-10" />
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
    </div>
  );
}
