import { type LucideIcon } from "lucide-react";

interface PageHeaderProps {
  icon: LucideIcon;
  title: string;
  subtitle?: string;
}

/** Cabecera reutilizable para cada sección — responsive mejorada */
const PageHeader = ({ icon: Icon, title, subtitle }: PageHeaderProps) => (
  <div className="bg-primary/5 border-b border-border py-8 md:py-14">
    <div className="container text-center px-4">
      <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-primary/10 mb-4">
        <Icon className="w-7 h-7 md:w-8 md:h-8 text-primary" />
      </div>
      <h1 className="text-3xl md:text-5xl font-bold text-foreground">{title}</h1>
      {subtitle && (
        <p className="mt-3 text-base md:text-lg text-muted-foreground max-w-lg mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  </div>
);

export default PageHeader;
