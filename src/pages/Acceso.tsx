import { MapPin, Clock, BarChart3, Navigation, ExternalLink, QrCode } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import InfoCard from "@/components/InfoCard";

/** Cómo llegar al refugio */
const Acceso = () => (
  <div>
    <PageHeader icon={MapPin} title="Cómo llegar" subtitle="Instrucciones de acceso al Faro de Higer" />
    <div className="container px-3 sm:px-4 py-5 sm:py-6 md:py-12 space-y-3 sm:space-y-4 max-w-2xl">
      {/* Mapa embebido de Google Maps */}
      <div className="rounded-xl overflow-hidden border border-border shadow-sm">
        <iframe
          title="Ubicación del Faro de Higer"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2000!2d-1.7919416!3d43.3919107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd51097fe92b116f%3A0x62402987bc75e64b!2sFaro%20de%20Higer!5e0!3m2!1ses!2ses"
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
        <p><strong>Fácil acceso</strong> desde Hondarribia. Aproximadamente 10-15 minutos en coche desde el centro.</p>
      </InfoCard>

      <InfoCard icon={BarChart3} title="Dificultad">
        <p><strong>Baja</strong> — Accesible por carretera asfaltada (Cam. Higer) hasta prácticamente el mismo faro.</p>
      </InfoCard>

      <InfoCard icon={Navigation} title="Instrucciones paso a paso">
        <ol className="list-decimal list-inside space-y-1.5 sm:space-y-2 text-sm sm:text-base">
          <li>Dirígete al municipio de Hondarribia (Gipuzkoa).</li>
          <li>Atraviesa el pueblo siguiendo las indicaciones hacia la costa/puerto.</li>
          <li>Toma la carretera de subida al faro (Camino Higer).</li>
          <li>Sigue por esta carretera llena de curvas pero bien asfaltada.</li>
          <li>Llegarás al aparcamiento principal junto al faro y al cabo de Higer.</li>
        </ol>
      </InfoCard>

      <InfoCard icon={MapPin} title="Coordenadas GPS">
        <p className="font-mono text-base sm:text-lg break-all">43°23'30.9"N 1°47'31.0"W</p>
        <p className="mt-1 text-xs sm:text-sm">Latitud: 43.3919107 | Longitud: -1.7919416</p>
      </InfoCard>

      {/* Sección QR */}
      <InfoCard icon={QrCode} title="Código QR de acceso">
        <div className="flex flex-col items-center gap-3 py-3 sm:py-4">
          <div className="w-36 h-36 sm:w-48 sm:h-48 rounded-xl border-2 border-dashed border-border bg-white flex items-center justify-center overflow-hidden">
            <img
              src="/qr.png"
              alt="Código QR"
              className="w-full h-full object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><path d="M8 12h8"></path><path d="M12 8v8"></path></svg>';
              }}
            />
          </div>
          <p className="text-xs sm:text-sm text-center">Escanea este código QR para acceder a esta web desde tu móvil.</p>
        </div>
      </InfoCard>

      {/* Botón grande para Google Maps */}
      <a
        href="https://www.google.com/maps/place/Faro+de+Higer/@43.3919107,-1.7919416,17z"
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
