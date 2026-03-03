import { Mail, Building2, FileText } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import InfoCard from "@/components/InfoCard";

/** Información de contacto */
const Contacto = () => (
  <div>
    <PageHeader icon={Mail} title="Contacto" subtitle="Información del organismo responsable" />
    <div className="container px-3 sm:px-4 py-5 sm:py-8 md:py-12 max-w-2xl space-y-3 sm:space-y-4">
      <InfoCard icon={Building2} title="Organismo responsable">
        <p><strong>Federación de Montañismo de la Comunidad</strong></p>
        <p className="mt-2">Calle del Monte, 12 — 50001 Zaragoza</p>
        <p>Teléfono: +34 976 123 456</p>
      </InfoCard>

      <InfoCard icon={Mail} title="Correo electrónico">
        <a
          href="mailto:refugios@federacion-montana.org"
          className="text-primary underline underline-offset-4 hover:text-primary/80 text-base sm:text-lg font-medium break-all"
        >
          refugios@federacion-montana.org
        </a>
        <p className="mt-2 text-xs sm:text-sm">
          Para consultas generales, incidencias o sugerencias sobre el refugio.
        </p>
      </InfoCard>

      <InfoCard icon={FileText} title="Nota legal">
        <p className="text-xs sm:text-sm leading-relaxed">
          La información proporcionada en esta web tiene carácter orientativo. Las condiciones de acceso
          y estado del refugio pueden variar. El organismo responsable no se hace responsable del uso
          inadecuado de las instalaciones ni de accidentes derivados de actividades de montaña.
          El acceso y uso del refugio se realiza bajo la responsabilidad del usuario.
        </p>
      </InfoCard>
    </div>
  </div>
);

export default Contacto;
