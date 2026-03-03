import { CloudSun, AlertTriangle, ExternalLink } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import InfoCard from "@/components/InfoCard";
import WeatherWidget from "@/components/WeatherWidget";

/** Información meteorológica con widget en tiempo real */
const Meteo = () => (
  <div>
    <PageHeader icon={CloudSun} title="Meteorología" subtitle="Consulta el tiempo costero antes de venir" />
    <div className="container px-3 sm:px-4 py-5 sm:py-8 md:py-12 max-w-2xl space-y-3 sm:space-y-4">
      <WeatherWidget />

      <InfoCard icon={AlertTriangle} title="⚠️ Aviso importante" variant="emergency">
        <p className="text-sm sm:text-base">
          En zonas costeras y cabos como el Faro de Higer, el clima puede volverse adverso rápidamente.
          Fuertes rachas de viento, oleaje intenso (galernas) y temporales son frecuentes.
          <strong> Consulta siempre la previsión del estado del mar y el viento.</strong>
        </p>
      </InfoCard>

      <a
        href="https://www.aemet.es/es/eltiempo/prediccion/municipios/hondarribia-id20036"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 sm:gap-3 bg-primary text-primary-foreground px-5 sm:px-6 py-3.5 sm:py-4 rounded-lg text-base sm:text-lg font-semibold shadow-md hover:shadow-lg transition-all hover:scale-[1.02] active:scale-100 w-full touch-manipulation"
      >
        <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
        AEMET — Predicción para Hondarribia
      </a>

      <a
        href="https://www.meteoblue.com/es/tiempo/semana/hondarribia"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 sm:gap-3 bg-secondary text-secondary-foreground px-5 sm:px-6 py-3.5 sm:py-4 rounded-lg text-base sm:text-lg font-semibold border border-border shadow-sm hover:shadow-md transition-all hover:scale-[1.02] active:scale-100 w-full touch-manipulation"
      >
        <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
        Meteoblue — Previsión detallada
      </a>

      <InfoCard icon={CloudSun} title="Recomendaciones">
        <ul className="list-disc list-inside space-y-1 text-sm sm:text-base">
          <li>Consulta la previsión marítima para los próximos 3 días.</li>
          <li>Presta atención a las alertas amarillas y naranjas por viento y oleaje.</li>
          <li>Evita asomarte a acantilados si el pronóstico es desfavorable.</li>
          <li>Lleva siempre ropa impermeable y cortavientos.</li>
        </ul>
      </InfoCard>
    </div>
  </div>
);

export default Meteo;
