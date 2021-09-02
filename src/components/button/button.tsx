import "./button.scss";

/**
 * @function Converter is a component
 * @param  { text, onClick, type, className, error }
 */
const Button = ({ text, onClick, type, className, error }: any) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={className}
      disabled={error ? true : false}
    >
      {text}
    </button>
  );
};

export default Button;
