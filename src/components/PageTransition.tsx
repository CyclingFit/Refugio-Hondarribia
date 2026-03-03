import { motion } from "framer-motion";

interface PageTransitionProps {
  children: React.ReactNode;
}

/** Envoltorio de transición suave para páginas */
const PageTransition = ({ children }: PageTransitionProps) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -8 }}
    transition={{ duration: 0.25, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export default PageTransition;
