import { ShieldAlert, Users, Leaf, Ban, Shield } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import InfoCard from "@/components/InfoCard";

/** Normas de uso del refugio */
const Normas = () => (
  <div>
    <PageHeader icon={ShieldAlert} title="Normas" subtitle="Uso responsable del refugio y el entorno" />
    <div className="container px-3 sm:px-4 py-5 sm:py-8 md:py-12 max-w-2xl space-y-3 sm:space-y-4">
      <InfoCard icon={Users} title="Convivencia">
        <ul className="list-disc list-inside space-y-1 text-sm sm:text-base">
          <li>Respeta el descanso de otros montañeros.</li>
          <li>Silencio a partir de las 22:00 h.</li>
          <li>Comparte el espacio de forma equitativa.</li>
          <li>Deja el refugio más limpio de como lo encontraste.</li>
        </ul>
      </InfoCard>

      <InfoCard icon={Leaf} title="Uso responsable del entorno">
        <ul className="list-disc list-inside space-y-1 text-sm sm:text-base">
          <li>No dejes basura. Llévate todo lo que traigas.</li>
          <li>Utiliza los senderos marcados.</li>
          <li>No arranques vegetación ni muevas piedras.</li>
          <li>Respeta la fauna salvaje.</li>
        </ul>
      </InfoCard>

      <InfoCard icon={Ban} title="Prohibiciones">
        <ul className="list-disc list-inside space-y-1 text-sm sm:text-base">
          <li>Prohibido hacer fuego fuera de la chimenea.</li>
          <li>Prohibido acampar junto al refugio (mín. 200 m).</li>
          <li>Prohibido el acceso con mascotas sin control.</li>
          <li>Prohibido el uso de generadores o música alta.</li>
        </ul>
      </InfoCard>

      <InfoCard icon={Shield} title="Recomendaciones de seguridad">
        <ul className="list-disc list-inside space-y-1 text-sm sm:text-base">
          <li>Informa a alguien de tu ruta y hora prevista de regreso.</li>
          <li>Lleva equipo adecuado: ropa de abrigo, frontal, mapa.</li>
          <li>Consulta la meteorología antes de salir.</li>
          <li>No emprendas la ruta con mal tiempo o poca luz.</li>
        </ul>
      </InfoCard>
    </div>
  </div>
);

export default Normas;
