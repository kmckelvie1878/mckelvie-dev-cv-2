import { motion } from "framer-motion";

const transitionVariants = {
  initial: {
    x: "100%",
    width: "100%",
  },
  animate: {
    x: "0%",
    width: "0%",
  },
  exit: {
    x: ["0%", "100%"],
    width: ["0%", "100%"],
  },
};

const Transition = () => {
  return (
    <>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-teal-500"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={transitionVariants}
        transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
      >1</motion.div>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-purple-400"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={transitionVariants}
        transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
      >2</motion.div>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-slate-900"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={transitionVariants}
        transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
      >3</motion.div>
    </>
  );
};

export default Transition;
