import { useDrag } from "react-dnd";

interface DraggableComponentProps {
  id: string;
  type: "button" | "display";
  label?: string;
  children: React.ReactNode;
}

const DraggableComponent: React.FC<DraggableComponentProps> = ({
  id,
  type,
  label,
  children,
}) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "COMPONENT",
    item: { id, type, label },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`p-2 ${isDragging ? "opacity-50" : "opacity-100"}`}
    >
      {children}
    </div>
  );
};

export default DraggableComponent;
