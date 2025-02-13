import Display from "./Display";
import DraggableButton from "./DraggableButton";
import { motion, AnimatePresence } from "framer-motion";
import useCalculator from "../hooks/useCalculator";

const Calculator = () => {
  const { components, isOver, drop } = useCalculator();
  return (
    <motion.div
      className="p-6 border border-gray-200 rounded-lg w-80 min-h-[350px] bg-white/80 shadow-xl backdrop-blur-lg"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
        Your Calculator
      </h2>
      <div
        ref={drop}
        className={`p-4 min-h-[250px] rounded-lg ${
          isOver ? "bg-gray-200" : "bg-white"
        } shadow-inner`}
      >
        <Display />
        <motion.div className="grid grid-cols-4 gap-3 mt-4">
          <AnimatePresence>
            {components.map((component, index) =>
              component.type === "button" ? (
                <DraggableButton
                  key={component.id}
                  id={component.id}
                  label={component.label!}
                  index={index}
                />
              ) : null
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Calculator;
