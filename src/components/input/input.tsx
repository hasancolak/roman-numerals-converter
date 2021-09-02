import "./input.scss";

/**
 * @function Input is a component
 * @param  {
  label,
  type,
  value,
  name,
  id,
  placeholder,
  handleChange,
  error,
  ...props
  }
 */
const Input = ({
  label,
  type,
  value,
  name,
  id,
  placeholder,
  handleChange,
  error,
  ...props
}: any) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>

      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        {...props}
      ></input>

      {error && <span className="error">{error}</span>}
    </>
  );
};

export default Input;
