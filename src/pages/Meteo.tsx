import { CloudSun, AlertTriangle, ExternalLink } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import InfoCard from "@/components/InfoCard";
import WeatherWidget from "@/components/WeatherWidget";

/** Información meteorológica con widget en tiempo real */
const Meteo = () => (
  <div>
    <PageHeader icon={CloudSun} title="Meteorología" subtitle="Consulta el tiempo antes de subir" />
    <div className="container px-3 sm:px-4 py-5 sm:py-8 md:py-12 max-w-2xl space-y-3 sm:space-y-4">
      <WeatherWidget />

      <InfoCard icon={AlertTriangle} title="⚠️ Aviso importante" variant="emergency">
        <p className="text-sm sm:text-base">
          En alta montaña el tiempo puede cambiar en cuestión de minutos. Tormentas, niebla densa
          y caída brusca de temperatura son frecuentes incluso en verano.
          <strong> Consulta siempre la previsión antes de salir.</strong>
        </p>
      </InfoCard>

      <a
        href="https://www.aemet.es/es/eltiempo/prediccion/montana"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 sm:gap-3 bg-primary text-primary-foreground px-5 sm:px-6 py-3.5 sm:py-4 rounded-lg text-base sm:text-lg font-semibold shadow-md hover:shadow-lg transition-all hover:scale-[1.02] active:scale-100 w-full touch-manipulation"
      >
        <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
        AEMET — Predicción de montaña
      </a>

      <a
        href="https://www.meteoblue.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 sm:gap-3 bg-secondary text-secondary-foreground px-5 sm:px-6 py-3.5 sm:py-4 rounded-lg text-base sm:text-lg font-semibold border border-border shadow-sm hover:shadow-md transition-all hover:scale-[1.02] active:scale-100 w-full touch-manipulation"
      >
        <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
        Meteoblue — Previsión detallada
      </a>

      <InfoCard icon={CloudSun} title="Recomendaciones">
        <ul className="list-disc list-inside space-y-1 text-sm sm:text-base">
          <li>Consulta la previsión para los próximos 3 días.</li>
          <li>Presta atención a alertas de viento, tormentas y nieve.</li>
          <li>Si el pronóstico es desfavorable, pospón la actividad.</li>
          <li>Lleva siempre ropa impermeable y cortavientos.</li>
        </ul>
      </InfoCard>
    </div>
  </div>
);

export default Meteo;
