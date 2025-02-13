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
      className="relative"
    >
      <CustomButton handleClick={handleClick}>{label}</CustomButton>
      <CustomButton
        customStyles="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 rounded-full hover:bg-red-600 transition-all"
        handleClick={handleRemoveComponent}
      >
        X
      </CustomButton>
    </motion.div>
  );
};

export default DraggableButton;
