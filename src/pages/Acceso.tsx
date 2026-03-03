import { MapPin, Clock, BarChart3, Navigation, ExternalLink, QrCode } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import InfoCard from "@/components/InfoCard";

/** Cómo llegar al refugio */
const Acceso = () => (
  <div>
    <PageHeader icon={MapPin} title="Cómo llegar" subtitle="Instrucciones de acceso al refugio" />
    <div className="container px-3 sm:px-4 py-5 sm:py-6 md:py-12 space-y-3 sm:space-y-4 max-w-2xl">
      {/* Mapa embebido de Google Maps */}
      <div className="rounded-xl overflow-hidden border border-border shadow-sm">
        <iframe
          title="Ubicación del Refugio Sierra del Águila"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3000!2d-0.759167!3d42.636667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDLCsDM4JzEyLjAiTiAwwrA0NSczMy4wIlc!5e0!3m2!1ses!2ses!4v1700000000000"
          width="100%"
          height="220"
          style={{ border: 0, minHeight: "200px" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full sm:h-[280px] md:h-[320px]"
        />
      </div>

      <InfoCard icon={Clock} title="Tiempo estimado">
        <p><strong>3 h 30 min</strong> desde el aparcamiento del Collado del Lobo</p>
      </InfoCard>

      <InfoCard icon={BarChart3} title="Dificultad">
        <p><strong>Media-Alta</strong> — Desnivel acumulado: 950 m. Sendero marcado (PR-143).</p>
      </InfoCard>

      <InfoCard icon={Navigation} title="Instrucciones paso a paso">
        <ol className="list-decimal list-inside space-y-1.5 sm:space-y-2 text-sm sm:text-base">
          <li>Aparca en el Collado del Lobo (1.500 m).</li>
          <li>Toma el sendero PR-143 dirección norte.</li>
          <li>Cruza el puente del Barranco Frío (30 min).</li>
          <li>Sube por la pista forestal hasta la Fuente del Pino (1 h).</li>
          <li>Continúa por el sendero señalizado entre rocas.</li>
          <li>Llegarás al collado a 2.300 m (2 h 45 min).</li>
          <li>Último tramo: gira a la derecha y sigue las marcas hasta el refugio.</li>
        </ol>
      </InfoCard>

      <InfoCard icon={MapPin} title="Coordenadas GPS">
        <p className="font-mono text-base sm:text-lg break-all">42°38'12"N — 0°45'33"W</p>
        <p className="mt-1 text-xs sm:text-sm">UTM: 30T 712345 4726543</p>
      </InfoCard>

      {/* Sección QR */}
      <InfoCard icon={QrCode} title="Código QR de acceso">
        <div className="flex flex-col items-center gap-3 py-3 sm:py-4">
          <div className="w-36 h-36 sm:w-48 sm:h-48 rounded-xl border-2 border-dashed border-border bg-muted/50 flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <QrCode className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 opacity-40" />
              <p className="text-xs sm:text-sm">Imagen QR aquí</p>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-center">Escanea este código QR para acceder a esta web desde tu móvil.</p>
        </div>
      </InfoCard>

      {/* Botón grande para Google Maps */}
      <a
        href="https://www.google.com/maps?q=42.636667,-0.759167"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 sm:gap-3 bg-primary text-primary-foreground px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl text-base sm:text-lg font-bold shadow-md hover:shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98] w-full touch-manipulation"
      >
        <ExternalLink className="w-5 h-5 flex-shrink-0" />
        Abrir en Google Maps
      </a>
    </div>
  </div>
);

export default Acceso;
