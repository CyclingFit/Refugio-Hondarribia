import { type LucideIcon } from "lucide-react";

interface InfoCardProps {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
  variant?: "default" | "emergency";
}

/** Tarjeta informativa con diseño mejorado para móvil */
const InfoCard = ({ icon: Icon, title, children, variant = "default" }: InfoCardProps) => (
  <div
    className={`rounded-xl border p-4 md:p-6 transition-all hover:shadow-md active:scale-[0.995] ${
      variant === "emergency"
        ? "border-destructive/30 bg-destructive/5"
        : "border-border bg-card"
    }`}
  >
    <div className="flex items-start gap-3 md:gap-4">
      <div
        className={`flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center ${
          variant === "emergency" ? "bg-destructive/10" : "bg-primary/10"
        }`}
      >
        <Icon
          className={`w-5 h-5 md:w-6 md:h-6 ${
            variant === "emergency" ? "text-destructive" : "text-primary"
          }`}
        />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-bold text-base md:text-lg text-foreground mb-1">{title}</h3>
        <div className="text-sm md:text-base text-muted-foreground leading-relaxed">{children}</div>
      </div>
    </div>
  </div>
);

export default InfoCard;
