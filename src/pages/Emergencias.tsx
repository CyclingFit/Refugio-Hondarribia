import { Phone, AlertTriangle, WifiOff, Share2 } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import InfoCard from "@/components/InfoCard";

/** Página de emergencias — botones grandes y accesibles */
const Emergencias = () => {
  const handleShareLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
          if (navigator.share) {
            navigator.share({ title: "Mi ubicación", url });
          } else {
            window.open(url, "_blank");
          }
        },
        () => alert("No se pudo obtener la ubicación. Activa el GPS.")
      );
    } else {
      alert("Tu dispositivo no soporta geolocalización.");
    }
  };

  return (
    <div>
      <PageHeader icon={Phone} title="Emergencias" subtitle="Información vital en caso de accidente" />
      <div className="container px-3 sm:px-4 py-5 sm:py-6 md:py-12 max-w-2xl space-y-3 sm:space-y-4">
        {/* Botón grande de llamada al 112 */}
        <a
          href="tel:112"
          className="flex items-center justify-center gap-3 sm:gap-4 bg-destructive text-destructive-foreground px-6 sm:px-8 py-5 sm:py-7 rounded-2xl text-xl sm:text-2xl md:text-3xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98] w-full touch-manipulation"
        >
          <Phone className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 flex-shrink-0" />
          Llamar al 112
        </a>

        {/* Botón compartir ubicación */}
        <button
          onClick={handleShareLocation}
          className="flex items-center justify-center gap-2 sm:gap-3 bg-primary text-primary-foreground px-5 sm:px-6 py-4 sm:py-5 rounded-xl text-base sm:text-lg font-bold shadow-md hover:shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98] w-full touch-manipulation"
        >
          <Share2 className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
          Compartir mi ubicación
        </button>

        <InfoCard icon={AlertTriangle} title="En caso de accidente" variant="emergency">
          <ol className="list-decimal list-inside space-y-1.5 sm:space-y-2 text-sm sm:text-base">
            <li>Mantén la calma y evalúa la situación.</li>
            <li>Protege al herido del frío y la intemperie.</li>
            <li>Llama al <strong>112</strong> e indica tu ubicación.</li>
            <li>Describe las lesiones lo más claramente posible.</li>
            <li>No muevas al herido salvo peligro inminente.</li>
            <li>Señaliza tu posición (ropa de color, silbato, linterna).</li>
          </ol>
        </InfoCard>

        <InfoCard icon={WifiOff} title="Sin cobertura móvil" variant="emergency">
          <ul className="list-disc list-inside space-y-1.5 sm:space-y-2 text-sm sm:text-base">
            <li>Busca puntos elevados para intentar obtener señal.</li>
            <li>Usa la señal de socorro internacional: 6 pitidos de silbato por minuto.</li>
            <li>Si no puedes comunicar, desciende por el camino más seguro hasta encontrar cobertura.</li>
            <li>Lleva siempre un silbato y un espejo de señales.</li>
          </ul>
        </InfoCard>
      </div>
    </div>
  );
};

export default Emergencias;
