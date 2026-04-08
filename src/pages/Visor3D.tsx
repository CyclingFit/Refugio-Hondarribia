import { Box } from "lucide-react";
import PageHeader from "@/components/PageHeader";

/** Visor 3D Interactivo del Refugio usando SketchUp */
const Visor3D = () => {
  return (
    <div className="flex flex-col w-full px-2 sm:px-4 py-4">
      <div className="shrink-0 mb-4">
        <PageHeader 
          icon={Box} 
          title="Visor 3D" 
          subtitle="Explora el Diseño del Refugio" 
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
    </div>
  );
};

export default Visor3D;
