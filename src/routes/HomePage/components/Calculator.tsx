import Display from "./Display";
import DraggableButton from "./DraggableButton";
import { motion, AnimatePresence } from "framer-motion";
import useCalculator from "../hooks/useCalculator";
import { useTheme } from "@mui/material/styles";
import DarkModeWrapper from "../../../components/theme/DarkModeWrapper";

const Calculator = () => {
  const { components, isOver, drop } = useCalculator();
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  return (
    <DarkModeWrapper>
      <motion.div
        className={`p-3 border rounded-lg w-80 min-h-[350px] shadow-xl backdrop-blur-lgtransition-all
      `}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Title */}
        <h2 className="text-xl font-semibold mb-4 text-center tracking-wide">
          Calculator
        </h2>

        {/* Drop Zone */}
        <div
          ref={drop}
          className={`p-4 min-h-[250px] rounded-lg shadow-inner transition-all
          ${
            isOver
              ? isDarkMode
                ? "bg-gray-800"
                : "bg-gray-200"
              : isDarkMode
              ? "bg-gray-900"
              : "bg-gray-200"
          }
        `}
        >
          {/* Display Screen */}
          <Display />

          {/* Buttons Grid */}
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
    </DarkModeWrapper>
  );
};

export default Calculator;
