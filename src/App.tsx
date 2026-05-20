/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Shield, Zap, TrendingDown, Smartphone, Menu, X, Instagram } from "lucide-react";
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
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium hover:text-zoom-blue transition-colors">Vantagens</a>
            <a href="#about" className="text-sm font-medium hover:text-zoom-blue transition-colors">Sobre</a>
            <a 
              href="https://play.google.com/store/apps/details?id=br.com.zoommob.passenger.drivermachine&hl=pt_BR"
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-zoom-blue text-white px-6 py-2.5 rounded-full font-bold text-sm hover:scale-105 transition-transform active:scale-95 shadow-[0_0_20px_rgba(30,169,246,0.3)] text-center"
            >
              Baixe para Android
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
            className="md:hidden bg-zoom-purple border-b border-white/10 px-6 py-8 flex flex-col gap-6"
          >
            <a href="#features" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Vantagens</a>
            <a href="#about" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Sobre</a>
            <a 
              href="https://play.google.com/store/apps/details?id=br.com.zoommob.passenger.drivermachine&hl=pt_BR"
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-zoom-blue text-white px-6 py-4 rounded-full font-bold text-center block"
              onClick={() => setIsMenuOpen(false)}
            >
              Baixe para Android
            </a>
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
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className="flex flex-col gap-2 w-full sm:w-auto">
                  <a 
                    href="https://play.google.com/store/apps/details?id=br.com.zoommob.passenger.drivermachine&hl=pt_BR"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-zoom-blue text-white px-10 py-4 rounded-full font-black text-lg hover:scale-105 transition-transform active:scale-95 shadow-[0_0_30px_rgba(30,169,246,0.4)] text-center block"
                  >
                    Baixe para Android
                  </a>
                  <span className="text-xs text-white/50 text-center sm:text-left sm:pl-4 block">em breve para iPhone</span>
                </div>
                <a 
                  href="https://instagram.com/zoommobilidade" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="border-2 border-white/20 hover:border-white/40 px-10 py-4 rounded-full font-bold text-lg transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  <Instagram className="w-5 h-5" />
                  seguir instagram
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

      {/* CTA Section */}
      <section className="py-24 bg-zoom-gradient relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-8">Pronto para dar um Zoom na sua rotina?</h2>
          <p className="text-xl text-white/80 mb-12">
            Seja um dos primeiros a experimentar a revolução da mobilidade urbana. Inscreva-se para receber o convite de lançamento.
          </p>
          
          {isSubmitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white/10 border border-zoom-blue/50 p-8 rounded-3xl max-w-md mx-auto backdrop-blur-md"
            >
              <div className="w-16 h-16 bg-zoom-blue rounded-full flex items-center justify-center mx-auto mb-4 shadow-[0_0_20px_rgba(30,169,246,0.5)]">
                <Zap className="text-white fill-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Tudo pronto!</h3>
              <p className="text-white/70">
                Seu cadastro foi realizado com sucesso. Em breve você receberá novidades do ZoomMob no seu WhatsApp.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="mt-6 text-zoom-blue font-bold hover:underline"
              >
                Cadastrar outro número
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
                      source: 'landing-page',
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
                AVISE-ME
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
