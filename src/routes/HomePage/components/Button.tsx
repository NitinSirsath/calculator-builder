import CustomButton from "../../../components/custom/CustomButton";
import useCalculatorStore from "../../../services/store/calculator/calculatorStore";

interface ButtonProps {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label }) => {
  const { updateExpression, evaluateExpression, clearExpression } =
    useCalculatorStore();

  const handleClick = () => {
    if (label === "=") {
      evaluateExpression();
    } else if (label === "C") {
      clearExpression();
    } else {
      updateExpression(label);
    }
  };

  return (
    <CustomButton handleClick={handleClick} customStyles={"bg-red-500"}>
      {label}
    </CustomButton>
  );
};

export default Button;
