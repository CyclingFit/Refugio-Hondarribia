import {
  Wrench, BedDouble, Flame, CookingPot, Droplets,
  Smartphone, Sun, Check, X
} from "lucide-react";
import PageHeader from "@/components/PageHeader";

interface ServiceItemProps {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  available: boolean;
  detail?: string;
}

const ServiceItem = ({ icon: Icon, label, available, detail }: ServiceItemProps) => (
  <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg bg-card border border-border">
    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center">
      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
    </div>
    <div className="flex-1 min-w-0">
      <p className="font-semibold text-foreground text-base sm:text-lg truncate">{label}</p>
      {detail && <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">{detail}</p>}
    </div>
    <div className={`flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center ${
      available ? "bg-success/10" : "bg-destructive/10"
    }`}>
      {available ? (
        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-success" />
      ) : (
        <X className="w-4 h-4 sm:w-5 sm:h-5 text-destructive" />
      )}
    </div>
  </div>
);

/** Servicios disponibles en el refugio */
const Servicios = () => (
  <div>
    <PageHeader icon={Wrench} title="Servicios" subtitle="Qué encontrarás en el refugio" />
    <div className="container px-3 sm:px-4 py-5 sm:py-8 md:py-12 max-w-2xl space-y-2.5 sm:space-y-3">
      <ServiceItem icon={BedDouble} label="Camas / Literas" available={true} detail="12 plazas en literas de madera (sin colchón)" />
      <ServiceItem icon={Flame} label="Chimenea" available={true} detail="Chimenea interior con leña disponible" />
      <ServiceItem icon={CookingPot} label="Cocina" available={true} detail="Mesa, bancos y utensilios básicos" />
      <ServiceItem icon={Droplets} label="Agua potable" available={false} detail="No hay fuente. Llevar agua suficiente." />
      <ServiceItem icon={Smartphone} label="Cobertura móvil" available={false} detail="Sin cobertura. Posible señal débil en el collado cercano." />
      <ServiceItem icon={Sun} label="Panel solar" available={true} detail="Iluminación LED básica por la noche" />
    </div>
  </div>
);

export default Servicios;
