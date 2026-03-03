import { Mountain, Calendar, Users, Home, Info, CheckCircle } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import InfoCard from "@/components/InfoCard";

/** Información detallada del refugio */
const Refugio = () => (
  <div>
    <PageHeader icon={Mountain} title="El Refugio" subtitle="Conoce las características de este refugio de montaña" />
    <div className="container px-3 sm:px-4 py-5 sm:py-8 md:py-12 space-y-3 sm:space-y-4 max-w-2xl">
      <InfoCard icon={Home} title="Descripción">
        <p>
          Refugio libre ubicado junto al Faro de Higer en Hondarribia. Construido en piedra y diseñado para
          ofrecer protección a caminantes y excursionistas en la costa.
        </p>
      </InfoCard>
      <InfoCard icon={Mountain} title="Altitud">
        <p>Cota casi a nivel del mar (Faro de Higer, 40 metros)</p>
      </InfoCard>
      <InfoCard icon={Users} title="Capacidad">
        <p>Espacio abierto / Zona de descanso exterior</p>
      </InfoCard>
      <InfoCard icon={Info} title="Tipo de refugio">
        <p><strong>Punto de encuentro libre</strong> — Accesible para todo el público. Se ruega respetar las normas y el entorno natural de Jaizkibel.</p>
      </InfoCard>
      <InfoCard icon={Calendar} title="Año de construcción">
        <p>Construido en 1987. Última rehabilitación: 2021.</p>
      </InfoCard>
      <InfoCard icon={CheckCircle} title="Estado actual">
        <p className="text-success font-semibold">Abierto y en buen estado</p>
        <p className="mt-1">Última revisión: septiembre 2025</p>
      </InfoCard>
    </div>
  </div>
);

export default Refugio;
