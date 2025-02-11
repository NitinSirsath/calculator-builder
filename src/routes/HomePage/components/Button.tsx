interface ButtonProps {
  label: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      className="bg-blue-500 text-white p-2 rounded-md shadow-md w-full"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
