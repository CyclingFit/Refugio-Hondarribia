import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home, Mountain, MapPin, Wrench, ShieldAlert,
  Phone, CloudSun, Mail, Menu, X, ChevronRight, Sun, Moon
} from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import {
  Sheet, SheetContent, SheetHeader, SheetTitle, SheetClose
} from "@/components/ui/sheet";

const navItems = [
  { to: "/", label: "Inicio", icon: Home, desc: "Página principal" },
  { to: "/refugio", label: "Refugio", icon: Mountain, desc: "Información del refugio" },
  { to: "/acceso", label: "Acceso", icon: MapPin, desc: "Cómo llegar" },
  { to: "/servicios", label: "Servicios", icon: Wrench, desc: "Qué hay disponible" },
  { to: "/normas", label: "Normas", icon: ShieldAlert, desc: "Normas de uso" },
  { to: "/emergencias", label: "Emergencias", icon: Phone, desc: "Seguridad y SOS" },
  { to: "/meteo", label: "Meteo", icon: CloudSun, desc: "Previsión del tiempo" },
  { to: "/contacto", label: "Contacto", icon: Mail, desc: "Información de contacto" },
];

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-[100dvh] flex flex-col bg-background overflow-x-hidden">
      {/* Header fijo */}
      <header className="sticky top-0 z-50 bg-primary border-b border-border shadow-md safe-top">
        <div className="container flex items-center justify-between h-14 md:h-16 px-3 sm:px-4">
          <Link to="/" className="flex items-center gap-2 text-primary-foreground font-serif text-base sm:text-lg font-bold min-w-0">
            <Mountain className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
            <span className="truncate">Refugio</span>
          </Link>

          <div className="flex items-center gap-1 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2.5 text-primary-foreground rounded-lg active:bg-primary-foreground/10 transition-colors touch-manipulation"
              aria-label="Cambiar tema"
            >
              {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setMenuOpen(true)}
              className="p-2.5 text-primary-foreground rounded-lg active:bg-primary-foreground/10 transition-colors touch-manipulation"
              aria-label="Abrir menú"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5 lg:gap-1 flex-wrap">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = location.pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`flex items-center gap-1 px-2 lg:px-3 py-2 rounded-md text-xs lg:text-sm font-medium transition-colors whitespace-nowrap ${active
                      ? "bg-primary-foreground/20 text-primary-foreground"
                      : "text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10"
                    }`}
                >
                  <Icon className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                  {item.label}
                </Link>
              );
            })}
            <button
              onClick={toggleTheme}
              className="ml-1 p-2 text-primary-foreground/70 hover:text-primary-foreground rounded-md hover:bg-primary-foreground/10 transition-colors"
              aria-label="Cambiar tema"
            >
              {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Sheet / Drawer lateral */}
      <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
        <SheetContent side="left" className="w-[85vw] max-w-sm p-0 bg-background">
          <SheetHeader className="p-4 sm:p-5 pb-3 border-b border-border bg-primary">
            <SheetTitle className="flex items-center gap-2 text-primary-foreground font-serif text-lg sm:text-xl">
              <Mountain className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
              <span className="truncate">Refugio de Hondarribia</span>
            </SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col py-1 overflow-y-auto max-h-[calc(100dvh-10rem)]">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = location.pathname === item.to;
              return (
                <SheetClose asChild key={item.to}>
                  <Link
                    to={item.to}
                    className={`flex items-center gap-3 sm:gap-4 px-4 sm:px-5 py-3.5 sm:py-4 transition-colors border-b border-border/50 touch-manipulation ${active
                        ? "bg-primary/10 text-primary font-semibold"
                        : "text-foreground hover:bg-muted active:bg-muted"
                      }`}
                  >
                    <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${active ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                      }`}>
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm sm:text-base font-medium truncate">{item.label}</p>
                      <p className="text-[11px] sm:text-xs text-muted-foreground truncate">{item.desc}</p>
                    </div>
                    <ChevronRight className={`w-4 h-4 flex-shrink-0 ${active ? "text-primary" : "text-muted-foreground/50"}`} />
                  </Link>
                </SheetClose>
              );
            })}
          </nav>
          <div className="p-4 sm:p-5 border-t border-border">
            <p className="text-[11px] sm:text-xs text-muted-foreground text-center">
              Acceso mediante código QR · Hondarribia
            </p>
          </div>
        </SheetContent>
      </Sheet>

      {/* Main content */}
      <main className="flex-1 w-full overflow-x-hidden">{children}</main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground/70 py-6 sm:py-8 mt-6 sm:mt-8 safe-bottom">
        <div className="container text-center text-xs sm:text-sm space-y-2 px-4">
          <p className="font-serif font-bold text-base sm:text-lg text-primary-foreground">
            Refugio de Montaña — Hondarribia
          </p>
          <p>Información accesible mediante código QR</p>
          <p className="text-primary-foreground/50">
            © {new Date().getFullYear()} · Todos los derechos reservados
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
