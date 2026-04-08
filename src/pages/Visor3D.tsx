import { Box } from "lucide-react";
import PageHeader from "@/components/PageHeader";

/** Visor 3D Interactivo del Refugio usando SketchUp */
const Visor3D = () => {
  return (
    <div className="flex flex-col h-[calc(100vh-64px)]">
      <div className="px-3 sm:px-4 shrink-0 mt-4">
        <PageHeader 
          icon={Box} 
          title="Visor 3D" 
          subtitle="Explora el Diseño del Refugio" 
        />
      </div>
      
      <div className="flex-1 w-full bg-muted/30 p-2 sm:p-4 mt-2 mb-8">
        <div className="w-full h-full rounded-xl overflow-hidden border-2 border-border shadow-inner relative">
          <iframe
            src="https://app.sketchup.com/share/tc/europe/GLyFemCZmYU?source=web&stoken=WbcvevHjxpqOF3PV2aeJ3d6293425LB6Xc-rGHDU9iwAQb8fd7dIC6nuh-_jRcw5"
            className="absolute top-0 left-0 w-full h-full border-none"
            title="Modelo 3D del Refugio de Hondarribia"
            allowFullScreen
            allow="fullscreen; vr"
          />
        </div>
      </div>
    </div>
  );
};

export default Visor3D;
