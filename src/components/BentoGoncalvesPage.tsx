import { motion } from "motion/react";
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
  Car,
  Check,
  ArrowLeft,
  Navigation,
} from "lucide-react";
import { useState, type FormEvent } from "react";

interface BentoGoncalvesPageProps {
  onBackHome: () => void;
}

export function BentoGoncalvesPage({ onBackHome }: BentoGoncalvesPageProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const features = [
    {
      icon: <Shield className="w-8 h-8 text-zoom-blue" />,
      title: "Segurança",
      description:
        "Monitoramento em tempo real e motoristas verificados da Serra Gaúcha para sua total tranquilidade.",
    },
    {
      icon: <TrendingDown className="w-8 h-8 text-zoom-blue" />,
      title: "Economia",
      description:
        "Preços justos e transparentes para você se deslocar por Bento Gonçalves gastando menos.",
    },
    {
      icon: <Zap className="w-8 h-8 text-zoom-blue" />,
      title: "Rapidez",
      description:
        "Algoritmos inteligentes que conectam você ao motorista parceiro mais próximo em segundos.",
    },
  ];

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError(null);
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const whatsapp = formData.get("whatsapp");

    try {
      const response = await fetch(
        "https://webhook.monarcahub.com/webhook/cadastro-site",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            whatsapp,
            city: "Bento Gonçalves - RS",
            source: "bento-goncalves-novidades",
            timestamp: new Date().toISOString(),
          }),
        }
      );

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      } else {
        setSubmitError(
          "Ocorreu um erro ao realizar o cadastro. Tente novamente mais tarde."
        );
      }
    } catch (error) {
      console.error("Webhook error:", error);
      setSubmitError(
        "Erro de conexão. Verifique sua internet e tente novamente."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-zoom-purple selection:bg-zoom-blue selection:text-zoom-purple">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-zoom-purple/80 backdrop-blur-md border-b border-white/10">
        {/* Tarja de aviso "Seja Motorista Parceiro" */}
        <div className="bg-zoom-blue text-zoom-purple text-xs md:text-sm font-black py-2.5 px-6 text-center shadow-lg transition-all hover:bg-white">
          <a
            href="https://wa.me/5554999995454"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 hover:underline tracking-wide uppercase"
          >
            <span>
              🚗 SEJA MOTORISTA PARCEIRO EM BENTO GONÇALVES • WhatsApp da central: (54) 99999-5454
            </span>
          </a>
        </div>

        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onBackHome();
              }}
              className="flex items-center gap-2 focus:outline-none"
              aria-label="Voltar para a página inicial do ZoomMob"
            >
              <img
                src="https://i.ibb.co/nqQhhrfb/zoommob-logo-site.png"
                alt="ZoomMob Logo"
                className="h-10 w-auto"
                referrerPolicy="no-referrer"
              />
            </a>
            <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold bg-white/10 border border-white/15 px-3 py-1 rounded-full text-white/90">
              <MapPin className="w-3.5 h-3.5 text-zoom-blue" />
              Bento Gonçalves - RS
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onBackHome();
              }}
              className="text-sm font-medium text-white/80 hover:text-zoom-blue transition-colors flex items-center gap-1.5"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Início
            </a>
            <a
              href="#features-bento"
              className="text-sm font-medium hover:text-zoom-blue transition-colors"
            >
              Vantagens
            </a>
            <a
              href="#bento-info"
              className="text-sm font-medium hover:text-zoom-blue transition-colors"
            >
              Serra Gaúcha
            </a>
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
            aria-label="Abrir menu"
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
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                setIsMenuOpen(false);
                onBackHome();
              }}
              className="text-lg font-medium flex items-center gap-2 text-zoom-blue"
            >
              <ArrowLeft className="w-4 h-4" /> Voltar ao início
            </a>
            <a
              href="#features-bento"
              className="text-lg font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Vantagens
            </a>
            <a
              href="#bento-info"
              className="text-lg font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Bento Gonçalves
            </a>
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

      {/* Hero Section - Bento Gonçalves */}
      <section className="relative pt-36 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-zoom-gradient">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[45%] h-[45%] bg-zoom-blue/15 rounded-full blur-[130px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[45%] h-[45%] bg-white/10 rounded-full blur-[130px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="lg:col-span-7 flex flex-col items-start"
            >
              {/* City Pill */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/25 border border-zoom-blue/40 text-white text-xs sm:text-sm font-bold backdrop-blur-md mb-5 shadow-[0_0_20px_rgba(30,169,246,0.2)]">
                <MapPin className="w-4 h-4 text-zoom-blue" />
                <span>ZoomMob em Bento Gonçalves • RS</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] mb-6 tracking-tight text-white">
                ZoomMob em Bento Gonçalves: <br />
                <span className="text-white/90">
                  Conectando você ao que importa!
                </span>
              </h1>

              {/* Supporting Copy */}
              <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl leading-relaxed">
                A nova era da mobilidade urbana chegou à Capital do Vinho. Peça seu carro pelo aplicativo e tenha mais segurança, economia com tarifas transparentes e agilidade todos os dias na Serra Gaúcha.
              </p>

              {/* Download Buttons (Same Android, iPhone & Instagram buttons) */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full mb-7">
                <a
                  href="https://play.google.com/store/apps/details?id=br.com.zoommob.passenger.drivermachine&hl=pt_BR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-zoom-blue text-white px-6 py-3.5 rounded-2xl font-bold text-base hover:scale-105 transition-transform active:scale-95 shadow-[0_0_30px_rgba(30,169,246,0.35)] flex items-center justify-center gap-3 border border-white/10"
                >
                  <Play className="w-6 h-6 fill-white" />
                  <div className="text-left leading-none">
                    <span className="text-[9px] opacity-80 block font-normal uppercase tracking-wider">
                      Disponível no
                    </span>
                    <span className="text-sm font-black">Google Play</span>
                  </div>
                </a>

                <a
                  href="https://apps.apple.com/br/app/zoommob/id6780639540"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-zoom-purple px-6 py-3.5 rounded-2xl font-bold text-base hover:scale-105 transition-transform active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.2)] flex items-center justify-center gap-3"
                >
                  <Apple className="w-6 h-6 fill-current" />
                  <div className="text-left leading-none">
                    <span className="text-[9px] opacity-75 block font-normal uppercase tracking-wider">
                      Disponível na
                    </span>
                    <span className="text-sm font-black">App Store</span>
                  </div>
                </a>

                <a
                  href="https://www.zoommob.com.br/bento-goncalves"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white/25 hover:border-white/50 hover:bg-white/10 px-6 py-3.5 rounded-2xl font-bold text-sm transition-all flex items-center justify-center gap-2"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Instagram</span>
                </a>
              </div>

              {/* Benefits line */}
              <div className="pt-4 border-t border-white/15 w-full">
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm font-semibold text-white/90">
                  <span className="inline-flex items-center gap-1.5 text-emerald-300">
                    <Check className="w-4 h-4 text-emerald-400 stroke-[3]" />{" "}
                    Preço justo
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-zoom-blue">
                    <Check className="w-4 h-4 text-zoom-blue stroke-[3]" />{" "}
                    Motoristas verificados
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-white">
                    <Check className="w-4 h-4 text-white stroke-[3]" />{" "}
                    Atendimento local
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-pink-200">
                    <Check className="w-4 h-4 text-pink-300 stroke-[3]" />{" "}
                    Mobilidade todos os dias
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Smartphone Mockup tailored for Bento Gonçalves */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
              className="lg:col-span-5 relative hidden lg:flex justify-center items-center"
            >
              <div className="absolute w-[360px] aspect-square bg-zoom-blue/20 rounded-full blur-[90px] -z-10" />

              <div className="relative w-full max-w-[340px]">
                <div className="relative mx-auto w-[300px] aspect-[9/18.8] bg-slate-950 rounded-[2.8rem] border-[7px] border-slate-800/90 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8),0_0_30px_rgba(30,169,246,0.2)] overflow-hidden z-20">
                  {/* Notch */}
                  <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-full z-30 flex items-center justify-end pr-2">
                    <div className="w-2 h-2 rounded-full bg-slate-900 border border-slate-800" />
                  </div>

                  {/* App Screen */}
                  <div className="relative w-full h-full bg-slate-900 flex flex-col justify-between overflow-hidden select-none">
                    {/* App Header */}
                    <div className="pt-8 px-4 pb-3 bg-gradient-to-b from-zoom-purple/95 to-zoom-purple/50 backdrop-blur-md z-20 flex items-center justify-between border-b border-white/10">
                      <img
                        src="https://i.ibb.co/nqQhhrfb/zoommob-logo-site.png"
                        alt="ZoomMob"
                        className="h-5 w-auto"
                        referrerPolicy="no-referrer"
                      />
                      <div className="flex items-center gap-1 text-[10px] bg-black/40 px-2 py-0.5 rounded-full text-white/90 border border-white/10">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                        <span>Bento Gonçalves</span>
                      </div>
                    </div>

                    {/* Map */}
                    <div className="absolute inset-0 z-0 bg-[#1a1429]">
                      <svg
                        className="w-full h-full opacity-35"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <pattern
                          id="bento-street-grid"
                          width="60"
                          height="60"
                          patternUnits="userSpaceOnUse"
                        >
                          <path
                            d="M 60 0 L 0 0 0 60"
                            fill="none"
                            stroke="#6b21a8"
                            strokeWidth="1.2"
                          />
                        </pattern>
                        <rect
                          width="100%"
                          height="100%"
                          fill="url(#bento-street-grid)"
                        />
                        <path
                          d="M 60 390 Q 140 320 155 235 T 225 130"
                          fill="none"
                          stroke="#1ea9f6"
                          strokeWidth="5"
                          strokeLinecap="round"
                          strokeDasharray="6 4"
                        />
                        <path
                          d="M 60 390 Q 140 320 155 235 T 225 130"
                          fill="none"
                          stroke="#00e5ff"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <circle
                          cx="225"
                          cy="130"
                          r="10"
                          fill="#1ea9f6"
                          opacity="0.3"
                        />
                        <circle cx="225" cy="130" r="5" fill="#1ea9f6" />
                      </svg>

                      {/* ZoomMob Car on map */}
                      <div className="absolute top-[225px] left-[138px] -translate-x-1/2 -translate-y-1/2 z-10">
                        <div className="relative">
                          <div className="absolute -inset-2 bg-zoom-blue/40 rounded-full blur-sm animate-pulse" />
                          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-zoom-purple to-zoom-magenta border-2 border-white flex items-center justify-center shadow-lg">
                            <Car className="w-4 h-4 text-white" />
                          </div>
                          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/80 text-[8px] font-bold text-white px-1.5 py-0.5 rounded border border-white/20">
                            ZoomMob
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Location Card inside Phone */}
                    <div className="relative z-20 px-3.5 pt-2">
                      <div className="bg-black/75 border border-zoom-blue/40 rounded-2xl p-3 backdrop-blur-md shadow-xl text-left">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[10px] font-black tracking-wide text-zoom-blue uppercase flex items-center gap-1">
                            <Navigation className="w-3 h-3" /> Destino selecionado
                          </span>
                          <span className="text-[9px] bg-emerald-500/20 text-emerald-300 font-bold px-2 py-0.5 rounded-full">
                            Ativo
                          </span>
                        </div>
                        <div className="text-xs text-white font-bold">
                          Centro • Bento Gonçalves - RS
                        </div>
                        <div className="text-[10px] text-white/60 mt-0.5">
                          Tarifa justa e motorista próximo
                        </div>
                      </div>
                    </div>

                    {/* App Footer Card */}
                    <div className="relative z-20 p-3 bg-gradient-to-t from-black via-black/95 to-transparent pt-6">
                      <div className="bg-white/10 border border-white/15 rounded-xl p-2.5 backdrop-blur-md mb-2 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-lg bg-zoom-blue/20 flex items-center justify-center">
                            <Car className="w-4 h-4 text-zoom-blue" />
                          </div>
                          <div>
                            <div className="text-[10px] font-bold text-white">
                              ZoomMob Padrão
                            </div>
                            <div className="text-[8px] text-white/60">
                              Chegada em ~3 min
                            </div>
                          </div>
                        </div>
                        <span className="text-[9px] font-black text-zoom-blue bg-zoom-blue/15 px-2 py-0.5 rounded-full">
                          Disponível
                        </span>
                      </div>

                      <div className="w-full bg-zoom-blue py-2 rounded-xl text-center text-white text-[11px] font-black shadow-lg">
                        Solicitar ZoomMob
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features-bento" className="py-24 md:py-32 bg-zoom-purple">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Por que escolher o ZoomMob em Bento Gonçalves?
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Desenvolvemos uma plataforma focada no que realmente importa para quem se desloca todos os dias pela cidade e região.
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

      {/* Bento Gonçalves Highlight & Driver / App Download Section */}
      <section
        id="bento-info"
        className="py-24 bg-zoom-purple/50 border-t border-b border-white/5 relative overflow-hidden"
      >
        <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-zoom-blue/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="bg-gradient-to-r from-zoom-purple to-zoom-magenta border border-white/15 rounded-3xl p-8 md:p-12 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-zoom-blue/15 rounded-full blur-3xl pointer-events-none" />
            <span className="bg-zoom-blue/15 text-zoom-blue border border-zoom-blue/30 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full inline-block mb-4">
              Serra Gaúcha
            </span>
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Mobilidade feita para Bento Gonçalves
            </h2>
            <p className="text-white/80 text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Do Centro aos bairros, universidades, empresas e roteiros turísticos, o ZoomMob conecta passageiros e motoristas parceiros com conforto e rapidez.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a
                href="https://play.google.com/store/apps/details?id=br.com.zoommob.passenger.drivermachine&hl=pt_BR"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-zoom-blue text-white px-7 py-3.5 rounded-2xl font-bold text-base hover:scale-105 transition-transform active:scale-95 shadow-[0_0_25px_rgba(30,169,246,0.35)] flex items-center justify-center gap-3"
              >
                <Play className="w-5 h-5 fill-white" />
                <span>Baixar para Android</span>
              </a>
              <a
                href="https://apps.apple.com/br/app/zoommob/id6780639540"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-white text-zoom-purple px-7 py-3.5 rounded-2xl font-bold text-base hover:scale-105 transition-transform active:scale-95 shadow-[0_0_25px_rgba(255,255,255,0.2)] flex items-center justify-center gap-3"
              >
                <Apple className="w-5 h-5 fill-current" />
                <span>Baixar para iPhone</span>
              </a>
            </div>

            <div className="pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/5554999995454"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold text-white/90 hover:text-zoom-blue transition-colors underline underline-offset-4"
              >
                Quer dirigir em Bento Gonçalves? Fale com a central: (54) 99999-5454
              </a>
              <span className="hidden sm:inline text-white/30">•</span>
              <button
                onClick={onBackHome}
                className="text-sm font-bold text-zoom-blue hover:text-white transition-colors inline-flex items-center gap-1.5 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                Ver todas as cidades
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section (Offers & Updates without Reta Final Premiada) */}
      <section className="py-24 bg-zoom-gradient relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-8">
            Cupons & Novidades em Bento Gonçalves! 🎁
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Cadastre seu WhatsApp e receba cupons de desconto, novidades do aplicativo e promoções exclusivas na sua cidade!
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
              <h3 className="text-2xl font-bold mb-2">
                Inscrição Confirmada! 🎉
              </h3>
              <p className="text-white/70">
                Seu número foi registrado para receber novidades e cupons do ZoomMob em Bento Gonçalves. Fique de olho no seu WhatsApp!
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-6 text-zoom-blue font-bold hover:underline cursor-pointer"
              >
                Cadastrar outro contato
              </button>
            </motion.div>
          ) : (
            <div className="flex flex-col items-center">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full"
              >
                <input
                  name="whatsapp"
                  type="tel"
                  required
                  placeholder="Seu WhatsApp (com DDD)"
                  className="w-full sm:w-80 px-6 py-4 rounded-full bg-white/10 border border-white/20 focus:outline-none focus:border-zoom-blue transition-colors text-white placeholder:text-white/40"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto bg-zoom-blue text-white px-10 py-4 rounded-full font-black text-lg hover:scale-105 transition-transform active:scale-95 shadow-xl disabled:opacity-60 cursor-pointer"
                >
                  {isSubmitting ? "ENVIANDO..." : "QUERO RECEBER"}
                </button>
              </form>
              {submitError && (
                <p className="text-sm text-amber-300 font-semibold mt-4">
                  {submitError}
                </p>
              )}
            </div>
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
            © 2026 ZoomMob Mobilidade Urbana. Todos os direitos reservados -
            Desenvolvido por MonarcaHub.
          </div>

          <div className="flex gap-6 text-white/60 text-sm">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onBackHome();
              }}
              className="hover:text-zoom-blue transition-colors"
            >
              Página Principal
            </a>
            <a href="#" className="hover:text-zoom-blue transition-colors">
              Privacidade
            </a>
            <a href="#" className="hover:text-zoom-blue transition-colors">
              Termos
            </a>
            <a
              href="https://wa.me/5554999995454"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zoom-blue transition-colors"
            >
              Contato
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
