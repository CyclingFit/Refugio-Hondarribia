import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Mountain } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-[60dvh] items-center justify-center px-4">
      <div className="text-center">
        <Mountain className="w-12 h-12 sm:w-16 sm:h-16 text-muted-foreground mx-auto mb-4" />
        <h1 className="mb-3 text-3xl sm:text-4xl font-bold text-foreground">404</h1>
        <p className="mb-4 text-base sm:text-xl text-muted-foreground">Página no encontrada</p>
        <Link to="/" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-transform touch-manipulation">
          Volver al inicio
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
