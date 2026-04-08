import { Box, Clock, PenTool, Globe, Award } from "lucide-react";
import PageHeader from "@/components/PageHeader";

/** Visor 3D Interactivo del Refugio usando SketchUp */
const Visor3D = () => {
  return (
    <div className="flex flex-col w-full px-2 sm:px-4 py-4 pb-12">
      <div className="shrink-0 mb-4">
        <PageHeader
          icon={Box}
          title="Visor 3D"
          subtitle="Simulacion de alta calidad del Refugio de Hondarribia"
        />
      </div>

      {/* Contenedor principal del iFrame, ahora con altura gigante */}
      <div className="w-full rounded-xl overflow-hidden border border-border shadow-2xl relative" style={{ height: "calc(100vh - 220px)", minHeight: "600px" }}>
        <iframe
          src="https://app.sketchup.com/share/tc/europe/GLyFemCZmYU?source=web&stoken=WbcvevHjxpqOF3PV2aeJ3d6293425LB6Xc-rGHDU9iwAQb8fd7dIC6nuh-_jRcw5"
          className="absolute top-0 left-0 w-full h-full border-none"
          title="Modelo 3D del Refugio de Hondarribia"
          allowFullScreen
          allow="fullscreen; vr"
        />
      </div>

      {/* Información del desarrollo */}
      <div className="mt-12 max-w-5xl mx-auto w-full space-y-8 animate-fade-in">
        <div className="text-center space-y-3">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Características del Refugio 3D</h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Este modelo de refugio ha sido diseñado y desarrollado íntegramente desde cero, cumpliendo con los principios estructurales y funcionales de un refugio real.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Desarrollo del modelo 3D */}
          <div className="bg-card border border-border p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-5 text-primary">
              <div className="p-3 bg-primary/10 rounded-xl">
                <PenTool className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Desarrollo del modelo 3D</h3>
            </div>
            <ul className="space-y-4 text-sm sm:text-base text-muted-foreground">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                <p>Modelado completo con alto nivel de detalle, especialmente en las texturas y estructura de la madera</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                <p>Simulación precisa de un refugio funcional y realista</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                <p>Optimización para visualización fluida en entorno web</p>
              </li>
            </ul>
            <div className="mt-6 pt-5 border-t border-border flex items-center gap-2 text-foreground font-semibold">
              <Clock className="w-5 h-5 text-primary" />
              Tiempo invertido: 8 horas de modelado 3D
            </div>
          </div>

          {/* Desarrollo de la plataforma */}
          <div className="bg-card border border-border p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-5 text-primary">
              <div className="p-3 bg-primary/10 rounded-xl">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Desarrollo de la plataforma</h3>
            </div>
            <ul className="space-y-4 text-sm sm:text-base text-muted-foreground">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                <p>Integración del visor 3D interactivo en la web</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                <p>Adaptación para una experiencia de usuario fluida</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                <p>Implementación y ajustes del entorno visual</p>
              </li>
            </ul>
            <div className="mt-6 pt-5 border-t border-border flex items-center gap-2 text-foreground font-semibold">
              <Clock className="w-5 h-5 text-primary" />
              Tiempo invertido: 2,5 horas de desarrollo
            </div>
          </div>
        </div>

        {/* Tiempo total */}
        <div className="bg-primary hover:bg-primary/90 transition-colors text-primary-foreground p-6 sm:p-8 rounded-2xl flex flex-col sm:flex-row items-center gap-6 justify-center sm:justify-start shadow-lg">
          <div className="p-4 bg-primary-foreground/20 rounded-2xl shrink-0 backdrop-blur-sm">
            <Award className="w-10 h-10" />
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold mb-2">Tiempo total de desarrollo y modding (modelado 3D)</h3>
            <p className="text-primary-foreground/90 text-sm sm:text-base leading-relaxed">
              Aproximadamente <strong>10,5 horas</strong> dedicadas al diseño, modelado y despliegue del proyecto.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visor3D;
