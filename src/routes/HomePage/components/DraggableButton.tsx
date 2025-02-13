import { motion } from "framer-motion";
import useDragButton from "../hooks/useDragButton";

interface DraggableButtonProps {
  id: number;
  label: string;
  index: number;
}

const DraggableButton: React.FC<DraggableButtonProps> = ({
  id,
  label,
  index,
}) => {
  const { removeComponent, ref, drop, handleClick } = useDragButton({
    id,
    label,
    index,
  });

  return (
    <motion.div
      ref={(node) => ref(drop(node))}
      layout
      whileTap={{ scale: 0.9 }}
      className="relative"
    >
      <button
        className="p-3 w-full bg-blue-500 text-white rounded-lg text-center cursor-pointer hover:bg-blue-600 transition-all shadow-md font-semibold text-lg"
        onClick={handleClick}
      >
        {label}
      </button>
      <button
        className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 rounded-full hover:bg-red-600 transition-all"
        onClick={() => removeComponent(id)}
      >
        X
      </button>
    </motion.div>
  );
};

export default DraggableButton;
