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
    <button
      className="bg-blue-500 text-white p-3 rounded-md shadow-md w-full text-lg"
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default Button;
