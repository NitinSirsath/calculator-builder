import { motion } from "framer-motion";
import useDragButton from "../hooks/useDragButton";
import CustomButton from "../../../components/custom/CustomButton";

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

  const handleRemoveComponent = () => {
    removeComponent(id);
  };

  return (
    <motion.div
      ref={(node) => ref(drop(node))}
      layout
      whileTap={{ scale: 0.9 }}
      className="relative flex items-center justify-center"
    >
      <CustomButton variant="primary" handleClick={handleClick}>
        {label}
      </CustomButton>

      <button
        onClick={handleRemoveComponent}
        className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 
                   bg-red-500 text-white text-xs font-bold rounded-full 
                   hover:bg-red-600 transition-all shadow-lg"
      >
        ✕
      </button>
    </motion.div>
  );
};

export default DraggableButton;
