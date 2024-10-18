const Input = (props) => {
  const {
    children,
    type = "text",
    variant = "border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white",
    onChange,
    name = "email",
    placeholder = "Password",
  } = props;
  return (
    <div>
      <input
        type={type}
        className={variant}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        required
      />
      {children}
    </div>
  );
};

export default Input;
