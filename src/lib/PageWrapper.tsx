import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
// import Transition from "./Transition";

interface PageWrapperProps {
  children: React.ReactNode;
}

const PageWrapper = ({ children }: PageWrapperProps) => {
  const path = usePathname();
  return (
    <motion.div
      key={path}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
    >
      {/* <Transition /> */}
      {children}
    </motion.div>
  );
};

export default PageWrapper;
