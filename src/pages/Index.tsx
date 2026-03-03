import { Link } from "react-router-dom";
import { MapPin, QrCode, Mountain, Users, DoorOpen, Activity, Phone, CloudSun, Wrench, ShieldAlert, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/hero-mountain.jpg";

/** Página de inicio del refugio */
const Index = () => {
  const stats = [
    { label: "Altitud", value: "2.450 m", icon: Mountain },
    { label: "Capacidad", value: "12 pers.", icon: Users },
    { label: "Tipo", value: "Libre", icon: DoorOpen },
    { label: "Estado", value: "Abierto", icon: Activity },
  ];

  const sections = [
    { to: "/refugio", label: "El Refugio", desc: "Características e historia", icon: Mountain },
    { to: "/acceso", label: "Cómo llegar", desc: "Ruta, coordenadas GPS y mapa", icon: MapPin },
    { to: "/servicios", label: "Servicios", desc: "Equipamiento disponible", icon: Wrench },
    { to: "/normas", label: "Normas", desc: "Uso responsable del refugio", icon: ShieldAlert },
    { to: "/emergencias", label: "Emergencias", desc: "Llamar al 112 y protocolos SOS", icon: Phone },
    { to: "/meteo", label: "Meteorología", desc: "Previsión del tiempo en tiempo real", icon: CloudSun },
  ];

  return (
    <div>
      {/* Hero section */}
      <section className="relative min-h-[85dvh] sm:min-h-[75dvh] md:min-h-[70vh] flex items-end sm:items-center overflow-hidden">
        <img
          src={heroImage}
          alt="Refugio de montaña en los picos al atardecer"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-mountain-dark via-mountain-dark/60 to-mountain-dark/10" />
        <div className="relative z-10 w-full px-4 sm:px-6 pb-8 sm:pb-10 pt-20 md:py-16 animate-fade-in">
          <div className="max-w-2xl mx-auto sm:mx-0">
            <div className="inline-flex items-center gap-2 bg-accent/90 text-accent-foreground px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
              <QrCode className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              Acceso mediante código QR
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-3 sm:mb-4 drop-shadow-lg leading-tight">
              Refugio Sierra del Águila
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-primary-foreground/85 mb-6 sm:mb-8 leading-relaxed max-w-lg">
              Refugio libre de montaña a 2.450 m de altitud en el corazón de la sierra.
              Tu punto de descanso seguro, libre y gratuito.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/acceso"
                className="inline-flex items-center gap-2 sm:gap-3 bg-accent text-accent-foreground px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl text-base sm:text-lg font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-[0.98] touch-manipulation"
              >
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                Ver cómo llegar
              </Link>
              <Link
                to="/emergencias"
                className="inline-flex items-center gap-2 sm:gap-3 bg-destructive text-destructive-foreground px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl text-base sm:text-lg font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-[0.98] touch-manipulation"
              >
                <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                Emergencias
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-primary text-primary-foreground py-4 sm:py-6 md:py-8">
        <div className="px-3 sm:px-4 md:container grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 md:gap-6">
          {stats.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="flex flex-col items-center gap-0.5 sm:gap-1 p-2.5 sm:p-3 rounded-xl bg-primary-foreground/5">
                <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground/60 mb-0.5" />
                <p className="text-xl sm:text-2xl md:text-3xl font-bold">{item.value}</p>
                <p className="text-[10px] sm:text-xs md:text-sm text-primary-foreground/60 uppercase tracking-wider">{item.label}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Estado actual */}
      <section className="bg-success/10 border-y border-success/20 py-3 px-4">
        <div className="container flex items-center justify-center gap-2 text-success text-sm font-semibold">
          <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
          Refugio abierto y en buen estado — Última revisión: septiembre 2025
        </div>
      </section>

      {/* Navigation grid */}
      <section className="px-3 sm:px-4 py-6 sm:py-8 md:py-12">
        <div className="container max-w-3xl">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6 font-serif text-center">
            Información del refugio
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {sections.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="flex flex-col gap-2.5 p-4 sm:p-5 rounded-xl border border-border bg-card hover:shadow-md hover:border-primary/30 transition-all hover:scale-[1.02] active:scale-[0.98] touch-manipulation"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-sm sm:text-base text-foreground">{item.label}</p>
                  <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
