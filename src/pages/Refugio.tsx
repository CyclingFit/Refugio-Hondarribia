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
          Refugio libre de montaña ubicado en la cara norte de la Sierra del Águila. Construido en piedra y diseñado para
          ofrecer protección básica a montañeros y excursionistas en tránsito por la zona.
        </p>
      </InfoCard>
      <InfoCard icon={Mountain} title="Altitud">
        <p>2.450 metros sobre el nivel del mar</p>
      </InfoCard>
      <InfoCard icon={Users} title="Capacidad">
        <p>12 personas (literas básicas sin colchón)</p>
      </InfoCard>
      <InfoCard icon={Info} title="Tipo de refugio">
        <p><strong>Refugio libre</strong> — Sin guarda. Acceso libre y gratuito. Se ruega respetar las normas de uso.</p>
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
